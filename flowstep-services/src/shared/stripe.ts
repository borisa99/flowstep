import Stripe from 'stripe'

export default new Stripe(<string>process.env.STRIPE_KEY, {
  apiVersion: '2020-08-27',
  typescript: true,
})
