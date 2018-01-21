const Gateway = require('../../Gateway')
const stripe = require('stripe')
module.exports = class Stripe extends Gateway {
  static get name () {
    return 'stripe'
  }

  /**
   *
   * @param {string} Secret key
   */

  constructor (key) {
    super()
    this.stripe = stripe(key)
  }

  /**
   *
   * @param {object} order
   * @returns {promise}
   */
  charge (order) {
    return this.stripe.charges.create(order)
  }

  /**
   * @returns {object} returns the original stipe instance
   */
  instance () {
    return this.stripe
  }
}
