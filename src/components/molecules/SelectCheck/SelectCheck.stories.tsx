import React from 'react';
import SelectCheck, { SelectCheckProps } from './SelectCheck';
import { Story } from '@storybook/react';

const SelectCheckComponent: Story<SelectCheckProps> = (props) => <SelectCheck {...props} />;

export const selectCheck = SelectCheckComponent.bind({});

selectCheck.args = {
  width: 400,
  height: 62,
  text: '시설장',
  checked: false,
  border: 1,
};

export default {
  title: 'Carehouse/Molecules/Select Check',
  component: selectCheck,
  argTypes: {
    text: {
      control: {
        type: 'text',
      },
    },
    checked: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
    border: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 1],
    },
    width: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'number',
      },
    },
  },
};
