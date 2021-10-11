import React from 'react'
import ThemedButton from './ThemedButton'
import ToggleThemeButton from './ToggleThemeButton'

export default function Child() {
    return (
        <div>
            I'm child
            <br />
            <ThemedButton>Themed button</ThemedButton>
            <br />
            <ToggleThemeButton />
        </div>
    )
}