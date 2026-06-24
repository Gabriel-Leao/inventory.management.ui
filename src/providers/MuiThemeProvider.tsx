'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ReactNode, useMemo } from 'react'
import useDarkMode from '@/hooks/useDarkMode'

export const MuiThemeProvider = ({ children }: { children: ReactNode }) => {
  const { isDarkMode } = useDarkMode()

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  )

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
