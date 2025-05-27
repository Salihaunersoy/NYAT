import React from 'react';
import TaskList from './TaskList';

export default {
  title: 'Components/TaskList',
  component: TaskList,
};

const Template = (args) => <TaskList {...args} />;

export const FilledList = Template.bind({});
FilledList.args = {
  tasks: [
    {
      id: 1,
      title: 'Kitap Oku',
      details: '20 sayfa oku',
      dueDate: '2025-06-10',
      completed: false
    },
    {
      id: 2,
      title: 'Sunum Hazırla',
      details: 'Hocaya anlatılacak',
      dueDate: '2025-06-12',
      completed: true
    }
  ],
  toggleTask: (id) => alert(`✔️ Tamamlandı: ${id}`),
  deleteTask: (id) => alert(`🗑️ Silindi: ${id}`),
  editTask: (id, data) => alert(`✏️ Düzenlendi: ${id} | ${JSON.stringify(data)}`)
};
