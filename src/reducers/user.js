import { userConstants } from '../constants'

const user = (state = {}, action) => {
    switch (action.type) {
        case userConstants.FETCH_USER_REQUEST:
            return {
                ...state,
                user: {},
                loading: true,
                error: null
            }
        case userConstants.FETCH_USER_SUCCESS:
            return {
                ...state,
                user: action.user,
                loading: false,
                error: null
            }
        case userConstants.FETCH_USER_FAILURE:
            return {
                ...state,
                user: {},
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}

export default user
