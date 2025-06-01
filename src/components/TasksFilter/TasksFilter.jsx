
import React from 'react';


export default function TasksFilter({ currentFilter, onSetFilter }) {
  return (
    <ul className="filters">
      <li>
        <button
          className={currentFilter === 'all' ? 'selected' : ''}
          onClick={() => onSetFilter('all')}
        >
          All
        </button>
      </li>
      <li>
        <button
          className={currentFilter === 'active' ? 'selected' : ''}
          onClick={() => onSetFilter('active')}
        >
          Active
        </button>
      </li>
      <li>
        <button
          className={currentFilter === 'completed' ? 'selected' : ''}
          onClick={() => onSetFilter('completed')}
        >
          Completed
        </button>
      </li>
    </ul>
  );
}