import React from 'react';

const DragTask = ({ task, onDragStart }) => {
  const handleDragStart = (e) => {
    onDragStart(e, task.id);
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="draggable-task"
    >
      <div className="task-item">
        <div className="task-title">{task.title}</div>
        <div className="task-description">{task.description}</div>
        <div className="task-deadline">Deadline: {task.date}</div>
        <button className="edit-button">Edit</button>
      </div>
    </div>
  );
};

export default DragTask;
