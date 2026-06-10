import React, { createContext, useContext, useState, useEffect } from 'react'
 
export const ThemeContext = createContext()
 
export default function ThemeContextProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('heavystat-theme') || 'dark'
  })
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('heavystat-theme', theme)
  }, [theme])
 
  function toggleTheme(newTheme) {
    setTheme(newTheme)
  }
 
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
 
export const useTheme = () => useContext(ThemeContext)
 