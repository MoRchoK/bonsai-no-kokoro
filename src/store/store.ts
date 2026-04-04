import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/authSlice'
import lentaReducer from './slices/lentaSlice'
import knowledgeReducer from './slices/knowledgeSlice'
import communityReducer from './slices/communitySlice'
import contestsReducer from './slices/contestsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    lenta: lentaReducer,
    knowledge: knowledgeReducer,
    community: communityReducer,
    contests: contestsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
