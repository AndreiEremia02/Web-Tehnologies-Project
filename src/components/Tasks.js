import React from 'react';
import DragTask from './DragTask';
import './Tasks.css';

function Tasks({ tasks, columnId, onDragStart, onDragOver, onDrop }) {
  const handleDragOver = (e) => {
    e.preventDefault();
    onDragOver(e, columnId);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData('taskId');
    onDrop(taskId, columnId);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={`task-list ${columnId}`}
    >
      {tasks.map((task) => (
        <DragTask
          key={task.id}
          task={task}
          onDragStart={onDragStart}
        />
      ))}
    </div>
  );
}

export default Tasks;
