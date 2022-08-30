CREATE TABLE "public"."user_subscriptions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "billing_date" timestamptz NOT NULL, "user_id" UUID NOT NULL, "subscription_plan_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("subscription_plan_id") REFERENCES "public"."subscription_plans"("id") ON UPDATE restrict ON DELETE restrict, UNIQUE ("user_id"));
CREATE OR REPLACE FUNCTION "public"."set_current_timestamp_updated_at"()
RETURNS TRIGGER AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$ LANGUAGE plpgsql;
CREATE TRIGGER "set_public_user_subscriptions_updated_at"
BEFORE UPDATE ON "public"."user_subscriptions"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_subscriptions_updated_at" ON "public"."user_subscriptions" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
