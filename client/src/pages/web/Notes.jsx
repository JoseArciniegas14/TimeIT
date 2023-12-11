// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Bar } from "../../components/app/Home/Bar-Home";
import { Box } from "../../components/app/Home/Box-Home";

// Esquema de validación Yup para las notas
const noteSchema = Yup.object().shape({
  title: Yup.string().required('El título es obligatorio'),
  content: Yup.string().required('El contenido es obligatorio'),
});

// Componente de Notes
const Notes = () => {
  // Estado para almacenar la lista de notas
  const [notes, setNotes] = useState([]);
  // Estado para almacenar la nota actualmente seleccionada para editar
  const [selectedNote, setSelectedNote] = useState(null);

  // Configuración de Formik
  const formik = useFormik({
    initialValues: {
      title: '',
      content: '',
    },
    validationSchema: noteSchema,
    onSubmit: (values, { resetForm }) => {
      if (selectedNote !== null) {
        // Si hay una nota seleccionada, actualiza la nota existente
        const updatedNotes = [...notes];
        updatedNotes[selectedNote] = values;
        setNotes(updatedNotes);
        setSelectedNote(null);
      } else {
        // Si no hay una nota seleccionada, agrega una nueva nota
        setNotes([...notes, values]);
      }
      // Limpia el formulario después de agregar/editar una nota
      resetForm();
    },
  });

  // Función para editar una nota
  const editNote = (index) => {
    setSelectedNote(index);
    formik.setValues(notes[index]);
  };

  // Función para eliminar una nota
  const deleteNote = (index) => {
    const updatedNotes = [...notes];
    updatedNotes.splice(index, 1);
    setNotes(updatedNotes);
    // Si la nota eliminada es la que se está editando, limpia el formulario
    if (selectedNote === index) {
      formik.resetForm();
      setSelectedNote(null);
    }
  };

  return (
<div className='nuevo-diseo-inicio'>
    <div className="container mx-auto  h-screen bg-neutral-950  border border-gray-500">
    <Bar />
      <div className='h-16 left-0 top-0 w-60 mt-20'>
      <h1 className='text-white'>Notas</h1>
      <form onSubmit={formik.handleSubmit} className="w-full max-w-sm ">
        <div className="mb-4">
          <label htmlFor="title" className="block text-white text-sm font-bold mb-2">
            Título:
          </label>
          <input
            id="title"
            name="title"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.title && formik.errors.title ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.title}</div>
          ) : null}
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-white text-sm font-bold mb-2">
            Contenido:
          </label>
          <textarea
            id="content"
            name="content"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.content}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          {formik.touched.content && formik.errors.content ? (
            <div className="text-red-500 text-xs mt-1">{formik.errors.content}</div>
          ) : null}
        </div>
        
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          {selectedNote !== null ? 'Editar' : 'Agregar'}
        </button>
      </form>
      </div>
      <ul>
    {notes.map((note, index) => (
      <li key={index} className="mb-4 ml-5 bg-gray-900 rounded-lg h-auto left-0 top-0 w-auto mt-20" >
        <strong className="text-lg font-bold text-white">{note.title}</strong>: <p className='text-white'>{note.content}{' '}</p>
        <button
          onClick={() => editNote(index)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2 focus:outline-none focus:shadow-outline"
        >
          Editar
        </button>{' '}
        <button
          onClick={() => deleteNote(index)}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Eliminar
        </button>
      </li>
    ))}
  </ul>
</div>
</div>
  );
};

export {Notes};
