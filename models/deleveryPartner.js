const mongoose = require("mongoose");

const DeleveryPartnerSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, require: true },

})

module.exports = new mongoose.model(DeleveryPartnerSchema);