import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';
import './Footer.module.css';

export default function Footer({ tasks, currentFilter, onSetFilter, onClearCompleted }) {
  const activeCount = tasks.filter(t => !t.completed).length;

  return (
    <footer className="footer">
      <span className="todo-count">{activeCount} item{activeCount !== 1 ? 's' : ''} left</span>
      <TasksFilter currentFilter={currentFilter} onSetFilter={onSetFilter} />
      <button className="clear-completed" onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}