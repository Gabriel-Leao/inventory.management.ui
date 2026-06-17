import { useAppDispatch, useAppSelector } from '@/redux'
import { setIsDarkMode } from '@/state'

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
