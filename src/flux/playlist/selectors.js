import { createSelector } from 'reselect'

export const playlistSelector = state => state.playlist

export const audioSelector = createSelector(
    playlistSelector,
    playlist => playlist.audio
)

export const playlistConfSelector = createSelector(
    playlistSelector,
    playlist => ({defaultVolume: playlist.volume, defaultPlayMode: playlist.playmode})
)