const { describe, it } = require('mocha');
const { expect } = require('chai');
const request = require('request');

describe('test a simple app', function () {
  it('test correct status code', function (done) {
    request('http://localhost:7865', (error, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
  it('test correct status code', function (done) {
    request('http://localhost:7865', (error, resp, body) => {
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
