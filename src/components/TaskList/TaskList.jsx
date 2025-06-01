import React from 'react';
import Task from '../Task/Task';


export default function TaskList({ tasks, onDelete, onToggle, onStart, onStop }) {
  return (
    <ul className="todo-list">
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          onDelete={onDelete}
          onToggle={onToggle}
          onStart={onStart}
          onStop={onStop}
        />
      ))}
    </ul>
  );
}