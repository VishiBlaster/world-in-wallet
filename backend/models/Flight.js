const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  // Define flight schema fields here
});

module.exports = mongoose.model('Flight', flightSchema);
