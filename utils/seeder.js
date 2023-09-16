const Sector = require("../models/SectorModel");
const dotenv = require("dotenv");
const db_connect = require("../db/database");

const sectors = require("../data/data.json");

//setting env path
dotenv.config()

//database connect
db_connect();

const seedSectors = async () => {
    try {
        await Sector.deleteMany();
        console.log("Sectors deleted")

        //add all sectors
        await Sector.insertMany(sectors);
        console.log("All sectors added!");

        process.exit()
        
    } catch (error) {
        console.log(error);
        process.exit()
    }
}
seedSectors();