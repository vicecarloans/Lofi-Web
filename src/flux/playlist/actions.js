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

export const VOLUME_CHANGE = '@PLAYLIST/VOLUME_CHANGE'

export const volumeChange = (vol) => ({
    type: VOLUME_CHANGE,
    payload: {
        vol
    }
})

export const PLAYMODE_CHANGE = '@PLAYLIST/PLAYMODE_CHANGE'

export const playModeChange = (mode) => ({
    type: PLAYMODE_CHANGE,
    payload: {
        mode
    }
})
