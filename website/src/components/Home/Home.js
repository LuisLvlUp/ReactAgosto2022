import React, { useContext } from 'react'
import { ThemeContext } from '../../theme/theme';

export const Home = () => {
  const [theme, setTheme] = useContext(ThemeContext);
  return (
    <div style={theme.status ? {color: 'red'} : {color: 'blue'}}>Home</div>
  )
}
