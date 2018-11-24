const incident = [{
  redflags: [{
    id: 0, createdOn: 'Date', createdBy: 1, type: 'redflags', location: 'location',
  }, {
    id: 1, createdOn: 'Date', createdBy: 1, type: 'redflags', location: 'location',
  }],
  interventions: [{}],
}];

const express = require('express');

const router = express.Router();

router.get('/redflags', (req, res, next) => {
  res.status(200).json({ status: 200, data: incident[0].redflags });
});


module.exports = router;
