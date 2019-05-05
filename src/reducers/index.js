import { combineReducers} from "redux"

import clients from './clients'
import authentication from './authentication'
import user from './user'

const rootReducer = combineReducers({
    user,
    authentication,
    clients
})

export default rootReducer
