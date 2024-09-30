import { expect } from 'chai';
import { describe, it } from 'mocha';

describe('User Service', () => {
  it('should return an array of users', () => {
    const users = [{ id: 1, name: 'John Doe' }];
    expect(users).to.be.an('array').that.is.not.empty;
  });
});
