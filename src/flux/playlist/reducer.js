import { ADD_PLAYLIST, DESTROY_PLAYLIST, VOLUME_CHANGE, PLAYMODE_CHANGE } from "./actions"

const initialState = {
    audio: [],
    volume: 0.8,
    playmode: "order",
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_PLAYLIST:
            return { ...state, audio: [...state.audio, ...payload.trackIds] }
        case DESTROY_PLAYLIST:
            return {...state, audio: []}
        case VOLUME_CHANGE:
            return {...state, volume: payload.vol}
        case PLAYMODE_CHANGE:
            return {...state, playmode: payload.mode}
        default:
            return state
    }
}
