const router = require("express").Router();
const villagersController = require("../../controllers/villagersController");

router.route("/")
  .get(villagersController.findAll);

router.route("/:id")
  .get(villagersController.findById);

module.exports = router;
