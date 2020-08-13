/* RECENT TRACKS */
export const FETCH_RECENT_TRACKS = '@TRACK/FETCH_RECENT_TRACKS'
export const fetchRecentTracks = () => ({
    type: FETCH_RECENT_TRACKS,
})

export const FETCH_RECENT_TRACKS_SUCCESS = '@TRACK/FETCH_RECENT_TRACKS_SUCCESS'

export const fetchRecentTrackSuccess = (tracks, total) => ({
    type: FETCH_RECENT_TRACKS_SUCCESS,
    payload: {
        tracks,
        total
    }
})

export const FETCH_RECENT_TRACKS_FAILURE = '@TRACK/FETCH_RECENT_TRACKS_FAILURE'

export const fetchRecentTrackFailure = (err) => ({
    type: FETCH_RECENT_TRACKS_FAILURE,
    payload: {
        err
    }
})

export const FETCH_MORE_RECENT_TRACK = '@TRACK/FETCH_MORE_RECENT_TRACK'

export const fetchMoreRecentTrack = (offset, limit) => ({
    type: FETCH_MORE_RECENT_TRACK,
    payload: {
        offset,
        limit
    }
})

/* POPULAR TRACKS */

export const FETCH_POPULAR_TRACKS = '@TRACK/FETCH_POPULAR_TRACKS'
export const fetchPopularTracks = () => ({
    type: FETCH_POPULAR_TRACKS,
})

export const FETCH_POPULAR_TRACKS_SUCCESS = '@TRACK/FETCH_POPULAR_TRACKS_SUCCESS'

export const fetchPopularTrackSuccess = (tracks, total) => ({
    type: FETCH_POPULAR_TRACKS_SUCCESS,
    payload: {
        tracks,
        total
    }
})

export const FETCH_POPULAR_TRACKS_FAILURE = '@TRACK/FETCH_POPULAR_TRACKS_FAILURE'

export const fetchPopularTrackFailure = (err) => ({
    type: FETCH_POPULAR_TRACKS_FAILURE,
    payload: {
        err
    }
})

export const FETCH_MORE_POPULAR_TRACK = '@TRACK/FETCH_MORE_POPULAR_TRACK'

export const fetchMorePopularTrack = (offset, limit) => ({
    type: FETCH_MORE_POPULAR_TRACK,
    payload: {
        offset,
        limit
    }
})