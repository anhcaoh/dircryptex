import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './reducers'

export const store = configureStore({ reducer: rootReducer })
export type RootType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch