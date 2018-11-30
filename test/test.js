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
      })
  })
})

describe('/GET redflag by id', () => {
  it('it should get redflag by id', (done) => {
    chai.request(app)
      .get('/api/v1/redflags/:id')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data.length.should.be.eql(1);
        done();
      })
  })
})

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
      })
  })
})

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
      })
  })
})

describe('/PUT redflag', () => {
  it('it should edit a specific redflag record comment', (done) => {
    chai.request(app)
      .put('/api/v1/redflags/0/comment')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data[0].should.be.a('object')
        res.body.data[0].message.should.be.eql('Updated red-flag records comment')
        res.body.data.length.should.be.eql(1);

        done();
      })
  })
})

describe('/DELETE redflag by id', () => {
  it('it should delete a redflag record', (done) => {
    chai.request(app)
      .delete('/api/v1/redflags/:id')
      .end((err, res) => {
        res.should.have.status(200);
        res.body.data.should.be.a('array')
        res.body.data[0].should.be.a('object')
        res.body.data[0].message.should.be.eql('red-flag record has been deleted')
        res.body.data.length.should.be.eql(1);
        done();
        process.exit(0);
      });
  });
})
