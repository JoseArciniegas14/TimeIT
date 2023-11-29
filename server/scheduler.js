const cron = require('node-cron');
const Alarm = require("./models/alarms.model");

// Función de verificación de alarmas
async function verificarAlarmas() {
  console.log("Me ejecuto");
  const currentDateTime = new Date();
  const currentDay = DAYS_OF_WEEK[new Date().getDay()];


  const activeAlarms = await Alarm.find({
    state: true,
    execution: { $gte: currentDateTime },
    [`days.${currentDay}`]: true
  });

  console.log(activeAlarms);
}


cron.schedule('* * * * *', async () => { await verificarAlarmas() });