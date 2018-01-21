class PayDay {
  constructor () {
    this.gateways = {}
  }
  /**
   *
   * @param {object} gateway
   * @param {string} gatewayName
   */
  addGateway (gateway, gatewayName) {
    gatewayName = gatewayName || gateway.constructor.name
    this.gateways[gatewayName] = gateway
    return this
  }
  create (name) {
    return this.gateways[name]
  }
}

module.exports = {
  default: PayDay,
  PayDay,
  gateways: require('./Gateways') // for testing
}
