import React, { useState } from 'react';
import './Board.css';
import AddTaskButton from './AddTaskButton';
import Tasks from './Tasks';

function Board() {
  const [tasks, setTasks] = useState([]);

  const addTask = (formData) => {
    const newTask = {
      id: tasks.length + 1,
      columnId: 'open-list',
      ...formData,
    };

    setTasks([...tasks, newTask]);
  };

  const handleDragStart = (e, taskId) => {
    e.dataTransfer.setData('taskId', taskId);
  };

  const handleDragOver = (e, columnId) => {
    e.preventDefault();
  };

  const handleDrop = (taskId, targetColumnId) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === parseInt(taskId, 10)) {
        return { ...task, columnId: targetColumnId };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="board">
      <div className="column" id="open-column">
        <h2 className="column-title">OPEN</h2>
        <AddTaskButton onTaskCreate={addTask} />
        <Tasks
          tasks={tasks.filter((task) => task.columnId === 'open-list')}
          columnId="open-list"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
      <div className="column" id="pending-column">
        <h2 className="column-title">PENDING</h2>
        <Tasks
          tasks={tasks.filter((task) => task.columnId === 'pending-list')}
          columnId="pending-list"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>

      <div className="column" id="completed-column">
        <h2 className="column-title">COMPLETED</h2>
        <Tasks
          tasks={tasks.filter((task) => task.columnId === 'completed-list')}
          columnId="completed-list"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>

      <div className="column" id="closed-column">
        <h2 className="column-title">CLOSED</h2>
        <Tasks
          tasks={tasks.filter((task) => task.columnId === 'closed-list')}
          columnId="closed-list"
          onDragStart={handleDragStart}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        />
      </div>
    </div>
  );
}

export default Board;
