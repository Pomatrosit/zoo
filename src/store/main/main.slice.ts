import { createSlice } from '@reduxjs/toolkit'

export interface IUser {
  address: string
  age: number
  first_passport: string
  gender: string
  job_id: number
  name: string
  second_name: string
  second_passport: string
  user_id: number
}

const initialState: IUser | null = JSON.parse(
  localStorage.getItem('user') || 'null'
)

export const userSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
})

export const { setUserData } = userSlice.actions

export default userSlice
