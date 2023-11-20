import React from 'react';
import Background, { BackgroundProps } from './Background';
import { Story } from '@storybook/react';

const BackgroundComponent: Story<BackgroundProps> = (props) => <Background {...props} />;

export const background = BackgroundComponent.bind({});

export default {
  title: 'Carehouse/Atoms/Background',
  component: background,
  argTypes: {},
};
