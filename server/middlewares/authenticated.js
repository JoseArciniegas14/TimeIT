function ensureAuthenticated(req, res, next) {
  console.log("Pasamos a verificar las sesiones");
  console.log("Session actual", req.session.user);
  if (req.session.user) {
    req.user = req.session.user;
    console.log("SI HAY SESION CREADA", req.session.user);
    return next();
  } else {
    console.log(
      "NO HAY SESION CREADA PAl LOBBYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY",
      req.session.user
    );
    res.redirect("/auth/login");
  }
}

module.exports = {
  ensureAuthenticated,
};
