export default function withAuth(Page) {
  Page.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    const { req } = ctx;
    const user = req && req.userContext ? req.userContext.userinfo : {};
    const accessToken =
      req && req.userContext ? req.userContext.tokens.access_token : "";
    pageProps.user = user;
    pageProps.accessToken = accessToken;

    return { pageProps };
  };

  return Page;
}
