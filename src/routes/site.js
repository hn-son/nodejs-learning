const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.get("/search", siteController.showSearch)
router.get("/", siteController.showHome);

module.exports = router;
