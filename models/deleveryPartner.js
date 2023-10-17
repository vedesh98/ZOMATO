const mongoose = require("mongoose");

const DeleveryPartnerSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, require: true },
    email: { type: String },
    vallet: { type: String },
})

module.exports = new mongoose.model(DeleveryPartnerSchema);