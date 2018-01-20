const Gateway = require('../../Gateway')
const stripe = require('stripe')
module.exports = class Stripe extends Gateway {
  static get name () {
    return 'stripe'
  }

  /**
   *
   * @param {string} key
   */
  constructor (key) {
    super()
    this.stripe = stripe(key)
  }

  /**
   *
   * @param {object} order
   */
  async charge (order) {
    return this.stripe.charges.create(order)
  }

  instance () {
    return this.stripe
  }
}
