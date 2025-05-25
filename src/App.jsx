import React from 'react';
import { useState } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date()
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const saveTask = (id, newText) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  let filteredTasks = tasks;
  if (filter === 'active') {
    filteredTasks = tasks.filter(task => !task.completed);
  } else if (filter === 'completed') {
    filteredTasks = tasks.filter(task => task.completed);
  }

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={addTask} />
      </header>

      <section className="main">
        <TaskList tasks={filteredTasks} onDelete={deleteTask} onToggle={toggleTask} onEdit={saveTask} />
      </section>

      <Footer
        tasks={tasks}
        currentFilter={filter}
        onSetFilter={setFilter}
        onClearCompleted={clearCompleted}
      />
    </section>
  );
}

export default App;