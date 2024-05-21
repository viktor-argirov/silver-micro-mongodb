import { expect } from 'chai';
import sinon from 'sinon';
import User from '../../src/server/models/User.js';
import { registerUser } from '../../src/server/controllers/userController.js';

describe('User Controller', () => {
  describe('Register User', () => {
    it('should save the user if validation is successful', async function() {
        this.timeout(5000); // Increase timeout for this test
        const mockUser = {
            username: 'testuser',
            email: 'test@example.com',
            password: '123456'
        };

      // Stub the save function to simulate mongoose save
      const saveStub = sinon.stub(User.prototype, 'save').returns(Promise.resolve(mockUser));

      // Mock request and response objects
      const req = { body: mockUser };
      const res = {
        send: sinon.spy(),
        status: sinon.stub().returnsThis()
      };

      console.log('before registerUser');
      await registerUser(req, res);
        console.log('after registerUser');

      expect(res.status.calledWith(201)).to.be.true;
      expect(res.send.calledWith({ user: mockUser._id })).to.be.true;

      saveStub.restore();
    });

    it('should return an error if email already exists', async () => {
      const mockUser = {
        username: 'testuser',
        email: 'test@example.com',
        password: '123456'
      };

      // Stub the findOne function to simulate mongoose findOne
      const findOneStub = sinon.stub(User, 'findOne').returns(Promise.resolve(mockUser));

      // Mock request and response objects
      const req = { body: mockUser };
      const res = {
        send: sinon.spy(),
        status: sinon.stub().returnsThis()
      };

      await registerUser(req, res);

      expect(res.status.calledWith(400)).to.be.true;
      expect(res.send.calledWith('Email already exists')).to.be.true;

      findOneStub.restore();
    });
  });
});
