import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: string
  name: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  modalOpen: boolean
  modalTab: 'login' | 'register'
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  modalOpen: false,
  modalTab: 'login',
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    openAuthModal(state, action: PayloadAction<'login' | 'register'>) {
      state.modalOpen = true
      state.modalTab = action.payload
    },
    closeAuthModal(state) {
      state.modalOpen = false
    },
    setModalTab(state, action: PayloadAction<'login' | 'register'>) {
      state.modalTab = action.payload
    },
    login(state, action: PayloadAction<User>) {
      state.user = action.payload
      state.isAuthenticated = true
      state.modalOpen = false
    },
    logout(state) {
      state.user = null
      state.isAuthenticated = false
    },
  },
})

export const { openAuthModal, closeAuthModal, setModalTab, login, logout } = authSlice.actions
export type { User, AuthState }
export default authSlice.reducer
