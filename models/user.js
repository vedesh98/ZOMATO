const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
    name: {type: String, required: true },
    phone: { type: String, require: true },
    
})