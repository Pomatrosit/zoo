import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/common'
import { ILoginResponse } from '../../models/login'

interface IRegisterOwnerRequest {
  login: string
  password: string
}

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${API_URL}/security`,
  }),
  endpoints: (builder) => ({
    registerOwner: builder.mutation<ILoginResponse, IRegisterOwnerRequest>({
      query: (candidate: IRegisterOwnerRequest) => ({
        url: '/createToken',
        method: 'POST',
        body: candidate,
      }),
    }),
  }),
})

export const { useRegisterOwnerMutation } = authApi
