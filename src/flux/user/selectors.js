import { createSelector } from "reselect";

export const userSelector = (state) => state.user;

export const profileSelector = createSelector(
  userSelector,
  (user) => user.data
);
