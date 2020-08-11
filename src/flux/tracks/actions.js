export const FETCH_RECENT_TRACKS = '@TRACK/FETCH_RECENT_TRACKS'
export const fetchRecentTracks = (offset = 0, limit = 0) => ({
    type: FETCH_RECENT_TRACKS,
    payload: {
        offset,
        limit
    }
})

export const FETCH_RECENT_TRACKS_SUCCESS = '@TRACK/FETCH_RECENT_TRACKS_SUCCESS'

export const fetchRecentTrackSuccess = (tracks) => ({
    type: FETCH_RECENT_TRACKS_SUCCESS,
    payload: {
        tracks
    }
})

export const FETCH_RECENT_TRACKS_FAILURE = '@TRACK/FETCH_RECENT_TRACKS_FAILURE'

export const fetchRecentTrackFailure = (err) => ({
    type: FETCH_RECENT_TRACKS_FAILURE,
    payload: {
        err
    }
})
