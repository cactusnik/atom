import { contactsConstants } from '../constants'
import Api from '../services/Api'

const api = new Api()

const getContacts = () => (dispatch) => {
    dispatch(request())

    api.get('/contacts')
        .then(
            response => {
                dispatch(success(response.data.items))
            }
        )
        .catch(
            error => {
                dispatch(failure(error))
            }
        )

    function request () {
        return {
            type: contactsConstants.FETCH_CONTACTS_REQUEST
        }
    }

    function success (contacts) {
        return {
            type: contactsConstants.FETCH_CONTACTS_SUCCESS,
            contacts
        }
    }

    function failure (error) {
        return {
            type: contactsConstants.FETCH_CONTACTS_FAILURE,
            error
        }
    }
}

export const contactsActions = {
    getContacts
}
