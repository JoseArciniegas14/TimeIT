const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  alarmId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Alarm"
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Note", noteSchema);
