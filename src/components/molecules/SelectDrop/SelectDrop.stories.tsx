import React from 'react';
import SelectDrop, { SelectDropProps } from './SelectDrop';
import { Story } from '@storybook/react';

const SelectDropComponent: Story<SelectDropProps> = (props) => <SelectDrop {...props} />;

export const selectDrop = SelectDropComponent.bind({});

selectDrop.args = {
  width: 400,
  height: 60,
  dropdownBorderColor: 'grey900',
  fontSize: 16,
  fontWeight: 700,
  defaultOptionText: 'Place',
  borderradius: 4,
  itemVisible: true,
  visibleItemCnt: 2,
  items: [
    { id: 1, value: '아이템1' },
    { id: 2, value: '아이템2' },
    { id: 3, value: '아이템3' },
  ],
};

export default {
  title: 'Carehouse/Molecules/Select Drop',
  component: selectDrop,
  argTypes: {
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
    visibleItemCnt: {
      control: {
        type: 'number',
      },
    },
    fontSize: {
      control: {
        type: 'inline-radio',
      },
      options: [16, 18],
    },
    fontWeight: {
      control: {
        type: 'inline-radio',
      },
      options: [400, 700],
    },
    dropdownBorderColor: {
      control: {
        type: 'inline-radio',
      },
      options: ['grey200', 'grey900'],
    },
    defaultOptionText: {
      control: {
        type: 'text',
      },
    },
    borderradius: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 4, 6],
    },
    itemVisible: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
  },
};
