CREATE OR REPLACE FUNCTION public.is_screencast_liked(flow_screencast_row flow_screencasts, hasura_session json)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT EXISTS(
        SELECT id 
        FROM flow_screencast_likes
        WHERE flow_screencast_id = flow_screencast_row.id
        AND user_id::text = hasura_session ->> 'x-hasura-user-id'
        )
$function$;
