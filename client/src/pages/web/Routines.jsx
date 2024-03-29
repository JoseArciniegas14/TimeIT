import React, { useState, useEffect, useRef } from 'react';
import { Formik, Field, Form } from 'formik';
import gsap from 'gsap';

const Routines = () => {
  const [habits, setHabits] = useState([]);
  const [selectedHabit, setSelectedHabit] = useState(null); // Nuevo estado para el hábito seleccionado
  const habitRef = useRef(null);

  useEffect(() => {
    gsap.from(habitRef.current, { opacity: 0, y: -20, duration: 0.5 });
  }, [habits]);

  const handleCreateHabit = (values) => {
    const newHabit = { id: Date.now(), title: values.title, description: values.description, tasks: [] };
    setHabits([...habits, newHabit]);
  };

  const handleAddTask = (habitId, values) => {
    const updatedHabits = habits.map((habit) =>
      habit.id === habitId ? { ...habit, tasks: [...habit.tasks, values] } : habit
    );
    setHabits(updatedHabits);
  };

  const handleDeleteHabit = (habitId) => {
    gsap.to(habitRef.current, { opacity: 0, y: -20, duration: 0.5, onComplete: () => {
      const updatedHabits = habits.filter((habit) => habit.id !== habitId);
      setHabits(updatedHabits);
    }});
  };

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
  };

  const handleCloseModal = () => {
    setSelectedHabit(null);
  };

  return (
    <div className="flex h-screen bg-neutral-950 p-5">
      {/* Sección de hábitos en la parte izquierda */}
      <div className="w-2/4 p-4 border-r">
        <h2 className='text-white'>Tus Hábitos</h2>
        <ul>
          {habits.map((habit) => (
            <li
              className='cursor-pointer mb-4 ml-5 bg-custom-gray rounded-lg h-10 w-4/6 left-0 top-0 mt-10 text-white font-medium p-2'
              key={habit.id}
              onClick={() => handleHabitClick(habit)}
              ref={habitRef}>
              {habit.title}
              {habit.description}
            </li>
          ))}
        </ul>
      </div>

      {/* Centro de la pantalla para crear hábito, agregar tarea, etc. */}
      <div className="flex-1 p-4 text-center">
        <h1 className='text-white'>Rutinas</h1>

        {/* Formulario para crear hábito */}
        <Formik initialValues={{ title: '', description: '' }} onSubmit={handleCreateHabit}>
          <Form className='p-5'>
            <h2 className='text-white'>Título</h2>
            <Field type="text" name="title" placeholder="Ingrese el título del hábito" className="w-4/6 mb-2 p-2 rounded-lg" />
            <br />
            <h2 className='text-white'>Descripción</h2>
            <Field type="text" name="description" placeholder="Ingrese la descripción del hábito" className="w-4/6 mb-2 p-2 rounded-lg" />
            <br />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Crear Hábito</button>
          </Form>
        </Formik>

  

        {/* Formulario para borrar hábito */}
        <Formik initialValues={{}} onSubmit={() => handleDeleteHabit(1)}>
          <Form className='p-5'>
     
          </Form>
        </Formik>


         {/* Ventana emergente para mostrar detalles del hábito */}
         {selectedHabit && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-8 rounded">
              <h2 className='text-black'>{selectedHabit.title}</h2>
              <p className='text-black'>{selectedHabit.description}</p>
              <button onClick={() => handleDeleteHabit(selectedHabit.id)} className="bg-red-500 text-white px-4 py-2 rounded ml-5 mr-4">Eliminar Hábito</button>
              <button onClick={handleCloseModal} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Cerrar</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { Routines };
