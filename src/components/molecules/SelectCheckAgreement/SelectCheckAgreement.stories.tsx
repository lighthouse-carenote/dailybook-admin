import React from 'react';
import SelectCheckAgreement, { SelectCheckAgreementProps } from './SelectCheckAgreement';
import { Story } from '@storybook/react';

const SelectCheckAgreementComponent: Story<SelectCheckAgreementProps> = (props) => <SelectCheckAgreement {...props} />;

export const selectCheckAgreement = SelectCheckAgreementComponent.bind({});

selectCheckAgreement.args = {
  width: 105,
  height: 27,
  children: '시설장',
  checked: false,
};

export default {
  title: 'Carehouse/Molecules/Select Check Agreement',
  component: selectCheckAgreement,
  argTypes: {
    children: {
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
