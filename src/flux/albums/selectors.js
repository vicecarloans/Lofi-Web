import { createSelector } from 'reselect'

export const recentAlbumReducerSelector = (state) => state.albums.recent;

export const popularAlbumReducerSelector = (state) => state.albums.popular;

export const allAlbumReducerSelector = (state) => state.albums.all;

export const isFetchingRecentAlbumSelector = createSelector(recentAlbumReducerSelector, album => album.isFetching);

export const recentAlbumSelector = createSelector(recentAlbumReducerSelector, album => album.data);

export const recentAlbumPaginationSelector = createSelector(recentAlbumReducerSelector, album => ({offset: album.offset, limit: album.limit, total: album.total}))

export const isFetchingPopularAlbumSelector = createSelector(popularAlbumReducerSelector, album => album.isFetching);

export const popularAlbumSelector = createSelector(popularAlbumReducerSelector, album => album.data);

export const popularAlbumPaginationSelector = createSelector(popularAlbumReducerSelector, album => ({offset: album.offset, limit: album.limit, total: album.total}))

export const allAlbumSelector = createSelector(allAlbumReducerSelector, (all) => all.data)