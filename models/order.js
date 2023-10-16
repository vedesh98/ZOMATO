const mongoose = require("mongoose");

const OrderSchema = mongoose.Schema({
    restaurantId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Restaurant",
    },
    restaurantName: { type: String },
    items: [
      {
        name: String,
        quantity: Number,
      },
    ],
    status:{ type: String, eval:["completed", "inprogress", "canceld"]}
})

module.exports = new mongoose.model(OrderSchema);