-- Could not auto-generate a down migration.
-- Please write an appropriate down migration for the SQL below:
-- CREATE OR REPLACE FUNCTION public.is_user_premium(user_row users)
--  RETURNS boolean
--  LANGUAGE sql
--  STABLE
-- AS $function$
--     SELECT EXISTS (
--         SELECT *
--         FROM account_roles
--          WHERE
--         account_id = (
--                   SELECT id
--                   FROM accounts
--                   where user_id = user_row.id
--                   )
--         AND role = 'premium'
--         )
-- $function$;
