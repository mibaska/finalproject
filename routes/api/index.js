const router = require("express").Router();
const villagerRoutes = require("./villagers");

router.use("/#/editVillager", villagerRoutes);

module.exports = router;
