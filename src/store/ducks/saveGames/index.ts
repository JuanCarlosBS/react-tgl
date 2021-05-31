import { error } from 'console';
import { Reducer } from 'redux';
import { saveGamesState, saveGamesTypes } from './types'

const INITIAL_STATE: saveGamesState = {
    data: [{
        id: '134534535345',
        type: 'Mega-sena',
        price: 4.50,
        color: '#01AC66',
        numbers: [1,2,3,4,5,6],
        enabled: true,
    }],
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