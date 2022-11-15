import { createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/common'
import { baseQueryWithReauth } from '../rtkQuery'

export interface IUser {
  user_id: number
  name: string
  age: number
  first_passport: string
  second_passport: string
  address: string
  job_id: number | string
  job_name: string
  second_name: string
  gender: string
}

export interface IUserSearch {
  user_id: number | null
  name: string | null
  age: number | null
  first_passport: string | null
  second_passport: string | null
  address: string | null
  job_id: number | null
  second_name: string | null
  gender: string | null
}

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: baseQueryWithReauth,
  refetchOnMountOrArgChange: true,
  endpoints: (builder) => ({
    getUser: builder.query<IUser, void>({
      query: () => `${API_URL}/cabinet`,
    }),
    getAllUsers: builder.query<IUser[], void>({
      query: () => `${API_URL}/cabinet/users`,
    }),
    searchUser: builder.mutation<IUser[], IUserSearch>({
      query: (user: IUserSearch) => ({
        url: `${API_URL}/cabinet/users/search`,
        method: 'POST',
        body: user,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled
          console.log(data)
          dispatch(
            userApi.util.updateQueryData('getAllUsers', undefined, () => {
              return data
            })
          )
        } catch {}
      },
    }),
  }),
})

export const { useGetUserQuery, useGetAllUsersQuery, useSearchUserMutation } =
  userApi
