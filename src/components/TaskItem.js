import React, { useState } from 'react';
import CustomButton from './CustomButton';

function TaskItem({ task, deleteTask, toggleTask, editTask }) {
  const [showDetails, setShowDetails] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);
  const [editedDetails, setEditedDetails] = useState(task.details);
  const [editedDueDate, setEditedDueDate] = useState(task.dueDate);

  const handleSave = () => {
    editTask(task.id, {
      title: editedTitle,
      details: editedDetails,
      dueDate: editedDueDate
    });
    setIsEditing(false);
  };

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <>
          <div className="task-column">
            <input value={editedTitle} onChange={(e) => setEditedTitle(e.target.value)} />
            <textarea value={editedDetails} onChange={(e) => setEditedDetails(e.target.value)} />
          </div>
          <div className="task-column">
            <input type="date" value={editedDueDate} onChange={(e) => setEditedDueDate(e.target.value)} />
          </div>
          <div className="task-column">-</div>
          <div className="task-column task-actions">
            <CustomButton
              label=""
              color="#28a745"
              icon="💾"
              size="small"
              onClick={handleSave}
            />
            <CustomButton
              label=""
              color="#6c757d"
              icon="❌"
              size="small"
              onClick={() => setIsEditing(false)}
            />
          </div>
        </>
      ) : (
        <>
          <div className="task-column" onClick={() => setShowDetails(!showDetails)}>
            <strong>{task.title}</strong>
            {showDetails && <div className="task-details">{task.details || 'Detay yok'}</div>}
          </div>
          <div className="task-column">{task.dueDate || '-'}</div>
          <div className="task-column">{task.completed ? '✅ Tamamlandı' : '⏳ Bekliyor'}</div>
          <div className="task-column task-actions">
            <CustomButton
              label=""
              icon="✔️"
              color="#28a745"
              size="small"
              onClick={() => toggleTask(task.id)}
            />
            <CustomButton
              label=""
              icon="✏️"
              color="#ffc107"
              size="small"
              onClick={() => setIsEditing(true)}
            />
            <CustomButton
              label=""
              icon="🗑️"
              color="#dc3545"
              size="small"
              onClick={() => deleteTask(task.id)}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default TaskItem;
