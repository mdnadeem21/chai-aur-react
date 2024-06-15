import {configureStore} from '@reduxjs/toolkit'
import userDetailReducer from '../feature/userDetailsSlice'


export const store = configureStore({
    reducer : {
        app: userDetailReducer
    }
})