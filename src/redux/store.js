import { configureStore } from '@reduxjs/toolkit'
import { userSlice } from './states/user'
import { openSideBar } from './states/openSideMenu'

export const reduxStore = configureStore({
  reducer: {
    user: userSlice.reducer,
    openSideBar: openSideBar.reducer
  }
})

export default reduxStore
