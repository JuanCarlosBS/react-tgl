import { Reducer } from 'redux';
import { usersState, usersTypes } from './types'

const INITIAL_STATE: usersState = {
    data: [],
    error: false,
    loading: false,
}

const reducer: Reducer<usersState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case usersTypes.LOAD_REQUEST:
            return { ...state, loading: true}
        case usersTypes.LOAD_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload }
        case usersTypes.LOAD_FAILURE:
            return { ...state, loading: false, error:true, data: []}
        default:
            return state;
    }
}

export default reducer