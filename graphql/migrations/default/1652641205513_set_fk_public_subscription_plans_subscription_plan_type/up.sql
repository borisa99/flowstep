alter table "public"."subscription_plans"
  add constraint "subscription_plans_subscription_plan_type_fkey"
  foreign key ("subscription_plan_type")
  references "public"."subscription_plan_types"
  ("value") on update restrict on delete restrict;
