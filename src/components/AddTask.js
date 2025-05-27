import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    addTask({ title, details, dueDate });
    setTitle('');
    setDetails('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <label>Başlık:</label>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>Detaylar:</label>
      <textarea value={details} onChange={(e) => setDetails(e.target.value)} />
      <label>Tamamlanma Tarihi:</label>
      <input type="date" value={dueDate} onChange={(e) => setDueDate(e.target.value)} />
      <button type="submit">Ekle</button>
    </form>
  );
}

export default AddTask;
