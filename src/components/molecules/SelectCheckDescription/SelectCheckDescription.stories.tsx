import React from 'react';
import SelectCheckDescription, { SelectCheckDescriptionProps } from './SelectCheckDescription';
import { Story } from '@storybook/react';

const SelectCheckDescriptionComponent: Story<SelectCheckDescriptionProps> = (props) => (
  <SelectCheckDescription {...props} />
);

export const selectCheckDescription = SelectCheckDescriptionComponent.bind({});

selectCheckDescription.args = {
  width: 400,
  height: 94,
  title: '재가시설 (방문요양, 방문간호, 방문목욕)',
  description: '직접 가정에 방문해서 요양 서비스를 제공하는 시설이에요.',
  checked: false,
  border: 1,
};

export default {
  title: 'Carehouse/Molecules/Select Check Description',
  component: selectCheckDescription,
  argTypes: {
    title: {
      control: {
        type: 'text',
      },
    },
    description: {
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
