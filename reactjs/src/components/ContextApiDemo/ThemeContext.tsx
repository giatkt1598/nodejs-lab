import React from "react";

export const themes = {
  light: {
    textColor: 'black',
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    textColor: 'white',
    foreground: '#ffffff',
    background: '#222222',
  },
};
export const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});
