const express = require("express");
const router = express.Router();
const siteController = require("../app/controllers/SiteController");

router.use("/search", siteController.showSearch)
router.use("/", siteController.showHome);

module.exports = router;
