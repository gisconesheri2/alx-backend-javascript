/* eslint-disable no-underscore-dangle */
export default class Building {
  constructor(sqft) {
    const proto = Object.getPrototypeOf(this);
    const superProto = Building.prototype;
    const missing = Object.getOwnPropertyNames(superProto).find((evacuationWarningMessage) => typeof superProto[evacuationWarningMessage] === 'function' && !Object.prototype.hasOwnProperty.call(proto, evacuationWarningMessage));
    if (missing) throw new Error('Class extending Building must override evacuationWarningMessage');

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(val) {
    if (typeof (val) !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = val;
  }

  // eslint-disable-next-line class-methods-use-this
  evacuationWarningMessage() {

  }
}
