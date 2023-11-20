import React from 'react';
import FileColumn, { FileColumnProps } from './FileColumn';
import { Story } from '@storybook/react';

const FileColumnComponent: Story<FileColumnProps> = (props) => <FileColumn {...props} />;

export const fileColumn = FileColumnComponent.bind({});

fileColumn.args = {
  width: 400,
  height: 100,
  fileExt: 'JPEG',
  fileName: 'file_name_im_ni_dang.jpeg',
};

export default {
  title: 'Carehouse/molecules/File Column',
  component: fileColumn,
  argTypes: {},
};
