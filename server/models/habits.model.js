const mongoose = require("mongoose");

const habitSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  tasks: [{
    description: String,
    completed: {
      type: Boolean,
      default: false
    }
  }],
  completionPercentage: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Habit", habitSchema);
