import React from 'react';
import PhaseNumber, { PhaseNumberProps } from './PhaseNumber';
import { Story } from '@storybook/react';

const PhaseNumberComponent: Story<PhaseNumberProps> = (props) => <PhaseNumber {...props} />;

export const phaseNumber = PhaseNumberComponent.bind({});

phaseNumber.args = {
  phase: 1,
  width: 24,
  height: 24,
  phaseColor: 'black',
};

export default {
  title: 'Carehouse/Atoms/Phase Number',
  component: phaseNumber,
  argTypes: {
    phase: {
      control: {
        type: 'number',
      },
    },
    phaseColor: {
      control: {
        type: 'inline-radio',
      },
      options: ['white', 'black'],
    },
  },
};
