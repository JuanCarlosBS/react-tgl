import { createStore, Store } from 'redux'

import rootReducer from './ducks/rootReducer'
import { saveGamesState } from './ducks/saveGames/types'

export interface ApplicationState {
    saveGames: saveGamesState
}

const store: Store<ApplicationState> = createStore(rootReducer)

export default store