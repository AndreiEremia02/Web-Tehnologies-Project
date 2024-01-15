// DragTask.js
import React from 'react';
import EditTaskButton from './EditTaskButton';

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
        {/* Use the EditTaskButton instead of the native button */}
        <EditTaskButton
          task={task}
          columnId="open-list"  // You may need to adjust the columnId as needed
          onTaskEdit={(editedTask) => console.log('Handle task edit in DragTask', editedTask)}
        />
      </div>
    </div>
  );
  <EditTaskButton
  task={task}
  columnId="open-list"  // You may need to adjust the columnId as needed
  onTaskEdit={(editedTask) => console.log('Handle task edit in DragTask', editedTask)}
/>
};

export default DragTask;
