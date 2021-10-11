import React from 'react'

export function MyButton(props: {children: any}) {
    return (
        <button style={{
            background: 'orange',
            border: 'none',
            borderRadius: 16,
            padding: '8px 24px',
            color: 'white',
        }}>
            {props.children}
        </button>
    )
}
