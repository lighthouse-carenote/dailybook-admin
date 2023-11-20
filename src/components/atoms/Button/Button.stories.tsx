import React from 'react';
import Button, { ButtonProps } from './Button';
import { Story } from '@storybook/react';
import ArrowLeftWhite from '~/assets/icons/arrow_left_white.svg';
import ArrowRightWhite from '~/assets/icons/arrow_right_white.svg';

const ButtonComponent: Story<ButtonProps> = (props) => <Button {...props} />;

export const button = ButtonComponent.bind({});
button.args = {
  width: 300,
  height: 60,
  color: 'primary',
  borderradius: 8,
  children: '버튼',
  disabled: false,
};

export const buttonWithLeftIcon = ButtonComponent.bind({});
buttonWithLeftIcon.args = {
  width: 300,
  height: 60,
  color: 'primary',
  borderradius: 8,
  children: '버튼',
  disabled: false,
  leftIcon: ArrowLeftWhite,
};

export const buttonWithRightIcon = ButtonComponent.bind({});
buttonWithRightIcon.args = {
  width: 300,
  height: 60,
  color: 'primary',
  borderradius: 8,
  children: '버튼',
  disabled: false,
  rightIcon: ArrowRightWhite,
};

export const buttonWithBothIcon = ButtonComponent.bind({});
buttonWithBothIcon.args = {
  width: 300,
  height: 60,
  color: 'primary',
  borderradius: 8,
  children: '버튼',
  disabled: false,
  leftIcon: ArrowLeftWhite,
  rightIcon: ArrowRightWhite,
};

export default {
  title: 'Carehouse/Atoms/Button',
  component: button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    color: {
      control: { type: 'inline-radio' },
      options: ['primary', 'white', 'black', 'ghost'],
    },
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'inline-radio',
      },
      options: [32, 36, 40, 48, 56, 60],
    },
    borderradius: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 4, 6, 8],
    },
    disabled: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
  },
};
