const fs = require("fs");
const path = require("path");
const express = require("express");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const bodyParser = require("body-parser");
const cors = require("cors");
const { DB_USER, DB_PASSWORD, DB_HOST, API_VERSION, SECRET_KEY } = require("./constants.js");

const app = express();

// Sesion con express
app.use(
  session({
    secret: SECRET_KEY,
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`,
      ttl: 7 * 24 * 60 * 60,
    }),
  })
);

// Configurar body parse
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Configurar header http - Cors
app.use(cors());

// Importar rutas desde el JSON
const routesConfig = require("./routesConfig.json");

// Automatizar la importación de middlewares
const middlewaresFolder = path.join(__dirname, "middlewares");
const middlewareFiles = fs.readdirSync(middlewaresFolder);
const middlewares = middlewareFiles.reduce((acc, filename) => {
  const middlewareName = path.parse(filename).name;
  const middlewareFunction = require(path.join(middlewaresFolder, middlewareName));
  acc = middlewareFunction;
  return acc;
}, {});



// Configurar rutas desde el JSON
for (const routeGroup in routesConfig) {
  const routes = routesConfig[routeGroup];
  routes.forEach(route => {
    const path = `/api/${API_VERSION}/${routeGroup}${route.path}`;
    const controller = require(`./controllers/${route.controller}`);
    const action = route.action;

    // Filtrar los middlewares válidos para esta ruta
    const validMiddlewares = route.middlewares
      .map(middlewareName => middlewares[middlewareName])
      .filter(Boolean);

    app[route.method.toLowerCase()](path, validMiddlewares, controller[action]);
  });
}

module.exports = app;
