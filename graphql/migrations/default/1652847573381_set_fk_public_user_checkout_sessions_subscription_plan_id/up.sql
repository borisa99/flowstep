alter table "public"."user_checkout_sessions"
  add constraint "user_checkout_sessions_subscription_plan_id_fkey"
  foreign key ("subscription_plan_id")
  references "public"."subscription_plans"
  ("id") on update restrict on delete restrict;
