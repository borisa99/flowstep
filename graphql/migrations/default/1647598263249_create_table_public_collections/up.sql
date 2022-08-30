CREATE TABLE "public"."collections" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "avatar_url" text NOT NULL, "avatar_backgorund_color" text NOT NULL, "collection_visibility_value" text NOT NULL, "collection_badge_value" text NOT NULL, "user_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("collection_badge_value") REFERENCES "public"."collection_badges"("value") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("collection_visibility_value") REFERENCES "public"."collection_visibility"("value") ON UPDATE restrict ON DELETE restrict, FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON UPDATE restrict ON DELETE cascade);
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
CREATE TRIGGER "set_public_collections_updated_at"
BEFORE UPDATE ON "public"."collections"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_collections_updated_at" ON "public"."collections" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
