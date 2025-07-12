import React, { useState, useEffect } from 'react';
import './Task.module.css';
import { formatDistanceToNow } from 'date-fns';

export default function Task({ task, onDelete, onToggle }) {
  const [timeAgo, setTimeAgo] = useState(
    formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })
  );

  useEffect(() => {
    
    const intervalId = setInterval(() => {
      setTimeAgo(
        formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })
      );
    }, 1000);

    
    return () => clearInterval(intervalId);
  }, [task.createdAt]);

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <label>
          <span className="description">{task.text}</span>
          <span className="created">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button
          className="icon icon-destroy"
          onClick={() => onDelete(task.id)}
        ></button>
      </div>
    </li>
  );
}