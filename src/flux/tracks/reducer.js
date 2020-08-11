import {
    FETCH_RECENT_TRACKS,
    FETCH_RECENT_TRACKS_SUCCESS,
    FETCH_RECENT_TRACKS_FAILURE,
} from "./actions";

const initialState = {
    popular: {
        isFetching: false,
        data: {},
        offset: 0,
        limit: 0,
    },
    recent: {
        isFetching: false,
        data: {},
        offset: 0,
        limit: 0,
    },
    err: null,
};

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case FETCH_RECENT_TRACKS:
            return {
                ...state,
                recent: {
                    isFeching: true,
                    data: state.recent.data,
                    offset: payload.offset,
                    limit: payload.limit,
                },
            };
        case FETCH_RECENT_TRACKS_SUCCESS:
            return {
                ...state,
                recent: {
                    isFetching: false,
                    data: { ...state.recent.data, ...payload.tracks },
                },
            };
        case FETCH_RECENT_TRACKS_FAILURE:
            return {
                ...state,
                err: payload.err,
                recent: { isFetching: false },
            };
        default:
            return state;
    }
};
