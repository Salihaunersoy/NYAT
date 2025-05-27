import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTask, editTask }) {
  return (
    <div className="task-list">
      <div className="task-table-header">
        <span>Başlık</span>
        <span>Son Tarih</span>
        <span>Durum</span>
        <span>İşlemler</span>
      </div>
      {tasks.length === 0 ? (
        <p>Görev bulunamadı.</p>
      ) : (
        tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;
