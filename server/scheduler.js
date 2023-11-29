const cron = require("node-cron");
const Alarm = require("./models/alarms.model");
const DaysOfWeek = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

// ...

// Programar la verificación de alarmas cada minuto (puedes ajustar el cron según tus necesidades)
cron.schedule("*/10 * * * * *", async () => {
  console.log("?");
  const currentDateTime = new Date();
  console.log("La data", currentDateTime);
  const currentDay = DaysOfWeek[currentDateTime.getDay()];
  console.log(currentDay);

  // Verificación
  Alarm.collection.createIndex({ state: 1, execution: 1, [`days.${currentDay}`]: 1 });

  const activeAlarms = await Alarm.find({
    state: true,
    execution: { $gte: currentDateTime },
    [`days.${currentDay}`]: true
  });

  // Imprimir resultados en la consola
  console.log("Active Alarms:", activeAlarms);

  // Resto del código de manejo de alarmas (por ejemplo, envío de notificaciones, ejecución de acciones, etc.)
});
