const mongoose = require("mongoose");

const db_connect = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_DBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("mongodb database connected successful")
    } catch (error) {
        console.log(error);
    }
}

module.exports = db_connect;
