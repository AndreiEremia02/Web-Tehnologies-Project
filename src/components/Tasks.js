import React from 'react';
import './Tasks.css';

function Tasks({ tasks, columnId }) {
  return (
    <div className={`task-list ${columnId}`}>
      {tasks.map((task) => (
        <div key={task.id} className="task-item">
          <div className="task-title">{task.title}</div>
          <div className="task-description">{task.description}</div>
          <div className="task-deadline">Deadline: {task.date}</div>
          <button className="edit-button">Edit</button>
        </div>
      ))}
    </div>
  );
}

export default Tasks;
