import { useState } from 'react';

const TaskItem = ({ task, completarTask, borrarTask, editarTask }) => {
  const [isEditing, setEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task.name);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleInputChange = (e) => {
    setEditedTask(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setEditedPriority(e.target.value);
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const hadleGuardarEditar = () => {
    if (editedTask.trim() !== '') {
      editarTask(task.id, editedTask, editedPriority);
      setEditing(false);
    }
  };

  const handleCompletarTask = () => {
    completarTask(task.id);
  };

  const handleBorrarTask = () => {
    borrarTask(task.id);
  };

  return (
    <>
    <div className={"task-item-container"}>
      <table className="task-table">
        <tbody>
          <tr>
            {isEditing ? (
              <>
              <td>
                <input type="text" value={editedTask} onChange={handleInputChange} className="edit-input"/>
              </td>
              <td>
                <select value={editedPriority} onChange={handlePriorityChange}>
                  <option value="low">Baja</option>
                  <option value="normal">Normal</option>
                  <option value="high">Alta</option>
                </select>
              </td>
              <td>
                <button className="save-button" onClick={hadleGuardarEditar}>Guardar</button>
              </td>
              </>
            ) : (
              <>
              <td className={`task-name ${task.completed ? 'completed' : ''} ${task.priority}`}>{task.name}</td>
              <td>
                <button className="complete-button" onClick={handleCompletarTask}>Completar</button>
              </td>
              </>
            )}
            <td>
              <button className="delete-button" onClick={handleBorrarTask}>Eliminar</button>
            </td>
            <td>
              {!isEditing && (
                <button className="edit-button" onClick={handleEdit}>Editar</button>
              )}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    </>
  );
};

export default TaskItem;