import { ADD_PLAYLIST, DESTROY_PLAYLIST } from "./actions"

const initialState = {
    audio: []
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_PLAYLIST:
            return { ...state, audio: [...state.audio, ...payload.trackIds] }
        case DESTROY_PLAYLIST:
            return {...state, audio: []}
        default:
            return state
    }
}
