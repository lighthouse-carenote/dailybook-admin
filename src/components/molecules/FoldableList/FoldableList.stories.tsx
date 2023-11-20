import React from 'react';
import FoldableList, { FoldableListProps } from './FoldableList';
import { Story } from '@storybook/react';
import arrowDownBlackThinIcon from '~/assets/icons/arrow_down_black_thin.svg';
import minusIcon from '~/assets/icons/minus_icon.svg';

const FoldableListComponent: Story<FoldableListProps> = (props) => <FoldableList {...props} />;

export const foldableList = FoldableListComponent.bind({});

foldableList.args = {
  width: 400,
  height: 56,
  titleText: '타이틀이야아',
  itemVisible: true,
  items: [
    { id: 1, value: '아이템1' },
    { id: 2, value: '아이템2' },
    { id: 3, value: '아이템3' },
  ],
  iconOnTitleRight: arrowDownBlackThinIcon,
  iconOnItemLeft: minusIcon,
  divideLineBetween: false,
};

export default {
  title: 'Carehouse/Molecules/Foldable List',
  component: foldableList,
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
    titleText: {
      control: {
        type: 'text',
      },
    },
    itemVisible: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
    divideLineBetween: {
      control: {
        type: 'inline-radio',
      },
      options: [true, false],
    },
  },
};
