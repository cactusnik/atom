import { userConstants } from '../constants'

const authentication = (state = {}, action) => {
    switch (action.type) {
        case userConstants.FETCH_LOGIN_REQUEST:
            return {
                ...state,
                isAuth: false,
                loading: true,
                error: null
            }
        case userConstants.FETCH_LOGIN_SUCCESS:
            return {
                ...state,
                isAuth: true,
                loading: false,
                error: null
            }
        case userConstants.FETCH_LOGIN_FAILURE:
            return {
                ...state,
                isAuth: false,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default authentication
