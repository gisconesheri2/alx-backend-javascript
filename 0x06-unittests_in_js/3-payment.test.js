const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(50, 24.52);
    assert(spy.calledWith('SUM', 50, 24.52));
    assert(spy.calledOnce);
    spy.restore();
  });
});
