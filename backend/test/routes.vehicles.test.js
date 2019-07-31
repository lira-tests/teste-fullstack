process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

const server = require('../src/server/index');
const knex = require('../src/server/db/connection');

describe('routes : vehicles', () => {

  /** Test for get all */
  describe('GET /api/v1/vehicles', () => {
    it('should return all vehicles', (done) => {
      chai.request(server)
        .get('/api/v1/vehicles')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys(
            'id', 'vehicle', 'manufacturer', 'fipe_code', 'sold',
          );
          done();
        });
    });
  });

  /** Test get one  */
  describe('GET /api/v1/vehicles/:id', () => {
    it('should return one vehicle', (done) => {
      chai.request(server)
        .get('/api/v1/vehicles/1')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(200);
          res.type.should.equal('application/json');
          res.body.status.should.eql('success');
          res.body.data[0].should.include.keys(
            'id', 'vehicle', 'manufacturer', 'fipe_code', 'sold',
          );
          done();
        });
    });

    it('should return error 404', (done) => {
      chai.request(server)
        .get('/api/v1/vehicles/999999')
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(404);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          res.body.message.should.eql('Vehicle not found');
          done();
        });
    });
  });

  describe('POST /api/v1/vehicles', () => {
    it('should return the vehicle that was added', (done) => {
      chai.request(server)
        .post('/api/v1/vehicles')
        .send({
          "vehicle": "Vehicle Test",
          "manufacturer": "Test Ind",
          "fipe_code": "099999-9",
          "sold": true
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(201);
          res.type.should.equal('application/json');
          res.body.status.should.eql('success');
          done();
        });
    });

    it('should throw an error if send invalid format', (done) => {
      chai.request(server)
        .post('/api/v1/vehicles')
        .send({ "test": "error" })
        .end((err, res) => {
          res.status.should.equal(400);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          done();
        });
    });
  });


  describe('PUT /api/v1/vehicles', () => {
    it('should return the vehicle that was updated', (done) => {
      knex('vehicles')
        .select('*')
        .limit(1)
        .orderBy('id', 'desc')
        .then((vehicle) => {
          const vehicleObject = vehicle[0];
          chai.request(server)
            .put(`/api/v1/vehicles/${vehicleObject.id}`)
            .send({
              "vehicle": "Vehicle Test Put",
              "manufacturer": "Test Ind Put",
              "fipe_code": "099999-7",
              "sold": false
            })
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              res.body.status.should.eql('success');
              done();
            });
        });
    });


    it('should return the vehicle not found', (done) => {
      chai.request(server)
        .put(`/api/v1/vehicles/9999999999`)
        .send({
          sold: false
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(404);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          done();
        });

    });

    it('should throw an error if send invalid format', (done) => {
      knex('vehicles')
        .select('*')
        .limit(1)
        .orderBy('id', 'desc')
        .then((vehicle) => {
          const vehicleObject = vehicle[0];
          chai.request(server)
            .put(`/api/v1/vehicles/${vehicleObject.id}`)
            .send({
              'test': 'error'
            })
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(400);
              res.type.should.equal('application/json');
              res.body.status.should.eql('error');
              done();
            });
        });
    });
  });

  describe('PATCH /api/v1/vehicles', () => {
    it('should return the vehicle that was updated', (done) => {
      knex('vehicles')
        .select('*')
        .limit(1)
        .orderBy('id', 'desc')
        .then((vehicle) => {
          const vehicleObject = vehicle[0];
          chai.request(server)
            .patch(`/api/v1/vehicles/${vehicleObject.id}`)
            .send({
              sold: true
            })
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              res.body.status.should.eql('success');
              done();
            });
        });
    });


    it('should return the vehicle not found', (done) => {
      chai.request(server)
        .patch(`/api/v1/vehicles/9999999999`)
        .send({
          sold: false
        })
        .end((err, res) => {
          should.not.exist(err);
          res.status.should.equal(404);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          done();
        });

    });

    it('should throw an error if send invalid format', (done) => {
      knex('vehicles')
        .select('*')
        .limit(1)
        .orderBy('id', 'desc')
        .then((vehicle) => {
          const vehicleObject = vehicle[0];
          chai.request(server)
            .patch(`/api/v1/vehicles/${vehicleObject.id}`)
            .send({
              'test': 'error'
            })
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(400);
              res.type.should.equal('application/json');
              res.body.status.should.eql('error');
              done();
            });
        });
    });
  });

  describe('DELETE /api/v1/vehicles/:id', () => {
    it('should return the vehicle that was deleted', (done) => {
      knex('vehicles')
        .select('*')
        .limit(1)
        .orderBy('id', 'desc')
        .then((vehicle) => {
          const vehicleObject = vehicle[0];
          chai.request(server)
            .delete(`/api/v1/vehicles/${vehicleObject.id}`)
            .end((err, res) => {
              should.not.exist(err);
              res.status.should.equal(200);
              res.type.should.equal('application/json');
              res.body.status.should.eql('success');
              done();
            });
        });
    });

    it('should throw an error if the vehicle not found', (done) => {
      chai.request(server)
        .delete('/api/v1/vehicles/9999999')
        .end((err, res) => {
          res.status.should.equal(404);
          res.type.should.equal('application/json');
          res.body.status.should.eql('error');
          res.body.message.should.eql('Vehicle not found.');
          done();
        });
    });
  });

});
