import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import TestScopeCss from ".";

export default {
    title: 'components/TestScopeCss',
    component: TestScopeCss
} as ComponentMeta<typeof TestScopeCss>;

export const Index: ComponentStory<typeof TestScopeCss> = () => <TestScopeCss />