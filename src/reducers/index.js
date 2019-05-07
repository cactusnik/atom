import { combineReducers} from "redux"

import clients from './clients'
import authentication from './authentication'
import user from './user'
import contacts from './contacts'

const rootReducer = combineReducers({
    user,
    authentication,
    clients,
    contacts
})

export default rootReducer
