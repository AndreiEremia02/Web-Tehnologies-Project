import React, { useState } from 'react';
import './AddTaskButton.css';

function AddTaskForm({ onTaskCreate }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({ title: '', description: '', date: '' });
  const [titleError, setTitleError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [dateError, setDateError] = useState('');
  const [isSubmitPressed, setIsSubmitPressed] = useState(false);

  const handleInputChange = (e) => {
    console.log('Input changed:', e.target.value);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateTask = () => {
    console.log('Creating task...');
    setTitleError('');
    setDescriptionError('');
    setDateError('');
    setIsSubmitPressed(true);

    let hasError = false;

    if (!formData.title) {
      setTitleError('Title is required.');
      hasError = true;
    }

    if (!formData.description) {
      setDescriptionError('Description is required.');
      hasError = true;
    }

    if (!formData.date) {
      setDateError('Date is required.');
      hasError = true;
    }

    if (hasError) {
      return;
    }

    onTaskCreate(formData);
    setIsModalOpen(false);
    setFormData({ title: '', description: '', date: '' });
    setIsSubmitPressed(false);
  };

  return (
    <div className="create-task-button">
      <button className="button" id="add-task-button" onClick={() => {
        setIsModalOpen(true)
        console.log(isModalOpen);
      }
       }>
        Add Task
      </button>

      {isModalOpen && (
        <div className="modal" >
          <label>Title:</label>
          <input type="text" name="title" value={formData.title} onChange={handleInputChange} />
          {isSubmitPressed && !formData.title && <div className="error-message">Title is required.</div>}

          <label>Description:</label>
          <input type="text" name="description" value={formData.description} onChange={handleInputChange} />
          {isSubmitPressed && !formData.description && <div className="error-message">Description is required.</div>}

          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleInputChange} />
          {isSubmitPressed && !formData.date && <div className="error-message">Date is required.</div>}

          <div className="button-container">
            <button className="button" id="submit-button" onClick={() => {handleCreateTask()}}>
              Submit
            </button>
            <button className="button" id="cancel-button" onClick={() => setIsModalOpen(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddTaskForm;
