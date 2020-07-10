export const PROPAGATE_USER = "@USER/PROPAGATE_USER";

export const propagateUser = (user) => ({
  type: PROPAGATE_USER,
  payload: {
    user,
  },
});
