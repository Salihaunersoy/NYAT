import React from 'react';

function EmptyState({ message }) {
  return (
    <div className="empty-state">
      <p>{message || 'Henüz görev yok 😴'}</p>
    </div>
  );
}

export default EmptyState;
