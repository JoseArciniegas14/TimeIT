import React, { useState, useEffect, useRef } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { gsap } from 'gsap';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const noteRef = useRef(null);

  useEffect(() => {
    gsap.from(noteRef.current, { opacity: 0, y: -50, duration: 0.5 });
  }, [notes]);

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleEditNote = (note) => {
    const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    gsap.to(noteRef.current, { opacity: 0, y: -50, duration: 0.5, onComplete: () => {
      const updatedNotes = notes.filter((note) => note.id !== noteId);
      setNotes(updatedNotes);
      setSelectedNote(null);
    }});
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="flex h-screen bg-neutral-950 p-5">
      {/* Left side: Note List */}
      <div className="flex-1 p-4 border-r">
        <h2 className="text-2xl font-bold text-white ml-10 mt-10">Notas</h2>
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => handleSelectNote(note)}
              className="cursor-pointer mb-4 ml-5 bg-custom-gray rounded-lg h-44 left-0 top-0 mt-20 text-white font-medium w-2/6 p-4"
              ref={noteRef}
            >
              {note.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Note Form (Create/Edit) */}
      <div className="flex-1 p-4 text-center text-white">
        <h2 className="text-2xl font-bold text-white">{selectedNote ? 'Editar Nota' : 'Crear Nota'}</h2>
        <Formik
          initialValues={{
            id: selectedNote ? selectedNote.id : Date.now(),
            title: selectedNote ? selectedNote.title : '',
            content: selectedNote ? selectedNote.content : '',
          }}
          onSubmit={(values) => {
            if (selectedNote) {
              handleEditNote(values);
            } else {
              handleAddNote(values);
            }
          }}
        >
          <Form>
            <div className="mb-4 ">
              <label className="block text-white text-md">Título:</label>
              <Field type="text" name="title" className="w-4/6 mb-2 p-2 rounded-lg" />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block">Contenido:</label>
              <Field as="textarea" name="content" className="w-4/6 mb-2 p-2 rounded-lg" />
              <ErrorMessage name="content" component="div" className="text-red-500" />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
              >
                {selectedNote ? 'Guardar' : 'Crear'}
              </button>
              {selectedNote && (
                <button 
                  type="button"
                  onClick={() => handleDeleteNote(selectedNote.id)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4"
                >
                  Borrar
                </button>
              )}
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export { Notes };
