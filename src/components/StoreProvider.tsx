'use client'

import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore, AppStore } from '../redux/store'
import { setInitialCount } from '../redux/slices/counterSlice'

export default function StoreProvider({
  count,
  children,
}: {
  count: number
  children: React.ReactNode
}) {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    // Initialize the counter with the provided count
    storeRef.current.dispatch(setInitialCount(count))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
};
