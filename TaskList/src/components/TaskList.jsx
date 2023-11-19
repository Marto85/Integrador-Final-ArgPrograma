import React from 'react';
import TaskItem from '../components/TaskItem';

const TaskList = ({ tasks, completarTask, borrarTask, editarTask }) => {
  return (
    <>
    <div className="task-list-container">
      <h2>Lista de Tareas</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} completarTask={completarTask} borrarTask={borrarTask} editarTask={editarTask}/>
      ))}
    </div>
    <div className="task-legend-container">
        <div className="legend-item low">Baja Prioridad</div>
        <div className="legend-item normal">Normal Prioridad</div>
        <div className="legend-item high">Alta Prioridad</div>
      </div>
    </>
  );
};

export default TaskList;