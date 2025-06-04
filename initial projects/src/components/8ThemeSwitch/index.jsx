import React from 'react';
import './theme.css';
import useLocalStorage from './useLocalStorage';

function ThemeChange() {
  const [theme, setTheme] = useLocalStorage('theme', 'dark');
  
  function handleToggleTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="theme-change" data-theme={theme}>
        <h1>Hello World !</h1>
        <button onClick={handleToggleTheme}>Change Theme</button>
    </div>
  );
}

export default ThemeChange;
