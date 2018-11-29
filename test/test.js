const assert = require('assert')
const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);
describe('/GET redflags', () => {
  it('it should get all redflags', (done) => {
    chai.request(app)
      .get('/api/v1/redflags')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data.length.should.be.eql(2);
        done();
        process.exit(0);
      })
  })
})
