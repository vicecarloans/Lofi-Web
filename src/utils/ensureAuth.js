export default function ensureAuth() {
  return async (ctx) => {
    if (!ctx.req.isAuthenticated()) return res.get(ctx.req.path);
    
    return { props: {} };
  };
}
