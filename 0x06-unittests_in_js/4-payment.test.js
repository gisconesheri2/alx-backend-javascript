const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');
const assert = require('assert');
const { describe, it } = require('mocha');

describe('sendPaymentRequestToApi', () => {
  it('sendPaymentRequestToApi uses the calculateNumber method of Utils', () => {
    const calcNumStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spyLog = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    assert(calcNumStub.calledWith('SUM', 100, 20));
    assert(calcNumStub.calledOnce);
    assert(spyLog.calledOnce);
    assert(spyLog.calledWith('The total is: 10'));
    calcNumStub.restore();
    spyLog.restore();
  });
});
