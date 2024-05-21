import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/server/app.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Protected Routes', () => {
  it('should return 401 if no token is provided', (done) => {
    chai.request(app)
      .get('/api/protected/data')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Authentication required');
        done();
      });
  });

  it('should return 401 if token is invalid', (done) => {
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer invalidtoken')
      .end((_err, res) => {
        expect(res).to.have.status(401);
        expect(res.body).to.have.property('error', 'Invalid token');
        done();
      });
  });

  it('should return 200 if token is valid', (done) => {
    // Remplacez 'validtoken' par un token JWT valide pour l'utilisateur de test
    chai.request(app)
      .get('/api/protected/data')
      .set('Authorization', 'Bearer validtoken')
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('data');
        done();
      });
  });
});