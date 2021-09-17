let mongoose = require("mongoose");

let userItemsSchema = mongoose.Schema({
    userId: Number,
    productId: Number,
    name: String,
    quantity: Number,
    imageUrl: String
})

let userItemModel = mongoose.model("Item", userItemsSchema, "items");

module.exports = userItemModel;