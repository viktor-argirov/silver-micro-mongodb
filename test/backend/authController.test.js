import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../src/server/app.js';
import redisClient from '../../src/server/config/redisClient.js';

chai.use(chaiHttp);
const { expect } = chai;

describe('Auth Controller', () => {
  let token;

  before((done) => {
    chai.request(app)
      .post('/api/auth/register')
      .send({
        username: 'testuser',
        email: 'testuser@example.com',
        password: 'password123'
      })
      .end(() => {
        chai.request(app)
          .post('/api/auth/login')
          .send({
            email: 'testuser@example.com',
            password: 'password123'
          })
          .end((_err, res) => {
            token = res.body.token;
            done();
          });
      });
  });

  after((done) => {
    redisClient.flushAll(done);
  });

  it('should logout the user and invalidate the token', (done) => {
    chai.request(app)
      .post('/api/auth/logout')
      .set('Authorization', `Bearer ${token}`)
      .end((_err, res) => {
        expect(res).to.have.status(200);
        expect(res.body.message).to.equal('Logout successful');

        redisClient.get(token, (_err, result) => {
          expect(result).to.equal('invalid');
          done();
        });
      });
  });
});
// Compare this snippet from test/backend/authController.test.js:
/**
 * Importation des dépendances
 */
describe('Auth Controller', () => {
    describe('POST /api/auth/logout', () => {
        it('should return a 200 status and a success message', (done) => {
            chai.request(app)
                .post('/api/auth/logout')
                .end((_err, res) => {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message').eql('Déconnexion réussie');
                    done();
                });
        });
    });
});