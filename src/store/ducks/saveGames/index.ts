import { error } from 'console';
import { Reducer } from 'redux';
import { saveGamesState, saveGamesTypes } from './types'

const INITIAL_STATE: saveGamesState = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<saveGamesState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case saveGamesTypes.LOAD_REQUEST:
            return { ...state, loading: true}
        case saveGamesTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case saveGamesTypes.LOAD_FAILURE:
            return { ...state, loading: false, error:true, data: []}
        default:
            return state;
    }
}

export default reducer