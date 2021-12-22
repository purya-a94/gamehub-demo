import { configureStore } from '@reduxjs/toolkit'
import rootReducer from 'app/redux/rootReducer'

export const store = configureStore({
	reducer: rootReducer,
})
