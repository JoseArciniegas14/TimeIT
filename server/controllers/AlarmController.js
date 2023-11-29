const Alarm = require("../models/alarms.model")
const cron = require('node-cron');

async function createAlarm(req, res) {
  try {
    const userId = req.user.userId;
    const { title, execution, state, interval, days, postpone } = req.body;
    const alarm = await Alarm.create({ userid: userId, title, execution, state, postpone, interval, days, });

    res.status(201).send({ msg: "alarma creada con exito" });
  } catch (error) {
    console.error(error);
    console.log(error);
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

    res.status(200).send({ msg: "Alarma actualizada correctamente" });
  } catch (error) {
    console.error(error);
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
    console.error(error);
    res.status(500).send({ msg: "Error al eliminar alarmas" });
  }
}

// LLAMAR DESDE EL FRONT DESDE LA PAGINA DE INICIO
async function getAllAlarms(req, res) {
  try {
    const userId = req.user.userId;
    console.log();

    const alarms = await Alarm.find({ userid: userId });

    const renderInfo = {
      "_id": "6566fe59e7f951b1412d9219",
      "title": "Nombre de la Alarma 5",
      "execution": "2023-11-30T12:00:00.000Z",

      "days": {
        "monday": true,
        "tuesday": false,
        "wednesday": true,
        "thursday": false,
        "friday": true,
        "saturday": false,
        "sunday": true
      },

      "interval": {
        "time": 0,
        "count": 0
      },

      "postpone": 0,

      "state": true,
    }

    if (alarms.length > 0) {
      return res.status(200).json(renderInfo);
    } else {
      return res.status(404).json({ msg: "El usuario no tiene alarmas asociadas." });
    }
  } catch (error) {
    console.error('Error al obtener las alarmas del usuario:', error);
    return res.status(500).json({ msg: "Error al obtener las alarmas del usuario." });
  }
}


// En implementacion++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const checkAlarms = async () => {
  try {
    const currentDateTime = new Date();

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
  getAllAlarms,
}
