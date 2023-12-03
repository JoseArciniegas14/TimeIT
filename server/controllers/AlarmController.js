const Alarm = require("../models/alarms.model")

async function createAlarm(req, res) {
  try {
    const userId = req.user.userId;
    const { title, execution, state, interval, days, postpone } = req.body;
    const alarm = await Alarm.create({
      userid: userId,
      title,
      execution,
      state,
      postpone,
      interval,
      days
    });

    const filteredAlarm = {
      id: alarm._id,
      title,
      execution,
      state,
      postpone,
      interval,
      days
    }
    res.status(201).json(filteredAlarm);
  } catch (error) {
    res.status(500).send({ msg: "Error al registrar alarma" });
  }
}

async function updateAlarm(req, res) {
  try {
    const userId = req.user.userId;
    const { alarmId, title, execution, state, interval, days, postpone } = req.body;

    const updatedAlarm = await Alarm.findByIdAndUpdate(
      { _id: alarmId, userid: userId },
      { title, execution, state, interval, days, postpone },
      { new: true }
    );

    if (!updatedAlarm) {
      return res.status(404).send({ msg: "La alarma no fue encontrada" });
    }

    const filteredAlarm = {
      title: updatedAlarm.title,
      execution: updatedAlarm.execution,
      state: updatedAlarm.state,
      interval: updatedAlarm.interval,
      days: updatedAlarm.days,
    };

    res.status(200).json(filteredAlarm);
  } catch (error) {
    res.status(500).send({ msg: "Error al actualizar la alarma" });
  }
}

async function deleteAlarms(req, res) {
  try {
    const userId = req.user.userId;
    const { alarmIds } = req.body;

    if (!Array.isArray(alarmIds)) {
      return res.status(400).send({ msg: "La lista de Ids de alarmas no es valida" });
    }

    const result = await Alarm.deleteMany({ userid: userId, _id: { $in: alarmIds } });

    if (result.deletedCount > 0) {
      return res.status(200).send({ msg: "Alarmas eliminadas correctamente" });
    } else {
      return res.status(404).send({ msg: "No se encontraron alarmas" });
    }
  } catch (error) {
    res.status(500).send({ msg: "Error al eliminar alarmas" });
  }
}


// LLAMAR DESDE EL FRONT DESDE LA PAGINA DE INICIO
async function getAllAlarms(req, res) {
  try {
    const userId = req.user.userId;
    const alarms = await Alarm.find({ userid: userId });

    if (alarms.length > 0) {
      const filteredAlarms = alarms.map(alarm => ({
        _id: alarm._id,
        title: alarm.title,
        execution: alarm.execution,
        state: alarm.state,
        interval: alarm.interval,
        days: alarm.days,
      }));

      if (alarms.length > 0) {
        return res.status(200).json(filteredAlarms);
      } else {
        return res.status(404).send({ msg: "El usuario no tiene alarmas asociadas" });
      }
    }
  } catch (error) {
    return res.status(500).send({ msg: "Error al obtener las alarmas del usuario" });
  }
}


module.exports = {
  createAlarm,
  deleteAlarms,
  updateAlarm,
  getAllAlarms,
}
