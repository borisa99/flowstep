CREATE TABLE "public"."flow_screencast_timestamps" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "title" text NOT NULL, "timestamp" timetz NOT NULL, "flow_screencast_id" uuid NOT NULL, "created_at" timestamptz NOT NULL DEFAULT now(), "updated_at" timestamptz NOT NULL DEFAULT now(), PRIMARY KEY ("id") , FOREIGN KEY ("flow_screencast_id") REFERENCES "public"."flow_screencasts"("id") ON UPDATE restrict ON DELETE cascade);
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
CREATE TRIGGER "set_public_flow_screencast_timestamps_updated_at"
BEFORE UPDATE ON "public"."flow_screencast_timestamps"
FOR EACH ROW
EXECUTE PROCEDURE "public"."set_current_timestamp_updated_at"();
COMMENT ON TRIGGER "set_public_flow_screencast_timestamps_updated_at" ON "public"."flow_screencast_timestamps" 
IS 'trigger to set value of column "updated_at" to current timestamp on row update';
CREATE EXTENSION IF NOT EXISTS pgcrypto;
