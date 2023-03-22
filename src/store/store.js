import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import mainReducer from './slices/mainSlice';
const store = configureStore({
    reducer: {
        main: mainReducer,
        modal: authReducer
    }
})
export default store;