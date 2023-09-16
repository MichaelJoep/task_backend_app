const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    
    name: {
        type: String,
        required: true
    },
    check: {
        type: Boolean,
        default: false,
        required: true
    },
    dept: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("UserPost", PostSchema);