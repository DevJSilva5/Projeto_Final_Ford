const express = require("express");
const router = express.Router();
const { getVehicles, getVehicleData } = require("../controllers/vehicleController");

router.get("/vehicles", getVehicles);
router.post("/vehicleData", getVehicleData);

module.exports = router;
