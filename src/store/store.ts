import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.slice'
import { authApi } from './auth/auth.api'
import { userApi } from './user/user.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import userSlice from './main/main.slice'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware, userApi.middleware),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
