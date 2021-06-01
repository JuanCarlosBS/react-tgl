import { createStore, Store } from 'redux'

import rootReducer from './ducks/rootReducer'
import { saveGamesState } from './ducks/saveGames/types'
import { usersState } from './ducks/users/types'

export interface ApplicationState {
    saveGames: saveGamesState
    users: usersState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store