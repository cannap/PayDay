const Gateway = require('../../Gateway')

module.exports = class PayPal extends Gateway {
  static get name () {
    return 'paypal'
  }

  constructor (config) {
    super(config)
  }
}
