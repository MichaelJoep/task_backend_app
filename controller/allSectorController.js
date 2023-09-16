const Sector = require("../models/SectorModel");

exports.getAllSectors = async (req, res) => {
    try {
        
        const getSectors = await Sector.find({});

        if(getSectors) {
           return res.status(200).send(getSectors)
        } else {
           return res.status(404).send("No sector found!");
        }
        
    } catch (error) {
        return error;
    }
}

