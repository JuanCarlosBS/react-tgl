import { action } from 'typesafe-actions'
import { saveGamesTypes, saveGame } from './types'

export const loadRequest = () => action(saveGamesTypes.LOAD_REQUEST)

export const loadSuccess = (data: saveGame) => action(saveGamesTypes.LOAD_SUCCESS, data)

export const loadFailure = () => action(saveGamesTypes.LOAD_FAILURE)