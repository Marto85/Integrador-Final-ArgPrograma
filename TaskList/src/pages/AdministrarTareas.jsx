import { useState, useEffect, useCallback } from 'react';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import './AdministrarTareas.css'; 

const AdministrarTareas = () => {
  // const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks, setTasks] = useState([]);
  
  const [onScreen, setOnScreen] = useState([]);
  const [listarTareaActiva, setListarTareaActiva] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const AgregarTarea = ({ onAddTask }) => {
    return (
      <>
      <div>
        <TaskForm onAddTask={onAddTask} />
      </div>
      </>
    );
  };

  const ListarTareas = ({ tasks, completarTask, borrarTask, editarTask }) => {
    return (
      <>
      <div>
        <TaskList tasks={tasks} completarTask={completarTask} borrarTask={borrarTask} editarTask={editarTask} />
      </div>
      </>
    );
  };

  const handleAgregarTarea = (newTask) => {
    setTasks(prevTasks => [...prevTasks, newTask]);
    setSuccessMessage('¡Tarea agregada con éxito!');
    setTimeout(() => {
      setSuccessMessage('');
    }, 2000);
  };

  const handleEditarTask = useCallback((taskId, newName, newPriority) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, name: newName, priority:newPriority } : task));
  }, [tasks]);

  const handleCompletarTask = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleBorrarTask = (taskId) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
  };

  const handleListarTareasClick = () => {
    setListarTareaActiva(true);
    setOnScreen(<ListarTareas tasks={tasks} completarTask={handleCompletarTask} borrarTask={handleBorrarTask} editarTask={handleEditarTask} />);
  };

  const handleAgregarTareaClick = () => {
    setListarTareaActiva(false);
    setOnScreen(<AgregarTarea onAddTask={handleAgregarTarea} />);
  };

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
    setOnScreen(<AgregarTarea onAddTask={handleAgregarTarea} />);
  }, []);
  

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    if (listarTareaActiva) {
      setOnScreen(<ListarTareas tasks={tasks} completarTask={handleCompletarTask} borrarTask={handleBorrarTask} editarTask={handleEditarTask} />);
    }
  }, [tasks, listarTareaActiva, handleEditarTask]);

  return (
    <>
    <div className="task-manager-container">
      <h1>Aplicación de Tareas</h1>
      <nav className="nav-container">
        <ul className="nav-list">
          {listarTareaActiva ? (
            <li><a href="#!" onClick={handleAgregarTareaClick}>Agregar Tarea</a></li>
          ) : (
            <li><a href="#!" onClick={handleListarTareasClick}>Lista de Tareas</a></li>
          )}
        </ul>
      </nav>

      <div className="content-container">
        {onScreen}
        {successMessage && <p className="success-message">{successMessage}</p>}
      </div>
    </div>
    </>
  );
};

export default AdministrarTareas;
