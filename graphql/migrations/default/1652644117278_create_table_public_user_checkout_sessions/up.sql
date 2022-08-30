CREATE TABLE "public"."user_checkout_sessions" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "user_id" uuid NOT NULL, "stripe_session_id" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade);COMMENT ON TABLE "public"."user_checkout_sessions" IS E'Stipe checkout sessions';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
