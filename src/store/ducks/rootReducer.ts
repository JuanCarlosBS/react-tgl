import { combineReducers } from 'redux'

import saveGames from './saveGames'
import users from './users'

export default combineReducers({
    saveGames,
    users
})