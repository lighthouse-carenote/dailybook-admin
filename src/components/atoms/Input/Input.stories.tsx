import React from 'react';
import Input, { InputProps } from './Input';
import { Story } from '@storybook/react';
import InputErrorIcon from '~/assets/icons/input_error_icon.svg';
import InputConfirmIcon from '~/assets/icons/input_confirm_icon.svg';

const InputComponent: Story<InputProps> = (props) => <Input {...props} />;

export const input = InputComponent.bind({});

input.args = {
  width: 300,
  height: 52,
  borderradius: 0,
  placeholder: 'Place',
  isError: false,
  isConfirm: false,
  disabled: false,
  rightContentsTop: 14,
  rightContentsText: undefined,
  rightContentsIcon: InputErrorIcon,
  rightContentsLeftMargin: 56,
};

export default {
  title: 'Carehouse/Atoms/Input',
  component: input,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
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
      options: [40, 48, 52, 56, 60],
    },
    borderradius: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 4, 6],
    },
    isError: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
    isConfirm: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
    disabled: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
    rightContentsText: {
      control: {
        type: 'inline-radio',
      },
      options: ['5:00', undefined],
    },
    rightContentsIcon: {
      control: {
        type: 'inline-radio',
      },
      options: [InputConfirmIcon, InputErrorIcon, undefined],
    },
    rightContentsLeftMargin: {
      control: {
        type: 'inline-radio',
      },
      options: [56, 69],
    },
    leftContentsIcon: {
      control: {
        type: 'inline-radio',
      },
      options: [InputConfirmIcon, InputErrorIcon, undefined],
    },
    leftContentsRightMargin: {
      control: {
        type: 'inline-radio',
      },
      options: [56, 69],
    },
  },
};
