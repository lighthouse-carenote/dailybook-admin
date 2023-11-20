import React from 'react';
import List, { ListProps } from './List';
import { Story } from '@storybook/react';

const ListComponent: Story<ListProps> = (props) => <List {...props} />;

export const list = ListComponent.bind({});

list.args = {
  width: 400,
  height: 86,
  titleChildren: 'Title',
  contentsChildren: 'Contents',
};

export default {
  title: 'Carehouse/Atoms/List',
  component: list,
  argTypes: {},
};
