import { createSelector } from 'reselect'

export const playlistSelector = state => state.playlist

export const audioSelector = createSelector(
    playlistSelector,
    playlist => playlist.audio
)