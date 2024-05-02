const { expect } = require('chai');
const request = require('request');
const { describe, it } = require('mocha');

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

describe('test a simple app', function () {
  it('test correct status code', function (done) {
    request('http://localhost:7865/cart/2', (error, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
  it('test correct status code', function (done) {
    request('http://localhost:7865/cart/2', (error, resp, body) => {
      expect(body).to.be.equal('Payment methods for cart 2');
      done();
    });
  });
  it('test correct status code', function (done) {
    request('http://localhost:7865/cart/2i', (error, resp, body) => {
      expect(resp.statusCode).to.equal(404);
      done();
    });
  });
});
