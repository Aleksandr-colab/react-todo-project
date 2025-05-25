import React from 'react';
import Task from '../Task/Task';
import './TaskList.module.css';

export default function TaskList({ tasks, onDelete, onToggle, onEdit }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onSave={onEdit}
        />
      ))}
    </ul>
  );
}