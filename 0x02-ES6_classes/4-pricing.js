/* eslint-disable no-underscore-dangle */
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof (amount) !== 'number') {
      throw new TypeError('Number must be a number');
    }

    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = val;
  }

  get currency() {
    return this._currency;
  }

  set currency(val) {
    if (!(val instanceof Currency)) {
      throw new TypeError('Currency must be a Currency class');
    }
    this._currency = val;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency._name} (${this._currency._code})`;
  }
}
