import { createContext } from 'react';

export const themes = {
  light: {
    color: '#111111',
    backgroundColor: '#eeeeee',
  },
  dark: {
    color: '#111111',
    backgroundColor: '#eeeeee',
  },
};

export const ThemeContext = createContext({});

export const ThemeProvider = props => {
  return <ThemeContext.Provider value={{ themes }}></ThemeContext.Provider>;
};
