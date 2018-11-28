const assert = require('assert')
const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);



describe('/PUT redflag', () => {
  it('it should edit a specific redflag record location', (done) => {
    chai.request(app)
      .put('/api/v1/redflags/0/location')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data[0].should.be.a('object')
        res.body.data[0].message.should.be.eql('Updated red-flag records location')
        res.body.data.length.should.be.eql(1);
        done();
        process.exit(0);
      })
  })
})
