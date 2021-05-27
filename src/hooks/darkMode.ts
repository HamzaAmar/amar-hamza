import { useState, useEffect } from 'react'
import { variable } from '../constants'

const useMode = () => {
    const [mode, setMode] = useState(undefined)
    useEffect(() => {
        const root = window.document.documentElement
        const initialColorValue = root.style.getPropertyValue(
            '--initial-color-mode'
        )
        setMode(initialColorValue)
        console.log('Hello World', mode)
    }, [])
    const setColorMode = () => {
        const value = mode === 'light' ? 'dark' : 'light'
        const root = window.document.documentElement
        // 1. Update React color-mode state
        setMode(value)
        // 2. Update localStorage
        localStorage.setItem('color-mode', value)
        root.style.setProperty(
            '--color-text',
            value === 'light' ? variable.light.text : variable.dark.text
        )
        root.style.setProperty(
            '--color-background',
            value === 'light'
                ? variable.light.background
                : variable.dark.background
        )
        root.style.setProperty(
            '--color-primary',
            value === 'light' ? variable.light.primary : variable.dark.primary
        )
    }
    return [mode, setColorMode]
}

export default useMode
