import React from 'react';
import CustomButton from './CustomButton';

export default {
  title: 'Components/CustomButton',
  component: CustomButton,
  argTypes: {
    label: { control: 'text' },
    color: { control: 'color' },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    icon: { control: 'text' },
    onClick: { action: 'clicked' }
  }
};

const Template = (args) => <CustomButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Görev Ekle',
  color: '#007bff',
  size: 'medium',
  icon: '➕'
};
