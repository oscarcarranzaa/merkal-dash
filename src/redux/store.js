import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states/user'

export const userInformation = configureStore({
  reducer: {
    user: userSlice.reducer
  }
})

export default userInformation
