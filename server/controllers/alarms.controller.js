const Alarm = require("../models/alarms.model")

async function createAlarm(req, res) {
  try {
    const userId = req.user.userId;
    const { title, execution, state, interval, days, postpone } = req.body;

    const alarm = await Alarm.create({ userid: userId, title, execution, state, postpone, interval, days, });

    res.status(201).send({ alarm });
  } catch (error) {
    console.error(error);
    console.log(error);
    res.status(500).send({ msg: "Error al registrar alarma" });
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
    console.error(error);
    res.status(500).send({ msg: "Error al eliminar alarmas" });
  }
}

// En implementacion+++++++++++++++++++++++++++++++
async function getAlarmId(req, res) {
}



module.exports = {
  createAlarm,
  deleteAlarms,
}
