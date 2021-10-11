import React from 'react'
import { ThemeContext, themes } from './ThemeContext'

export default function ToggleThemeButton() {
    const { theme } = React.useContext(ThemeContext);
    let oppositeTheme = theme == themes.dark ? 'dark' : 'light';
    return (
        <ThemeContext.Consumer>
            {
                ({ toggleTheme }) =>
                    <button onClick={toggleTheme}>
                        {`Change theme to '${oppositeTheme}'`}
                    </button>
            }
        </ThemeContext.Consumer>
    )
}
