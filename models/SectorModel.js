const mongoose = require("mongoose");

const SectorSchema = new mongoose.Schema({
    sector: {type: String, trim: true, required: true},
    detail: [{
            dept: {type: String}
        }]
});

module.exports = mongoose.model('Sector', SectorSchema);