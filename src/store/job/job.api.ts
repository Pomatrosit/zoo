import { createApi } from '@reduxjs/toolkit/query/react'
import { API_URL } from '../../constants/common'
import { baseQueryWithReauth } from '../rtkQuery'

interface IJobResponse {
  job_id: number
  paid: number
  name: string
  users?: any
}

export const jobApi = createApi({
  reducerPath: 'jobApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    getJobs: builder.query<IJobResponse[], void>({
      query: () => `${API_URL}/cabinet/job`,
    }),
  }),
})

export const { useGetJobsQuery } = jobApi
