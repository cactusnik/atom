import { userConstants } from '../constants'
import Api from '../services/Api'

const api = new Api()

const login = (email, password) => (dispatch) => {
    dispatch(request())

    api.post('/account/login', { email, password })
        .then(
            response => {
                console.log(response.access_token)
                localStorage.setItem('token', response.access_token)
                dispatch(success())
            }
        )
        .catch(
            error => {
                dispatch(failure(error))
            }
        )

    function request () {
        return {
            type: userConstants.FETCH_LOGIN_REQUEST
        }
    }

    function success (user) {
        return {
            type: userConstants.FETCH_LOGIN_SUCCESS,
            user
        }
    }

    function failure (error) {
        return {
            type: userConstants.FETCH_LOGIN_FAILURE,
            error
        }
    }
}

const getUser = () => (dispatch) => {
    dispatch(request())

    api.get('/login')
        .then(
            response => {
                console.log(response)
            }
        )
        .catch(error => {
            failure(error)
        })

    function request () {
        return {
            type: userConstants.FETCH_USER_REQUEST
        }
    }

    function success (user) {
        return {
            type: userConstants.FETCH_USER_SUCCESS,
            user
        }
    }

    function failure (error) {
        return {
            type: userConstants.FETCH_USER_FAILURE,
            error
        }
    }
}

const logout = () => {
    localStorage.removeItem('token')
    return {
        type: userConstants.USERS_LOGOUT
    }
}

export const userActions = {
    login,
    logout,
    getUser
}
