const app = require("./app.js")
const mongoose = require("mongoose");
const { DB_USER, DB_PASSWORD, DB_HOST, IP_SERVER, API_VERSION, } = require("./constants.js");

const PORT = process.env.POST || 3000

mongoose.set("strictQuery", false);

mongoose.connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
  (error) => {
    if (error) throw error;


    // Parece un pito
    app.listen(PORT, () => {
      console.log("");
      console.log("");
      console.log("#############################");
      console.log("###### Backend Server #######");
      console.log(`http://${IP_SERVER}:${PORT}/api/${API_VERSION}`);
      console.log("###### Backend Server #######");
      console.log("#############################");
      console.log("");
      console.log("");
    })
  }
);
