import React, { useEffect, useState } from 'react';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import StatsBar from './components/StatsBar';
import EmptyState from './components/EmptyState';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const API_URL = "http://localhost:3001/tasks";

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setTasks(data))
      .catch(err => console.error("Veri çekme hatası:", err));
  }, []);

  const addTask = (task) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...task, completed: false })
    })
      .then(res => res.json())
      .then(newTask => setTasks(prev => [newTask, ...prev]));
  };

  const deleteTask = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => setTasks(prev => prev.filter(task => task.id !== id)));
  };

  const toggleTask = (id) => {
    const task = tasks.find(t => t.id === id);
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !task.completed })
    })
      .then(res => res.json())
      .then(updated => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updated } : t));
      });
  };

  const editTask = (id, updatedData) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(updated => {
        setTasks(prev => prev.map(t => t.id === id ? { ...t, ...updated } : t));
      });
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'incomplete') return !task.completed;
    return true;
  });

  const completedCount = tasks.filter(task => task.completed).length;

  return (
    <div className="main-container">
      <div className="form-section">
        <h2>📝 Yeni Görev Ekle</h2>
        <AddTask addTask={addTask} />
      </div>
      <div className="list-section">
        <div className="list-header">
          <h2>📋 Görevler</h2>
          <FilterButtons currentFilter={filter} onFilterChange={setFilter} />
          <StatsBar total={tasks.length} completed={completedCount} />
        </div>
        {filteredTasks.length === 0 ? (
          <EmptyState message="Filtreye uyan görev bulunamadı." />
        ) : (
          <TaskList
            tasks={filteredTasks}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            editTask={editTask}
          />
        )}
      </div>
    </div>
  );
}

export default App;
