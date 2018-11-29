const assert = require('assert')
const chai = require("chai");
const chaiHttp = require('chai-http');
const app = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('/POST redflag', () => {
  it('it should create a redflag record', (done) => {
    chai.request(app)
      .post('/api/v1/redflags')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data[0].should.be.a('object')
        res.body.data[0].message.should.be.eql('Created red-flag record')
        res.body.data.length.should.be.eql(1);
        done();
        process.exit(0);
      })
  })
})
