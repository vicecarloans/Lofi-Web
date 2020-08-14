export const ADD_PLAYLIST = '@PLAYLIST/ADD_TRACK'

export const addTracksToPlaylist = (trackIds) => ({
    type: ADD_PLAYLIST,
    payload: {
        trackIds
    }
})

export const DESTROY_PLAYLIST = '@PLAYLIST/DESTROY_PLAYLIST'

export const destroyPlaylist = () => ({
    type: DESTROY_PLAYLIST
})