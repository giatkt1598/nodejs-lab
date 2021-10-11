import React, { useState } from 'react'
import GrandFather from './GrandFather'
import { ThemeContext, themes } from './ThemeContext'

export default function ContextApiDemo() {
    const [theme, setTheme] = useState(themes.dark);
    const toggleTheme = () => {
        if (theme == themes.dark) {
            setTheme(themes.light);
        } else {
            setTheme(themes.dark);
        }
    }
    return (
        <div>
            Index
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                <br />
                <GrandFather />
            </ThemeContext.Provider>
        </div>
    )
}
