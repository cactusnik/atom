import { contactsConstants } from '../constants'

const contacts = (state = {}, action) => {
    switch (action.type) {
        case contactsConstants.FETCH_CONTACTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
                items: []
            }
        case contactsConstants.FETCH_CONTACTS_SUCCESS:
            return {
                ...state,
                loading: false,
                error: null,
                items: action.contacts
            }
        case contactsConstants.FETCH_CONTACTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error,
                items: []
            }
        default:
            return state

    }
}

export default contacts
