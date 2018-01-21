import test from 'ava'
import { PayDay, gateways } from '../src'
const { Stripe } = gateways

const stripeConfig = {
  secretKey: 'sk_test_9rt7SdoUTvOp87Oe5XGPcPbt'
}

test('PayDay', t => {
  const payday = new PayDay()
  payday.addGateway(new Stripe(stripeConfig.secretKey))

  t.is(true, payday.gateways.stripe instanceof Stripe)
})
