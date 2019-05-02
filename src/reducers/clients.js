import {
    FETCH_CLIENTS_REQUEST,
    FETCH_CLIENTS_FAILURE,
    FETCH_CLIENTS_SUCCESS
} from '../actions/clients'

const clients = (state = {}, action) => {
    switch (action.type) {
        case FETCH_CLIENTS_SUCCESS:
            return {
                ...state,
                clients: action.clients
            }
        default:
            return state
    }
}

export default clients
