import { useAppDispatch, useAppSelector } from '@/state/store'
import { setIsDarkMode } from '@/state/slices/globalSlice'

const useDarkMode = () => {
  const dispatch = useAppDispatch()
  const isDarkMode = useAppSelector((state) => state.global.isDarkMode)

  const toggleDarkMode = () => {
    dispatch(setIsDarkMode(!isDarkMode))
  }

  return {
    isDarkMode,
    toggleDarkMode,
  }
}

export default useDarkMode
