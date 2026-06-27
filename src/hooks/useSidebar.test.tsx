import { act, renderHook } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { configureStore, EnhancedStore } from '@reduxjs/toolkit'
import globalReducer, { initialStateTypes } from '@/state/slices/globalSlice'
import { Provider } from 'react-redux'
import React from 'react'
import useSidebar from '@/hooks/useSidebar'

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

describe('useSidebar', () => {
  it('returns isSidebarCollapsed as false by default', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper(),
    })

    expect(result.current.isSidebarCollapsed).toBe(false)
  })

  it('returns isSidebarCollapsed as true when store starts collapsed', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper({ isSidebarCollapsed: true }),
    })

    expect(result.current.isSidebarCollapsed).toBe(true)
  })

  it('toggles sidebar from expanded to collapsed', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper({ isSidebarCollapsed: false }),
    })

    act(() => {
      result.current.toggleSidebar()
    })

    expect(result.current.isSidebarCollapsed).toBe(true)
  })

  it('toggles sidebar from collapsed to expanded', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper({ isSidebarCollapsed: true }),
    })

    act(() => {
      result.current.toggleSidebar()
    })

    expect(result.current.isSidebarCollapsed).toBe(false)
  })

  it('returns expanded class names when sidebar is not collapsed', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper({ isSidebarCollapsed: false }),
    })

    expect(result.current.sidebarClassNames).toContain('w-72')
    expect(result.current.sidebarClassNames).toContain('md:w-64')
  })

  it('returns collapsed class names when sidebar is collapsed', () => {
    const { result } = renderHook(() => useSidebar(), {
      wrapper: makeWrapper({ isSidebarCollapsed: true }),
    })

    expect(result.current.sidebarClassNames).toContain('w-0')
    expect(result.current.sidebarClassNames).toContain('md:w-16')
  })
})
