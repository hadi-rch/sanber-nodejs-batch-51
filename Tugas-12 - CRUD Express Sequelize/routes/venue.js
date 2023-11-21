var express = require('express');
var router = express.Router();
const {createVenue, readAllVenue, detaiVenue, updateVenue, deleteVenue} = require('../controllers/venueController')
// Release 1 Create and Read
router.post('/',createVenue)
router.get('/',readAllVenue)
router.get('/:id',detaiVenue)

// Release 2 Update dan Delete
router.put('/:id',updateVenue)
router.delete('/:id',deleteVenue)

module.exports = router;
