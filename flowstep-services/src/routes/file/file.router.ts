import { router } from '@/router_wrapper'
import { fileController } from '@/controllers'

router.post({
  routeName: '/upload_optimize_video',
  handler: fileController.uploadOptimizeVideo,
})
router.post({
  routeName: '/upload',
  handler: fileController.upload,
})

export default router.getInstance()
