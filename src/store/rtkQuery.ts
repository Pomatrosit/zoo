import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query'
import { API_URL } from '../constants/common'
import { logout } from './auth/auth.slice'

const prepareHeaders = (headers: any) => {
  const token = localStorage.getItem('token')
  if (token) {
    headers.set('Authorization', `Bearer ${token}`)
  }
  return headers
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: prepareHeaders,
})

export const baseQueryWithReauth = async (
  args: any,
  api: any,
  extraOptions: any
) => {
  let result = await baseQuery(args, api, extraOptions)
  if (result.error && result.error.status === 401) {
    api.dispatch(logout())
    localStorage.removeItem('token')
  }
  return result
}
