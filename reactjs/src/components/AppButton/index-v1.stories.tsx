import React from "react";
import AppButton from ".";
import {
  Title,
  Subtitle,
  Description,
  Primary,
  ArgsTable,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';
import { ComponentStory } from "@storybook/react";

export default {
    title: 'components/AppButton-v1',
    component: AppButton,
    argTypes: {
        backgroundColor: {control: 'color'}
    },
    parameters: {
        docs: {
          page: () => (
            <>
            <Title />
            <Subtitle>This is subtitle</Subtitle>
            <Description>
                This is description!
            </Description>
            <Primary />
            <ArgsTable story={PRIMARY_STORY} />
            <Stories />
            <p>hello</p>
            </>
        )}
    }
}


export const Base: ComponentStory<typeof AppButton> = () => <AppButton backgroundColor='green'>Primary</AppButton>