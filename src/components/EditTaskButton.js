// EditTaskButton.js
import React, { useState } from 'react';
import './EditTaskButton.css';

function EditTaskButton({ task, columnId, onTaskEdit }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedTask, setEditedTask] = useState({ ...task });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditedTask({ ...task }); // Reset edited task on close
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedTask((prevTask) => ({ ...prevTask, [name]: value }));
  };

  const handleEditTask = () => {
    console.log('Edited Task:', editedTask); // Log the edited task
    onTaskEdit(editedTask);
    handleCloseModal();
  };
  
  return (
    <div className="edit-button-container">
      <button className="edit-button" onClick={handleOpenModal}>
        Edit
      </button>

      {isModalOpen && (
        <div className="edit-modal">
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleInputChange}
          />

          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={editedTask.description}
            onChange={handleInputChange}
          />

          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={editedTask.date}
            onChange={handleInputChange}
          />

          <div className="button-container">
            <button className="button" onClick={handleEditTask}>
              Save Changes
            </button>
            <button className="button" onClick={handleCloseModal}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditTaskButton;
