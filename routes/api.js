
const incident = [{
  redflags: [
    {
      id: 0, createdOn: new Date(), createdBy: 1, type: 'redflags', location: 'location', status: 'draft', images: [], videos: [], comment: 'a new incident',
    },
    {
      id: 1, createdOn: new Date(), createdBy: 1, type: 'redflags', location: 'location', status: 'draft', images: [], videos: [], comment: 'another incident',
    },
  ],
  interventions: [{}],
}];

const express = require('express');

const router = express.Router();



router.get('/redflags/:id', (req, res, next) => {
  const data = incident[0].redflags[req.params.id];

  res.status(200).json({ status: 200, data: [data] });
});





module.exports = router;
