export enum usersTypes {
    LOAD_REQUEST = 'users/LOAD_REQUEST',
    LOAD_SUCCESS = 'users/LOAD_SUCCESS',
    LOAD_FAILURE = 'users/LOAD_FAILURE'
}

export interface user {
    id: string;
    name: string;
    email: string;
    password: string;
}

export interface usersState {
    readonly data: user[]
    readonly loading: boolean
    readonly error: boolean
}