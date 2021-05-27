import { configureStore } from '@reduxjs/toolkit'

import { recentGamesSlice } from './modules/recentGames'

const store = configureStore({
    reducer: { 
        recent: recentGamesSlice.reducer
    },
})

export default store
