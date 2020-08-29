import { ADD_PLAYLIST, DESTROY_PLAYLIST, VOLUME_CHANGE, PLAYMODE_CHANGE, REMOVE_AUDIO } from "./actions"

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
        case REMOVE_AUDIO:
            return {...state, audio: state.audio.filter(a => a !== payload.trackId)}
        default:
            return state
    }
}
