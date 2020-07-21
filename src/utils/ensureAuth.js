export default function ensureAuth() {
  return async (ctx) => {
    let userInfo = {};
    if (!ctx.req.isAuthenticated()) return res.get(ctx.req.path);
    if (ctx.req.userContext) {
      userInfo = ctx.req.userContext.userinfo;
    }
    return { props: { user: userInfo } };
  };
}
