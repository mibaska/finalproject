const router = require("express").Router();
const villagerRoutes = require("./villagers");

// Book routes
router.use("/#/editVillager", villagerRoutes);

module.exports = router;
