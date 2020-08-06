import { createSelector } from "reselect";

export const userSelector = (state) => state.user;

export const profileSelector = createSelector(
  userSelector,
  (user) => user.data
);

export const isFetchingSelector = createSelector(
  userSelector,
  (user) => user.isFetching
)

export const errorSelector = createSelector(
  userSelector,
  (user) => user.err
)
