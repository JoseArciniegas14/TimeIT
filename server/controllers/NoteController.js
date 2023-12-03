const Note = require("../models/notes.model")
const { marked } = require("marked")

async function createNote(req, res) {
  try {
    const userId = req.user.userId
    const { title, content, alarm } = req.body
    const htmlContent = marked(content)

    const note = await Note.create({
      userid: userId,
      alarmid: alarm || null,
      title: title,
      content: content,
      markdownContent: htmlContent
    })

    const filteredNote = {
      _id: note._id,
      alarmid: note.alarmid,
      title: note.title,
      content: content,
      markdownContent: htmlContent
    };

    res.status(201).json(filteredNote);
  } catch (error) {
    res.status(500).send({ msg: "Error al registrar nota" });
  }
}

async function updateNote(req, res) {
  try {
    const userId = req.user.userId;
    const { noteId, title, content, alarm } = req.body;
    const htmlContent = marked(content);

    const updatedNote = await Note.findByIdAndUpdate(
      { _id: noteId, userid: userId },
      { title, content, alarm, markdownContent: htmlContent },
      { new: true }
    );

    if (!updatedNote) {
      return res.status(404).send({ msg: "La nota no fue encontrada" });
    }

    const filteredNote = {
      _id: updatedNote._id,
      alarmid: updatedNote.alarmid,
      title: updatedNote.title,
      markdownContent: htmlContent
    };

    res.status(200).json(filteredNote);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Error al actualizar la nota" });
  }
}


async function getAllNotes(req, res) {
  try {
    const userId = req.user.userId;
    const notes = await Note.find({ userid: userId }).select('-__v');

    if (notes.length > 0) {
      const modifiedNotes = notes.map(note => {
        return {
          _id: note._id,
          title: note.title,
          content: note.content,
          updatedAt: note.updatedAt
        };
      });

      return res.status(200).json(modifiedNotes);
    } else {
      return res.status(404).send({ msg: "Error: el usuario no tiene alarmas asociadas" });
    }
  } catch (error) {
    return res.status(500).send({ msg: "Error al obtener las notas del usuario" });
  }
}


async function deleteNotes(req, res) {
  try {
    const userId = req.user.userId
    const { notesIds } = req.body

    if (!Array.isArray(notesIds)) {
      return res.status(400).send({ msg: "La lista de Ids de notas no es valida" });
    }

    const result = await Note.deleteMany({ userid: userId, _id: { $in: notesIds } })

    if (result.deletedCount > 0) {
      return res.status(200).send({ msg: "Notas eliminadas correctamente" });
    } else {
      return res.status(404).send({ msg: "No se encontraron notas" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar notas" });

  }
}

module.exports = {
  createNote,
  updateNote,
  getAllNotes,
  deleteNotes
}