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
  source: 'tok_visa',
  metadata: { order_id: 2202 }
}

const payday = new PayDay()
payday.addGateway(new Stripe(stripeConfig.secretKey))

test('Stripe', async t => {
  const stripe = payday.create('stripe')
  const result = await stripe.charge(order)
  t.is(order.amount, result.amount)
})
