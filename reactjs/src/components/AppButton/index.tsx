import React, { ReactNode } from 'react'

function AppButton(props: {children: ReactNode, backgroundColor: string}) {
    return (
        <button style={{backgroundColor: props.backgroundColor}}>
            {props.children}
        </button>
    )
}

export default AppButton