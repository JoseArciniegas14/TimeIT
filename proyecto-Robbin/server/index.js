//Este es el punto de entrada de la aplicacion
//de aqui accedemos a react, gestionamos que tipo
//de peticiones son aceptadas
//Tambien se levanda el servidor (Desde terminal)

const mongoose = require("mongoose");
const app = require("./app.js")
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION, } = require("./constants.js");

const PORT = process.env.POST || 3000

mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
  (error) => {
    if (error) throw error;

    app.listen(PORT, () => {
      console.log("######################");
      console.log("### Backend Server ###");
      console.log("######################");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);

    })

  }
);
