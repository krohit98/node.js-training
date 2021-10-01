const mongoose = require("mongoose");

const querySchema = new mongoose.Schema({
    user: String,
    restaurant: String,
    query: String,
    contact: Number
});

module.exports = mongoose.model("queries", querySchema);