import React from 'react';
import PhaseBtnInRequest, { PhaseBtnInRequestProps } from './PhaseBtnInRequest';
import { Story } from '@storybook/react';

const PhaseBtnInRequestComponent: Story<PhaseBtnInRequestProps> = (props) => <PhaseBtnInRequest {...props} />;

export const phaseBtnInRequest = PhaseBtnInRequestComponent.bind({});

phaseBtnInRequest.args = {
  width: 136,
  height: 48,
  phase: 1,
  text: '서비스 유형',
  phaseColor: 'white',
  textLeftMargin: 10,
};

export default {
  title: 'Carehouse/Molecules/Phase Btn In Request',
  component: phaseBtnInRequest,
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
    phase: {
      control: {
        type: 'number',
      },
    },
    text: {
      control: {
        type: 'text',
      },
    },
    phaseColor: {
      control: {
        type: 'inline-radio',
      },
      options: ['white', 'black'],
    },
    textLeftMargin: {
      control: {
        type: 'number',
      },
    },
  },
};
