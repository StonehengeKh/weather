import {
    GET_AUTH_SUCCESS,
} from '../actions/actionTypes'

const initialState = {
    user: {}
}

export default (state = initialState, {type, payload}) => {

    switch (type) {
        case GET_AUTH_SUCCESS: {
            return {
                ...state,
                user: payload
            }
        }

        default:
            return state
    }
}

