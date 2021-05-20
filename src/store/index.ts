import React from 'react';
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './modules/rootReducer'

const store = configureStore({reducer:{ cart: rootReducer}});

export default store