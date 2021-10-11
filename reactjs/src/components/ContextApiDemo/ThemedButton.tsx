import React, { ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

export default function ThemedButton(props: {children: ReactNode}) {
    return (
        <ThemeContext.Consumer>
            {
                ({theme}) => <button style={{backgroundColor: theme.background,
                color: theme.textColor}} {...props} />
            }
        </ThemeContext.Consumer>
    )
}
