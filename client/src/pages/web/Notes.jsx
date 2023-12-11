import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleAddNote = (note) => {
    setNotes([...notes, note]);
  };

  const handleEditNote = (note) => {
    const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
    setSelectedNote(null);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

  return (
    <div className="flex h-screen bg-neutral-950 p-5">
      {/* Left side: Note List */}
      <div className="flex-1 p-4 border-r">
        <h2 className="text-2xl font-bold text-white ml-10 mt-10">Notes</h2>
        <ul>
          {notes.map((note) => (
            <li
              key={note.id}
              onClick={() => handleSelectNote(note)}
              className="cursor-pointer mb-4 ml-5 bg-custom-gray rounded-lg h-44 left-0 top-0 mt-20 text-white font-medium w-2/6 p-4"
            >
              {note.title}
            </li>
          ))}
        </ul>
      </div>

      {/* Right side: Note Form (Create/Edit) */}
      <div className="flex-1 p-4 text-center text-white">
        <h2 className="text-2xl font-bold text-white">{selectedNote ? 'Edit Note' : 'Create Note'}</h2>
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
            <div className="mb-4">
              <label className="block">Título:</label>
              <Field type="text" name="title" className="border p-2" />
              <ErrorMessage name="title" component="div" className="text-red-500" />
            </div>
            <div className="mb-4">
              <label className="block">Contenido:</label>
              <Field as="textarea" name="content" className="border p-2" />
              <ErrorMessage name="content" component="div" className="text-red-500" />
            </div>
            <div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-2"
              >
                {selectedNote ? 'Save' : 'Create'}
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
