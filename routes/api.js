
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




router.get('/redflags', (req, res, next) => {
  const data = incident[0].redflags;
  res.status(200).json({ status: 200, data });
});

router.get('/redflags/:id', (req, res, next) => {
  const data = incident[0].redflags[req.params.id];

  res.status(200).json({ status: 200, data: [data] });
});

router.post('/redflags',  (req, res, next) => {
  incident[0].redflags.push(req.body);
  res.status(200).json({ status: 200, data: [{ id: req.body.id, message: 'Created red-flag record' }] });
});

router.put('/redflags/:id/location', (req, res, next) => {
  const data = incident[0].redflags[req.params.id];
  data.location = req.body.location;
  res.status(200).json({ status: 200, data: [{ id: req.params.id, message: 'Updated red-flag records location' }] });

})




module.exports = router;
