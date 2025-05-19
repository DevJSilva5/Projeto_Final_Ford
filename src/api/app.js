const express = require("express");
const cors = require("cors");
const path = require("path");

const authRoutes = require("./routes/authRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../public"))); // Ajuste conforme a localização das imagens

app.use(authRoutes);
app.use(vehicleRoutes);

module.exports = app;
