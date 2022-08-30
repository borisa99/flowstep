import { body } from 'express-validator'

export default {
  post_change_password: [
    body('input.newPassword')
      .isLength({ min: 8 })
      .withMessage('Password must be minimum 8 characters long'),
    body('input.oldPassword')
      .isLength({ min: 8 })
      .withMessage('Password must be minimum 8 characters long'),
  ],
}
