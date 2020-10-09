const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  discount: { type: Number, default: 0 },
  description: { type: String, default: '' },
  image: { type: String, default: '' },
}, {
  timestamps: true
})

module.exports = mongoose.model('Product', ProductSchema)