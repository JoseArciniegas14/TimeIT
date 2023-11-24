const rateLimit = require('express-rate-limit');

//límite de solicitudes maximo de 100 en 15 minutos, no se si sean pocas...
const limiter = rateLimit({
  windowMs: 10 * 60 * 1000,
  max: 100,
  message: { msg: "Se ha excedido el limite de solicitudes" },
});

//Verificar el limite de solicitudes por usuario
function userRateLimit(req, res, next) {
  const userId = req.session.user ? req.session.user.userId : null;

  if (userId) {
    limiter(req, res, (error) => {
      if (error) {
        // Se retorna un json con la informacion del error (No lo he probado aun)
        return res.status(429).json(error);
      }
      next();
    });
  } else {
    next();
  }
}

module.exports = {
  userRateLimit,
};
