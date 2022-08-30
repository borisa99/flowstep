import { body } from 'express-validator'
export default {
  post_create_checkout_session: [
    body('input.subscription_plan_id')
      .isString()
      .notEmpty()
      .withMessage('Price id must be valid'),
  ],
}
