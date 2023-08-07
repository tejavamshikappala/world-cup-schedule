import React from 'react'

const ThemeContext = React.createContext({
  activeTheme: 'Light',
  onChanging: () => {},
})
export default ThemeContext
