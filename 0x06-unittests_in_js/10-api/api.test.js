const { expect } = require('chai');
const request = require('request');
const { describe, it } = require('mocha');

describe('test homepage', function () {
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

describe('test cart route', function () {
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

describe('test avalailable pyments route', function () {
  it('test correct status code', function (done) {
    request('http://localhost:7865/available_payments', (error, resp, body) => {
      expect(resp.statusCode).to.equal(200);
      done();
    });
  });
  it('test correct status code', function (done) {
    const option = { json: true };
    const payLoad = {
      payment_methods: {
        credit_cards: true,
        paypal: false
      }
    };
    request('http://localhost:7865/available_payments', option, (error, resp, body) => {
      expect(body).to.deep.equal(payLoad);
      done();
    });
  });
});

describe('Login', function () {
  it("check correct status code for request that's sent properly", function (done) {
    const opt = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE'
      }
    };
    request.post(opt, function (err, res, body) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
  it("check correct content for request that's sent properly", function (done) {
    const opts = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        userName: 'JOE'
      }
    };
    request.post(opts, function (err, res, body) {
      if (err) {
        expect(res.statusCode).to.not.equal(200);
      } else {
        expect(body).to.contain('Welcome JOE');
      }
      done();
    });
  });
  it("check correct status code for request that's not sent properly", function (done) {
    const op = {
      url: 'http://localhost:7865/login',
      json: true,
      body: {
        usame: 'JOE'
      }
    };
    request.post(op, function (err, res, body) {
      expect(res.statusCode).to.equal(404);
      done();
    });
  });
});
