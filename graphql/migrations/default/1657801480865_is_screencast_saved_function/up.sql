CREATE OR REPLACE FUNCTION public.is_screencast_saved(flow_screencast_row flow_screencasts, hasura_session json)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT EXISTS(
        SELECT id FROM
        collections 
        WHERE id = (
            SELECT collection_id 
            FROM collection_flows
            WHERE flow_screencast_id = flow_screencast_row.id
            AND user_id::text = hasura_session ->> 'x-hasura-user-id'
            )
        )
$function$;
