const getPaymentTokenFromAPI = require('./6-payment_token');
const { expect } = require('chai');
const { describe, it, done} = require('mocha');

describe('test an a sync function', () => {
	it('should resolve a new promise', function () {
		getPaymentTokenFromAPI(true)
			.then(
				(resp) => {
	expect(resp.data).to.equal('Successful response from the API');
		done();
			}, 
				(err) => {
			done(err)
		})
	});
});
