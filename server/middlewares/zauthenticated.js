function ensureAuthenticated(req, res, next) {
  if (req.session && req.session.user) {
    req.user = req.session.user;
    console.log("Podes seguir hijo miooooooooooooooooooooooooooooooooooooooooooooooooooo");
    return next();
  } else {
    console.log("PAl LOBBYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY");
    res.redirect("/auth/login");
  }
}

module.exports = {
  ensureAuthenticated,
};
