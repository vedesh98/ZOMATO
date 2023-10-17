const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, require: true },
    email: { type: String },
    locations: { type: [String], }
})


module.exports = new mongoose.model(UserSchema);