export enum saveGamesTypes {
    LOAD_REQUEST = 'saveGames/LOAD_REQUEST',
    LOAD_SUCCESS = 'saveGames/LOAD_SUCCESS',
    LOAD_FAILURE = 'saveGames/LOAD_FAILURE'
}

export interface saveGame {
    id: string;
    type: string;
    price: number;
    color: string;
    numbers: number[];
    enabled: boolean;
}

export interface saveGamesState {
    readonly data: saveGame[]
    readonly loading: boolean
    readonly error: boolean
}