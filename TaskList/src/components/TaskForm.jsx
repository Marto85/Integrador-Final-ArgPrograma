import React, { useState } from 'react';

const TaskForm = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleInputChange = (e) => {
    setTaskName(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const generateUniqueId = () => {
    const date = new Date();
    const uniqueId = `${date.getFullYear()}${date.getMonth()}${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}${Math.floor(Math.random() * 1000)}`;
    return uniqueId;
  };

  const handleAddTask = () => {
    if (taskName.trim() !== '') {
      onAddTask({
        id: generateUniqueId(),
        name: taskName,
        completed: false,
        priority: priority,
      });
      setTaskName('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <>
    <div className="task-form-container">
      <h2>Agregar Tarea</h2>
      <input type="text" value={taskName} onChange={handleInputChange} onKeyDown={handleKeyPress} placeholder="Ingrese su tarea" />
      <label>
        Prioridad:
        <select value={priority} onChange={handlePriorityChange}>
          <option value="low">Baja</option>
          <option value="normal">Normal</option>
          <option value="high">Alta</option>
        </select>
      </label>
      <button onClick={handleAddTask}>Agregar Tarea</button>
    </div>
    </>
  );
};

export default TaskForm;