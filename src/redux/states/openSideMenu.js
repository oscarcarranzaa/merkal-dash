import { createSlice } from '@reduxjs/toolkit'

export const defaultSideBar = {
  openSideMenu: false
}

export const openSideBar = createSlice({
  name: 'openSideBar',
  initialState: defaultSideBar,
  reducers: {
    sideBar: (state, action) => {
      return action.payload
    },
    resetSideBar: () => {
      return defaultSideBar
    }
  }
})

export const { sideBar, resetSideBar } = openSideBar.actions
