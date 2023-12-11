import React, { useState } from 'react';
import { useFormik } from 'formik';

const Routines = () => {
  // Estado para almacenar la lista de hábitos
  const [habits, setHabits] = useState([]);
  // Estado para almacenar el hábito actualmente seleccionado
  const [selectedHabit, setSelectedHabit] = useState(null);

  // Configuración de Formik para crear hábito
  const createHabitFormik = useFormik({
    initialValues: {
      habitTitle: '',
    },
    onSubmit: (values, { resetForm }) => {
      const newHabit = {
        title: values.habitTitle,
        tasks: [],
      };
      setHabits([...habits, newHabit]);
      resetForm();
    },
  });

  // Configuración de Formik para agregar tarea a hábito
  const addTaskFormik = useFormik({
    initialValues: {
      taskDescription: '',
      completed: false,
    },
    onSubmit: (values, { resetForm }) => {
      if (selectedHabit !== null) {
        const updatedHabits = [...habits];
        const habit = updatedHabits[selectedHabit];
        habit.tasks.push({
          description: values.taskDescription,
          completed: values.completed,
        });
        setHabits(updatedHabits);
        resetForm();
      }
    },
  });

  // Función para borrar un hábito
  const deleteHabit = (index) => {
    const updatedHabits = [...habits];
    updatedHabits.splice(index, 1);
    setHabits(updatedHabits);
    // Si el hábito eliminado es el que está seleccionado, limpiar la selección
    if (selectedHabit === index) {
      setSelectedHabit(null);
    }
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Rutinas</h1>

      {/* Crear hábito */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Crear Hábito</h2>
        <form onSubmit={createHabitFormik.handleSubmit}>
          <input
            type="text"
            name="habitTitle"
            placeholder="Ingrese el título del hábito"
            onChange={createHabitFormik.handleChange}
            onBlur={createHabitFormik.handleBlur}
            value={createHabitFormik.values.habitTitle}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Crear Nuevo Hábito
          </button>
        </form>
      </div>

      {/* Agregar tarea a un hábito */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Agregar Tarea a Hábito</h2>
        <select
          value={selectedHabit !== null ? selectedHabit : ''}
          onChange={(e) =>
            setSelectedHabit(e.target.value !== '' ? parseInt(e.target.value) : null)
          }
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Selecciona un hábito</option>
          {habits.map((habit, index) => (
            <option key={index} value={index}>
              {habit.title}
            </option>
          ))}
        </select>
        <form onSubmit={addTaskFormik.handleSubmit}>
          <input
            type="text"
            name="taskDescription"
            placeholder="Descripción de la tarea"
            onChange={addTaskFormik.handleChange}
            onBlur={addTaskFormik.handleBlur}
            value={addTaskFormik.values.taskDescription}
            className="border border-gray-300 rounded px-2 py-1"
          />
          <label className="ml-2">
            <input
              type="checkbox"
              name="completed"
              onChange={addTaskFormik.handleChange}
              checked={addTaskFormik.values.completed}
            />
            Completada
          </label>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          >
            Agregar Tarea
          </button>
        </form>
      </div>

      {/* Borrar hábito */}
      <div className="mb-4">
        <h2 className="text-lg font-bold mb-2">Borrar Hábito</h2>
        <select
          value={selectedHabit !== null ? selectedHabit : ''}
          onChange={(e) =>
            setSelectedHabit(e.target.value !== '' ? parseInt(e.target.value) : null)
          }
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="">Selecciona un hábito</option>
          {habits.map((habit, index) => (
            <option key={index} value={index}>
              {habit.title}
            </option>
          ))}
        </select>
        <button
          onClick={() => deleteHabit(selectedHabit)}
          className="bg-red-500 text-white px-4 py-2 rounded ml-2"
        >
          Borrar Hábito
        </button>
      </div>

      {/* Mostrar hábitos y tareas */}
      <div>
        <h2 className="text-lg font-bold mb-2">Hábitos</h2>
        <ul>
          {habits.map((habit, index) => (
            <li key={index}>
              <strong>{habit.title}</strong>
              <ul>
                {habit.tasks.map((task, taskIndex) => (
                  <li key={taskIndex}>
                    {task.description} - {task.completed ? 'Completada' : 'Pendiente'}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export  {Routines};
