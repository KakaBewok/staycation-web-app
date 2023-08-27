const isLogin = (req, res, next) => {
  if (
    req.session.user == null ||
    req.session.user == undefined ||
    localStorage.getItem("unknown") == null
  ) {
    req.flash("alertMessage", "Session has expired, please login again!");
    req.flash("alertStatus", "danger");
    res.redirect("/admin/signin");
  } else {
    next();
  }
};

module.exports = isLogin;
