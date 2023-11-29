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

    res.status(201).json(note);
  } catch (error) {
    res.status(500).send({ msg: "Error al registrar Nota" });
  }
}

async function updateNote(req, res) {
  try {
    const userId = req.user.userId
    const { noteId, title, content, alarm } = req.body
    const htmlContent = marked(content)

    const updateNote = await Note.findByIdAndUpdate(
      { _id: noteId, userid: userId },
      { title, content, alarm, markdownContent: htmlContent },
      { new: true }
    )

    if (!updateNote) {
      return res.status(404).send({ msg: "La nota no fue encontrada" });
    }

    res.status(201).json(updateNote);
  } catch (error) {
    console.log(error);
    res.status(500).send({ msg: "Error al registrar nota" });
  }
}

module.exports = {
  createNote,
  updateNote,
}