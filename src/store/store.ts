import { configureStore } from '@reduxjs/toolkit'
import authSlice from './auth/auth.slice'
import { authApi } from './auth/auth.api'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import { userApi } from './user/user.api'
import { jobApi } from './job/job.api'

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [jobApi.reducerPath]: jobApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      userApi.middleware,
      jobApi.middleware
    ),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
