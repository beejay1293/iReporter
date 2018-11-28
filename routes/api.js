
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



router.delete('/redflags/:id', (req, res, next) => {
  const data = incident[0].redflags
  const removed = data.splice(req.params.id, 1)

  res.status(200).json({ status: 200, data: [{id: req.params.id, message: 'red-flag record has been deleted' }] })
})




module.exports = router;
