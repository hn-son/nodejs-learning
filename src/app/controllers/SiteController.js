class SiteController {
  // GET /
  showHome(req, res) {
    res.render("home");
  }

  // GET /search
  showSearch(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
