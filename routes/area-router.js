const express = require('express')

const areaController = require("./../controllers/area-ctrl");

const router = express.Router();

router.get("/areas", areaController.getAreas);
router.get("area/:id", areaController.getAreaById);
router.delete("area/:id", areaController.deleteArea);
router.post("area/", areaController.createArea);
router.put("area/:id", areaController.updateArea);

module.exports = router;