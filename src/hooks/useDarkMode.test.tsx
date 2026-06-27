import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import globalReducer, { initialStateTypes } from '@/state/slices/globalSlice'
import { Provider } from 'react-redux'
import React from 'react'
import useDarkMode from '@/hooks/useDarkMode'

function makeWrapper(preloadedState?: Partial<initialStateTypes>) {
  const store: EnhancedStore = configureStore({
    reducer: { global: globalReducer },
    preloadedState: { global: { isSidebarCollapsed: false, isDarkMode: false, ...preloadedState } },
  })
  return ({ children }: { children: React.ReactNode }) =>
    React.createElement(
      Provider as React.ComponentType<{ store: EnhancedStore; children: React.ReactNode }>,
      { store, children },
    )
}

describe('useDarkMode', () => {
  beforeEach(() => {
    document.documentElement.classList.remove('dark')
  })

  afterEach(() => {
    document.documentElement.classList.remove('dark')
  })

  it('returns isDarkMode as false by default', () => {
    const { result } = renderHook(() => useDarkMode(), {
      wrapper: makeWrapper(),
    })

    expect(result.current.isDarkMode).toBe(false)
  })

  it('returns isDarkMode as true when store starts with dark mode enabled', () => {
    const { result } = renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: true }),
    })

    expect(result.current.isDarkMode).toBe(true)
  })

  it('adds dark class to documentElement when isDarkMode is true', () => {
    renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: true }),
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })

  it('removes dark class from documentElement when isDarkMode is false', () => {
    document.documentElement.classList.add('dark')

    renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: false }),
    })

    expect(document.documentElement.classList.contains('dark')).toBe(false)
  })

  it('toggles isDarkMode from false to true', () => {
    const { result } = renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: false }),
    })

    act(() => {
      result.current.toggleDarkMode()
    })

    expect(result.current.isDarkMode).toBe(true)
  })

  it('toggles isDarkMode from true to false', () => {
    const { result } = renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: true }),
    })

    act(() => {
      result.current.toggleDarkMode()
    })

    expect(result.current.isDarkMode).toBe(false)
  })

  it('adds dark class after toggling to true', () => {
    const { result } = renderHook(() => useDarkMode(), {
      wrapper: makeWrapper({ isDarkMode: false }),
    })

    act(() => {
      result.current.toggleDarkMode()
    })

    expect(document.documentElement.classList.contains('dark')).toBe(true)
  })
})
