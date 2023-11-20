import React from 'react';
import FormInput, { FormInputProps } from './FormInput';
import { Story } from '@storybook/react';
import InputErrorIcon from '~/assets/icons/input_error_icon.svg';
import InputConfirmIcon from '~/assets/icons/input_confirm_icon.svg';

const FormInputComponent: Story<FormInputProps> = (props) => <FormInput {...props} />;

export const formInput = FormInputComponent.bind({});

formInput.args = {
  width: 300,
  containerHeight: 120,
  inputHeight: 52,
  borderradius: 0,
  title: 'Title',
  titleFontSize: 16,
  errorMsg: 'Help',
  confirmMsg: 'Confirm',
  placeholder: 'Place',
  isError: false,
  isConfirm: false,
  disabled: false,
  rightContentsTop: 14,
  rightContentsText: undefined,
  rightContentsIcon: InputErrorIcon,
  rightContentsLeftMargin: 56,
  msgFontSize: 14,
};

export default {
  title: 'Carehouse/Molecules/Form Input',
  component: formInput,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    titleFontSize: {
      control: {
        type: 'inline-radio',
      },
      options: [16, 20],
    },
    errorMsg: {
      control: {
        type: 'text',
      },
    },
    width: {
      control: {
        type: 'number',
      },
    },
    containerHeight: {
      control: {
        type: 'number',
      },
    },
    inputHeight: {
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
    rightContentsTop: {
      control: {
        type: 'number',
      },
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
    msgFontSize: {
      control: {
        type: 'inline-radio',
      },
      options: [14, 15],
    },
  },
};
