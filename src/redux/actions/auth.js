import {
    GET_AUTH_REQUEST,
    GET_AUTH_SUCCESS,
    GET_AUTH_ERROR,
} from "./actionTypes";

import {getUser as getUserApi} from "../../api";

export const getUser = (user) => async dispatch => {
    dispatch ({type: GET_AUTH_REQUEST})

    try {
        const user = await getUserApi()
        dispatch({
            type: GET_AUTH_SUCCESS,
            payload: user
        })
    } catch (err) {
        dispatch({
            type: GET_AUTH_ERROR,
            payload: err,
            error: true
        })
    }
}