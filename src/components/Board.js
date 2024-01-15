import React, { useState } from 'react';
import './Board.css';
import AddTaskButton from './AddTaskButton';
import Tasks from './Tasks';

function Board() {
  const [tasks, setTasks] = useState([]);
  const [pendingTasks, setPendingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [closedTasks, setClosedTasks] = useState([]);

  const addTask = (formData) => {
    const newTask = {
      id: tasks.length + 1,
      ...formData,
    };

    setTasks([...tasks, newTask]);
  };

  return (
    <div className="board">
      <div className="column" id="open-column">
        <h2 className="column-title">OPEN</h2>
        <AddTaskButton onTaskCreate={addTask} />
        <Tasks tasks={tasks} columnId="open-list" />
      </div>

      <div className="column" id="pending-column">
        <h2 className="column-title">PENDING</h2>
        <Tasks tasks={pendingTasks} columnId="pending-list" />
      </div>

      <div className="column" id="completed-column">
        <h2 className="column-title">COMPLETED</h2>
        <Tasks tasks={completedTasks} columnId="completed-list" />
      </div>

      <div className="column" id="closed-column">
        <h2 className="column-title">CLOSED</h2>
        <Tasks tasks={closedTasks} columnId="closed-list" />
      </div>
    </div>
  );
}

export default Board;
