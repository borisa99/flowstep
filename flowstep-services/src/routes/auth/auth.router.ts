import { router } from '@/router_wrapper'
import { authController } from '@/controllers'
import { RoleValue } from '@/models/RoleValue'

router.post({
  routeName: '/register',
  isPublic: true,
  handler: authController.register,
})
// router.get({
//   routeName: '/activate',
//   isPublic: true,
//   handler: authController.activate,
// })
router.post({
  routeName: '/login',
  isPublic: true,
  handler: authController.login,
})
router.get({
  routeName: '/google_url',
  isPublic: true,
  handler: authController.googleUrl,
})
router.get({
  routeName: '/googe/callback',
  isPublic: true,
  handler: authController.googleCallback,
})
router.post({
  routeName: '/refresh',
  isPublic: true,
  handler: authController.refresh,
})
router.post({
  routeName: '/request_reset_password',
  isPublic: true,
  handler: authController.requestResetPassword,
})
router.post({
  routeName: '/reset_password',
  isPublic: true,
  handler: authController.resetPassword,
})
router.post({
  routeName: '/invite',
  allowedRoles: [RoleValue.SUPER_ADMIN],
  handler: authController.invite,
})
router.post({
  routeName: '/check_email',
  isPublic: true,
  handler: authController.checkEmail,
})

export default router.getInstance()
