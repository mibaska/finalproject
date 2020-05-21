const router = require("express").Router();
const villagerRoutes = require("./villagers");

// Book routes
router.use("/villagers", villagerRoutes);

module.exports = router;
