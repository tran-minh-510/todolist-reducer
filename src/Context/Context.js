import React, { createContext, useReducer } from 'react'
import reducer, { initState } from '../Reducer/reducer'

export const ThemeContext = createContext()
export default function Context({ children }) {
    const [store, dispatch] = useReducer(reducer, initState)
    const data = { store, dispatch }
    return (
        <ThemeContext.Provider value={data}>{children}</ThemeContext.Provider>
    )
}
