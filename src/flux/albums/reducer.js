import {
    FETCH_RECENT_ALBUMS,
    FETCH_RECENT_ALBUMS_SUCCESS,
    FETCH_RECENT_ALBUMS_FAILURE,
    FETCH_MORE_RECENT_ALBUM,
    FETCH_POPULAR_ALBUMS,
    FETCH_POPULAR_ALBUMS_SUCCESS,
    FETCH_POPULAR_ALBUMS_FAILURE,
    FETCH_MORE_POPULAR_ALBUM
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
    all: {
        data: {}
    },
    err: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        /* RECENT ALBUM */
        case FETCH_RECENT_ALBUMS:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    isFetching: true,
                },
            };
        case FETCH_RECENT_ALBUMS_SUCCESS:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    isFetching: false,
                    data: { ...state.recent.data, ...payload.albums },
                    total: payload.total,
                },
                all : {
                    data: {...state.all.data, ...payload.albums}
                }
            };
        case FETCH_RECENT_ALBUMS_FAILURE:
            return {
                ...state,
                err: payload.err,
                recent: { ...state.recent, isFetching: false },
            };
        case FETCH_MORE_RECENT_ALBUM:
            return {
                ...state,
                recent: {
                    ...state.recent,
                    offset: payload.offset,
                    limit: payload.limit
                }
            }
        /* POPULAR ALBUMS */
        case FETCH_POPULAR_ALBUMS:
            return {
                ...state,
                popular: {
                    ...state.popular,
                    isFetching: true,
                },
            };
        case FETCH_POPULAR_ALBUMS_SUCCESS:
            return {
                ...state,
                popular: {
                    ...state.popular,
                    isFetching: false,
                    data: { ...state.popular.data, ...payload.albums },
                    total: payload.total,
                },
                all : {
                    data: { ...state.all.data, ...payload.albums}
                }
            };
        case FETCH_POPULAR_ALBUMS_FAILURE:
            return {
                ...state,
                err: payload.err,
                popular: { ...state.popular, isFetching: false },
            };
        case FETCH_MORE_POPULAR_ALBUM:
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
