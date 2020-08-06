export const PROPAGATE_USER = "@USER/PROPAGATE_USER";

export const propagateUser = () => ({
  type: PROPAGATE_USER
});

export const PROPAGATE_USER_SUCCESS = '@USER/PROPAGATE_USER_SUCCESS'
export const propagateUserSuccess = (user) => ({
  type: PROPAGATE_USER_SUCCESS,
  payload: {
    user
  }
})

export const PROPAGATE_USER_FAILURE = '@USER/PROPAGATE_USER_FAILURE'
export const propagateUserFailure = (err) => ({
  type: PROPAGATE_USER_FAILURE,
  payload: {
    err
  }
})