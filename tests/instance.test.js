import test from 'ava'
import { PayDay, gateways } from '../src'
const { Stripe } = gateways

const stripeConfig = {
  secretKey: 'sk_test_9rt7SdoUTvOp87Oe5XGPcPbt'
}

const order = {
  amount: 200,
  currency: 'eur',
  description: 'Example charge',
  source: 'tok_visa'
}
test('PayDay', t => {
  const payday = new PayDay()
  payday.addGateway(new Stripe(stripeConfig.secretKey))

  t.is(true, payday.gateways.stripe instanceof Stripe)
})

test('Stripe purchase', async t => {
  const payday = new PayDay()
  payday.addGateway(new Stripe(stripeConfig.secretKey))
  const result = await payday.use('stripe').charge({
    amount: 200,
    currency: 'eur',
    description: 'Example charge',
    source: 'tok_visa',
    metadata: { order_id: 2202 }
  })

  t.is(order.amount, result.amount)
})
