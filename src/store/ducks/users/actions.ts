import { action } from 'typesafe-actions'
import { usersTypes, user } from './types'

export const loadRequest = () => action(usersTypes.LOAD_REQUEST)

export const loadSuccess = (data: user) => action(usersTypes.LOAD_SUCCESS, data)

export const loadFailure = () => action(usersTypes.LOAD_FAILURE)