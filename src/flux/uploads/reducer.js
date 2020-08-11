import { ADD_UPLOADS } from "./actions"

const initialState = {
    data: {}
}

export default (state = initialState, { type, payload }) => {
    switch (type) {

        case ADD_UPLOADS:
            return { ...state, data: {...state.data, ...payload.uploads} }

        default:
            return state
    }
}
