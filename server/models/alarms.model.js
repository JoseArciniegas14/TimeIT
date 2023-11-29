const mongoose = require("mongoose")

// Lo que se mueva aqui se vera reflejado en la base de datos

const AlarmSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: {
    type: String
  },
  execution: {
    type: Date,
    required: true,
    index: true
  },
  postpone: {
    type: Number,
    default: 0
  },
  interval: {
    time: {
      type: Number,
      default: 0,
    },
    count: {
      type: Number,
      default: 0
    }
  },
  days: {
    monday: {
      type: Boolean,
      index: true,
      default: false
    },
    tuesday: {
      type: Boolean,
      index: true,
      default: false
    },
    wednesday: {
      type: Boolean,
      index: true,
      default: false
    },
    thursday: {
      type: Boolean,
      index: true,
      default: false
    },
    friday: {
      type: Boolean,
      index: true,
      default: false
    },
    saturday: {
      type: Boolean,
      index: true,
      default: false
    },
    sunday: {
      type: Boolean,
      index: true,
      default: false
    },
  },
  state: {
    type: Boolean,
    default: false,
    index: true
  }
})

AlarmSchema.index({ state: 1, execution: 1 }, { name: 'Valide_alarms', partialFilterExpression: { state: true } });
AlarmSchema.index({ state: 1, execution: 1, "days.monday": 1, "days.tuesday": 1, "days.wednesday": 1, "days.thursday": 1, "days.friday": 1, "days.saturday": 1, "days.sunday": 1, }, { name: 'Day_ Alarms' });

module.exports = mongoose.model("Alarm", AlarmSchema)


