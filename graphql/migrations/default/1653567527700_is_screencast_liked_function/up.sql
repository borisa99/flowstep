CREATE OR REPLACE FUNCTION public.is_screencast_liked(flow_screencast_row flow_screencasts)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT EXISTS(
        SELECT id 
        FROM flow_screencast_likes
        WHERE flow_screencast_id = '19d0ab24-adde-41e5-a87a-056d84859644' 
        AND user_id = '19d0ab24-adde-41e5-a87a-056d84859644'
        )
$function$;
