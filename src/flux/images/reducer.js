import { ADD_IMAGES } from "./actions"

const initialState = {
    data: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_IMAGES:
            return { ...state, data: {...state.data, ...payload.images} }
        
        default:
            return state
    }
}
