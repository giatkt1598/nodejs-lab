import React from 'react'
import ContextApiDemo from '.'

export default {
    title: 'component/ContextApiDemo',
    component: ContextApiDemo,
    parameters: {
        docs: {
            description: {
                component: 'Thử  nghiệm context api',
            }
        }
    }
}

const Template = () => <ContextApiDemo />

export const Index = Template.bind({});
