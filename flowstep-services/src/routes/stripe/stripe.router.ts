import { stripeController } from '@/controllers'
import { router } from '@/router_wrapper'

router.post({
  routeName: '/create_checkout_session',
  handler: stripeController.createCheckoutSession,
})
router.get({
  routeName: '/success',
  handler: stripeController.success,
  isPublic: true,
})
router.post({
  routeName: '/webhook',
  isPublic: true,
  handler: stripeController.webhook,
})

export default router.getInstance()
