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

    res.status(200).send({ msg: "Alarma actualizada correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Error al actualizar la alarma" });
  }
}



// En implementacion++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const checkAlarms = async () => {
  try {
    const currentDateTime = new Date();

    // Consultar las alarmas activas cuyo momento de ejecución haya llegado
    const alarms = await Alarm.find({ state: true, execution: { $lte: currentDateTime } });

    // Procesar las alarmas que deben sonar ahora
    alarms.forEach(async (alarm) => {
      console.log(`¡La alarma "${alarm.title}" debe sonar ahora!`);

      // Puedes enviar un mensaje al frontend aquí
      // Utiliza sockets, eventos o alguna otra forma de comunicación con el frontend
      // Por ejemplo, puedes usar un WebSocket para enviar la información al frontend
      // y luego el frontend maneja la lógica de activar la alarma visual o auditivamente.
      // También puedes enviar una notificación al frontend mediante alguna otra API o
      // utilizar un servicio de notificaciones en tiempo real.
    });
  } catch (error) {
    console.error('Error al consultar y procesar las alarmas:', error);
  }
};





module.exports = {
  createAlarm,
  deleteAlarms,
  updateAlarm,
}
