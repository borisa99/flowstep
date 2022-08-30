CREATE OR REPLACE FUNCTION public.is_user_premium(user_row users)
 RETURNS boolean
 LANGUAGE sql
 STABLE
AS $function$
    SELECT EXISTS ( 
        SELECT * 
        FROM account_roles 
         WHERE 
        account_id = (
                  SELECT id
                  FROM accounts 
                  where user_id = user_row.id
                  )
        AND role = 'premium'
        )
$function$;
