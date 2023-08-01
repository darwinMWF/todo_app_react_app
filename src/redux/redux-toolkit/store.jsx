import {configureStore} from '@reduxjs/toolkit'
import allreducers from './reducer'
const store = configureStore({
    reducer:{
        todos:allreducers
    }
})

export default store;