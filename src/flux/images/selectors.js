import { createSelector } from "reselect";

export const imageReducerSelector = (state) => state.images;

export const imageSelector = createSelector(imageReducerSelector, (image) => image.data)


export const imageByIdSelector = createSelector(imageReducerSelector, (_, id) => id, (image, id) => image.data[id])