import { createSelector } from 'reselect'

export const uploadReducerSelector = state => state.uploads

export const uploadSelector = createSelector(uploadReducerSelector, uploads => uploads.data)