import React from 'react';
import AddTask from './AddTask';

export default {
  title: 'Components/AddTask',
  component: AddTask,
};

const Template = (args) => <AddTask {...args} />;

export const EmptyForm = Template.bind({});
EmptyForm.args = {
  addTask: (task) => alert(`✅ Eklendi: ${task.title}`)
};
