const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paintSchema = new Schema({
  
}, {
  timestamps: true
});

module.exports = mongoose.model('Paint', paintSchema);
