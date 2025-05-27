import React from 'react';
import EmptyState from './EmptyState';

export default {
  title: 'Components/EmptyState',
  component: EmptyState,
};

const Template = (args) => <EmptyState {...args} />;

export const Varsayilan = Template.bind({});
Varsayilan.args = {
  message: 'Görev bulunamadı. Yeni bir tane ekleyin!'
};
