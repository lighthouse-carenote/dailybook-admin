import React from 'react';
import Modal, { ModalProps } from './Modal';
import { Story } from '@storybook/react';

const ModalComponent: Story<ModalProps> = (props) => <Modal {...props} />;

export const modal = ModalComponent.bind({});

modal.args = {
  width: 478,
  height: 360,
  margin: 40,
  btnWidth: 398,
  btnHeight: 56,
  btnRadius: 6,
  btnChildren: '버튼',
  titleChildren: 'Title',
  contentsChildren: 'contents',
};

export default {
  title: 'Carehouse/Molecules/Modal',
  component: modal,
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
    margin: {
      control: {
        type: 'number',
      },
    },
    btnWidth: {
      control: {
        type: 'number',
      },
    },
    btnHeight: {
      control: {
        type: 'number',
      },
    },
    btnRadius: {
      control: {
        type: 'number',
      },
    },
    btnChildren: {
      control: {
        type: 'text',
      },
    },
    titleChildren: {
      control: {
        type: 'text',
      },
    },
    contentsChildren: {
      control: {
        type: 'text',
      },
    },
  },
};
