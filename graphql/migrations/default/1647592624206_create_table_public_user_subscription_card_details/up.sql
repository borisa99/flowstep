CREATE TABLE "public"."user_subscription_card_details" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "last_four_digits" text NOT NULL, "cardholder_name" text NOT NULL, "expires_at" timestamptz NOT NULL, "payment_provider" text NOT NULL, "user_subscription_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("user_subscription_id") REFERENCES "public"."user_subscriptions"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("payment_provider") REFERENCES "public"."payment_providers"("value") ON UPDATE restrict ON DELETE restrict, UNIQUE ("user_subscription_id"));
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
CREATE TRIGGER "set_public_user_subscription_card_details_updated_at"
BEFORE UPDATE ON "public"."user_subscription_card_details"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_user_subscription_card_details_updated_at" ON "public"."user_subscription_card_details" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
