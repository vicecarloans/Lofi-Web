import {
    FETCH_RECENT_TRACKS,
    FETCH_RECENT_TRACKS_SUCCESS,
    FETCH_RECENT_TRACKS_FAILURE,
    FETCH_MORE_RECENT_TRACK,
    FETCH_POPULAR_TRACKS,
    FETCH_POPULAR_TRACKS_SUCCESS,
    FETCH_POPULAR_TRACKS_FAILURE,
    FETCH_MORE_POPULAR_TRACK
} from "./actions";

const initialState = {
    popular: {
        isFetching: false,
        data: {},
        offset: 0,
        limit: 6,
        total: 0
    },
    recent: {
        isFetching: false,
        data: {},
        offset: 0,
        limit: 6,
        total: 0
    },
    err: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        /* RECENT TRACK */
        case FETCH_RECENT_TRACKS:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    isFetching: true,
                },
            };
        case FETCH_RECENT_TRACKS_SUCCESS:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    isFetching: false,
                    data: { ...state.recent.data, ...payload.tracks },
                    total: payload.total,
                },
            };
        case FETCH_RECENT_TRACKS_FAILURE:
            return {
                ...state,
                err: payload.err,
                recent: { ...state.recent, isFetching: false },
            };
        case FETCH_MORE_RECENT_TRACK:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    offset: payload.offset,
                    limit: payload.limit
                }
            }
        /* POPULAR TRACKS */
        case FETCH_POPULAR_TRACKS:
            return {
                ...state,
                popular: {
                    ...state.popular,
                    isFetching: true,
                },
            };
        case FETCH_POPULAR_TRACKS_SUCCESS:
            return {
                ...state,
                popular: {
                    ...state.popular,
                    isFetching: false,
                    data: { ...state.popular.data, ...payload.tracks },
                    total: payload.total,
                },
            };
        case FETCH_POPULAR_TRACKS_FAILURE:
            return {
                ...state,
                err: payload.err,
                popular: { ...state.popular, isFetching: false },
            };
        case FETCH_MORE_POPULAR_TRACK:
            return {
                ...state,
                popular: {
                    ...state.popular,
                    offset: payload.offset,
                    limit: payload.limit
                }
            }
        default:
            return state;
    }
};
