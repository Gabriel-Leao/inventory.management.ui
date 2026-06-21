import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type initialStateTypes = {
  isSidebarCollapsed: boolean
  isDarkMode: boolean
}

const initialState: initialStateTypes = {
  isSidebarCollapsed: false,
  isDarkMode: false,
}

export const globalSilice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setIsSidebarCollapsed: (state, action: PayloadAction<boolean>) => {
      state.isSidebarCollapsed = action.payload
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload
    },
  },
})

export const { setIsSidebarCollapsed, setIsDarkMode } = globalSilice.actions

export default globalSilice.reducer
