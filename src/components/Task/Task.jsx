import { useState } from 'react';
import React from 'react';
import './Task.module.css';
import { formatDistanceToNow } from 'date-fns';



function formatTime(seconds) {
  const mins = String(Math.floor(seconds / 60)).padStart(2, '0');
  const secs = String(seconds % 60).padStart(2, '0');
  return `${mins}:${secs}`;
}

export default function Task({ task, onDelete, onToggle, onStart, onStop }) {
  const [timeAgo] = useState(
    formatDistanceToNow(new Date(task.createdAt), { addSuffix: true })
  );

  const handleComplete = () => {
    if (task.isRunning) onStop(task.id); 
    onToggle(task.id);
  };

  return (
    <li className={task.completed ? 'completed' : ''}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={handleComplete}
        />
        <label>
          <span className="title">{task.text}</span>
          <span className="description">
            {!task.completed ? (
              <>
                <button
                  className="icon icon-play"
                  onClick={() => onStart(task.id)}
                  type="button"
                ></button>
                <button
                  className="icon icon-pause"
                  onClick={() => onStop(task.id)}
                  type="button"
                ></button>
              </>
            ) : null}
            {formatTime(task.timeSpent)}
          </span>
          <span className="description">created {timeAgo}</span>
        </label>
        <button className="icon icon-edit"></button>
        <button className="icon icon-destroy" onClick={() => onDelete(task.id)}></button>
      </div>
    </li>
  );
}