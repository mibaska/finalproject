const router = require("express").Router();
const villagersController = require("../../controllers/villagersController");

router.route("/")
  .get(villagersController.findAll)
  .post(villagersController.create);

router
  .route("/:id")
  .get(villagersController.findById)
  .post(villagersController.create);

module.exports = router;
