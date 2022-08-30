import Stripe from 'stripe'
import { StripeService } from '@/services/stripe/StripeService'
import { serviceResponseHandler } from '@/shared/serviceResponseHandler'
import { Service } from 'typedi'
import { Response, Request } from 'express'
import stripe from '@/shared/stripe'

@Service()
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  createCheckoutSession = async (
    req: Request,
    res: Response
  ): Promise<void> => {
    try {
      const { subscription_plan_id } = req.body.input
      const { id } = res.locals.user

      serviceResponseHandler(
        res,
        await this.stripeService.createCheckoutSession(id, subscription_plan_id)
      )
    } catch (error: any) {
      res.status(500).send({ message: error.message })
    }
  }
  success = async (req: Request, res: Response): Promise<void> => {
    try {
      const { session_id } = req.query
      serviceResponseHandler(
        res,
        await this.stripeService.success(session_id as string)
      )
    } catch (error: any) {
      res.status(500).send({ message: error.message })
    }
  }
  webhook = async (req: Request, res: Response): Promise<void> => {
    try {
      const sig = <string | string[] | Buffer>req.headers['stripe-signature']

      let event: Stripe.Event

      try {
        event = stripe.webhooks.constructEvent(
          req.body,
          sig,
          <string>process.env.STRIPE_WEBHOOK_SECRET
        )
      } catch (err: any) {
        // On error, log and return the error message
        console.log(`❌ Error message: ${err.message}`)
        res.status(400).send(`Webhook Error: ${err.message}`)
        return
      }

      // Successfully constructed event
      console.log('✅ Success:', event.id)

      // Cast event data to Stripe object
      if (event.type === 'payment_intent.succeeded') {
        const stripeObject: Stripe.PaymentIntent = event.data
          .object as Stripe.PaymentIntent
        console.log(`💰 PaymentIntent status: ${stripeObject.status}`)
      } else if (event.type === 'charge.succeeded') {
        const charge = event.data.object as Stripe.Charge
        console.log(`💵 Charge id: ${charge.id}`)
      } else {
        console.warn(`🤷‍♀️ Unhandled event type: ${event.type}`)
      }

      // Return a response to acknowledge receipt of the event
      res.json({ received: true })
    } catch (error: any) {
      res.status(500).send({ message: error.message })
    }
  }
}
