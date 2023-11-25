const mongoose = require("mongoose")

// Lo que se mueva aqui se vera reflejado en la base de datos

const AlarmSchema = mongoose.Schema({
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
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
    type: Boolean,
    default: false,
    monday: {
      type: Boolean,
      default: false
    },
    tuesday: {
      type: Boolean,
      default: false
    },
    wednesday: {
      type: Boolean,
      default: false
    },
    thursday: {
      type: Boolean,
      default: false
    },
    friday: {
      type: Boolean,
      default: false
    },
    saturday: {
      type: Boolean,
      default: false
    },
    sunday: {
      type: Boolean,
      default: false
    },
  },
  state: {
    type: Boolean,
    default: false,
    index: true
  }
})

// En implementación
// AlarmSchema.index({ state: 1, execution: 1 }, { name: 'Valide_alarms', partialFilterExpression: { state: true } });
// AlarmSchema.index({ days: 1, })

module.exports = mongoose.model("Alarm", AlarmSchema)


