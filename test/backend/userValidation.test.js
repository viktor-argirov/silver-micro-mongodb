import { expect } from 'chai';
import { validateRegister } from '../../src/server/validations/userValidation.js';

describe('User Validation', () => {
  it('should validate a valid user input', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'test@example.com',
      password: '123456'
    });
    expect(result.error).to.be.undefined;
  });

  it('should return an error for an invalid email', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'invalidemail',
      password: '123456'
    });
    expect(result.error).to.not.be.undefined;
  });

  it('should return an error for a short password', () => {
    const result = validateRegister({
      username: 'testuser',
      email: 'test@example.com',
      password: '123'
    });
    expect(result.error).to.not.be.undefined;
  });
});
