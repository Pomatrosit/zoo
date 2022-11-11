import { createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/common'
import { baseQueryWithReauth } from '../rtkQuery'

interface IUserResponse {
  user_id: number
  name: string
  age: number
  first_passport: string
  second_passport: string
  address: string
  job_id: number
  second_name: string
  gender: string
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getUser: builder.query<IUserResponse, void>({
      query: () => `${API_URL}/cabinet`,
    }),
    getAllUsers: builder.query<IUserResponse[], void>({
      query: () => `${API_URL}/cabinet/users`,
    }),
  }),
})

export const { useGetUserQuery, useGetAllUsersQuery } = userApi
