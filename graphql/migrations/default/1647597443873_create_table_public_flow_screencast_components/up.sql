CREATE TABLE "public"."flow_screencast_components" ("id" uuid NOT NULL DEFAULT gen_random_uuid(), "flow_screencast_id" uuid NOT NULL, "flow_component_value" text NOT NULL, PRIMARY KEY ("id") , FOREIGN KEY ("flow_screencast_id") REFERENCES "public"."flow_screencasts"("id") ON UPDATE restrict ON DELETE cascade, FOREIGN KEY ("flow_component_value") REFERENCES "public"."flow_components"("value") ON UPDATE restrict ON DELETE restrict);
CREATE EXTENSION IF NOT EXISTS pgcrypto;
