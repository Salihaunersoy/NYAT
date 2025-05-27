import React from 'react';
import TaskItem from './TaskItem';

export default {
  title: 'Components/TaskItem',
  component: TaskItem,
};

const Template = (args) => <TaskItem {...args} />;

export const Varsayilan = Template.bind({});
Varsayilan.args = {
  task: {
    id: 1,
    title: 'Storybook Görevi',
    details: 'Storybook içinde test edilen görev bileşeni',
    dueDate: '2025-06-01',
    completed: false,
  },
  toggleTask: () => alert('✔️ Tamamlandı!'),
  deleteTask: () => alert('🗑️ Silindi!'),
  editTask: () => alert('✏️ Düzenleme kaydedildi!')
};

export const Tamamlanmis = Template.bind({});
Tamamlanmis.args = {
  ...Varsayilan.args,
  task: {
    ...Varsayilan.args.task,
    completed: true,
    title: 'Tamamlanmış Görev',
  }
};
