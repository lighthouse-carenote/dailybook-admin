import React from 'react';
import RequestPhaseChip, { RequestPhaseChipProps } from './RequestPhaseChip';
import { Story } from '@storybook/react';

const RequestPhaseChipComponent: Story<RequestPhaseChipProps> = (props) => <RequestPhaseChip {...props} />;

export const requestPhaseChip = RequestPhaseChipComponent.bind({});

requestPhaseChip.args = {
  width: 136,
  height: 48,
  color: 'unselected',
  phase: 1,
  text: '서비스 유형',
  textMarginLeft: 10,
};

export default {
  title: 'Carehouse/Molecules/Request Phase Chip',
  component: requestPhaseChip,
  argTypes: {
    color: {
      control: { type: 'inline-radio' },
      options: ['selected', 'unselected'],
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
