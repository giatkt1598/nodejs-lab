import { Description } from "@storybook/addon-docs";
import React from "react";
import AppButton from ".";

const desc = `
This is desc

*italic*

**bold**

## Title 1

`;

export default {
    title: 'components/AppButton-v2',
    component: AppButton,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    parameters: {
        docs: {
            description: {
                component: desc,
            }
        }
    }
}

export const Base = () => <AppButton backgroundColor='green'>Primary</AppButton>