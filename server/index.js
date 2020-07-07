require("dotenv").config();
const express = require("express");
// const proxy = require("express-http-proxy");
const next = require("next");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const session = require("express-session");
const redis = require("redis");
let RedisStore = require("connect-redis")(session);
let redisClient = redis.createClient(process.env.REDIS_URL);
const { ExpressOIDC } = require("@okta/oidc-middleware");

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV != "production";

const CORS_OPTIONS = {
  origin: "https://lofi-web.now.sh",
  credentials: true,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

const nextApp = next({ dev });
const nextAppRequestHandler = nextApp.getRequestHandler();

nextApp.prepare().then(async () => {
  const app = express();

  const baseURL =
    process.env.NODE_ENV == "production"
      ? process.env.APP_BASEURL
      : "http://localhost:3000";

  const oidc = new ExpressOIDC({
    issuer: "https://auth.huydam.guru/oauth2/default",
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
    appBaseUrl: baseURL,
    scope: "openid profile",
  });

  //Middlewares
  app.use(helmet());
  app.use(cors(CORS_OPTIONS));
  app.use(
    session({
      store: new RedisStore({ client: redisClient }),
      secret: process.env.SESSION_SECRET,
      resave: true,
      saveUninitialized: false,
    })
  );
  app.use(oidc.router);

  //Handle Static Service-Worker.js
  app.use(
    "/service-worker.js",
    express.static(path.join(__dirname, "dist/service-worker.js"))
  );

  //Let Next Handle the rest of routes
  app.get("/profile", oidc.ensureAuthenticated(), nextAppRequestHandler);
  app.all("*", nextAppRequestHandler);

  app.use((err, req, res, next) => {
    if (res.headersSent) {
      return next(err);
    }
    // console.error(err.stack);
    res.status(err.status || 500).json({ error: err });
  });

  oidc.on("ready", () => {
    app.listen(port, () => {
      console.log(`>>> Server started on ${port}`);
    });
  });

  oidc.on("error", (err) => {
    console.log(
      `>>> Server failed to bootup Authentication Server. Please check the log: ${err}`
    );
  });
});
