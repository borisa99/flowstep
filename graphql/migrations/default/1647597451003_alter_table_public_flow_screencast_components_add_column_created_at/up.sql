alter table "public"."flow_screencast_components" add column "created_at" timestamptz
 null default now();
