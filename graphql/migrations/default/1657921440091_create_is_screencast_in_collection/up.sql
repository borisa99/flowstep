CREATE OR REPLACE FUNCTION public.is_screencast_in_collection(collection_row collections, screencast_id uuid)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT EXISTS(
        SELECT id 
        FROM collection_flows
        WHERE collection_id = collection_row.id
        AND flow_screencast_id = screencast_id
        )
$function$;
