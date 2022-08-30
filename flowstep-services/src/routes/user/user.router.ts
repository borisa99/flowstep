import { userController } from '@/controllers'
import { router } from '@/router_wrapper'

router.post({
  routeName: '/me',
  handler: userController.me,
})
router.post({
  routeName: '/change_password',
  handler: userController.changePassword,
})
export default router.getInstance()
