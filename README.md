# Lofi Web

Web client for Lofi, a lofi music streaming app. Browse tracks and albums, listen with a persistent player, upload your own music, and vote on what you like.

The backend lives in [Lofi-API](https://github.com/vicecarloans/Lofi-API).

<!-- Add a screenshot or GIF here: ![Lofi player](docs/screenshot.png) -->

## Features

- **Browse and play**: track and album pages, popular feeds, and a music player that keeps playing as you navigate.
- **Playlist queue** managed in the client.
- **Uploads**: signed-in users can upload tracks and cover art, and follow the processing status.
- **Sign-in with OpenID Connect**: the authorization code flow runs on the server, with sessions stored in Redis and refresh tokens kept on the server.
- **Installable**: offline support through a service worker and a web app manifest.
- **Component library** documented in Storybook.

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 9 with a custom Express server, React 16 |
| State | Redux with redux-saga, normalizr, and reselect |
| UI | Ant Design and styled-components |
| Auth | OpenID Connect (`openid-client`), `express-session` with Redis |
| Tooling | Storybook, Jest and Enzyme |
| Deployment | Google App Engine through GitHub Actions |

## How authentication works

```
Browser ──▶ Express server ──▶ OIDC provider
               │  (session in Redis)
               └──▶ Next.js pages

Browser ──▶ POST /api/token ──▶ short-lived access token ──▶ Lofi API
```

The Express server handles login and stores tokens in a Redis-backed session. Pages under `/protected` require a session. When the client needs to call the API, it asks the server for an access token, and the server refreshes it when needed.

## Getting started

### Prerequisites

- Node.js 12+ and Yarn 1.x
- A Redis instance
- A running [Lofi-API](https://github.com/vicecarloans/Lofi-API)
- An OpenID Connect client (client ID and secret)

### Run locally

```bash
yarn install
cp .env.example .env   # then fill in the values
yarn dev
```

Open `http://localhost:3000`.

### Environment variables

| Variable | Purpose |
|---|---|
| `API_HOST` | Base URL of the Lofi API, including `/v1/` |
| `CLIENT_ID`, `CLIENT_SECRET` | OpenID Connect client credentials |
| `SESSION_SECRET` | Secret used to sign the session cookie |
| `REDIS_URL` | Redis connection string for sessions |
| `APP_BASEURL` | Public URL of the app in production |

## Scripts

| Command | Description |
|---|---|
| `yarn dev` | Run the server with reload on changes |
| `yarn build` | Production build |
| `yarn start` | Run the production server |
| `yarn storybook` | Open the component library |
| `yarn test` | Run the tests |

## Project layout

```
server/           Express server and OIDC middleware
src/
  pages/          Routes: tracks, albums, and protected profile and upload pages
  components/     UI components, with Storybook stories
  flux/           Redux ducks: actions, reducer, sagas, selectors per domain
  services/       API clients
  utils/          Hooks such as useAuth, useTrack, and usePlaylist
```

## Deployment

Pushes to `master` deploy to Google App Engine through the workflow in `.github/workflows/gappengine.yml`.

## Credits

The player is based on [react-jinke-music-player](https://github.com/lijinke666/react-jinke-music-player) (MIT), vendored under `src/components/github/`.

## Status

This project was built in 2020 and is not actively maintained. Dependencies reflect that period.
