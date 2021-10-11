import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import MyIcon from '.';

export default {
  title: 'components/MyIcon',
  component: MyIcon,
} as ComponentMeta<typeof MyIcon>;

export const Index: ComponentStory<typeof MyIcon> = () => <MyIcon />;
