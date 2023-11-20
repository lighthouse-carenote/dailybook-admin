import React from 'react';
import SelectRadio, { SelectRadioProps } from './SelectRadio';
import { Story } from '@storybook/react';
import { BorderRenderType } from '~/libs';

const SelectRadioComponent: Story<SelectRadioProps> = (props) => <SelectRadio {...props} />;

export const selectRadio = SelectRadioComponent.bind({});

selectRadio.args = {
  width: 400,
  height: 62,
  text: '남',
  checked: false,
  borderradius: 4,
  borderRenderType: BorderRenderType.BORDER,
};

export default {
  title: 'Carehouse/Molecules/Select Radio',
  component: selectRadio,
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
    borderradius: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 4],
    },
    borderRenderType: {
      control: {
        type: 'inline-radio',
      },
      options: Object.values(BorderRenderType),
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
