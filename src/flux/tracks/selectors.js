import { createSelector } from 'reselect'

export const recentTrackReducerSelector = (state) => state.tracks.recent;

export const popularTrackReducerSelector = (state) => state.tracks.popular;

export const isFetchingRecentTrackSelector = createSelector(recentTrackReducerSelector, track => track.isFetching);

export const recentTrackSelector = createSelector(recentTrackReducerSelector, track => track.data);

export const recentTrackPaginationSelector = createSelector(recentTrackReducerSelector, track => ({offset: track.offset, limit: track.limit}))

export const isFetchingPopularTrackSelector = createSelector(popularTrackReducerSelector, track => track.isFetching);

export const popularTrackSelector = createSelector(popularTrackReducerSelector, track => track.data);

export const popularTrackPaginationSelector = createSelector(popularTrackReducerSelector, track => ({offset: track.offset, limit: track.limit}))