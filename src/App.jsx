
import React, { useState, useEffect } from 'react';
import NewTaskForm from './components/NewTaskForm/NewTaskForm';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';

import './index.css';



export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text,
      completed: false,
      createdAt: new Date(),
      timeSpent: 0,
      isRunning: false,
      startTime: null
    };
    setTasks([newTask, ...tasks]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    const now = Date.now();
    setTasks(
      tasks.map(task => {
        if (task.id === id) {
          let updatedTimeSpent = task.timeSpent;
  
     
          if (task.isRunning) {
            updatedTimeSpent += Math.floor((now - task.startTime) / 1000);
          }
  
          return {
            ...task,
            completed: !task.completed,
            timeSpent: updatedTimeSpent,
            isRunning: false,
            startTime: null
          };
        }
        return task;
      })
    );
  };

  const startTimer = (id) => {
    const now = Date.now();
    setTasks(
      tasks.map(task => {
        if (task.id === id && !task.completed && !task.isRunning) {
          return {
            ...task,
            isRunning: true,
            startTime: now
          };
        }
        return task;
      })
    );
  };

  const stopTimer = (id) => {
    const now = Date.now();
    setTasks(
      tasks.map(task => {
        if (task.id === id && task.isRunning) {
          return {
            ...task,
            timeSpent:
              task.timeSpent + Math.floor((now - task.startTime) / 1000),
            isRunning: false,
            startTime: null
          };
        }
        return task;
      })
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTasks(prevTasks =>
        prevTasks.map(task => {
          if (task.isRunning && !task.completed) {
            const elapsed = Math.floor((Date.now() - task.startTime) / 1000);
            return {
              ...task,
              timeSpent: task.timeSpent + elapsed,
              startTime: Date.now()
            };
          }
          return task;
        })
      );
    }, 1000);
  
    return () => clearInterval(interval);
  }, [tasks]);

  const filteredTasks = filter === 'active'
    ? tasks.filter(task => !task.completed)
    : filter === 'completed'
    ? tasks.filter(task => task.completed)
    : tasks;

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <NewTaskForm onAdd={addTask} />
      </header>

      <section className="main">
        <TaskList
          tasks={filteredTasks}
          onDelete={deleteTask}
          onToggle={toggleTask}
          onStart={(id) => startTimer(id)}
          onStop={(id) => stopTimer(id)}
        />
      </section>

      <Footer
        tasks={tasks}
        currentFilter={filter}
        onSetFilter={setFilter}
      />
    </section>
  );
}