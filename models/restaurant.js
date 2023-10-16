const mongoose = require("mongoose");


const item = {
    _id: mongoose.Types.ObjectId,
    name: { type: String },
    price: { type: Number },
};

const RestaurantSchema = mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, enum: ["Pure Veg.", "Non Veg.", "Veg/Non Veg"] },
    location: {
        type: String, require,
    },
    maue: [item]
})

module.exports = new mongoose.model(RestaurantSchema);