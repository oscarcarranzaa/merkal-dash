import { createSlice } from '@reduxjs/toolkit'

export const userEmpty = {
  merkUserId: '',
  firtName: '',
  lastName: '',
  email: '',
  photo: [
    {
      url: ''
    }
  ]
}

export const userSlice = createSlice({
  name: 'user',
  initialState: userEmpty,
  reducers: {
    userData: (state, action) => {
      return action.payload
    },
    modifyUser: (state, action) => {
      return { ...state, ...action.payload }
    },
    resetUser: () => {
      return userEmpty
    }
  }
})

export const { userData, modifyUser, resetUser } = userSlice.actions
