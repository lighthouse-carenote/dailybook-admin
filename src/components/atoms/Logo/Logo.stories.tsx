import React from 'react';
import Logo, { LogoProps } from './Logo';
import { Story } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

const LogoComponent: Story<LogoProps> = (props) => (
  <MemoryRouter>
    <Logo {...props} />
  </MemoryRouter>
);

export const logo = LogoComponent.bind({});

logo.args = {
  to: '/home',
};

export default {
  title: 'Carehouse/Atoms/Logo',
  component: logo,
  argTypes: {},
};
