const express = require('express');
const router = express.Router();
const flightsController = require('../controllers/flightsController');

const flightsRoutes = require('./routes/flights');
app.use('/flights', flightsRoutes);

router.get('/search', flightsController.searchFlights);

module.exports = router;
