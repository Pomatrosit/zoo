import { createSlice } from '@reduxjs/toolkit'

interface AuthState {
  auth: boolean
}

const initialState: AuthState = {
  auth: false,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      state.auth = true
    },
    logout: (state) => {
      state.auth = false
    },
  },
})

export const { login, logout } = authSlice.actions

export default authSlice
