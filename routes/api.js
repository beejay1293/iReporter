const incident = [{
  redflags: [{
    id1: {
      id: 1, createdOn: new Date(), createdBy: 1, type: 'redflags', location: 'location', status: 'draft', images: [], videos: [], comment: 'a new incident',
    },
    id2: {
      id: 2, createdOn: new Date(), createdBy: 1, type: 'redflags', location: 'location', status: 'draft', images: [], videos: [], comment: 'another incident',
    },
  }],
  interventions: [{}],
}];

const express = require('express');

const router = express.Router();

router.get('/redflags', (req, res, next) => {
  res.status(200).json({ status: 200, data: incident[0].redflags });
});


module.exports = router;
