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

module.exports = incident
