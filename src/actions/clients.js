import Api from '../services/Api'

const api = new Api()

/*
 * action types
 */

export const FETCH_CLIENTS_REQUEST = 'FETCH_CITY_REQUEST'
export const FETCH_CLIENTS_SUCCESS = 'FETCH_CITY_SUCCESS'
export const FETCH_CLIENTS_FAILURE = 'FETCH_CITY_FAILURE'

/*
 * action creators
 */

export const fetchClientsRequest = () => ({
    type: FETCH_CLIENTS_REQUEST
})

export const fetchClientsSuccess = (clients) => ({
    type: FETCH_CLIENTS_SUCCESS,
    clients
})

export const fetchCLientsFailure = (error) => ({
    type: FETCH_CLIENTS_FAILURE,
    error
})

/*
 * thunk action creators
 */

export const fetchClients = () => (dispatch) => {
    dispatch(fetchClientsRequest())

    api.get('/contacts')
        .then((data) => {
            console.log(data)
        })
}
