function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    console.log("SI HAY SESION CREADA");
    return next();
  } else {
    console.log("NO HAY SESION CREADA PAl LOBBYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    res.redirect("/auth/login");
  }
}

module.exports = {
  ensureAuthenticated,
};
