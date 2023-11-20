import React from 'react';
import Chip, { ChipProps } from './Chip';
import { Story } from '@storybook/react';
import CheckIcon from '~/assets/icons/check_small.svg';

const ChipComponent: Story<ChipProps> = (props) => <Chip {...props} />;

export const chip = ChipComponent.bind({});
chip.args = {
  height: 32,
  cursor: 'default',
  borderradius: 4,
  marginFromIcon: 10,
  children: 'Chip',
  fontweight: 700,
  borderwidth: 1,
  backgroundcolor: 'white',
  fontcolor: 'black',
  bordercolor: 'grey',
};

export const chipWithLeftIcon = ChipComponent.bind({});
chipWithLeftIcon.args = {
  height: 32,
  cursor: 'default',
  borderradius: 4,
  marginFromIcon: 10,
  children: 'Chip',
  borderwidth: 1,
  fontweight: 700,
  leftIcon: CheckIcon,
  backgroundcolor: 'white',
  fontcolor: 'black',
  bordercolor: 'grey',
};

export const chipWithRightIcon = ChipComponent.bind({});
chipWithRightIcon.args = {
  height: 32,
  cursor: 'default',
  borderradius: 4,
  marginFromIcon: 10,
  children: 'Chip',
  borderwidth: 1,
  fontweight: 700,
  rightIcon: CheckIcon,
  backgroundcolor: 'white',
  fontcolor: 'black',
  bordercolor: 'grey',
};

export const chipWithBothIcon = ChipComponent.bind({});
chipWithBothIcon.args = {
  height: 32,
  cursor: 'default',
  borderradius: 4,
  marginFromIcon: 10,
  children: 'Chip',
  borderwidth: 1,
  fontweight: 700,
  leftIcon: CheckIcon,
  rightIcon: CheckIcon,
  backgroundcolor: 'white',
  fontcolor: 'black',
  bordercolor: 'grey',
};

export default {
  title: 'Carehouse/Atoms/Chip',
  component: chip,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
    marginFromIcon: {
      control: {
        type: 'number',
      },
    },
    height: {
      control: {
        type: 'inline-radio',
      },
      options: [32, 36, 40, 48],
    },
    borderwidth: {
      control: {
        type: 'inline-radio',
      },
      options: [1, 0],
    },
    fontweight: {
      control: {
        type: 'inline-radio',
      },
      options: [400, 500, 600, 700],
    },
    cursor: {
      control: {
        type: 'inline-radio',
      },
      options: ['default', 'pointer'],
    },
    borderradius: {
      control: {
        type: 'inline-radio',
      },
      options: [0, 4, 6, 8, 40],
    },
    backgroundcolor: {
      control: {
        type: 'inline-radio',
      },
      options: ['white', 'black'],
    },
    fontcolor: {
      control: {
        type: 'inline-radio',
      },
      options: ['white', 'black'],
    },
    bordercolor: {
      control: {
        type: 'inline-radio',
      },
      options: ['grey', 'primary'],
    },
  },
};
