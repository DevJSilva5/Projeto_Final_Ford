const vehiclesData = require("../data/vehiclesData");

exports.getVehicles = (req, res) => {
    return res.status(200).json({ vehicles: vehiclesData.list });
};

exports.getVehicleData = (req, res) => {
    const { vin } = req.body;
    const data = vehiclesData.details[vin];

    if (data) {
        return res.status(200).json(data);
    }

    return res.status(400).json({ message: "Código VIN utilizado não foi encontrado!" });
};
