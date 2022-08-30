/* eslint-disable */
import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  date: any;
  float8: any;
  numeric: any;
  time: any;
  timestamptz: any;
  uuid: any;
};

export type Boolean_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _cast?: InputMaybe<Boolean_Cast_Exp>;
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type JwtResponse = {
  __typename?: 'JWTResponse';
  refresh_token: Scalars['String'];
  token: Scalars['String'];
};

export type RegisterUser = {
  avatar_url?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  last_name?: InputMaybe<Scalars['String']>;
  password: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type SuccessResponse = {
  __typename?: 'SuccessResponse';
  value: Scalars['String'];
};

export type SuccessResponseBoolean = {
  __typename?: 'SuccessResponseBoolean';
  value: Scalars['Boolean'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  account_id: Scalars['uuid'];
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['date'];
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['uuid'];
  last_name?: Maybe<Scalars['String']>;
  roles: Array<Scalars['String']>;
};

/** columns and relationships of "account_roles" */
export type Account_Roles = {
  __typename?: 'account_roles';
  /** An object relationship */
  account: Accounts;
  account_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Roles;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "account_roles" */
export type Account_Roles_Aggregate = {
  __typename?: 'account_roles_aggregate';
  aggregate?: Maybe<Account_Roles_Aggregate_Fields>;
  nodes: Array<Account_Roles>;
};

/** aggregate fields of "account_roles" */
export type Account_Roles_Aggregate_Fields = {
  __typename?: 'account_roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Account_Roles_Max_Fields>;
  min?: Maybe<Account_Roles_Min_Fields>;
};


/** aggregate fields of "account_roles" */
export type Account_Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account_roles" */
export type Account_Roles_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Account_Roles_Max_Order_By>;
  min?: InputMaybe<Account_Roles_Min_Order_By>;
};

/** input type for inserting array relation for remote table "account_roles" */
export type Account_Roles_Arr_Rel_Insert_Input = {
  data: Array<Account_Roles_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Account_Roles_On_Conflict>;
};

/** Boolean expression to filter rows from the table "account_roles". All fields are combined with a logical 'AND'. */
export type Account_Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Roles_Bool_Exp>>;
  _not?: InputMaybe<Account_Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Roles_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Roles_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "account_roles" */
export enum Account_Roles_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountRolesPkey = 'account_roles_pkey'
}

/** input type for inserting data into table "account_roles" */
export type Account_Roles_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Account_Roles_Max_Fields = {
  __typename?: 'account_roles_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "account_roles" */
export type Account_Roles_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Roles_Min_Fields = {
  __typename?: 'account_roles_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "account_roles" */
export type Account_Roles_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account_roles" */
export type Account_Roles_Mutation_Response = {
  __typename?: 'account_roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account_Roles>;
};

/** on_conflict condition type for table "account_roles" */
export type Account_Roles_On_Conflict = {
  constraint: Account_Roles_Constraint;
  update_columns?: Array<Account_Roles_Update_Column>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "account_roles". */
export type Account_Roles_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Roles_Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account_roles */
export type Account_Roles_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "account_roles" */
export enum Account_Roles_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "account_roles" */
export type Account_Roles_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "account_roles" */
export enum Account_Roles_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "accounts" */
export type Accounts = {
  __typename?: 'accounts';
  /** An array relationship */
  account_roles: Array<Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Account_Roles_Aggregate;
  created_at: Scalars['timestamptz'];
  email: Scalars['String'];
  id: Scalars['uuid'];
  is_active: Scalars['Boolean'];
  password_hash?: Maybe<Scalars['String']>;
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "accounts" */
export type AccountsAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsRefresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};


/** columns and relationships of "accounts" */
export type AccountsRefresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};

/** aggregated selection of "accounts" */
export type Accounts_Aggregate = {
  __typename?: 'accounts_aggregate';
  aggregate?: Maybe<Accounts_Aggregate_Fields>;
  nodes: Array<Accounts>;
};

/** aggregate fields of "accounts" */
export type Accounts_Aggregate_Fields = {
  __typename?: 'accounts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Accounts_Max_Fields>;
  min?: Maybe<Accounts_Min_Fields>;
};


/** aggregate fields of "accounts" */
export type Accounts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Accounts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "accounts". All fields are combined with a logical 'AND'. */
export type Accounts_Bool_Exp = {
  _and?: InputMaybe<Array<Accounts_Bool_Exp>>;
  _not?: InputMaybe<Accounts_Bool_Exp>;
  _or?: InputMaybe<Array<Accounts_Bool_Exp>>;
  account_roles?: InputMaybe<Account_Roles_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_active?: InputMaybe<Boolean_Comparison_Exp>;
  password_hash?: InputMaybe<String_Comparison_Exp>;
  refresh_tokens?: InputMaybe<Refresh_Tokens_Bool_Exp>;
  ticket?: InputMaybe<Uuid_Comparison_Exp>;
  ticket_expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "accounts" */
export enum Accounts_Constraint {
  /** unique or primary key constraint on columns "id" */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint on columns "user_id" */
  AccountsUserIdKey = 'accounts_user_id_key'
}

/** input type for inserting data into table "accounts" */
export type Accounts_Insert_Input = {
  account_roles?: InputMaybe<Account_Roles_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  password_hash?: InputMaybe<Scalars['String']>;
  refresh_tokens?: InputMaybe<Refresh_Tokens_Arr_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['uuid']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Accounts_Max_Fields = {
  __typename?: 'accounts_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type Accounts_Min_Fields = {
  __typename?: 'accounts_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  password_hash?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  ticket_expires_at?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "accounts" */
export type Accounts_Mutation_Response = {
  __typename?: 'accounts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Accounts>;
};

/** input type for inserting object relation for remote table "accounts" */
export type Accounts_Obj_Rel_Insert_Input = {
  data: Accounts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};

/** on_conflict condition type for table "accounts" */
export type Accounts_On_Conflict = {
  constraint: Accounts_Constraint;
  update_columns?: Array<Accounts_Update_Column>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};

/** Ordering options when selecting data from "accounts". */
export type Accounts_Order_By = {
  account_roles_aggregate?: InputMaybe<Account_Roles_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_active?: InputMaybe<Order_By>;
  password_hash?: InputMaybe<Order_By>;
  refresh_tokens_aggregate?: InputMaybe<Refresh_Tokens_Aggregate_Order_By>;
  ticket?: InputMaybe<Order_By>;
  ticket_expires_at?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: accounts */
export type Accounts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "accounts" */
export enum Accounts_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "accounts" */
export type Accounts_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_active?: InputMaybe<Scalars['Boolean']>;
  password_hash?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['uuid']>;
  ticket_expires_at?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "accounts" */
export enum Accounts_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  Id = 'id',
  /** column name */
  IsActive = 'is_active',
  /** column name */
  PasswordHash = 'password_hash',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticket_expires_at',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Bigint_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
  _cast?: InputMaybe<Bigint_Cast_Exp>;
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "collection_badges" */
export type Collection_Badges = {
  __typename?: 'collection_badges';
  /** An array relationship */
  collections: Array<Collections>;
  /** An aggregate relationship */
  collections_aggregate: Collections_Aggregate;
  comment?: Maybe<Scalars['String']>;
  value: Scalars['String'];
};


/** columns and relationships of "collection_badges" */
export type Collection_BadgesCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


/** columns and relationships of "collection_badges" */
export type Collection_BadgesCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** aggregated selection of "collection_badges" */
export type Collection_Badges_Aggregate = {
  __typename?: 'collection_badges_aggregate';
  aggregate?: Maybe<Collection_Badges_Aggregate_Fields>;
  nodes: Array<Collection_Badges>;
};

/** aggregate fields of "collection_badges" */
export type Collection_Badges_Aggregate_Fields = {
  __typename?: 'collection_badges_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Collection_Badges_Max_Fields>;
  min?: Maybe<Collection_Badges_Min_Fields>;
};


/** aggregate fields of "collection_badges" */
export type Collection_Badges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collection_Badges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "collection_badges". All fields are combined with a logical 'AND'. */
export type Collection_Badges_Bool_Exp = {
  _and?: InputMaybe<Array<Collection_Badges_Bool_Exp>>;
  _not?: InputMaybe<Collection_Badges_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Badges_Bool_Exp>>;
  collections?: InputMaybe<Collections_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collection_badges" */
export enum Collection_Badges_Constraint {
  /** unique or primary key constraint on columns "value" */
  CollectionBadgesPkey = 'collection_badges_pkey'
}

export enum Collection_Badges_Enum {
  TopRated = 'TopRated',
  Trending = 'Trending'
}

/** Boolean expression to compare columns of type "collection_badges_enum". All fields are combined with logical 'AND'. */
export type Collection_Badges_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Collection_Badges_Enum>;
  _in?: InputMaybe<Array<Collection_Badges_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Collection_Badges_Enum>;
  _nin?: InputMaybe<Array<Collection_Badges_Enum>>;
};

/** input type for inserting data into table "collection_badges" */
export type Collection_Badges_Insert_Input = {
  collections?: InputMaybe<Collections_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Collection_Badges_Max_Fields = {
  __typename?: 'collection_badges_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Collection_Badges_Min_Fields = {
  __typename?: 'collection_badges_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "collection_badges" */
export type Collection_Badges_Mutation_Response = {
  __typename?: 'collection_badges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collection_Badges>;
};

/** input type for inserting object relation for remote table "collection_badges" */
export type Collection_Badges_Obj_Rel_Insert_Input = {
  data: Collection_Badges_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Collection_Badges_On_Conflict>;
};

/** on_conflict condition type for table "collection_badges" */
export type Collection_Badges_On_Conflict = {
  constraint: Collection_Badges_Constraint;
  update_columns?: Array<Collection_Badges_Update_Column>;
  where?: InputMaybe<Collection_Badges_Bool_Exp>;
};

/** Ordering options when selecting data from "collection_badges". */
export type Collection_Badges_Order_By = {
  collections_aggregate?: InputMaybe<Collections_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collection_badges */
export type Collection_Badges_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "collection_badges" */
export enum Collection_Badges_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "collection_badges" */
export type Collection_Badges_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "collection_badges" */
export enum Collection_Badges_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "collection_flows" */
export type Collection_Flows = {
  __typename?: 'collection_flows';
  /** An object relationship */
  collection: Collections;
  collection_id: Scalars['uuid'];
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "collection_flows" */
export type Collection_Flows_Aggregate = {
  __typename?: 'collection_flows_aggregate';
  aggregate?: Maybe<Collection_Flows_Aggregate_Fields>;
  nodes: Array<Collection_Flows>;
};

/** aggregate fields of "collection_flows" */
export type Collection_Flows_Aggregate_Fields = {
  __typename?: 'collection_flows_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Collection_Flows_Max_Fields>;
  min?: Maybe<Collection_Flows_Min_Fields>;
};


/** aggregate fields of "collection_flows" */
export type Collection_Flows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collection_flows" */
export type Collection_Flows_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collection_Flows_Max_Order_By>;
  min?: InputMaybe<Collection_Flows_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collection_flows" */
export type Collection_Flows_Arr_Rel_Insert_Input = {
  data: Array<Collection_Flows_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Collection_Flows_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collection_flows". All fields are combined with a logical 'AND'. */
export type Collection_Flows_Bool_Exp = {
  _and?: InputMaybe<Array<Collection_Flows_Bool_Exp>>;
  _not?: InputMaybe<Collection_Flows_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Flows_Bool_Exp>>;
  collection?: InputMaybe<Collections_Bool_Exp>;
  collection_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collection_flows" */
export enum Collection_Flows_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollectionFlowsPkey = 'collection_flows_pkey'
}

/** input type for inserting data into table "collection_flows" */
export type Collection_Flows_Insert_Input = {
  collection?: InputMaybe<Collections_Obj_Rel_Insert_Input>;
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Collection_Flows_Max_Fields = {
  __typename?: 'collection_flows_max_fields';
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collection_flows" */
export type Collection_Flows_Max_Order_By = {
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Collection_Flows_Min_Fields = {
  __typename?: 'collection_flows_min_fields';
  collection_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collection_flows" */
export type Collection_Flows_Min_Order_By = {
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "collection_flows" */
export type Collection_Flows_Mutation_Response = {
  __typename?: 'collection_flows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collection_Flows>;
};

/** on_conflict condition type for table "collection_flows" */
export type Collection_Flows_On_Conflict = {
  constraint: Collection_Flows_Constraint;
  update_columns?: Array<Collection_Flows_Update_Column>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};

/** Ordering options when selecting data from "collection_flows". */
export type Collection_Flows_Order_By = {
  collection?: InputMaybe<Collections_Order_By>;
  collection_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collection_flows */
export type Collection_Flows_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collection_flows" */
export enum Collection_Flows_Select_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "collection_flows" */
export type Collection_Flows_Set_Input = {
  collection_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "collection_flows" */
export enum Collection_Flows_Update_Column {
  /** column name */
  CollectionId = 'collection_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "collection_visibility" */
export type Collection_Visibility = {
  __typename?: 'collection_visibility';
  /** An array relationship */
  collections: Array<Collections>;
  /** An aggregate relationship */
  collections_aggregate: Collections_Aggregate;
  comment: Scalars['String'];
  value: Scalars['String'];
};


/** columns and relationships of "collection_visibility" */
export type Collection_VisibilityCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


/** columns and relationships of "collection_visibility" */
export type Collection_VisibilityCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** aggregated selection of "collection_visibility" */
export type Collection_Visibility_Aggregate = {
  __typename?: 'collection_visibility_aggregate';
  aggregate?: Maybe<Collection_Visibility_Aggregate_Fields>;
  nodes: Array<Collection_Visibility>;
};

/** aggregate fields of "collection_visibility" */
export type Collection_Visibility_Aggregate_Fields = {
  __typename?: 'collection_visibility_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Collection_Visibility_Max_Fields>;
  min?: Maybe<Collection_Visibility_Min_Fields>;
};


/** aggregate fields of "collection_visibility" */
export type Collection_Visibility_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collection_Visibility_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "collection_visibility". All fields are combined with a logical 'AND'. */
export type Collection_Visibility_Bool_Exp = {
  _and?: InputMaybe<Array<Collection_Visibility_Bool_Exp>>;
  _not?: InputMaybe<Collection_Visibility_Bool_Exp>;
  _or?: InputMaybe<Array<Collection_Visibility_Bool_Exp>>;
  collections?: InputMaybe<Collections_Bool_Exp>;
  comment?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "collection_visibility" */
export enum Collection_Visibility_Constraint {
  /** unique or primary key constraint on columns "value" */
  CollectionVisibilityPkey = 'collection_visibility_pkey'
}

export enum Collection_Visibility_Enum {
  Private = 'Private',
  Public = 'Public'
}

/** Boolean expression to compare columns of type "collection_visibility_enum". All fields are combined with logical 'AND'. */
export type Collection_Visibility_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Collection_Visibility_Enum>;
  _in?: InputMaybe<Array<Collection_Visibility_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Collection_Visibility_Enum>;
  _nin?: InputMaybe<Array<Collection_Visibility_Enum>>;
};

/** input type for inserting data into table "collection_visibility" */
export type Collection_Visibility_Insert_Input = {
  collections?: InputMaybe<Collections_Arr_Rel_Insert_Input>;
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Collection_Visibility_Max_Fields = {
  __typename?: 'collection_visibility_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Collection_Visibility_Min_Fields = {
  __typename?: 'collection_visibility_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "collection_visibility" */
export type Collection_Visibility_Mutation_Response = {
  __typename?: 'collection_visibility_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collection_Visibility>;
};

/** input type for inserting object relation for remote table "collection_visibility" */
export type Collection_Visibility_Obj_Rel_Insert_Input = {
  data: Collection_Visibility_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Collection_Visibility_On_Conflict>;
};

/** on_conflict condition type for table "collection_visibility" */
export type Collection_Visibility_On_Conflict = {
  constraint: Collection_Visibility_Constraint;
  update_columns?: Array<Collection_Visibility_Update_Column>;
  where?: InputMaybe<Collection_Visibility_Bool_Exp>;
};

/** Ordering options when selecting data from "collection_visibility". */
export type Collection_Visibility_Order_By = {
  collections_aggregate?: InputMaybe<Collections_Aggregate_Order_By>;
  comment?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collection_visibility */
export type Collection_Visibility_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "collection_visibility" */
export enum Collection_Visibility_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "collection_visibility" */
export type Collection_Visibility_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "collection_visibility" */
export enum Collection_Visibility_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "collections" */
export type Collections = {
  __typename?: 'collections';
  avatar_backgorund_color: Scalars['String'];
  avatar_url: Scalars['String'];
  /** An object relationship */
  collection_badge?: Maybe<Collection_Badges>;
  collection_badge_value?: Maybe<Collection_Badges_Enum>;
  /** An array relationship */
  collection_flows: Array<Collection_Flows>;
  /** An aggregate relationship */
  collection_flows_aggregate: Collection_Flows_Aggregate;
  /** An object relationship */
  collection_visibility?: Maybe<Collection_Visibility>;
  collection_visibility_value?: Maybe<Collection_Visibility_Enum>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** A computed field, executes function "is_screencast_in_collection" */
  is_screencast_in_collection?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "collections" */
export type CollectionsCollection_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsCollection_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


/** columns and relationships of "collections" */
export type CollectionsIs_Screencast_In_CollectionArgs = {
  args: Is_Screencast_In_Collection_Collections_Args;
};

/** aggregated selection of "collections" */
export type Collections_Aggregate = {
  __typename?: 'collections_aggregate';
  aggregate?: Maybe<Collections_Aggregate_Fields>;
  nodes: Array<Collections>;
};

/** aggregate fields of "collections" */
export type Collections_Aggregate_Fields = {
  __typename?: 'collections_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Collections_Max_Fields>;
  min?: Maybe<Collections_Min_Fields>;
};


/** aggregate fields of "collections" */
export type Collections_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Collections_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "collections" */
export type Collections_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Collections_Max_Order_By>;
  min?: InputMaybe<Collections_Min_Order_By>;
};

/** input type for inserting array relation for remote table "collections" */
export type Collections_Arr_Rel_Insert_Input = {
  data: Array<Collections_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** Boolean expression to filter rows from the table "collections". All fields are combined with a logical 'AND'. */
export type Collections_Bool_Exp = {
  _and?: InputMaybe<Array<Collections_Bool_Exp>>;
  _not?: InputMaybe<Collections_Bool_Exp>;
  _or?: InputMaybe<Array<Collections_Bool_Exp>>;
  avatar_backgorund_color?: InputMaybe<String_Comparison_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  collection_badge?: InputMaybe<Collection_Badges_Bool_Exp>;
  collection_badge_value?: InputMaybe<Collection_Badges_Enum_Comparison_Exp>;
  collection_flows?: InputMaybe<Collection_Flows_Bool_Exp>;
  collection_visibility?: InputMaybe<Collection_Visibility_Bool_Exp>;
  collection_visibility_value?: InputMaybe<Collection_Visibility_Enum_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "collections" */
export enum Collections_Constraint {
  /** unique or primary key constraint on columns "id" */
  CollectionsPkey = 'collections_pkey'
}

/** input type for inserting data into table "collections" */
export type Collections_Insert_Input = {
  avatar_backgorund_color?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  collection_badge?: InputMaybe<Collection_Badges_Obj_Rel_Insert_Input>;
  collection_badge_value?: InputMaybe<Collection_Badges_Enum>;
  collection_flows?: InputMaybe<Collection_Flows_Arr_Rel_Insert_Input>;
  collection_visibility?: InputMaybe<Collection_Visibility_Obj_Rel_Insert_Input>;
  collection_visibility_value?: InputMaybe<Collection_Visibility_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Collections_Max_Fields = {
  __typename?: 'collections_max_fields';
  avatar_backgorund_color?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "collections" */
export type Collections_Max_Order_By = {
  avatar_backgorund_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Collections_Min_Fields = {
  __typename?: 'collections_min_fields';
  avatar_backgorund_color?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "collections" */
export type Collections_Min_Order_By = {
  avatar_backgorund_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "collections" */
export type Collections_Mutation_Response = {
  __typename?: 'collections_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Collections>;
};

/** input type for inserting object relation for remote table "collections" */
export type Collections_Obj_Rel_Insert_Input = {
  data: Collections_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};

/** on_conflict condition type for table "collections" */
export type Collections_On_Conflict = {
  constraint: Collections_Constraint;
  update_columns?: Array<Collections_Update_Column>;
  where?: InputMaybe<Collections_Bool_Exp>;
};

/** Ordering options when selecting data from "collections". */
export type Collections_Order_By = {
  avatar_backgorund_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  collection_badge?: InputMaybe<Collection_Badges_Order_By>;
  collection_badge_value?: InputMaybe<Order_By>;
  collection_flows_aggregate?: InputMaybe<Collection_Flows_Aggregate_Order_By>;
  collection_visibility?: InputMaybe<Collection_Visibility_Order_By>;
  collection_visibility_value?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: collections */
export type Collections_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "collections" */
export enum Collections_Select_Column {
  /** column name */
  AvatarBackgorundColor = 'avatar_backgorund_color',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CollectionBadgeValue = 'collection_badge_value',
  /** column name */
  CollectionVisibilityValue = 'collection_visibility_value',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "collections" */
export type Collections_Set_Input = {
  avatar_backgorund_color?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  collection_badge_value?: InputMaybe<Collection_Badges_Enum>;
  collection_visibility_value?: InputMaybe<Collection_Visibility_Enum>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "collections" */
export enum Collections_Update_Column {
  /** column name */
  AvatarBackgorundColor = 'avatar_backgorund_color',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CollectionBadgeValue = 'collection_badge_value',
  /** column name */
  CollectionVisibilityValue = 'collection_visibility_value',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

export type Float8_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _cast?: InputMaybe<Float8_Cast_Exp>;
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

/** columns and relationships of "flow_app_info" */
export type Flow_App_Info = {
  __typename?: 'flow_app_info';
  app_store_link?: Maybe<Scalars['String']>;
  average_rating?: Maybe<Scalars['float8']>;
  category?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  developer?: Maybe<Scalars['String']>;
  /** An object relationship */
  flow: Flows;
  flow_id: Scalars['uuid'];
  id: Scalars['uuid'];
  number_of_downloads?: Maybe<Scalars['bigint']>;
  release_date?: Maybe<Scalars['timestamptz']>;
  updated_at: Scalars['timestamptz'];
  website?: Maybe<Scalars['String']>;
};

/** aggregated selection of "flow_app_info" */
export type Flow_App_Info_Aggregate = {
  __typename?: 'flow_app_info_aggregate';
  aggregate?: Maybe<Flow_App_Info_Aggregate_Fields>;
  nodes: Array<Flow_App_Info>;
};

/** aggregate fields of "flow_app_info" */
export type Flow_App_Info_Aggregate_Fields = {
  __typename?: 'flow_app_info_aggregate_fields';
  avg?: Maybe<Flow_App_Info_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Flow_App_Info_Max_Fields>;
  min?: Maybe<Flow_App_Info_Min_Fields>;
  stddev?: Maybe<Flow_App_Info_Stddev_Fields>;
  stddev_pop?: Maybe<Flow_App_Info_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Flow_App_Info_Stddev_Samp_Fields>;
  sum?: Maybe<Flow_App_Info_Sum_Fields>;
  var_pop?: Maybe<Flow_App_Info_Var_Pop_Fields>;
  var_samp?: Maybe<Flow_App_Info_Var_Samp_Fields>;
  variance?: Maybe<Flow_App_Info_Variance_Fields>;
};


/** aggregate fields of "flow_app_info" */
export type Flow_App_Info_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_App_Info_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Flow_App_Info_Avg_Fields = {
  __typename?: 'flow_app_info_avg_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "flow_app_info". All fields are combined with a logical 'AND'. */
export type Flow_App_Info_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_App_Info_Bool_Exp>>;
  _not?: InputMaybe<Flow_App_Info_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_App_Info_Bool_Exp>>;
  app_store_link?: InputMaybe<String_Comparison_Exp>;
  average_rating?: InputMaybe<Float8_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  developer?: InputMaybe<String_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  number_of_downloads?: InputMaybe<Bigint_Comparison_Exp>;
  release_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  website?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_app_info" */
export enum Flow_App_Info_Constraint {
  /** unique or primary key constraint on columns "flow_id" */
  FlowAppInfoFlowIdKey = 'flow_app_info_flow_id_key',
  /** unique or primary key constraint on columns "id" */
  FlowAppInfoPkey = 'flow_app_info_pkey'
}

/** input type for incrementing numeric columns in table "flow_app_info" */
export type Flow_App_Info_Inc_Input = {
  average_rating?: InputMaybe<Scalars['float8']>;
  number_of_downloads?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "flow_app_info" */
export type Flow_App_Info_Insert_Input = {
  app_store_link?: InputMaybe<Scalars['String']>;
  average_rating?: InputMaybe<Scalars['float8']>;
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  developer?: InputMaybe<Scalars['String']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  number_of_downloads?: InputMaybe<Scalars['bigint']>;
  release_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_App_Info_Max_Fields = {
  __typename?: 'flow_app_info_max_fields';
  app_store_link?: Maybe<Scalars['String']>;
  average_rating?: Maybe<Scalars['float8']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  developer?: Maybe<Scalars['String']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number_of_downloads?: Maybe<Scalars['bigint']>;
  release_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Flow_App_Info_Min_Fields = {
  __typename?: 'flow_app_info_min_fields';
  app_store_link?: Maybe<Scalars['String']>;
  average_rating?: Maybe<Scalars['float8']>;
  category?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  developer?: Maybe<Scalars['String']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  number_of_downloads?: Maybe<Scalars['bigint']>;
  release_date?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  website?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "flow_app_info" */
export type Flow_App_Info_Mutation_Response = {
  __typename?: 'flow_app_info_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_App_Info>;
};

/** input type for inserting object relation for remote table "flow_app_info" */
export type Flow_App_Info_Obj_Rel_Insert_Input = {
  data: Flow_App_Info_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_App_Info_On_Conflict>;
};

/** on_conflict condition type for table "flow_app_info" */
export type Flow_App_Info_On_Conflict = {
  constraint: Flow_App_Info_Constraint;
  update_columns?: Array<Flow_App_Info_Update_Column>;
  where?: InputMaybe<Flow_App_Info_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_app_info". */
export type Flow_App_Info_Order_By = {
  app_store_link?: InputMaybe<Order_By>;
  average_rating?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  developer?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  number_of_downloads?: InputMaybe<Order_By>;
  release_date?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  website?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_app_info */
export type Flow_App_Info_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_app_info" */
export enum Flow_App_Info_Select_Column {
  /** column name */
  AppStoreLink = 'app_store_link',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Developer = 'developer',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfDownloads = 'number_of_downloads',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** input type for updating data in table "flow_app_info" */
export type Flow_App_Info_Set_Input = {
  app_store_link?: InputMaybe<Scalars['String']>;
  average_rating?: InputMaybe<Scalars['float8']>;
  category?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  developer?: InputMaybe<Scalars['String']>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  number_of_downloads?: InputMaybe<Scalars['bigint']>;
  release_date?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  website?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Flow_App_Info_Stddev_Fields = {
  __typename?: 'flow_app_info_stddev_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Flow_App_Info_Stddev_Pop_Fields = {
  __typename?: 'flow_app_info_stddev_pop_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Flow_App_Info_Stddev_Samp_Fields = {
  __typename?: 'flow_app_info_stddev_samp_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Flow_App_Info_Sum_Fields = {
  __typename?: 'flow_app_info_sum_fields';
  average_rating?: Maybe<Scalars['float8']>;
  number_of_downloads?: Maybe<Scalars['bigint']>;
};

/** update columns of table "flow_app_info" */
export enum Flow_App_Info_Update_Column {
  /** column name */
  AppStoreLink = 'app_store_link',
  /** column name */
  AverageRating = 'average_rating',
  /** column name */
  Category = 'category',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Developer = 'developer',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  NumberOfDownloads = 'number_of_downloads',
  /** column name */
  ReleaseDate = 'release_date',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Website = 'website'
}

/** aggregate var_pop on columns */
export type Flow_App_Info_Var_Pop_Fields = {
  __typename?: 'flow_app_info_var_pop_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Flow_App_Info_Var_Samp_Fields = {
  __typename?: 'flow_app_info_var_samp_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Flow_App_Info_Variance_Fields = {
  __typename?: 'flow_app_info_variance_fields';
  average_rating?: Maybe<Scalars['Float']>;
  number_of_downloads?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "flow_attachments" */
export type Flow_Attachments = {
  __typename?: 'flow_attachments';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow: Flows;
  flow_id: Scalars['uuid'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "flow_attachments" */
export type Flow_Attachments_Aggregate = {
  __typename?: 'flow_attachments_aggregate';
  aggregate?: Maybe<Flow_Attachments_Aggregate_Fields>;
  nodes: Array<Flow_Attachments>;
};

/** aggregate fields of "flow_attachments" */
export type Flow_Attachments_Aggregate_Fields = {
  __typename?: 'flow_attachments_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Attachments_Max_Fields>;
  min?: Maybe<Flow_Attachments_Min_Fields>;
};


/** aggregate fields of "flow_attachments" */
export type Flow_Attachments_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_attachments" */
export type Flow_Attachments_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Attachments_Max_Order_By>;
  min?: InputMaybe<Flow_Attachments_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_attachments" */
export type Flow_Attachments_Arr_Rel_Insert_Input = {
  data: Array<Flow_Attachments_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Attachments_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_attachments". All fields are combined with a logical 'AND'. */
export type Flow_Attachments_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Attachments_Bool_Exp>>;
  _not?: InputMaybe<Flow_Attachments_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Attachments_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_attachments" */
export enum Flow_Attachments_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowAttachmentsPkey = 'flow_attachments_pkey'
}

/** input type for inserting data into table "flow_attachments" */
export type Flow_Attachments_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_Attachments_Max_Fields = {
  __typename?: 'flow_attachments_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "flow_attachments" */
export type Flow_Attachments_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Attachments_Min_Fields = {
  __typename?: 'flow_attachments_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "flow_attachments" */
export type Flow_Attachments_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_attachments" */
export type Flow_Attachments_Mutation_Response = {
  __typename?: 'flow_attachments_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Attachments>;
};

/** on_conflict condition type for table "flow_attachments" */
export type Flow_Attachments_On_Conflict = {
  constraint: Flow_Attachments_Constraint;
  update_columns?: Array<Flow_Attachments_Update_Column>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_attachments". */
export type Flow_Attachments_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_attachments */
export type Flow_Attachments_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_attachments" */
export enum Flow_Attachments_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "flow_attachments" */
export type Flow_Attachments_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "flow_attachments" */
export enum Flow_Attachments_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** columns and relationships of "flow_badge_values" */
export type Flow_Badge_Values = {
  __typename?: 'flow_badge_values';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow: Flows;
  /** An object relationship */
  flow_badge: Flow_Badges;
  flow_badge_value: Flow_Badges_Enum;
  flow_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "flow_badge_values" */
export type Flow_Badge_Values_Aggregate = {
  __typename?: 'flow_badge_values_aggregate';
  aggregate?: Maybe<Flow_Badge_Values_Aggregate_Fields>;
  nodes: Array<Flow_Badge_Values>;
};

/** aggregate fields of "flow_badge_values" */
export type Flow_Badge_Values_Aggregate_Fields = {
  __typename?: 'flow_badge_values_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Badge_Values_Max_Fields>;
  min?: Maybe<Flow_Badge_Values_Min_Fields>;
};


/** aggregate fields of "flow_badge_values" */
export type Flow_Badge_Values_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_badge_values" */
export type Flow_Badge_Values_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Badge_Values_Max_Order_By>;
  min?: InputMaybe<Flow_Badge_Values_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_badge_values" */
export type Flow_Badge_Values_Arr_Rel_Insert_Input = {
  data: Array<Flow_Badge_Values_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Badge_Values_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_badge_values". All fields are combined with a logical 'AND'. */
export type Flow_Badge_Values_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Badge_Values_Bool_Exp>>;
  _not?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Badge_Values_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_badge?: InputMaybe<Flow_Badges_Bool_Exp>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum_Comparison_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_badge_values" */
export enum Flow_Badge_Values_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowBadgeValuesPkey = 'flow_badge_values_pkey'
}

/** input type for inserting data into table "flow_badge_values" */
export type Flow_Badge_Values_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_badge?: InputMaybe<Flow_Badges_Obj_Rel_Insert_Input>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Flow_Badge_Values_Max_Fields = {
  __typename?: 'flow_badge_values_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "flow_badge_values" */
export type Flow_Badge_Values_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Badge_Values_Min_Fields = {
  __typename?: 'flow_badge_values_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "flow_badge_values" */
export type Flow_Badge_Values_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_badge_values" */
export type Flow_Badge_Values_Mutation_Response = {
  __typename?: 'flow_badge_values_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Badge_Values>;
};

/** on_conflict condition type for table "flow_badge_values" */
export type Flow_Badge_Values_On_Conflict = {
  constraint: Flow_Badge_Values_Constraint;
  update_columns?: Array<Flow_Badge_Values_Update_Column>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_badge_values". */
export type Flow_Badge_Values_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_badge?: InputMaybe<Flow_Badges_Order_By>;
  flow_badge_value?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_badge_values */
export type Flow_Badge_Values_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_badge_values" */
export enum Flow_Badge_Values_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowBadgeValue = 'flow_badge_value',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "flow_badge_values" */
export type Flow_Badge_Values_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "flow_badge_values" */
export enum Flow_Badge_Values_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowBadgeValue = 'flow_badge_value',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "flow_badges" */
export type Flow_Badges = {
  __typename?: 'flow_badges';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  flow_badge_values: Array<Flow_Badge_Values>;
  /** An aggregate relationship */
  flow_badge_values_aggregate: Flow_Badge_Values_Aggregate;
  /** An array relationship */
  flow_screencasts_badges: Array<Flow_Screencasts_Badges>;
  /** An aggregate relationship */
  flow_screencasts_badges_aggregate: Flow_Screencasts_Badges_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "flow_badges" */
export type Flow_BadgesFlow_Badge_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


/** columns and relationships of "flow_badges" */
export type Flow_BadgesFlow_Badge_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


/** columns and relationships of "flow_badges" */
export type Flow_BadgesFlow_Screencasts_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


/** columns and relationships of "flow_badges" */
export type Flow_BadgesFlow_Screencasts_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};

/** aggregated selection of "flow_badges" */
export type Flow_Badges_Aggregate = {
  __typename?: 'flow_badges_aggregate';
  aggregate?: Maybe<Flow_Badges_Aggregate_Fields>;
  nodes: Array<Flow_Badges>;
};

/** aggregate fields of "flow_badges" */
export type Flow_Badges_Aggregate_Fields = {
  __typename?: 'flow_badges_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Badges_Max_Fields>;
  min?: Maybe<Flow_Badges_Min_Fields>;
};


/** aggregate fields of "flow_badges" */
export type Flow_Badges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Badges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "flow_badges". All fields are combined with a logical 'AND'. */
export type Flow_Badges_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Badges_Bool_Exp>>;
  _not?: InputMaybe<Flow_Badges_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Badges_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  flow_badge_values?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
  flow_screencasts_badges?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_badges" */
export enum Flow_Badges_Constraint {
  /** unique or primary key constraint on columns "value" */
  FlowBadgesPkey = 'flow_badges_pkey'
}

export enum Flow_Badges_Enum {
  TopRated = 'TopRated',
  Trending = 'Trending'
}

/** Boolean expression to compare columns of type "flow_badges_enum". All fields are combined with logical 'AND'. */
export type Flow_Badges_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Flow_Badges_Enum>;
  _in?: InputMaybe<Array<Flow_Badges_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Flow_Badges_Enum>;
  _nin?: InputMaybe<Array<Flow_Badges_Enum>>;
};

/** input type for inserting data into table "flow_badges" */
export type Flow_Badges_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  flow_badge_values?: InputMaybe<Flow_Badge_Values_Arr_Rel_Insert_Input>;
  flow_screencasts_badges?: InputMaybe<Flow_Screencasts_Badges_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_Badges_Max_Fields = {
  __typename?: 'flow_badges_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Flow_Badges_Min_Fields = {
  __typename?: 'flow_badges_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "flow_badges" */
export type Flow_Badges_Mutation_Response = {
  __typename?: 'flow_badges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Badges>;
};

/** input type for inserting object relation for remote table "flow_badges" */
export type Flow_Badges_Obj_Rel_Insert_Input = {
  data: Flow_Badges_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Badges_On_Conflict>;
};

/** on_conflict condition type for table "flow_badges" */
export type Flow_Badges_On_Conflict = {
  constraint: Flow_Badges_Constraint;
  update_columns?: Array<Flow_Badges_Update_Column>;
  where?: InputMaybe<Flow_Badges_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_badges". */
export type Flow_Badges_Order_By = {
  comment?: InputMaybe<Order_By>;
  flow_badge_values_aggregate?: InputMaybe<Flow_Badge_Values_Aggregate_Order_By>;
  flow_screencasts_badges_aggregate?: InputMaybe<Flow_Screencasts_Badges_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_badges */
export type Flow_Badges_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "flow_badges" */
export enum Flow_Badges_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "flow_badges" */
export type Flow_Badges_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "flow_badges" */
export enum Flow_Badges_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "flow_components" */
export type Flow_Components = {
  __typename?: 'flow_components';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  flow_screencast_components: Array<Flow_Screencast_Components>;
  /** An aggregate relationship */
  flow_screencast_components_aggregate: Flow_Screencast_Components_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "flow_components" */
export type Flow_ComponentsFlow_Screencast_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


/** columns and relationships of "flow_components" */
export type Flow_ComponentsFlow_Screencast_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};

/** aggregated selection of "flow_components" */
export type Flow_Components_Aggregate = {
  __typename?: 'flow_components_aggregate';
  aggregate?: Maybe<Flow_Components_Aggregate_Fields>;
  nodes: Array<Flow_Components>;
};

/** aggregate fields of "flow_components" */
export type Flow_Components_Aggregate_Fields = {
  __typename?: 'flow_components_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Components_Max_Fields>;
  min?: Maybe<Flow_Components_Min_Fields>;
};


/** aggregate fields of "flow_components" */
export type Flow_Components_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Components_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "flow_components". All fields are combined with a logical 'AND'. */
export type Flow_Components_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Components_Bool_Exp>>;
  _not?: InputMaybe<Flow_Components_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Components_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  flow_screencast_components?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_components" */
export enum Flow_Components_Constraint {
  /** unique or primary key constraint on columns "value" */
  FlowScreencastComponentsPkey = 'flow_screencast_components_pkey'
}

export enum Flow_Components_Enum {
  BottomSheet = 'BottomSheet',
  Breadcrubms = 'Breadcrubms',
  Button = 'Button',
  Test = 'Test'
}

/** Boolean expression to compare columns of type "flow_components_enum". All fields are combined with logical 'AND'. */
export type Flow_Components_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Flow_Components_Enum>;
  _in?: InputMaybe<Array<Flow_Components_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Flow_Components_Enum>;
  _nin?: InputMaybe<Array<Flow_Components_Enum>>;
};

/** input type for inserting data into table "flow_components" */
export type Flow_Components_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  flow_screencast_components?: InputMaybe<Flow_Screencast_Components_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_Components_Max_Fields = {
  __typename?: 'flow_components_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Flow_Components_Min_Fields = {
  __typename?: 'flow_components_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "flow_components" */
export type Flow_Components_Mutation_Response = {
  __typename?: 'flow_components_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Components>;
};

/** input type for inserting object relation for remote table "flow_components" */
export type Flow_Components_Obj_Rel_Insert_Input = {
  data: Flow_Components_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Components_On_Conflict>;
};

/** on_conflict condition type for table "flow_components" */
export type Flow_Components_On_Conflict = {
  constraint: Flow_Components_Constraint;
  update_columns?: Array<Flow_Components_Update_Column>;
  where?: InputMaybe<Flow_Components_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_components". */
export type Flow_Components_Order_By = {
  comment?: InputMaybe<Order_By>;
  flow_screencast_components_aggregate?: InputMaybe<Flow_Screencast_Components_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_components */
export type Flow_Components_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "flow_components" */
export enum Flow_Components_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "flow_components" */
export type Flow_Components_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "flow_components" */
export enum Flow_Components_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "flow_keywords" */
export type Flow_Keywords = {
  __typename?: 'flow_keywords';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow: Flows;
  flow_id: Scalars['uuid'];
  id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  value: Scalars['String'];
};

/** aggregated selection of "flow_keywords" */
export type Flow_Keywords_Aggregate = {
  __typename?: 'flow_keywords_aggregate';
  aggregate?: Maybe<Flow_Keywords_Aggregate_Fields>;
  nodes: Array<Flow_Keywords>;
};

/** aggregate fields of "flow_keywords" */
export type Flow_Keywords_Aggregate_Fields = {
  __typename?: 'flow_keywords_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Keywords_Max_Fields>;
  min?: Maybe<Flow_Keywords_Min_Fields>;
};


/** aggregate fields of "flow_keywords" */
export type Flow_Keywords_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_keywords" */
export type Flow_Keywords_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Keywords_Max_Order_By>;
  min?: InputMaybe<Flow_Keywords_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_keywords" */
export type Flow_Keywords_Arr_Rel_Insert_Input = {
  data: Array<Flow_Keywords_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Keywords_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_keywords". All fields are combined with a logical 'AND'. */
export type Flow_Keywords_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Keywords_Bool_Exp>>;
  _not?: InputMaybe<Flow_Keywords_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Keywords_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_keywords" */
export enum Flow_Keywords_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowKeywordsPkey = 'flow_keywords_pkey'
}

/** input type for inserting data into table "flow_keywords" */
export type Flow_Keywords_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_Keywords_Max_Fields = {
  __typename?: 'flow_keywords_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "flow_keywords" */
export type Flow_Keywords_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Keywords_Min_Fields = {
  __typename?: 'flow_keywords_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  value?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "flow_keywords" */
export type Flow_Keywords_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_keywords" */
export type Flow_Keywords_Mutation_Response = {
  __typename?: 'flow_keywords_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Keywords>;
};

/** on_conflict condition type for table "flow_keywords" */
export type Flow_Keywords_On_Conflict = {
  constraint: Flow_Keywords_Constraint;
  update_columns?: Array<Flow_Keywords_Update_Column>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_keywords". */
export type Flow_Keywords_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_keywords */
export type Flow_Keywords_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_keywords" */
export enum Flow_Keywords_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "flow_keywords" */
export type Flow_Keywords_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "flow_keywords" */
export enum Flow_Keywords_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "flow_screencast_components" */
export type Flow_Screencast_Components = {
  __typename?: 'flow_screencast_components';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_component: Flow_Components;
  flow_component_value: Flow_Components_Enum;
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "flow_screencast_components" */
export type Flow_Screencast_Components_Aggregate = {
  __typename?: 'flow_screencast_components_aggregate';
  aggregate?: Maybe<Flow_Screencast_Components_Aggregate_Fields>;
  nodes: Array<Flow_Screencast_Components>;
};

/** aggregate fields of "flow_screencast_components" */
export type Flow_Screencast_Components_Aggregate_Fields = {
  __typename?: 'flow_screencast_components_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencast_Components_Max_Fields>;
  min?: Maybe<Flow_Screencast_Components_Min_Fields>;
};


/** aggregate fields of "flow_screencast_components" */
export type Flow_Screencast_Components_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screencast_components" */
export type Flow_Screencast_Components_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screencast_Components_Max_Order_By>;
  min?: InputMaybe<Flow_Screencast_Components_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screencast_components" */
export type Flow_Screencast_Components_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screencast_Components_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencast_Components_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_screencast_components". All fields are combined with a logical 'AND'. */
export type Flow_Screencast_Components_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencast_Components_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencast_Components_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_component?: InputMaybe<Flow_Components_Bool_Exp>;
  flow_component_value?: InputMaybe<Flow_Components_Enum_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencast_components" */
export enum Flow_Screencast_Components_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreencastComponentsPkey1 = 'flow_screencast_components_pkey1'
}

/** input type for inserting data into table "flow_screencast_components" */
export type Flow_Screencast_Components_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_component?: InputMaybe<Flow_Components_Obj_Rel_Insert_Input>;
  flow_component_value?: InputMaybe<Flow_Components_Enum>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Flow_Screencast_Components_Max_Fields = {
  __typename?: 'flow_screencast_components_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "flow_screencast_components" */
export type Flow_Screencast_Components_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screencast_Components_Min_Fields = {
  __typename?: 'flow_screencast_components_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "flow_screencast_components" */
export type Flow_Screencast_Components_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screencast_components" */
export type Flow_Screencast_Components_Mutation_Response = {
  __typename?: 'flow_screencast_components_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencast_Components>;
};

/** on_conflict condition type for table "flow_screencast_components" */
export type Flow_Screencast_Components_On_Conflict = {
  constraint: Flow_Screencast_Components_Constraint;
  update_columns?: Array<Flow_Screencast_Components_Update_Column>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencast_components". */
export type Flow_Screencast_Components_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_component?: InputMaybe<Flow_Components_Order_By>;
  flow_component_value?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencast_components */
export type Flow_Screencast_Components_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencast_components" */
export enum Flow_Screencast_Components_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowComponentValue = 'flow_component_value',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "flow_screencast_components" */
export type Flow_Screencast_Components_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_component_value?: InputMaybe<Flow_Components_Enum>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "flow_screencast_components" */
export enum Flow_Screencast_Components_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowComponentValue = 'flow_component_value',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** columns and relationships of "flow_screencast_details" */
export type Flow_Screencast_Details = {
  __typename?: 'flow_screencast_details';
  app_version?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
  platform_version?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "flow_screencast_details" */
export type Flow_Screencast_Details_Aggregate = {
  __typename?: 'flow_screencast_details_aggregate';
  aggregate?: Maybe<Flow_Screencast_Details_Aggregate_Fields>;
  nodes: Array<Flow_Screencast_Details>;
};

/** aggregate fields of "flow_screencast_details" */
export type Flow_Screencast_Details_Aggregate_Fields = {
  __typename?: 'flow_screencast_details_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencast_Details_Max_Fields>;
  min?: Maybe<Flow_Screencast_Details_Min_Fields>;
};


/** aggregate fields of "flow_screencast_details" */
export type Flow_Screencast_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencast_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "flow_screencast_details". All fields are combined with a logical 'AND'. */
export type Flow_Screencast_Details_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencast_Details_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencast_Details_Bool_Exp>>;
  app_version?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  platform_version?: InputMaybe<String_Comparison_Exp>;
  region?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencast_details" */
export enum Flow_Screencast_Details_Constraint {
  /** unique or primary key constraint on columns "flow_screencast_id" */
  FlowScreencastDetailsFlowScreencastIdKey = 'flow_screencast_details_flow_screencast_id_key',
  /** unique or primary key constraint on columns "id" */
  FlowScreencastDetailsPkey = 'flow_screencast_details_pkey'
}

/** input type for inserting data into table "flow_screencast_details" */
export type Flow_Screencast_Details_Insert_Input = {
  app_version?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  platform_version?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Flow_Screencast_Details_Max_Fields = {
  __typename?: 'flow_screencast_details_max_fields';
  app_version?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  platform_version?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Flow_Screencast_Details_Min_Fields = {
  __typename?: 'flow_screencast_details_min_fields';
  app_version?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  platform_version?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "flow_screencast_details" */
export type Flow_Screencast_Details_Mutation_Response = {
  __typename?: 'flow_screencast_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencast_Details>;
};

/** input type for inserting object relation for remote table "flow_screencast_details" */
export type Flow_Screencast_Details_Obj_Rel_Insert_Input = {
  data: Flow_Screencast_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencast_Details_On_Conflict>;
};

/** on_conflict condition type for table "flow_screencast_details" */
export type Flow_Screencast_Details_On_Conflict = {
  constraint: Flow_Screencast_Details_Constraint;
  update_columns?: Array<Flow_Screencast_Details_Update_Column>;
  where?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencast_details". */
export type Flow_Screencast_Details_Order_By = {
  app_version?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  platform_version?: InputMaybe<Order_By>;
  region?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencast_details */
export type Flow_Screencast_Details_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencast_details" */
export enum Flow_Screencast_Details_Select_Column {
  /** column name */
  AppVersion = 'app_version',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformVersion = 'platform_version',
  /** column name */
  Region = 'region',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "flow_screencast_details" */
export type Flow_Screencast_Details_Set_Input = {
  app_version?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  platform_version?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "flow_screencast_details" */
export enum Flow_Screencast_Details_Update_Column {
  /** column name */
  AppVersion = 'app_version',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  PlatformVersion = 'platform_version',
  /** column name */
  Region = 'region',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "flow_screencast_likes" */
export type Flow_Screencast_Likes = {
  __typename?: 'flow_screencast_likes';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "flow_screencast_likes" */
export type Flow_Screencast_Likes_Aggregate = {
  __typename?: 'flow_screencast_likes_aggregate';
  aggregate?: Maybe<Flow_Screencast_Likes_Aggregate_Fields>;
  nodes: Array<Flow_Screencast_Likes>;
};

/** aggregate fields of "flow_screencast_likes" */
export type Flow_Screencast_Likes_Aggregate_Fields = {
  __typename?: 'flow_screencast_likes_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencast_Likes_Max_Fields>;
  min?: Maybe<Flow_Screencast_Likes_Min_Fields>;
};


/** aggregate fields of "flow_screencast_likes" */
export type Flow_Screencast_Likes_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screencast_Likes_Max_Order_By>;
  min?: InputMaybe<Flow_Screencast_Likes_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screencast_Likes_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencast_Likes_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_screencast_likes". All fields are combined with a logical 'AND'. */
export type Flow_Screencast_Likes_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencast_Likes_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencast_Likes_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencast_likes" */
export enum Flow_Screencast_Likes_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreencastLikesPkey = 'flow_screencast_likes_pkey'
}

/** input type for inserting data into table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Flow_Screencast_Likes_Max_Fields = {
  __typename?: 'flow_screencast_likes_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screencast_Likes_Min_Fields = {
  __typename?: 'flow_screencast_likes_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Mutation_Response = {
  __typename?: 'flow_screencast_likes_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencast_Likes>;
};

/** on_conflict condition type for table "flow_screencast_likes" */
export type Flow_Screencast_Likes_On_Conflict = {
  constraint: Flow_Screencast_Likes_Constraint;
  update_columns?: Array<Flow_Screencast_Likes_Update_Column>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencast_likes". */
export type Flow_Screencast_Likes_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencast_likes */
export type Flow_Screencast_Likes_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencast_likes" */
export enum Flow_Screencast_Likes_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "flow_screencast_likes" */
export type Flow_Screencast_Likes_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "flow_screencast_likes" */
export enum Flow_Screencast_Likes_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps = {
  __typename?: 'flow_screencast_timestamps';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
  timestamp: Scalars['time'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Aggregate = {
  __typename?: 'flow_screencast_timestamps_aggregate';
  aggregate?: Maybe<Flow_Screencast_Timestamps_Aggregate_Fields>;
  nodes: Array<Flow_Screencast_Timestamps>;
};

/** aggregate fields of "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Aggregate_Fields = {
  __typename?: 'flow_screencast_timestamps_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencast_Timestamps_Max_Fields>;
  min?: Maybe<Flow_Screencast_Timestamps_Min_Fields>;
};


/** aggregate fields of "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screencast_Timestamps_Max_Order_By>;
  min?: InputMaybe<Flow_Screencast_Timestamps_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screencast_Timestamps_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencast_Timestamps_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_screencast_timestamps". All fields are combined with a logical 'AND'. */
export type Flow_Screencast_Timestamps_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencast_Timestamps_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencast_Timestamps_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  timestamp?: InputMaybe<Time_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencast_timestamps" */
export enum Flow_Screencast_Timestamps_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreencastTimestampsPkey = 'flow_screencast_timestamps_pkey'
}

/** input type for inserting data into table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  timestamp?: InputMaybe<Scalars['time']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Flow_Screencast_Timestamps_Max_Fields = {
  __typename?: 'flow_screencast_timestamps_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screencast_Timestamps_Min_Fields = {
  __typename?: 'flow_screencast_timestamps_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Mutation_Response = {
  __typename?: 'flow_screencast_timestamps_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencast_Timestamps>;
};

/** on_conflict condition type for table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_On_Conflict = {
  constraint: Flow_Screencast_Timestamps_Constraint;
  update_columns?: Array<Flow_Screencast_Timestamps_Update_Column>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencast_timestamps". */
export type Flow_Screencast_Timestamps_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencast_timestamps */
export type Flow_Screencast_Timestamps_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencast_timestamps" */
export enum Flow_Screencast_Timestamps_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "flow_screencast_timestamps" */
export type Flow_Screencast_Timestamps_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  timestamp?: InputMaybe<Scalars['time']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "flow_screencast_timestamps" */
export enum Flow_Screencast_Timestamps_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "flow_screencasts" */
export type Flow_Screencasts = {
  __typename?: 'flow_screencasts';
  banner_url: Scalars['String'];
  /** An array relationship */
  collection_flows: Array<Collection_Flows>;
  /** An aggregate relationship */
  collection_flows_aggregate: Collection_Flows_Aggregate;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow: Flows;
  flow_id: Scalars['uuid'];
  /** An array relationship */
  flow_screencast_components: Array<Flow_Screencast_Components>;
  /** An aggregate relationship */
  flow_screencast_components_aggregate: Flow_Screencast_Components_Aggregate;
  /** An object relationship */
  flow_screencast_details?: Maybe<Flow_Screencast_Details>;
  /** An array relationship */
  flow_screencast_likes: Array<Flow_Screencast_Likes>;
  /** An aggregate relationship */
  flow_screencast_likes_aggregate: Flow_Screencast_Likes_Aggregate;
  /** An array relationship */
  flow_screencast_timestamps: Array<Flow_Screencast_Timestamps>;
  /** An aggregate relationship */
  flow_screencast_timestamps_aggregate: Flow_Screencast_Timestamps_Aggregate;
  /** An array relationship */
  flow_screencasts_badges: Array<Flow_Screencasts_Badges>;
  /** An aggregate relationship */
  flow_screencasts_badges_aggregate: Flow_Screencasts_Badges_Aggregate;
  id: Scalars['uuid'];
  is_liked?: Maybe<Scalars['Boolean']>;
  /** A computed field, executes function "is_screencast_saved" */
  is_saved?: Maybe<Scalars['Boolean']>;
  screencast_url: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsCollection_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsCollection_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_LikesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_TimestampsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencast_Timestamps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencasts_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


/** columns and relationships of "flow_screencasts" */
export type Flow_ScreencastsFlow_Screencasts_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};

/** aggregated selection of "flow_screencasts" */
export type Flow_Screencasts_Aggregate = {
  __typename?: 'flow_screencasts_aggregate';
  aggregate?: Maybe<Flow_Screencasts_Aggregate_Fields>;
  nodes: Array<Flow_Screencasts>;
};

/** aggregate fields of "flow_screencasts" */
export type Flow_Screencasts_Aggregate_Fields = {
  __typename?: 'flow_screencasts_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencasts_Max_Fields>;
  min?: Maybe<Flow_Screencasts_Min_Fields>;
};


/** aggregate fields of "flow_screencasts" */
export type Flow_Screencasts_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screencasts" */
export type Flow_Screencasts_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screencasts_Max_Order_By>;
  min?: InputMaybe<Flow_Screencasts_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screencasts" */
export type Flow_Screencasts_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screencasts_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencasts_On_Conflict>;
};

/** columns and relationships of "flow_screencasts_badges" */
export type Flow_Screencasts_Badges = {
  __typename?: 'flow_screencasts_badges';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_badge: Flow_Badges;
  flow_badge_value: Flow_Badges_Enum;
  /** An object relationship */
  flow_screencast: Flow_Screencasts;
  flow_screencast_id: Scalars['uuid'];
  id: Scalars['uuid'];
};

/** aggregated selection of "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Aggregate = {
  __typename?: 'flow_screencasts_badges_aggregate';
  aggregate?: Maybe<Flow_Screencasts_Badges_Aggregate_Fields>;
  nodes: Array<Flow_Screencasts_Badges>;
};

/** aggregate fields of "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Aggregate_Fields = {
  __typename?: 'flow_screencasts_badges_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screencasts_Badges_Max_Fields>;
  min?: Maybe<Flow_Screencasts_Badges_Min_Fields>;
};


/** aggregate fields of "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screencasts_Badges_Max_Order_By>;
  min?: InputMaybe<Flow_Screencasts_Badges_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screencasts_Badges_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencasts_Badges_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_screencasts_badges". All fields are combined with a logical 'AND'. */
export type Flow_Screencasts_Badges_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencasts_Badges_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencasts_Badges_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_badge?: InputMaybe<Flow_Badges_Bool_Exp>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum_Comparison_Exp>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screencast_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencasts_badges" */
export enum Flow_Screencasts_Badges_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreencastsBadgesPkey = 'flow_screencasts_badges_pkey'
}

/** input type for inserting data into table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_badge?: InputMaybe<Flow_Badges_Obj_Rel_Insert_Input>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Obj_Rel_Insert_Input>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Flow_Screencasts_Badges_Max_Fields = {
  __typename?: 'flow_screencasts_badges_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screencasts_Badges_Min_Fields = {
  __typename?: 'flow_screencasts_badges_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_screencast_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Mutation_Response = {
  __typename?: 'flow_screencasts_badges_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencasts_Badges>;
};

/** on_conflict condition type for table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_On_Conflict = {
  constraint: Flow_Screencasts_Badges_Constraint;
  update_columns?: Array<Flow_Screencasts_Badges_Update_Column>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencasts_badges". */
export type Flow_Screencasts_Badges_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_badge?: InputMaybe<Flow_Badges_Order_By>;
  flow_badge_value?: InputMaybe<Order_By>;
  flow_screencast?: InputMaybe<Flow_Screencasts_Order_By>;
  flow_screencast_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencasts_badges */
export type Flow_Screencasts_Badges_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencasts_badges" */
export enum Flow_Screencasts_Badges_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowBadgeValue = 'flow_badge_value',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "flow_screencasts_badges" */
export type Flow_Screencasts_Badges_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_badge_value?: InputMaybe<Flow_Badges_Enum>;
  flow_screencast_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "flow_screencasts_badges" */
export enum Flow_Screencasts_Badges_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowBadgeValue = 'flow_badge_value',
  /** column name */
  FlowScreencastId = 'flow_screencast_id',
  /** column name */
  Id = 'id'
}

/** Boolean expression to filter rows from the table "flow_screencasts". All fields are combined with a logical 'AND'. */
export type Flow_Screencasts_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screencasts_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screencasts_Bool_Exp>>;
  banner_url?: InputMaybe<String_Comparison_Exp>;
  collection_flows?: InputMaybe<Collection_Flows_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  flow_screencast_components?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
  flow_screencast_details?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
  flow_screencast_likes?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
  flow_screencast_timestamps?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
  flow_screencasts_badges?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_liked?: InputMaybe<Boolean_Comparison_Exp>;
  is_saved?: InputMaybe<Boolean_Comparison_Exp>;
  screencast_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencasts" */
export enum Flow_Screencasts_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreencastsPkey = 'flow_screencasts_pkey'
}

/** input type for inserting data into table "flow_screencasts" */
export type Flow_Screencasts_Insert_Input = {
  banner_url?: InputMaybe<Scalars['String']>;
  collection_flows?: InputMaybe<Collection_Flows_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  flow_screencast_components?: InputMaybe<Flow_Screencast_Components_Arr_Rel_Insert_Input>;
  flow_screencast_details?: InputMaybe<Flow_Screencast_Details_Obj_Rel_Insert_Input>;
  flow_screencast_likes?: InputMaybe<Flow_Screencast_Likes_Arr_Rel_Insert_Input>;
  flow_screencast_timestamps?: InputMaybe<Flow_Screencast_Timestamps_Arr_Rel_Insert_Input>;
  flow_screencasts_badges?: InputMaybe<Flow_Screencasts_Badges_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  screencast_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Flow_Screencasts_Max_Fields = {
  __typename?: 'flow_screencasts_max_fields';
  banner_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  screencast_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "flow_screencasts" */
export type Flow_Screencasts_Max_Order_By = {
  banner_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  screencast_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screencasts_Min_Fields = {
  __typename?: 'flow_screencasts_min_fields';
  banner_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  screencast_url?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "flow_screencasts" */
export type Flow_Screencasts_Min_Order_By = {
  banner_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  screencast_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screencasts" */
export type Flow_Screencasts_Mutation_Response = {
  __typename?: 'flow_screencasts_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screencasts>;
};

/** input type for inserting object relation for remote table "flow_screencasts" */
export type Flow_Screencasts_Obj_Rel_Insert_Input = {
  data: Flow_Screencasts_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screencasts_On_Conflict>;
};

/** on_conflict condition type for table "flow_screencasts" */
export type Flow_Screencasts_On_Conflict = {
  constraint: Flow_Screencasts_Constraint;
  update_columns?: Array<Flow_Screencasts_Update_Column>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screencasts". */
export type Flow_Screencasts_Order_By = {
  banner_url?: InputMaybe<Order_By>;
  collection_flows_aggregate?: InputMaybe<Collection_Flows_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_id?: InputMaybe<Order_By>;
  flow_screencast_components_aggregate?: InputMaybe<Flow_Screencast_Components_Aggregate_Order_By>;
  flow_screencast_details?: InputMaybe<Flow_Screencast_Details_Order_By>;
  flow_screencast_likes_aggregate?: InputMaybe<Flow_Screencast_Likes_Aggregate_Order_By>;
  flow_screencast_timestamps_aggregate?: InputMaybe<Flow_Screencast_Timestamps_Aggregate_Order_By>;
  flow_screencasts_badges_aggregate?: InputMaybe<Flow_Screencasts_Badges_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_liked?: InputMaybe<Order_By>;
  is_saved?: InputMaybe<Order_By>;
  screencast_url?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screencasts */
export type Flow_Screencasts_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screencasts" */
export enum Flow_Screencasts_Select_Column {
  /** column name */
  BannerUrl = 'banner_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  ScreencastUrl = 'screencast_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "flow_screencasts" */
export type Flow_Screencasts_Set_Input = {
  banner_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  screencast_url?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "flow_screencasts" */
export enum Flow_Screencasts_Update_Column {
  /** column name */
  BannerUrl = 'banner_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  ScreencastUrl = 'screencast_url',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** columns and relationships of "flow_screenshots" */
export type Flow_Screenshots = {
  __typename?: 'flow_screenshots';
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow: Flows;
  flow_id: Scalars['uuid'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  url: Scalars['String'];
};

/** aggregated selection of "flow_screenshots" */
export type Flow_Screenshots_Aggregate = {
  __typename?: 'flow_screenshots_aggregate';
  aggregate?: Maybe<Flow_Screenshots_Aggregate_Fields>;
  nodes: Array<Flow_Screenshots>;
};

/** aggregate fields of "flow_screenshots" */
export type Flow_Screenshots_Aggregate_Fields = {
  __typename?: 'flow_screenshots_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flow_Screenshots_Max_Fields>;
  min?: Maybe<Flow_Screenshots_Min_Fields>;
};


/** aggregate fields of "flow_screenshots" */
export type Flow_Screenshots_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flow_screenshots" */
export type Flow_Screenshots_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flow_Screenshots_Max_Order_By>;
  min?: InputMaybe<Flow_Screenshots_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flow_screenshots" */
export type Flow_Screenshots_Arr_Rel_Insert_Input = {
  data: Array<Flow_Screenshots_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flow_Screenshots_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flow_screenshots". All fields are combined with a logical 'AND'. */
export type Flow_Screenshots_Bool_Exp = {
  _and?: InputMaybe<Array<Flow_Screenshots_Bool_Exp>>;
  _not?: InputMaybe<Flow_Screenshots_Bool_Exp>;
  _or?: InputMaybe<Array<Flow_Screenshots_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow?: InputMaybe<Flows_Bool_Exp>;
  flow_id?: InputMaybe<Uuid_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  url?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screenshots" */
export enum Flow_Screenshots_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowScreenshotsPkey = 'flow_screenshots_pkey'
}

/** input type for inserting data into table "flow_screenshots" */
export type Flow_Screenshots_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow?: InputMaybe<Flows_Obj_Rel_Insert_Input>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Flow_Screenshots_Max_Fields = {
  __typename?: 'flow_screenshots_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "flow_screenshots" */
export type Flow_Screenshots_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flow_Screenshots_Min_Fields = {
  __typename?: 'flow_screenshots_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  flow_id?: Maybe<Scalars['uuid']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  url?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "flow_screenshots" */
export type Flow_Screenshots_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flow_screenshots" */
export type Flow_Screenshots_Mutation_Response = {
  __typename?: 'flow_screenshots_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flow_Screenshots>;
};

/** on_conflict condition type for table "flow_screenshots" */
export type Flow_Screenshots_On_Conflict = {
  constraint: Flow_Screenshots_Constraint;
  update_columns?: Array<Flow_Screenshots_Update_Column>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};

/** Ordering options when selecting data from "flow_screenshots". */
export type Flow_Screenshots_Order_By = {
  created_at?: InputMaybe<Order_By>;
  flow?: InputMaybe<Flows_Order_By>;
  flow_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  url?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flow_screenshots */
export type Flow_Screenshots_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flow_screenshots" */
export enum Flow_Screenshots_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "flow_screenshots" */
export type Flow_Screenshots_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_id?: InputMaybe<Scalars['uuid']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  url?: InputMaybe<Scalars['String']>;
};

/** update columns of table "flow_screenshots" */
export enum Flow_Screenshots_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FlowId = 'flow_id',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  Url = 'url'
}

/** columns and relationships of "flows" */
export type Flows = {
  __typename?: 'flows';
  avatar_background_color?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at: Scalars['timestamptz'];
  /** An object relationship */
  flow_app_info?: Maybe<Flow_App_Info>;
  /** An array relationship */
  flow_attachments: Array<Flow_Attachments>;
  /** An aggregate relationship */
  flow_attachments_aggregate: Flow_Attachments_Aggregate;
  /** An array relationship */
  flow_badge_values: Array<Flow_Badge_Values>;
  /** An aggregate relationship */
  flow_badge_values_aggregate: Flow_Badge_Values_Aggregate;
  /** An array relationship */
  flow_keywords: Array<Flow_Keywords>;
  /** An aggregate relationship */
  flow_keywords_aggregate: Flow_Keywords_Aggregate;
  /** An array relationship */
  flow_screencasts: Array<Flow_Screencasts>;
  /** An aggregate relationship */
  flow_screencasts_aggregate: Flow_Screencasts_Aggregate;
  /** An array relationship */
  flow_screenshots: Array<Flow_Screenshots>;
  /** An aggregate relationship */
  flow_screenshots_aggregate: Flow_Screenshots_Aggregate;
  id: Scalars['uuid'];
  is_draft: Scalars['Boolean'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};


/** columns and relationships of "flows" */
export type FlowsFlow_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Badge_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Badge_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_ScreencastsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Screencasts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_ScreenshotsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};


/** columns and relationships of "flows" */
export type FlowsFlow_Screenshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};

/** aggregated selection of "flows" */
export type Flows_Aggregate = {
  __typename?: 'flows_aggregate';
  aggregate?: Maybe<Flows_Aggregate_Fields>;
  nodes: Array<Flows>;
};

/** aggregate fields of "flows" */
export type Flows_Aggregate_Fields = {
  __typename?: 'flows_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Flows_Max_Fields>;
  min?: Maybe<Flows_Min_Fields>;
};


/** aggregate fields of "flows" */
export type Flows_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Flows_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "flows" */
export type Flows_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Flows_Max_Order_By>;
  min?: InputMaybe<Flows_Min_Order_By>;
};

/** input type for inserting array relation for remote table "flows" */
export type Flows_Arr_Rel_Insert_Input = {
  data: Array<Flows_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Flows_On_Conflict>;
};

/** Boolean expression to filter rows from the table "flows". All fields are combined with a logical 'AND'. */
export type Flows_Bool_Exp = {
  _and?: InputMaybe<Array<Flows_Bool_Exp>>;
  _not?: InputMaybe<Flows_Bool_Exp>;
  _or?: InputMaybe<Array<Flows_Bool_Exp>>;
  avatar_background_color?: InputMaybe<String_Comparison_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  flow_app_info?: InputMaybe<Flow_App_Info_Bool_Exp>;
  flow_attachments?: InputMaybe<Flow_Attachments_Bool_Exp>;
  flow_badge_values?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
  flow_keywords?: InputMaybe<Flow_Keywords_Bool_Exp>;
  flow_screencasts?: InputMaybe<Flow_Screencasts_Bool_Exp>;
  flow_screenshots?: InputMaybe<Flow_Screenshots_Bool_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_draft?: InputMaybe<Boolean_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "flows" */
export enum Flows_Constraint {
  /** unique or primary key constraint on columns "id" */
  FlowsPkey = 'flows_pkey'
}

/** input type for inserting data into table "flows" */
export type Flows_Insert_Input = {
  avatar_background_color?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_app_info?: InputMaybe<Flow_App_Info_Obj_Rel_Insert_Input>;
  flow_attachments?: InputMaybe<Flow_Attachments_Arr_Rel_Insert_Input>;
  flow_badge_values?: InputMaybe<Flow_Badge_Values_Arr_Rel_Insert_Input>;
  flow_keywords?: InputMaybe<Flow_Keywords_Arr_Rel_Insert_Input>;
  flow_screencasts?: InputMaybe<Flow_Screencasts_Arr_Rel_Insert_Input>;
  flow_screenshots?: InputMaybe<Flow_Screenshots_Arr_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['uuid']>;
  is_draft?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Flows_Max_Fields = {
  __typename?: 'flows_max_fields';
  avatar_background_color?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "flows" */
export type Flows_Max_Order_By = {
  avatar_background_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Flows_Min_Fields = {
  __typename?: 'flows_min_fields';
  avatar_background_color?: Maybe<Scalars['String']>;
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "flows" */
export type Flows_Min_Order_By = {
  avatar_background_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "flows" */
export type Flows_Mutation_Response = {
  __typename?: 'flows_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Flows>;
};

/** input type for inserting object relation for remote table "flows" */
export type Flows_Obj_Rel_Insert_Input = {
  data: Flows_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Flows_On_Conflict>;
};

/** on_conflict condition type for table "flows" */
export type Flows_On_Conflict = {
  constraint: Flows_Constraint;
  update_columns?: Array<Flows_Update_Column>;
  where?: InputMaybe<Flows_Bool_Exp>;
};

/** Ordering options when selecting data from "flows". */
export type Flows_Order_By = {
  avatar_background_color?: InputMaybe<Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  flow_app_info?: InputMaybe<Flow_App_Info_Order_By>;
  flow_attachments_aggregate?: InputMaybe<Flow_Attachments_Aggregate_Order_By>;
  flow_badge_values_aggregate?: InputMaybe<Flow_Badge_Values_Aggregate_Order_By>;
  flow_keywords_aggregate?: InputMaybe<Flow_Keywords_Aggregate_Order_By>;
  flow_screencasts_aggregate?: InputMaybe<Flow_Screencasts_Aggregate_Order_By>;
  flow_screenshots_aggregate?: InputMaybe<Flow_Screenshots_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  is_draft?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: flows */
export type Flows_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "flows" */
export enum Flows_Select_Column {
  /** column name */
  AvatarBackgroundColor = 'avatar_background_color',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDraft = 'is_draft',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "flows" */
export type Flows_Set_Input = {
  avatar_background_color?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  is_draft?: InputMaybe<Scalars['Boolean']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "flows" */
export enum Flows_Update_Column {
  /** column name */
  AvatarBackgroundColor = 'avatar_background_color',
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  IsDraft = 'is_draft',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "invites" */
export type Invites = {
  __typename?: 'invites';
  created_at: Scalars['timestamptz'];
  email?: Maybe<Scalars['String']>;
  expires_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: Roles;
  ticket?: Maybe<Scalars['uuid']>;
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "invites" */
export type Invites_Aggregate = {
  __typename?: 'invites_aggregate';
  aggregate?: Maybe<Invites_Aggregate_Fields>;
  nodes: Array<Invites>;
};

/** aggregate fields of "invites" */
export type Invites_Aggregate_Fields = {
  __typename?: 'invites_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Invites_Max_Fields>;
  min?: Maybe<Invites_Min_Fields>;
};


/** aggregate fields of "invites" */
export type Invites_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Invites_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "invites" */
export type Invites_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Invites_Max_Order_By>;
  min?: InputMaybe<Invites_Min_Order_By>;
};

/** input type for inserting array relation for remote table "invites" */
export type Invites_Arr_Rel_Insert_Input = {
  data: Array<Invites_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};

/** Boolean expression to filter rows from the table "invites". All fields are combined with a logical 'AND'. */
export type Invites_Bool_Exp = {
  _and?: InputMaybe<Array<Invites_Bool_Exp>>;
  _not?: InputMaybe<Invites_Bool_Exp>;
  _or?: InputMaybe<Array<Invites_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  roleByRole?: InputMaybe<Roles_Bool_Exp>;
  ticket?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "invites" */
export enum Invites_Constraint {
  /** unique or primary key constraint on columns "email" */
  InvitesEmailUnique = 'invites_email_unique',
  /** unique or primary key constraint on columns "id" */
  InvitesPkey = 'invites_pkey',
  /** unique or primary key constraint on columns "ticket" */
  InvitesTicketUnique = 'invites_ticket_unique'
}

/** input type for inserting data into table "invites" */
export type Invites_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<Roles_Obj_Rel_Insert_Input>;
  ticket?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type Invites_Max_Fields = {
  __typename?: 'invites_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "invites" */
export type Invites_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Invites_Min_Fields = {
  __typename?: 'invites_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  email?: Maybe<Scalars['String']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "invites" */
export type Invites_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  ticket?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "invites" */
export type Invites_Mutation_Response = {
  __typename?: 'invites_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Invites>;
};

/** on_conflict condition type for table "invites" */
export type Invites_On_Conflict = {
  constraint: Invites_Constraint;
  update_columns?: Array<Invites_Update_Column>;
  where?: InputMaybe<Invites_Bool_Exp>;
};

/** Ordering options when selecting data from "invites". */
export type Invites_Order_By = {
  created_at?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  roleByRole?: InputMaybe<Roles_Order_By>;
  ticket?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: invites */
export type Invites_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "invites" */
export enum Invites_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "invites" */
export type Invites_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  email?: InputMaybe<Scalars['String']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  ticket?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "invites" */
export enum Invites_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Email = 'email',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Is_Screencast_In_Collection_Collections_Args = {
  screencast_id?: InputMaybe<Scalars['uuid']>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** Chagne password for authenticated user */
  change_password?: Maybe<SuccessResponse>;
  /** delete data from the table: "account_roles" */
  delete_account_roles?: Maybe<Account_Roles_Mutation_Response>;
  /** delete single row from the table: "account_roles" */
  delete_account_roles_by_pk?: Maybe<Account_Roles>;
  /** delete data from the table: "accounts" */
  delete_accounts?: Maybe<Accounts_Mutation_Response>;
  /** delete single row from the table: "accounts" */
  delete_accounts_by_pk?: Maybe<Accounts>;
  /** delete data from the table: "collection_badges" */
  delete_collection_badges?: Maybe<Collection_Badges_Mutation_Response>;
  /** delete single row from the table: "collection_badges" */
  delete_collection_badges_by_pk?: Maybe<Collection_Badges>;
  /** delete data from the table: "collection_flows" */
  delete_collection_flows?: Maybe<Collection_Flows_Mutation_Response>;
  /** delete single row from the table: "collection_flows" */
  delete_collection_flows_by_pk?: Maybe<Collection_Flows>;
  /** delete data from the table: "collection_visibility" */
  delete_collection_visibility?: Maybe<Collection_Visibility_Mutation_Response>;
  /** delete single row from the table: "collection_visibility" */
  delete_collection_visibility_by_pk?: Maybe<Collection_Visibility>;
  /** delete data from the table: "collections" */
  delete_collections?: Maybe<Collections_Mutation_Response>;
  /** delete single row from the table: "collections" */
  delete_collections_by_pk?: Maybe<Collections>;
  /** delete data from the table: "flow_app_info" */
  delete_flow_app_info?: Maybe<Flow_App_Info_Mutation_Response>;
  /** delete single row from the table: "flow_app_info" */
  delete_flow_app_info_by_pk?: Maybe<Flow_App_Info>;
  /** delete data from the table: "flow_attachments" */
  delete_flow_attachments?: Maybe<Flow_Attachments_Mutation_Response>;
  /** delete single row from the table: "flow_attachments" */
  delete_flow_attachments_by_pk?: Maybe<Flow_Attachments>;
  /** delete data from the table: "flow_badge_values" */
  delete_flow_badge_values?: Maybe<Flow_Badge_Values_Mutation_Response>;
  /** delete single row from the table: "flow_badge_values" */
  delete_flow_badge_values_by_pk?: Maybe<Flow_Badge_Values>;
  /** delete data from the table: "flow_badges" */
  delete_flow_badges?: Maybe<Flow_Badges_Mutation_Response>;
  /** delete single row from the table: "flow_badges" */
  delete_flow_badges_by_pk?: Maybe<Flow_Badges>;
  /** delete data from the table: "flow_components" */
  delete_flow_components?: Maybe<Flow_Components_Mutation_Response>;
  /** delete single row from the table: "flow_components" */
  delete_flow_components_by_pk?: Maybe<Flow_Components>;
  /** delete data from the table: "flow_keywords" */
  delete_flow_keywords?: Maybe<Flow_Keywords_Mutation_Response>;
  /** delete single row from the table: "flow_keywords" */
  delete_flow_keywords_by_pk?: Maybe<Flow_Keywords>;
  /** delete data from the table: "flow_screencast_components" */
  delete_flow_screencast_components?: Maybe<Flow_Screencast_Components_Mutation_Response>;
  /** delete single row from the table: "flow_screencast_components" */
  delete_flow_screencast_components_by_pk?: Maybe<Flow_Screencast_Components>;
  /** delete data from the table: "flow_screencast_details" */
  delete_flow_screencast_details?: Maybe<Flow_Screencast_Details_Mutation_Response>;
  /** delete single row from the table: "flow_screencast_details" */
  delete_flow_screencast_details_by_pk?: Maybe<Flow_Screencast_Details>;
  /** delete data from the table: "flow_screencast_likes" */
  delete_flow_screencast_likes?: Maybe<Flow_Screencast_Likes_Mutation_Response>;
  /** delete single row from the table: "flow_screencast_likes" */
  delete_flow_screencast_likes_by_pk?: Maybe<Flow_Screencast_Likes>;
  /** delete data from the table: "flow_screencast_timestamps" */
  delete_flow_screencast_timestamps?: Maybe<Flow_Screencast_Timestamps_Mutation_Response>;
  /** delete single row from the table: "flow_screencast_timestamps" */
  delete_flow_screencast_timestamps_by_pk?: Maybe<Flow_Screencast_Timestamps>;
  /** delete data from the table: "flow_screencasts" */
  delete_flow_screencasts?: Maybe<Flow_Screencasts_Mutation_Response>;
  /** delete data from the table: "flow_screencasts_badges" */
  delete_flow_screencasts_badges?: Maybe<Flow_Screencasts_Badges_Mutation_Response>;
  /** delete single row from the table: "flow_screencasts_badges" */
  delete_flow_screencasts_badges_by_pk?: Maybe<Flow_Screencasts_Badges>;
  /** delete single row from the table: "flow_screencasts" */
  delete_flow_screencasts_by_pk?: Maybe<Flow_Screencasts>;
  /** delete data from the table: "flow_screenshots" */
  delete_flow_screenshots?: Maybe<Flow_Screenshots_Mutation_Response>;
  /** delete single row from the table: "flow_screenshots" */
  delete_flow_screenshots_by_pk?: Maybe<Flow_Screenshots>;
  /** delete data from the table: "flows" */
  delete_flows?: Maybe<Flows_Mutation_Response>;
  /** delete single row from the table: "flows" */
  delete_flows_by_pk?: Maybe<Flows>;
  /** delete data from the table: "invites" */
  delete_invites?: Maybe<Invites_Mutation_Response>;
  /** delete single row from the table: "invites" */
  delete_invites_by_pk?: Maybe<Invites>;
  /** delete data from the table: "payment_providers" */
  delete_payment_providers?: Maybe<Payment_Providers_Mutation_Response>;
  /** delete single row from the table: "payment_providers" */
  delete_payment_providers_by_pk?: Maybe<Payment_Providers>;
  /** delete data from the table: "refresh_tokens" */
  delete_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** delete single row from the table: "refresh_tokens" */
  delete_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** delete data from the table: "roles" */
  delete_roles?: Maybe<Roles_Mutation_Response>;
  /** delete single row from the table: "roles" */
  delete_roles_by_pk?: Maybe<Roles>;
  /** delete data from the table: "subscription_plan_types" */
  delete_subscription_plan_types?: Maybe<Subscription_Plan_Types_Mutation_Response>;
  /** delete single row from the table: "subscription_plan_types" */
  delete_subscription_plan_types_by_pk?: Maybe<Subscription_Plan_Types>;
  /** delete data from the table: "subscription_plans" */
  delete_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** delete single row from the table: "subscription_plans" */
  delete_subscription_plans_by_pk?: Maybe<Subscription_Plans>;
  /** delete data from the table: "user_checkout_sessions" */
  delete_user_checkout_sessions?: Maybe<User_Checkout_Sessions_Mutation_Response>;
  /** delete single row from the table: "user_checkout_sessions" */
  delete_user_checkout_sessions_by_pk?: Maybe<User_Checkout_Sessions>;
  /** delete data from the table: "user_subscription_card_details" */
  delete_user_subscription_card_details?: Maybe<User_Subscription_Card_Details_Mutation_Response>;
  /** delete single row from the table: "user_subscription_card_details" */
  delete_user_subscription_card_details_by_pk?: Maybe<User_Subscription_Card_Details>;
  /** delete data from the table: "user_subscriptions" */
  delete_user_subscriptions?: Maybe<User_Subscriptions_Mutation_Response>;
  /** delete single row from the table: "user_subscriptions" */
  delete_user_subscriptions_by_pk?: Maybe<User_Subscriptions>;
  /** delete data from the table: "users" */
  delete_users?: Maybe<Users_Mutation_Response>;
  /** delete single row from the table: "users" */
  delete_users_by_pk?: Maybe<Users>;
  /** insert data into the table: "account_roles" */
  insert_account_roles?: Maybe<Account_Roles_Mutation_Response>;
  /** insert a single row into the table: "account_roles" */
  insert_account_roles_one?: Maybe<Account_Roles>;
  /** insert data into the table: "accounts" */
  insert_accounts?: Maybe<Accounts_Mutation_Response>;
  /** insert a single row into the table: "accounts" */
  insert_accounts_one?: Maybe<Accounts>;
  /** insert data into the table: "collection_badges" */
  insert_collection_badges?: Maybe<Collection_Badges_Mutation_Response>;
  /** insert a single row into the table: "collection_badges" */
  insert_collection_badges_one?: Maybe<Collection_Badges>;
  /** insert data into the table: "collection_flows" */
  insert_collection_flows?: Maybe<Collection_Flows_Mutation_Response>;
  /** insert a single row into the table: "collection_flows" */
  insert_collection_flows_one?: Maybe<Collection_Flows>;
  /** insert data into the table: "collection_visibility" */
  insert_collection_visibility?: Maybe<Collection_Visibility_Mutation_Response>;
  /** insert a single row into the table: "collection_visibility" */
  insert_collection_visibility_one?: Maybe<Collection_Visibility>;
  /** insert data into the table: "collections" */
  insert_collections?: Maybe<Collections_Mutation_Response>;
  /** insert a single row into the table: "collections" */
  insert_collections_one?: Maybe<Collections>;
  /** insert data into the table: "flow_app_info" */
  insert_flow_app_info?: Maybe<Flow_App_Info_Mutation_Response>;
  /** insert a single row into the table: "flow_app_info" */
  insert_flow_app_info_one?: Maybe<Flow_App_Info>;
  /** insert data into the table: "flow_attachments" */
  insert_flow_attachments?: Maybe<Flow_Attachments_Mutation_Response>;
  /** insert a single row into the table: "flow_attachments" */
  insert_flow_attachments_one?: Maybe<Flow_Attachments>;
  /** insert data into the table: "flow_badge_values" */
  insert_flow_badge_values?: Maybe<Flow_Badge_Values_Mutation_Response>;
  /** insert a single row into the table: "flow_badge_values" */
  insert_flow_badge_values_one?: Maybe<Flow_Badge_Values>;
  /** insert data into the table: "flow_badges" */
  insert_flow_badges?: Maybe<Flow_Badges_Mutation_Response>;
  /** insert a single row into the table: "flow_badges" */
  insert_flow_badges_one?: Maybe<Flow_Badges>;
  /** insert data into the table: "flow_components" */
  insert_flow_components?: Maybe<Flow_Components_Mutation_Response>;
  /** insert a single row into the table: "flow_components" */
  insert_flow_components_one?: Maybe<Flow_Components>;
  /** insert data into the table: "flow_keywords" */
  insert_flow_keywords?: Maybe<Flow_Keywords_Mutation_Response>;
  /** insert a single row into the table: "flow_keywords" */
  insert_flow_keywords_one?: Maybe<Flow_Keywords>;
  /** insert data into the table: "flow_screencast_components" */
  insert_flow_screencast_components?: Maybe<Flow_Screencast_Components_Mutation_Response>;
  /** insert a single row into the table: "flow_screencast_components" */
  insert_flow_screencast_components_one?: Maybe<Flow_Screencast_Components>;
  /** insert data into the table: "flow_screencast_details" */
  insert_flow_screencast_details?: Maybe<Flow_Screencast_Details_Mutation_Response>;
  /** insert a single row into the table: "flow_screencast_details" */
  insert_flow_screencast_details_one?: Maybe<Flow_Screencast_Details>;
  /** insert data into the table: "flow_screencast_likes" */
  insert_flow_screencast_likes?: Maybe<Flow_Screencast_Likes_Mutation_Response>;
  /** insert a single row into the table: "flow_screencast_likes" */
  insert_flow_screencast_likes_one?: Maybe<Flow_Screencast_Likes>;
  /** insert data into the table: "flow_screencast_timestamps" */
  insert_flow_screencast_timestamps?: Maybe<Flow_Screencast_Timestamps_Mutation_Response>;
  /** insert a single row into the table: "flow_screencast_timestamps" */
  insert_flow_screencast_timestamps_one?: Maybe<Flow_Screencast_Timestamps>;
  /** insert data into the table: "flow_screencasts" */
  insert_flow_screencasts?: Maybe<Flow_Screencasts_Mutation_Response>;
  /** insert data into the table: "flow_screencasts_badges" */
  insert_flow_screencasts_badges?: Maybe<Flow_Screencasts_Badges_Mutation_Response>;
  /** insert a single row into the table: "flow_screencasts_badges" */
  insert_flow_screencasts_badges_one?: Maybe<Flow_Screencasts_Badges>;
  /** insert a single row into the table: "flow_screencasts" */
  insert_flow_screencasts_one?: Maybe<Flow_Screencasts>;
  /** insert data into the table: "flow_screenshots" */
  insert_flow_screenshots?: Maybe<Flow_Screenshots_Mutation_Response>;
  /** insert a single row into the table: "flow_screenshots" */
  insert_flow_screenshots_one?: Maybe<Flow_Screenshots>;
  /** insert data into the table: "flows" */
  insert_flows?: Maybe<Flows_Mutation_Response>;
  /** insert a single row into the table: "flows" */
  insert_flows_one?: Maybe<Flows>;
  /** insert data into the table: "invites" */
  insert_invites?: Maybe<Invites_Mutation_Response>;
  /** insert a single row into the table: "invites" */
  insert_invites_one?: Maybe<Invites>;
  /** insert data into the table: "payment_providers" */
  insert_payment_providers?: Maybe<Payment_Providers_Mutation_Response>;
  /** insert a single row into the table: "payment_providers" */
  insert_payment_providers_one?: Maybe<Payment_Providers>;
  /** insert data into the table: "refresh_tokens" */
  insert_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** insert a single row into the table: "refresh_tokens" */
  insert_refresh_tokens_one?: Maybe<Refresh_Tokens>;
  /** insert data into the table: "roles" */
  insert_roles?: Maybe<Roles_Mutation_Response>;
  /** insert a single row into the table: "roles" */
  insert_roles_one?: Maybe<Roles>;
  /** insert data into the table: "subscription_plan_types" */
  insert_subscription_plan_types?: Maybe<Subscription_Plan_Types_Mutation_Response>;
  /** insert a single row into the table: "subscription_plan_types" */
  insert_subscription_plan_types_one?: Maybe<Subscription_Plan_Types>;
  /** insert data into the table: "subscription_plans" */
  insert_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** insert a single row into the table: "subscription_plans" */
  insert_subscription_plans_one?: Maybe<Subscription_Plans>;
  /** insert data into the table: "user_checkout_sessions" */
  insert_user_checkout_sessions?: Maybe<User_Checkout_Sessions_Mutation_Response>;
  /** insert a single row into the table: "user_checkout_sessions" */
  insert_user_checkout_sessions_one?: Maybe<User_Checkout_Sessions>;
  /** insert data into the table: "user_subscription_card_details" */
  insert_user_subscription_card_details?: Maybe<User_Subscription_Card_Details_Mutation_Response>;
  /** insert a single row into the table: "user_subscription_card_details" */
  insert_user_subscription_card_details_one?: Maybe<User_Subscription_Card_Details>;
  /** insert data into the table: "user_subscriptions" */
  insert_user_subscriptions?: Maybe<User_Subscriptions_Mutation_Response>;
  /** insert a single row into the table: "user_subscriptions" */
  insert_user_subscriptions_one?: Maybe<User_Subscriptions>;
  /** insert data into the table: "users" */
  insert_users?: Maybe<Users_Mutation_Response>;
  /** insert a single row into the table: "users" */
  insert_users_one?: Maybe<Users>;
  invite: SuccessResponse;
  login?: Maybe<JwtResponse>;
  register?: Maybe<JwtResponse>;
  request_reset_password?: Maybe<SuccessResponse>;
  reset_password?: Maybe<JwtResponse>;
  /** update data of the table: "account_roles" */
  update_account_roles?: Maybe<Account_Roles_Mutation_Response>;
  /** update single row of the table: "account_roles" */
  update_account_roles_by_pk?: Maybe<Account_Roles>;
  /** update data of the table: "accounts" */
  update_accounts?: Maybe<Accounts_Mutation_Response>;
  /** update single row of the table: "accounts" */
  update_accounts_by_pk?: Maybe<Accounts>;
  /** update data of the table: "collection_badges" */
  update_collection_badges?: Maybe<Collection_Badges_Mutation_Response>;
  /** update single row of the table: "collection_badges" */
  update_collection_badges_by_pk?: Maybe<Collection_Badges>;
  /** update data of the table: "collection_flows" */
  update_collection_flows?: Maybe<Collection_Flows_Mutation_Response>;
  /** update single row of the table: "collection_flows" */
  update_collection_flows_by_pk?: Maybe<Collection_Flows>;
  /** update data of the table: "collection_visibility" */
  update_collection_visibility?: Maybe<Collection_Visibility_Mutation_Response>;
  /** update single row of the table: "collection_visibility" */
  update_collection_visibility_by_pk?: Maybe<Collection_Visibility>;
  /** update data of the table: "collections" */
  update_collections?: Maybe<Collections_Mutation_Response>;
  /** update single row of the table: "collections" */
  update_collections_by_pk?: Maybe<Collections>;
  /** update data of the table: "flow_app_info" */
  update_flow_app_info?: Maybe<Flow_App_Info_Mutation_Response>;
  /** update single row of the table: "flow_app_info" */
  update_flow_app_info_by_pk?: Maybe<Flow_App_Info>;
  /** update data of the table: "flow_attachments" */
  update_flow_attachments?: Maybe<Flow_Attachments_Mutation_Response>;
  /** update single row of the table: "flow_attachments" */
  update_flow_attachments_by_pk?: Maybe<Flow_Attachments>;
  /** update data of the table: "flow_badge_values" */
  update_flow_badge_values?: Maybe<Flow_Badge_Values_Mutation_Response>;
  /** update single row of the table: "flow_badge_values" */
  update_flow_badge_values_by_pk?: Maybe<Flow_Badge_Values>;
  /** update data of the table: "flow_badges" */
  update_flow_badges?: Maybe<Flow_Badges_Mutation_Response>;
  /** update single row of the table: "flow_badges" */
  update_flow_badges_by_pk?: Maybe<Flow_Badges>;
  /** update data of the table: "flow_components" */
  update_flow_components?: Maybe<Flow_Components_Mutation_Response>;
  /** update single row of the table: "flow_components" */
  update_flow_components_by_pk?: Maybe<Flow_Components>;
  /** update data of the table: "flow_keywords" */
  update_flow_keywords?: Maybe<Flow_Keywords_Mutation_Response>;
  /** update single row of the table: "flow_keywords" */
  update_flow_keywords_by_pk?: Maybe<Flow_Keywords>;
  /** update data of the table: "flow_screencast_components" */
  update_flow_screencast_components?: Maybe<Flow_Screencast_Components_Mutation_Response>;
  /** update single row of the table: "flow_screencast_components" */
  update_flow_screencast_components_by_pk?: Maybe<Flow_Screencast_Components>;
  /** update data of the table: "flow_screencast_details" */
  update_flow_screencast_details?: Maybe<Flow_Screencast_Details_Mutation_Response>;
  /** update single row of the table: "flow_screencast_details" */
  update_flow_screencast_details_by_pk?: Maybe<Flow_Screencast_Details>;
  /** update data of the table: "flow_screencast_likes" */
  update_flow_screencast_likes?: Maybe<Flow_Screencast_Likes_Mutation_Response>;
  /** update single row of the table: "flow_screencast_likes" */
  update_flow_screencast_likes_by_pk?: Maybe<Flow_Screencast_Likes>;
  /** update data of the table: "flow_screencast_timestamps" */
  update_flow_screencast_timestamps?: Maybe<Flow_Screencast_Timestamps_Mutation_Response>;
  /** update single row of the table: "flow_screencast_timestamps" */
  update_flow_screencast_timestamps_by_pk?: Maybe<Flow_Screencast_Timestamps>;
  /** update data of the table: "flow_screencasts" */
  update_flow_screencasts?: Maybe<Flow_Screencasts_Mutation_Response>;
  /** update data of the table: "flow_screencasts_badges" */
  update_flow_screencasts_badges?: Maybe<Flow_Screencasts_Badges_Mutation_Response>;
  /** update single row of the table: "flow_screencasts_badges" */
  update_flow_screencasts_badges_by_pk?: Maybe<Flow_Screencasts_Badges>;
  /** update single row of the table: "flow_screencasts" */
  update_flow_screencasts_by_pk?: Maybe<Flow_Screencasts>;
  /** update data of the table: "flow_screenshots" */
  update_flow_screenshots?: Maybe<Flow_Screenshots_Mutation_Response>;
  /** update single row of the table: "flow_screenshots" */
  update_flow_screenshots_by_pk?: Maybe<Flow_Screenshots>;
  /** update data of the table: "flows" */
  update_flows?: Maybe<Flows_Mutation_Response>;
  /** update single row of the table: "flows" */
  update_flows_by_pk?: Maybe<Flows>;
  /** update data of the table: "invites" */
  update_invites?: Maybe<Invites_Mutation_Response>;
  /** update single row of the table: "invites" */
  update_invites_by_pk?: Maybe<Invites>;
  /** update data of the table: "payment_providers" */
  update_payment_providers?: Maybe<Payment_Providers_Mutation_Response>;
  /** update single row of the table: "payment_providers" */
  update_payment_providers_by_pk?: Maybe<Payment_Providers>;
  /** update data of the table: "refresh_tokens" */
  update_refresh_tokens?: Maybe<Refresh_Tokens_Mutation_Response>;
  /** update single row of the table: "refresh_tokens" */
  update_refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** update data of the table: "roles" */
  update_roles?: Maybe<Roles_Mutation_Response>;
  /** update single row of the table: "roles" */
  update_roles_by_pk?: Maybe<Roles>;
  /** update data of the table: "subscription_plan_types" */
  update_subscription_plan_types?: Maybe<Subscription_Plan_Types_Mutation_Response>;
  /** update single row of the table: "subscription_plan_types" */
  update_subscription_plan_types_by_pk?: Maybe<Subscription_Plan_Types>;
  /** update data of the table: "subscription_plans" */
  update_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** update single row of the table: "subscription_plans" */
  update_subscription_plans_by_pk?: Maybe<Subscription_Plans>;
  /** update data of the table: "user_checkout_sessions" */
  update_user_checkout_sessions?: Maybe<User_Checkout_Sessions_Mutation_Response>;
  /** update single row of the table: "user_checkout_sessions" */
  update_user_checkout_sessions_by_pk?: Maybe<User_Checkout_Sessions>;
  /** update data of the table: "user_subscription_card_details" */
  update_user_subscription_card_details?: Maybe<User_Subscription_Card_Details_Mutation_Response>;
  /** update single row of the table: "user_subscription_card_details" */
  update_user_subscription_card_details_by_pk?: Maybe<User_Subscription_Card_Details>;
  /** update data of the table: "user_subscriptions" */
  update_user_subscriptions?: Maybe<User_Subscriptions_Mutation_Response>;
  /** update single row of the table: "user_subscriptions" */
  update_user_subscriptions_by_pk?: Maybe<User_Subscriptions>;
  /** update data of the table: "users" */
  update_users?: Maybe<Users_Mutation_Response>;
  /** update single row of the table: "users" */
  update_users_by_pk?: Maybe<Users>;
};


/** mutation root */
export type Mutation_RootChange_PasswordArgs = {
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Account_RolesArgs = {
  where: Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_AccountsArgs = {
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Accounts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Collection_BadgesArgs = {
  where: Collection_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collection_Badges_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Collection_FlowsArgs = {
  where: Collection_Flows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collection_Flows_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Collection_VisibilityArgs = {
  where: Collection_Visibility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collection_Visibility_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CollectionsArgs = {
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Collections_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_App_InfoArgs = {
  where: Flow_App_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_App_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_AttachmentsArgs = {
  where: Flow_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Badge_ValuesArgs = {
  where: Flow_Badge_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Badge_Values_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_BadgesArgs = {
  where: Flow_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Badges_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_ComponentsArgs = {
  where: Flow_Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Components_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_KeywordsArgs = {
  where: Flow_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Keywords_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_ComponentsArgs = {
  where: Flow_Screencast_Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_Components_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_DetailsArgs = {
  where: Flow_Screencast_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_LikesArgs = {
  where: Flow_Screencast_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_Likes_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_TimestampsArgs = {
  where: Flow_Screencast_Timestamps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencast_Timestamps_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_ScreencastsArgs = {
  where: Flow_Screencasts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencasts_BadgesArgs = {
  where: Flow_Screencasts_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencasts_Badges_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screencasts_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Flow_ScreenshotsArgs = {
  where: Flow_Screenshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flow_Screenshots_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_FlowsArgs = {
  where: Flows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Flows_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_InvitesArgs = {
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Invites_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_Payment_ProvidersArgs = {
  where: Payment_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Payment_Providers_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Refresh_TokensArgs = {
  where: Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Refresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_RolesArgs = {
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Roles_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plan_TypesArgs = {
  where: Subscription_Plan_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plan_Types_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Subscription_PlansArgs = {
  where: Subscription_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plans_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Checkout_SessionsArgs = {
  where: User_Checkout_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Checkout_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_Subscription_Card_DetailsArgs = {
  where: User_Subscription_Card_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Subscription_Card_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_User_SubscriptionsArgs = {
  where: User_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UsersArgs = {
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Users_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_Account_RolesArgs = {
  objects: Array<Account_Roles_Insert_Input>;
  on_conflict?: InputMaybe<Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_Roles_OneArgs = {
  object: Account_Roles_Insert_Input;
  on_conflict?: InputMaybe<Account_Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_AccountsArgs = {
  objects: Array<Accounts_Insert_Input>;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Accounts_OneArgs = {
  object: Accounts_Insert_Input;
  on_conflict?: InputMaybe<Accounts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_BadgesArgs = {
  objects: Array<Collection_Badges_Insert_Input>;
  on_conflict?: InputMaybe<Collection_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_Badges_OneArgs = {
  object: Collection_Badges_Insert_Input;
  on_conflict?: InputMaybe<Collection_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_FlowsArgs = {
  objects: Array<Collection_Flows_Insert_Input>;
  on_conflict?: InputMaybe<Collection_Flows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_Flows_OneArgs = {
  object: Collection_Flows_Insert_Input;
  on_conflict?: InputMaybe<Collection_Flows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_VisibilityArgs = {
  objects: Array<Collection_Visibility_Insert_Input>;
  on_conflict?: InputMaybe<Collection_Visibility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collection_Visibility_OneArgs = {
  object: Collection_Visibility_Insert_Input;
  on_conflict?: InputMaybe<Collection_Visibility_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CollectionsArgs = {
  objects: Array<Collections_Insert_Input>;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Collections_OneArgs = {
  object: Collections_Insert_Input;
  on_conflict?: InputMaybe<Collections_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_App_InfoArgs = {
  objects: Array<Flow_App_Info_Insert_Input>;
  on_conflict?: InputMaybe<Flow_App_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_App_Info_OneArgs = {
  object: Flow_App_Info_Insert_Input;
  on_conflict?: InputMaybe<Flow_App_Info_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_AttachmentsArgs = {
  objects: Array<Flow_Attachments_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Attachments_OneArgs = {
  object: Flow_Attachments_Insert_Input;
  on_conflict?: InputMaybe<Flow_Attachments_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Badge_ValuesArgs = {
  objects: Array<Flow_Badge_Values_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Badge_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Badge_Values_OneArgs = {
  object: Flow_Badge_Values_Insert_Input;
  on_conflict?: InputMaybe<Flow_Badge_Values_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_BadgesArgs = {
  objects: Array<Flow_Badges_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Badges_OneArgs = {
  object: Flow_Badges_Insert_Input;
  on_conflict?: InputMaybe<Flow_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_ComponentsArgs = {
  objects: Array<Flow_Components_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Components_OneArgs = {
  object: Flow_Components_Insert_Input;
  on_conflict?: InputMaybe<Flow_Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_KeywordsArgs = {
  objects: Array<Flow_Keywords_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Keywords_OneArgs = {
  object: Flow_Keywords_Insert_Input;
  on_conflict?: InputMaybe<Flow_Keywords_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_ComponentsArgs = {
  objects: Array<Flow_Screencast_Components_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencast_Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_Components_OneArgs = {
  object: Flow_Screencast_Components_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencast_Components_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_DetailsArgs = {
  objects: Array<Flow_Screencast_Details_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencast_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_Details_OneArgs = {
  object: Flow_Screencast_Details_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencast_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_LikesArgs = {
  objects: Array<Flow_Screencast_Likes_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencast_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_Likes_OneArgs = {
  object: Flow_Screencast_Likes_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencast_Likes_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_TimestampsArgs = {
  objects: Array<Flow_Screencast_Timestamps_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencast_Timestamps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencast_Timestamps_OneArgs = {
  object: Flow_Screencast_Timestamps_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencast_Timestamps_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_ScreencastsArgs = {
  objects: Array<Flow_Screencasts_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencasts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencasts_BadgesArgs = {
  objects: Array<Flow_Screencasts_Badges_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screencasts_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencasts_Badges_OneArgs = {
  object: Flow_Screencasts_Badges_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencasts_Badges_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screencasts_OneArgs = {
  object: Flow_Screencasts_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screencasts_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_ScreenshotsArgs = {
  objects: Array<Flow_Screenshots_Insert_Input>;
  on_conflict?: InputMaybe<Flow_Screenshots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flow_Screenshots_OneArgs = {
  object: Flow_Screenshots_Insert_Input;
  on_conflict?: InputMaybe<Flow_Screenshots_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_FlowsArgs = {
  objects: Array<Flows_Insert_Input>;
  on_conflict?: InputMaybe<Flows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Flows_OneArgs = {
  object: Flows_Insert_Input;
  on_conflict?: InputMaybe<Flows_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvitesArgs = {
  objects: Array<Invites_Insert_Input>;
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Invites_OneArgs = {
  object: Invites_Insert_Input;
  on_conflict?: InputMaybe<Invites_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_ProvidersArgs = {
  objects: Array<Payment_Providers_Insert_Input>;
  on_conflict?: InputMaybe<Payment_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Payment_Providers_OneArgs = {
  object: Payment_Providers_Insert_Input;
  on_conflict?: InputMaybe<Payment_Providers_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Refresh_TokensArgs = {
  objects: Array<Refresh_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Refresh_Tokens_OneArgs = {
  object: Refresh_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Refresh_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_RolesArgs = {
  objects: Array<Roles_Insert_Input>;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Roles_OneArgs = {
  object: Roles_Insert_Input;
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Plan_TypesArgs = {
  objects: Array<Subscription_Plan_Types_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_Plan_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Plan_Types_OneArgs = {
  object: Subscription_Plan_Types_Insert_Input;
  on_conflict?: InputMaybe<Subscription_Plan_Types_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_PlansArgs = {
  objects: Array<Subscription_Plans_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_Plans_OneArgs = {
  object: Subscription_Plans_Insert_Input;
  on_conflict?: InputMaybe<Subscription_Plans_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Checkout_SessionsArgs = {
  objects: Array<User_Checkout_Sessions_Insert_Input>;
  on_conflict?: InputMaybe<User_Checkout_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Checkout_Sessions_OneArgs = {
  object: User_Checkout_Sessions_Insert_Input;
  on_conflict?: InputMaybe<User_Checkout_Sessions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Subscription_Card_DetailsArgs = {
  objects: Array<User_Subscription_Card_Details_Insert_Input>;
  on_conflict?: InputMaybe<User_Subscription_Card_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Subscription_Card_Details_OneArgs = {
  object: User_Subscription_Card_Details_Insert_Input;
  on_conflict?: InputMaybe<User_Subscription_Card_Details_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_SubscriptionsArgs = {
  objects: Array<User_Subscriptions_Insert_Input>;
  on_conflict?: InputMaybe<User_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_Subscriptions_OneArgs = {
  object: User_Subscriptions_Insert_Input;
  on_conflict?: InputMaybe<User_Subscriptions_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UsersArgs = {
  objects: Array<Users_Insert_Input>;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Users_OneArgs = {
  object: Users_Insert_Input;
  on_conflict?: InputMaybe<Users_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInviteArgs = {
  email: Scalars['String'];
  role: Scalars['String'];
};


/** mutation root */
export type Mutation_RootLoginArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


/** mutation root */
export type Mutation_RootRegisterArgs = {
  user: RegisterUser;
};


/** mutation root */
export type Mutation_RootRequest_Reset_PasswordArgs = {
  email: Scalars['String'];
};


/** mutation root */
export type Mutation_RootReset_PasswordArgs = {
  password: Scalars['String'];
  ticket: Scalars['String'];
};


/** mutation root */
export type Mutation_RootUpdate_Account_RolesArgs = {
  _set?: InputMaybe<Account_Roles_Set_Input>;
  where: Account_Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_Roles_By_PkArgs = {
  _set?: InputMaybe<Account_Roles_Set_Input>;
  pk_columns: Account_Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_AccountsArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  where: Accounts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Accounts_By_PkArgs = {
  _set?: InputMaybe<Accounts_Set_Input>;
  pk_columns: Accounts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_BadgesArgs = {
  _set?: InputMaybe<Collection_Badges_Set_Input>;
  where: Collection_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_Badges_By_PkArgs = {
  _set?: InputMaybe<Collection_Badges_Set_Input>;
  pk_columns: Collection_Badges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_FlowsArgs = {
  _set?: InputMaybe<Collection_Flows_Set_Input>;
  where: Collection_Flows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_Flows_By_PkArgs = {
  _set?: InputMaybe<Collection_Flows_Set_Input>;
  pk_columns: Collection_Flows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_VisibilityArgs = {
  _set?: InputMaybe<Collection_Visibility_Set_Input>;
  where: Collection_Visibility_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collection_Visibility_By_PkArgs = {
  _set?: InputMaybe<Collection_Visibility_Set_Input>;
  pk_columns: Collection_Visibility_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CollectionsArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  where: Collections_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Collections_By_PkArgs = {
  _set?: InputMaybe<Collections_Set_Input>;
  pk_columns: Collections_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_App_InfoArgs = {
  _inc?: InputMaybe<Flow_App_Info_Inc_Input>;
  _set?: InputMaybe<Flow_App_Info_Set_Input>;
  where: Flow_App_Info_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_App_Info_By_PkArgs = {
  _inc?: InputMaybe<Flow_App_Info_Inc_Input>;
  _set?: InputMaybe<Flow_App_Info_Set_Input>;
  pk_columns: Flow_App_Info_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_AttachmentsArgs = {
  _set?: InputMaybe<Flow_Attachments_Set_Input>;
  where: Flow_Attachments_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Attachments_By_PkArgs = {
  _set?: InputMaybe<Flow_Attachments_Set_Input>;
  pk_columns: Flow_Attachments_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Badge_ValuesArgs = {
  _set?: InputMaybe<Flow_Badge_Values_Set_Input>;
  where: Flow_Badge_Values_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Badge_Values_By_PkArgs = {
  _set?: InputMaybe<Flow_Badge_Values_Set_Input>;
  pk_columns: Flow_Badge_Values_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_BadgesArgs = {
  _set?: InputMaybe<Flow_Badges_Set_Input>;
  where: Flow_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Badges_By_PkArgs = {
  _set?: InputMaybe<Flow_Badges_Set_Input>;
  pk_columns: Flow_Badges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_ComponentsArgs = {
  _set?: InputMaybe<Flow_Components_Set_Input>;
  where: Flow_Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Components_By_PkArgs = {
  _set?: InputMaybe<Flow_Components_Set_Input>;
  pk_columns: Flow_Components_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_KeywordsArgs = {
  _set?: InputMaybe<Flow_Keywords_Set_Input>;
  where: Flow_Keywords_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Keywords_By_PkArgs = {
  _set?: InputMaybe<Flow_Keywords_Set_Input>;
  pk_columns: Flow_Keywords_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_ComponentsArgs = {
  _set?: InputMaybe<Flow_Screencast_Components_Set_Input>;
  where: Flow_Screencast_Components_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_Components_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencast_Components_Set_Input>;
  pk_columns: Flow_Screencast_Components_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_DetailsArgs = {
  _set?: InputMaybe<Flow_Screencast_Details_Set_Input>;
  where: Flow_Screencast_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_Details_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencast_Details_Set_Input>;
  pk_columns: Flow_Screencast_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_LikesArgs = {
  _set?: InputMaybe<Flow_Screencast_Likes_Set_Input>;
  where: Flow_Screencast_Likes_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_Likes_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencast_Likes_Set_Input>;
  pk_columns: Flow_Screencast_Likes_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_TimestampsArgs = {
  _set?: InputMaybe<Flow_Screencast_Timestamps_Set_Input>;
  where: Flow_Screencast_Timestamps_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencast_Timestamps_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencast_Timestamps_Set_Input>;
  pk_columns: Flow_Screencast_Timestamps_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_ScreencastsArgs = {
  _set?: InputMaybe<Flow_Screencasts_Set_Input>;
  where: Flow_Screencasts_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencasts_BadgesArgs = {
  _set?: InputMaybe<Flow_Screencasts_Badges_Set_Input>;
  where: Flow_Screencasts_Badges_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencasts_Badges_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencasts_Badges_Set_Input>;
  pk_columns: Flow_Screencasts_Badges_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screencasts_By_PkArgs = {
  _set?: InputMaybe<Flow_Screencasts_Set_Input>;
  pk_columns: Flow_Screencasts_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_ScreenshotsArgs = {
  _set?: InputMaybe<Flow_Screenshots_Set_Input>;
  where: Flow_Screenshots_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flow_Screenshots_By_PkArgs = {
  _set?: InputMaybe<Flow_Screenshots_Set_Input>;
  pk_columns: Flow_Screenshots_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_FlowsArgs = {
  _set?: InputMaybe<Flows_Set_Input>;
  where: Flows_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Flows_By_PkArgs = {
  _set?: InputMaybe<Flows_Set_Input>;
  pk_columns: Flows_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvitesArgs = {
  _set?: InputMaybe<Invites_Set_Input>;
  where: Invites_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Invites_By_PkArgs = {
  _set?: InputMaybe<Invites_Set_Input>;
  pk_columns: Invites_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_ProvidersArgs = {
  _set?: InputMaybe<Payment_Providers_Set_Input>;
  where: Payment_Providers_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Payment_Providers_By_PkArgs = {
  _set?: InputMaybe<Payment_Providers_Set_Input>;
  pk_columns: Payment_Providers_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Refresh_TokensArgs = {
  _set?: InputMaybe<Refresh_Tokens_Set_Input>;
  where: Refresh_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Refresh_Tokens_By_PkArgs = {
  _set?: InputMaybe<Refresh_Tokens_Set_Input>;
  pk_columns: Refresh_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_RolesArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  where: Roles_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Roles_By_PkArgs = {
  _set?: InputMaybe<Roles_Set_Input>;
  pk_columns: Roles_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plan_TypesArgs = {
  _set?: InputMaybe<Subscription_Plan_Types_Set_Input>;
  where: Subscription_Plan_Types_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plan_Types_By_PkArgs = {
  _set?: InputMaybe<Subscription_Plan_Types_Set_Input>;
  pk_columns: Subscription_Plan_Types_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_PlansArgs = {
  _inc?: InputMaybe<Subscription_Plans_Inc_Input>;
  _set?: InputMaybe<Subscription_Plans_Set_Input>;
  where: Subscription_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_Plans_By_PkArgs = {
  _inc?: InputMaybe<Subscription_Plans_Inc_Input>;
  _set?: InputMaybe<Subscription_Plans_Set_Input>;
  pk_columns: Subscription_Plans_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Checkout_SessionsArgs = {
  _set?: InputMaybe<User_Checkout_Sessions_Set_Input>;
  where: User_Checkout_Sessions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Checkout_Sessions_By_PkArgs = {
  _set?: InputMaybe<User_Checkout_Sessions_Set_Input>;
  pk_columns: User_Checkout_Sessions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_Subscription_Card_DetailsArgs = {
  _set?: InputMaybe<User_Subscription_Card_Details_Set_Input>;
  where: User_Subscription_Card_Details_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Subscription_Card_Details_By_PkArgs = {
  _set?: InputMaybe<User_Subscription_Card_Details_Set_Input>;
  pk_columns: User_Subscription_Card_Details_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_User_SubscriptionsArgs = {
  _set?: InputMaybe<User_Subscriptions_Set_Input>;
  where: User_Subscriptions_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_Subscriptions_By_PkArgs = {
  _set?: InputMaybe<User_Subscriptions_Set_Input>;
  pk_columns: User_Subscriptions_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UsersArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  where: Users_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Users_By_PkArgs = {
  _set?: InputMaybe<Users_Set_Input>;
  pk_columns: Users_Pk_Columns_Input;
};

export type Numeric_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _cast?: InputMaybe<Numeric_Cast_Exp>;
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

/** columns and relationships of "payment_providers" */
export type Payment_Providers = {
  __typename?: 'payment_providers';
  comment?: Maybe<Scalars['String']>;
  /** An array relationship */
  user_subscription_card_details: Array<User_Subscription_Card_Details>;
  /** An aggregate relationship */
  user_subscription_card_details_aggregate: User_Subscription_Card_Details_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "payment_providers" */
export type Payment_ProvidersUser_Subscription_Card_DetailsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};


/** columns and relationships of "payment_providers" */
export type Payment_ProvidersUser_Subscription_Card_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};

/** aggregated selection of "payment_providers" */
export type Payment_Providers_Aggregate = {
  __typename?: 'payment_providers_aggregate';
  aggregate?: Maybe<Payment_Providers_Aggregate_Fields>;
  nodes: Array<Payment_Providers>;
};

/** aggregate fields of "payment_providers" */
export type Payment_Providers_Aggregate_Fields = {
  __typename?: 'payment_providers_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Payment_Providers_Max_Fields>;
  min?: Maybe<Payment_Providers_Min_Fields>;
};


/** aggregate fields of "payment_providers" */
export type Payment_Providers_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Payment_Providers_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "payment_providers". All fields are combined with a logical 'AND'. */
export type Payment_Providers_Bool_Exp = {
  _and?: InputMaybe<Array<Payment_Providers_Bool_Exp>>;
  _not?: InputMaybe<Payment_Providers_Bool_Exp>;
  _or?: InputMaybe<Array<Payment_Providers_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  user_subscription_card_details?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "payment_providers" */
export enum Payment_Providers_Constraint {
  /** unique or primary key constraint on columns "value" */
  PaymentProvidersPkey = 'payment_providers_pkey'
}

export enum Payment_Providers_Enum {
  Mastercard = 'Mastercard',
  Visa = 'Visa'
}

/** Boolean expression to compare columns of type "payment_providers_enum". All fields are combined with logical 'AND'. */
export type Payment_Providers_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Payment_Providers_Enum>;
  _in?: InputMaybe<Array<Payment_Providers_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Payment_Providers_Enum>;
  _nin?: InputMaybe<Array<Payment_Providers_Enum>>;
};

/** input type for inserting data into table "payment_providers" */
export type Payment_Providers_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  user_subscription_card_details?: InputMaybe<User_Subscription_Card_Details_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Payment_Providers_Max_Fields = {
  __typename?: 'payment_providers_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Payment_Providers_Min_Fields = {
  __typename?: 'payment_providers_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "payment_providers" */
export type Payment_Providers_Mutation_Response = {
  __typename?: 'payment_providers_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Payment_Providers>;
};

/** input type for inserting object relation for remote table "payment_providers" */
export type Payment_Providers_Obj_Rel_Insert_Input = {
  data: Payment_Providers_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Payment_Providers_On_Conflict>;
};

/** on_conflict condition type for table "payment_providers" */
export type Payment_Providers_On_Conflict = {
  constraint: Payment_Providers_Constraint;
  update_columns?: Array<Payment_Providers_Update_Column>;
  where?: InputMaybe<Payment_Providers_Bool_Exp>;
};

/** Ordering options when selecting data from "payment_providers". */
export type Payment_Providers_Order_By = {
  comment?: InputMaybe<Order_By>;
  user_subscription_card_details_aggregate?: InputMaybe<User_Subscription_Card_Details_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: payment_providers */
export type Payment_Providers_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "payment_providers" */
export enum Payment_Providers_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "payment_providers" */
export type Payment_Providers_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "payment_providers" */
export enum Payment_Providers_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** An array relationship */
  account_roles: Array<Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Account_Roles_Aggregate;
  /** fetch data from the table: "account_roles" using primary key columns */
  account_roles_by_pk?: Maybe<Account_Roles>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  checkEmail: SuccessResponseBoolean;
  /** fetch data from the table: "collection_badges" */
  collection_badges: Array<Collection_Badges>;
  /** fetch aggregated fields from the table: "collection_badges" */
  collection_badges_aggregate: Collection_Badges_Aggregate;
  /** fetch data from the table: "collection_badges" using primary key columns */
  collection_badges_by_pk?: Maybe<Collection_Badges>;
  /** An array relationship */
  collection_flows: Array<Collection_Flows>;
  /** An aggregate relationship */
  collection_flows_aggregate: Collection_Flows_Aggregate;
  /** fetch data from the table: "collection_flows" using primary key columns */
  collection_flows_by_pk?: Maybe<Collection_Flows>;
  /** fetch data from the table: "collection_visibility" */
  collection_visibility: Array<Collection_Visibility>;
  /** fetch aggregated fields from the table: "collection_visibility" */
  collection_visibility_aggregate: Collection_Visibility_Aggregate;
  /** fetch data from the table: "collection_visibility" using primary key columns */
  collection_visibility_by_pk?: Maybe<Collection_Visibility>;
  /** An array relationship */
  collections: Array<Collections>;
  /** An aggregate relationship */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "flow_app_info" */
  flow_app_info: Array<Flow_App_Info>;
  /** fetch aggregated fields from the table: "flow_app_info" */
  flow_app_info_aggregate: Flow_App_Info_Aggregate;
  /** fetch data from the table: "flow_app_info" using primary key columns */
  flow_app_info_by_pk?: Maybe<Flow_App_Info>;
  /** An array relationship */
  flow_attachments: Array<Flow_Attachments>;
  /** An aggregate relationship */
  flow_attachments_aggregate: Flow_Attachments_Aggregate;
  /** fetch data from the table: "flow_attachments" using primary key columns */
  flow_attachments_by_pk?: Maybe<Flow_Attachments>;
  /** An array relationship */
  flow_badge_values: Array<Flow_Badge_Values>;
  /** An aggregate relationship */
  flow_badge_values_aggregate: Flow_Badge_Values_Aggregate;
  /** fetch data from the table: "flow_badge_values" using primary key columns */
  flow_badge_values_by_pk?: Maybe<Flow_Badge_Values>;
  /** fetch data from the table: "flow_badges" */
  flow_badges: Array<Flow_Badges>;
  /** fetch aggregated fields from the table: "flow_badges" */
  flow_badges_aggregate: Flow_Badges_Aggregate;
  /** fetch data from the table: "flow_badges" using primary key columns */
  flow_badges_by_pk?: Maybe<Flow_Badges>;
  /** fetch data from the table: "flow_components" */
  flow_components: Array<Flow_Components>;
  /** fetch aggregated fields from the table: "flow_components" */
  flow_components_aggregate: Flow_Components_Aggregate;
  /** fetch data from the table: "flow_components" using primary key columns */
  flow_components_by_pk?: Maybe<Flow_Components>;
  /** An array relationship */
  flow_keywords: Array<Flow_Keywords>;
  /** An aggregate relationship */
  flow_keywords_aggregate: Flow_Keywords_Aggregate;
  /** fetch data from the table: "flow_keywords" using primary key columns */
  flow_keywords_by_pk?: Maybe<Flow_Keywords>;
  /** An array relationship */
  flow_screencast_components: Array<Flow_Screencast_Components>;
  /** An aggregate relationship */
  flow_screencast_components_aggregate: Flow_Screencast_Components_Aggregate;
  /** fetch data from the table: "flow_screencast_components" using primary key columns */
  flow_screencast_components_by_pk?: Maybe<Flow_Screencast_Components>;
  /** fetch data from the table: "flow_screencast_details" */
  flow_screencast_details: Array<Flow_Screencast_Details>;
  /** fetch aggregated fields from the table: "flow_screencast_details" */
  flow_screencast_details_aggregate: Flow_Screencast_Details_Aggregate;
  /** fetch data from the table: "flow_screencast_details" using primary key columns */
  flow_screencast_details_by_pk?: Maybe<Flow_Screencast_Details>;
  /** An array relationship */
  flow_screencast_likes: Array<Flow_Screencast_Likes>;
  /** An aggregate relationship */
  flow_screencast_likes_aggregate: Flow_Screencast_Likes_Aggregate;
  /** fetch data from the table: "flow_screencast_likes" using primary key columns */
  flow_screencast_likes_by_pk?: Maybe<Flow_Screencast_Likes>;
  /** An array relationship */
  flow_screencast_timestamps: Array<Flow_Screencast_Timestamps>;
  /** An aggregate relationship */
  flow_screencast_timestamps_aggregate: Flow_Screencast_Timestamps_Aggregate;
  /** fetch data from the table: "flow_screencast_timestamps" using primary key columns */
  flow_screencast_timestamps_by_pk?: Maybe<Flow_Screencast_Timestamps>;
  /** An array relationship */
  flow_screencasts: Array<Flow_Screencasts>;
  /** An aggregate relationship */
  flow_screencasts_aggregate: Flow_Screencasts_Aggregate;
  /** An array relationship */
  flow_screencasts_badges: Array<Flow_Screencasts_Badges>;
  /** An aggregate relationship */
  flow_screencasts_badges_aggregate: Flow_Screencasts_Badges_Aggregate;
  /** fetch data from the table: "flow_screencasts_badges" using primary key columns */
  flow_screencasts_badges_by_pk?: Maybe<Flow_Screencasts_Badges>;
  /** fetch data from the table: "flow_screencasts" using primary key columns */
  flow_screencasts_by_pk?: Maybe<Flow_Screencasts>;
  /** An array relationship */
  flow_screenshots: Array<Flow_Screenshots>;
  /** An aggregate relationship */
  flow_screenshots_aggregate: Flow_Screenshots_Aggregate;
  /** fetch data from the table: "flow_screenshots" using primary key columns */
  flow_screenshots_by_pk?: Maybe<Flow_Screenshots>;
  /** An array relationship */
  flows: Array<Flows>;
  /** An aggregate relationship */
  flows_aggregate: Flows_Aggregate;
  /** fetch data from the table: "flows" using primary key columns */
  flows_by_pk?: Maybe<Flows>;
  google_url?: Maybe<SuccessResponse>;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>;
  me?: Maybe<UserResponse>;
  /** fetch data from the table: "payment_providers" */
  payment_providers: Array<Payment_Providers>;
  /** fetch aggregated fields from the table: "payment_providers" */
  payment_providers_aggregate: Payment_Providers_Aggregate;
  /** fetch data from the table: "payment_providers" using primary key columns */
  payment_providers_by_pk?: Maybe<Payment_Providers>;
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** Generate stripe checkout session */
  stripe_session?: Maybe<SuccessResponse>;
  /** fetch data from the table: "subscription_plan_types" */
  subscription_plan_types: Array<Subscription_Plan_Types>;
  /** fetch aggregated fields from the table: "subscription_plan_types" */
  subscription_plan_types_aggregate: Subscription_Plan_Types_Aggregate;
  /** fetch data from the table: "subscription_plan_types" using primary key columns */
  subscription_plan_types_by_pk?: Maybe<Subscription_Plan_Types>;
  /** An array relationship */
  subscription_plans: Array<Subscription_Plans>;
  /** An aggregate relationship */
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  /** fetch data from the table: "subscription_plans" using primary key columns */
  subscription_plans_by_pk?: Maybe<Subscription_Plans>;
  /** An array relationship */
  user_checkout_sessions: Array<User_Checkout_Sessions>;
  /** An aggregate relationship */
  user_checkout_sessions_aggregate: User_Checkout_Sessions_Aggregate;
  /** fetch data from the table: "user_checkout_sessions" using primary key columns */
  user_checkout_sessions_by_pk?: Maybe<User_Checkout_Sessions>;
  /** An array relationship */
  user_subscription_card_details: Array<User_Subscription_Card_Details>;
  /** An aggregate relationship */
  user_subscription_card_details_aggregate: User_Subscription_Card_Details_Aggregate;
  /** fetch data from the table: "user_subscription_card_details" using primary key columns */
  user_subscription_card_details_by_pk?: Maybe<User_Subscription_Card_Details>;
  /** An array relationship */
  user_subscriptions: Array<User_Subscriptions>;
  /** An aggregate relationship */
  user_subscriptions_aggregate: User_Subscriptions_Aggregate;
  /** fetch data from the table: "user_subscriptions" using primary key columns */
  user_subscriptions_by_pk?: Maybe<User_Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Query_RootAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


export type Query_RootAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


export type Query_RootAccount_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Query_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCheckEmailArgs = {
  email: Scalars['String'];
};


export type Query_RootCollection_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Collection_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Badges_Order_By>>;
  where?: InputMaybe<Collection_Badges_Bool_Exp>;
};


export type Query_RootCollection_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Badges_Order_By>>;
  where?: InputMaybe<Collection_Badges_Bool_Exp>;
};


export type Query_RootCollection_Badges_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCollection_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


export type Query_RootCollection_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


export type Query_RootCollection_Flows_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootCollection_VisibilityArgs = {
  distinct_on?: InputMaybe<Array<Collection_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Visibility_Order_By>>;
  where?: InputMaybe<Collection_Visibility_Bool_Exp>;
};


export type Query_RootCollection_Visibility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Visibility_Order_By>>;
  where?: InputMaybe<Collection_Visibility_Bool_Exp>;
};


export type Query_RootCollection_Visibility_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Query_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_App_InfoArgs = {
  distinct_on?: InputMaybe<Array<Flow_App_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_App_Info_Order_By>>;
  where?: InputMaybe<Flow_App_Info_Bool_Exp>;
};


export type Query_RootFlow_App_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_App_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_App_Info_Order_By>>;
  where?: InputMaybe<Flow_App_Info_Bool_Exp>;
};


export type Query_RootFlow_App_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


export type Query_RootFlow_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


export type Query_RootFlow_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Badge_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


export type Query_RootFlow_Badge_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


export type Query_RootFlow_Badge_Values_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badges_Order_By>>;
  where?: InputMaybe<Flow_Badges_Bool_Exp>;
};


export type Query_RootFlow_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badges_Order_By>>;
  where?: InputMaybe<Flow_Badges_Bool_Exp>;
};


export type Query_RootFlow_Badges_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFlow_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Components_Order_By>>;
  where?: InputMaybe<Flow_Components_Bool_Exp>;
};


export type Query_RootFlow_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Components_Order_By>>;
  where?: InputMaybe<Flow_Components_Bool_Exp>;
};


export type Query_RootFlow_Components_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootFlow_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


export type Query_RootFlow_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


export type Query_RootFlow_Keywords_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Screencast_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Components_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Screencast_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Details_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Details_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Screencast_LikesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Likes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Screencast_TimestampsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Timestamps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


export type Query_RootFlow_Screencast_Timestamps_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_ScreencastsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


export type Query_RootFlow_Screencasts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


export type Query_RootFlow_Screencasts_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


export type Query_RootFlow_Screencasts_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


export type Query_RootFlow_Screencasts_Badges_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_Screencasts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlow_ScreenshotsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};


export type Query_RootFlow_Screenshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};


export type Query_RootFlow_Screenshots_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootFlowsArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};


export type Query_RootFlows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};


export type Query_RootFlows_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Query_RootInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Query_RootInvites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootPayment_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Payment_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Providers_Order_By>>;
  where?: InputMaybe<Payment_Providers_Bool_Exp>;
};


export type Query_RootPayment_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Providers_Order_By>>;
  where?: InputMaybe<Payment_Providers_Bool_Exp>;
};


export type Query_RootPayment_Providers_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootRefresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};


export type Query_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};


export type Query_RootRefresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Query_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Query_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootStripe_SessionArgs = {
  subscription_plan_id: Scalars['String'];
};


export type Query_RootSubscription_Plan_TypesArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Types_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
};


export type Query_RootSubscription_Plan_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Types_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
};


export type Query_RootSubscription_Plan_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootSubscription_PlansArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};


export type Query_RootSubscription_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};


export type Query_RootSubscription_Plans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Checkout_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


export type Query_RootUser_Checkout_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


export type Query_RootUser_Checkout_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_Subscription_Card_DetailsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};


export type Query_RootUser_Subscription_Card_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};


export type Query_RootUser_Subscription_Card_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUser_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};


export type Query_RootUser_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};


export type Query_RootUser_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Query_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** columns and relationships of "refresh_tokens" */
export type Refresh_Tokens = {
  __typename?: 'refresh_tokens';
  /** An object relationship */
  account: Accounts;
  account_id: Scalars['uuid'];
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at: Scalars['timestamptz'];
  refresh_token: Scalars['uuid'];
};

/** aggregated selection of "refresh_tokens" */
export type Refresh_Tokens_Aggregate = {
  __typename?: 'refresh_tokens_aggregate';
  aggregate?: Maybe<Refresh_Tokens_Aggregate_Fields>;
  nodes: Array<Refresh_Tokens>;
};

/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_Fields = {
  __typename?: 'refresh_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Refresh_Tokens_Max_Fields>;
  min?: Maybe<Refresh_Tokens_Min_Fields>;
};


/** aggregate fields of "refresh_tokens" */
export type Refresh_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "refresh_tokens" */
export type Refresh_Tokens_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Refresh_Tokens_Max_Order_By>;
  min?: InputMaybe<Refresh_Tokens_Min_Order_By>;
};

/** input type for inserting array relation for remote table "refresh_tokens" */
export type Refresh_Tokens_Arr_Rel_Insert_Input = {
  data: Array<Refresh_Tokens_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Refresh_Tokens_On_Conflict>;
};

/** Boolean expression to filter rows from the table "refresh_tokens". All fields are combined with a logical 'AND'. */
export type Refresh_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Refresh_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Refresh_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Refresh_Tokens_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  account_id?: InputMaybe<Uuid_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  refresh_token?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "refresh_tokens" */
export enum Refresh_Tokens_Constraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "refresh_tokens" */
export type Refresh_Tokens_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  refresh_token?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type Refresh_Tokens_Max_Fields = {
  __typename?: 'refresh_tokens_max_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Refresh_Tokens_Min_Fields = {
  __typename?: 'refresh_tokens_min_fields';
  account_id?: Maybe<Scalars['uuid']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "refresh_tokens" */
export type Refresh_Tokens_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "refresh_tokens" */
export type Refresh_Tokens_Mutation_Response = {
  __typename?: 'refresh_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Refresh_Tokens>;
};

/** on_conflict condition type for table "refresh_tokens" */
export type Refresh_Tokens_On_Conflict = {
  constraint: Refresh_Tokens_Constraint;
  update_columns?: Array<Refresh_Tokens_Update_Column>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "refresh_tokens". */
export type Refresh_Tokens_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  account_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: refresh_tokens */
export type Refresh_Tokens_Pk_Columns_Input = {
  refresh_token: Scalars['uuid'];
};

/** select columns of table "refresh_tokens" */
export enum Refresh_Tokens_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** input type for updating data in table "refresh_tokens" */
export type Refresh_Tokens_Set_Input = {
  account_id?: InputMaybe<Scalars['uuid']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  refresh_token?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "refresh_tokens" */
export enum Refresh_Tokens_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  RefreshToken = 'refresh_token'
}

/** columns and relationships of "roles" */
export type Roles = {
  __typename?: 'roles';
  /** An array relationship */
  account_roles: Array<Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Account_Roles_Aggregate;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "roles" */
export type RolesAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


/** columns and relationships of "roles" */
export type RolesInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};

/** aggregated selection of "roles" */
export type Roles_Aggregate = {
  __typename?: 'roles_aggregate';
  aggregate?: Maybe<Roles_Aggregate_Fields>;
  nodes: Array<Roles>;
};

/** aggregate fields of "roles" */
export type Roles_Aggregate_Fields = {
  __typename?: 'roles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Roles_Max_Fields>;
  min?: Maybe<Roles_Min_Fields>;
};


/** aggregate fields of "roles" */
export type Roles_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Roles_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "roles". All fields are combined with a logical 'AND'. */
export type Roles_Bool_Exp = {
  _and?: InputMaybe<Array<Roles_Bool_Exp>>;
  _not?: InputMaybe<Roles_Bool_Exp>;
  _or?: InputMaybe<Array<Roles_Bool_Exp>>;
  account_roles?: InputMaybe<Account_Roles_Bool_Exp>;
  invites?: InputMaybe<Invites_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "roles" */
export enum Roles_Constraint {
  /** unique or primary key constraint on columns "value" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "roles" */
export type Roles_Insert_Input = {
  account_roles?: InputMaybe<Account_Roles_Arr_Rel_Insert_Input>;
  invites?: InputMaybe<Invites_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Roles_Max_Fields = {
  __typename?: 'roles_max_fields';
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Roles_Min_Fields = {
  __typename?: 'roles_min_fields';
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "roles" */
export type Roles_Mutation_Response = {
  __typename?: 'roles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Roles>;
};

/** input type for inserting object relation for remote table "roles" */
export type Roles_Obj_Rel_Insert_Input = {
  data: Roles_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Roles_On_Conflict>;
};

/** on_conflict condition type for table "roles" */
export type Roles_On_Conflict = {
  constraint: Roles_Constraint;
  update_columns?: Array<Roles_Update_Column>;
  where?: InputMaybe<Roles_Bool_Exp>;
};

/** Ordering options when selecting data from "roles". */
export type Roles_Order_By = {
  account_roles_aggregate?: InputMaybe<Account_Roles_Aggregate_Order_By>;
  invites_aggregate?: InputMaybe<Invites_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: roles */
export type Roles_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "roles" */
export enum Roles_Select_Column {
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "roles" */
export type Roles_Set_Input = {
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "roles" */
export enum Roles_Update_Column {
  /** column name */
  Value = 'value'
}

/** columns and relationships of "subscription_plan_types" */
export type Subscription_Plan_Types = {
  __typename?: 'subscription_plan_types';
  comment: Scalars['String'];
  /** An array relationship */
  subscription_plans: Array<Subscription_Plans>;
  /** An aggregate relationship */
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  value: Scalars['String'];
};


/** columns and relationships of "subscription_plan_types" */
export type Subscription_Plan_TypesSubscription_PlansArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};


/** columns and relationships of "subscription_plan_types" */
export type Subscription_Plan_TypesSubscription_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};

/** aggregated selection of "subscription_plan_types" */
export type Subscription_Plan_Types_Aggregate = {
  __typename?: 'subscription_plan_types_aggregate';
  aggregate?: Maybe<Subscription_Plan_Types_Aggregate_Fields>;
  nodes: Array<Subscription_Plan_Types>;
};

/** aggregate fields of "subscription_plan_types" */
export type Subscription_Plan_Types_Aggregate_Fields = {
  __typename?: 'subscription_plan_types_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Subscription_Plan_Types_Max_Fields>;
  min?: Maybe<Subscription_Plan_Types_Min_Fields>;
};


/** aggregate fields of "subscription_plan_types" */
export type Subscription_Plan_Types_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Plan_Types_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "subscription_plan_types". All fields are combined with a logical 'AND'. */
export type Subscription_Plan_Types_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Plan_Types_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Plan_Types_Bool_Exp>>;
  comment?: InputMaybe<String_Comparison_Exp>;
  subscription_plans?: InputMaybe<Subscription_Plans_Bool_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscription_plan_types" */
export enum Subscription_Plan_Types_Constraint {
  /** unique or primary key constraint on columns "value" */
  SubscriptionPlanTypesPkey = 'subscription_plan_types_pkey'
}

export enum Subscription_Plan_Types_Enum {
  Annually = 'annually',
  Monthly = 'monthly'
}

/** Boolean expression to compare columns of type "subscription_plan_types_enum". All fields are combined with logical 'AND'. */
export type Subscription_Plan_Types_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Subscription_Plan_Types_Enum>;
  _in?: InputMaybe<Array<Subscription_Plan_Types_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Subscription_Plan_Types_Enum>;
  _nin?: InputMaybe<Array<Subscription_Plan_Types_Enum>>;
};

/** input type for inserting data into table "subscription_plan_types" */
export type Subscription_Plan_Types_Insert_Input = {
  comment?: InputMaybe<Scalars['String']>;
  subscription_plans?: InputMaybe<Subscription_Plans_Arr_Rel_Insert_Input>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Subscription_Plan_Types_Max_Fields = {
  __typename?: 'subscription_plan_types_max_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Subscription_Plan_Types_Min_Fields = {
  __typename?: 'subscription_plan_types_min_fields';
  comment?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "subscription_plan_types" */
export type Subscription_Plan_Types_Mutation_Response = {
  __typename?: 'subscription_plan_types_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription_Plan_Types>;
};

/** input type for inserting object relation for remote table "subscription_plan_types" */
export type Subscription_Plan_Types_Obj_Rel_Insert_Input = {
  data: Subscription_Plan_Types_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_Plan_Types_On_Conflict>;
};

/** on_conflict condition type for table "subscription_plan_types" */
export type Subscription_Plan_Types_On_Conflict = {
  constraint: Subscription_Plan_Types_Constraint;
  update_columns?: Array<Subscription_Plan_Types_Update_Column>;
  where?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription_plan_types". */
export type Subscription_Plan_Types_Order_By = {
  comment?: InputMaybe<Order_By>;
  subscription_plans_aggregate?: InputMaybe<Subscription_Plans_Aggregate_Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscription_plan_types */
export type Subscription_Plan_Types_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "subscription_plan_types" */
export enum Subscription_Plan_Types_Select_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "subscription_plan_types" */
export type Subscription_Plan_Types_Set_Input = {
  comment?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "subscription_plan_types" */
export enum Subscription_Plan_Types_Update_Column {
  /** column name */
  Comment = 'comment',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "subscription_plans" */
export type Subscription_Plans = {
  __typename?: 'subscription_plans';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  price: Scalars['numeric'];
  short_description: Scalars['String'];
  stripe_price_id?: Maybe<Scalars['String']>;
  /** An object relationship */
  subscriptionPlanType: Subscription_Plan_Types;
  subscription_plan_type: Subscription_Plan_Types_Enum;
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_checkout_sessions: Array<User_Checkout_Sessions>;
  /** An aggregate relationship */
  user_checkout_sessions_aggregate: User_Checkout_Sessions_Aggregate;
  /** An array relationship */
  user_subscriptions: Array<User_Subscriptions>;
  /** An aggregate relationship */
  user_subscriptions_aggregate: User_Subscriptions_Aggregate;
};


/** columns and relationships of "subscription_plans" */
export type Subscription_PlansUser_Checkout_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


/** columns and relationships of "subscription_plans" */
export type Subscription_PlansUser_Checkout_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


/** columns and relationships of "subscription_plans" */
export type Subscription_PlansUser_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};


/** columns and relationships of "subscription_plans" */
export type Subscription_PlansUser_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** aggregated selection of "subscription_plans" */
export type Subscription_Plans_Aggregate = {
  __typename?: 'subscription_plans_aggregate';
  aggregate?: Maybe<Subscription_Plans_Aggregate_Fields>;
  nodes: Array<Subscription_Plans>;
};

/** aggregate fields of "subscription_plans" */
export type Subscription_Plans_Aggregate_Fields = {
  __typename?: 'subscription_plans_aggregate_fields';
  avg?: Maybe<Subscription_Plans_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subscription_Plans_Max_Fields>;
  min?: Maybe<Subscription_Plans_Min_Fields>;
  stddev?: Maybe<Subscription_Plans_Stddev_Fields>;
  stddev_pop?: Maybe<Subscription_Plans_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subscription_Plans_Stddev_Samp_Fields>;
  sum?: Maybe<Subscription_Plans_Sum_Fields>;
  var_pop?: Maybe<Subscription_Plans_Var_Pop_Fields>;
  var_samp?: Maybe<Subscription_Plans_Var_Samp_Fields>;
  variance?: Maybe<Subscription_Plans_Variance_Fields>;
};


/** aggregate fields of "subscription_plans" */
export type Subscription_Plans_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "subscription_plans" */
export type Subscription_Plans_Aggregate_Order_By = {
  avg?: InputMaybe<Subscription_Plans_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Subscription_Plans_Max_Order_By>;
  min?: InputMaybe<Subscription_Plans_Min_Order_By>;
  stddev?: InputMaybe<Subscription_Plans_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Subscription_Plans_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Subscription_Plans_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Subscription_Plans_Sum_Order_By>;
  var_pop?: InputMaybe<Subscription_Plans_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Subscription_Plans_Var_Samp_Order_By>;
  variance?: InputMaybe<Subscription_Plans_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "subscription_plans" */
export type Subscription_Plans_Arr_Rel_Insert_Input = {
  data: Array<Subscription_Plans_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_Plans_On_Conflict>;
};

/** aggregate avg on columns */
export type Subscription_Plans_Avg_Fields = {
  __typename?: 'subscription_plans_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "subscription_plans" */
export type Subscription_Plans_Avg_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "subscription_plans". All fields are combined with a logical 'AND'. */
export type Subscription_Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Plans_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Plans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Numeric_Comparison_Exp>;
  short_description?: InputMaybe<String_Comparison_Exp>;
  stripe_price_id?: InputMaybe<String_Comparison_Exp>;
  subscriptionPlanType?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
  subscription_plan_type?: InputMaybe<Subscription_Plan_Types_Enum_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_checkout_sessions?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
  user_subscriptions?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** unique or primary key constraints on table "subscription_plans" */
export enum Subscription_Plans_Constraint {
  /** unique or primary key constraint on columns "id" */
  SubscriptionPlansPkey = 'subscription_plans_pkey'
}

/** input type for incrementing numeric columns in table "subscription_plans" */
export type Subscription_Plans_Inc_Input = {
  price?: InputMaybe<Scalars['numeric']>;
};

/** input type for inserting data into table "subscription_plans" */
export type Subscription_Plans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  short_description?: InputMaybe<Scalars['String']>;
  stripe_price_id?: InputMaybe<Scalars['String']>;
  subscriptionPlanType?: InputMaybe<Subscription_Plan_Types_Obj_Rel_Insert_Input>;
  subscription_plan_type?: InputMaybe<Subscription_Plan_Types_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_checkout_sessions?: InputMaybe<User_Checkout_Sessions_Arr_Rel_Insert_Input>;
  user_subscriptions?: InputMaybe<User_Subscriptions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subscription_Plans_Max_Fields = {
  __typename?: 'subscription_plans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  short_description?: Maybe<Scalars['String']>;
  stripe_price_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "subscription_plans" */
export type Subscription_Plans_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  stripe_price_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Subscription_Plans_Min_Fields = {
  __typename?: 'subscription_plans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['numeric']>;
  short_description?: Maybe<Scalars['String']>;
  stripe_price_id?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "subscription_plans" */
export type Subscription_Plans_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  stripe_price_id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "subscription_plans" */
export type Subscription_Plans_Mutation_Response = {
  __typename?: 'subscription_plans_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription_Plans>;
};

/** input type for inserting object relation for remote table "subscription_plans" */
export type Subscription_Plans_Obj_Rel_Insert_Input = {
  data: Subscription_Plans_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Subscription_Plans_On_Conflict>;
};

/** on_conflict condition type for table "subscription_plans" */
export type Subscription_Plans_On_Conflict = {
  constraint: Subscription_Plans_Constraint;
  update_columns?: Array<Subscription_Plans_Update_Column>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription_plans". */
export type Subscription_Plans_Order_By = {
  created_at?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  short_description?: InputMaybe<Order_By>;
  stripe_price_id?: InputMaybe<Order_By>;
  subscriptionPlanType?: InputMaybe<Subscription_Plan_Types_Order_By>;
  subscription_plan_type?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_checkout_sessions_aggregate?: InputMaybe<User_Checkout_Sessions_Aggregate_Order_By>;
  user_subscriptions_aggregate?: InputMaybe<User_Subscriptions_Aggregate_Order_By>;
};

/** primary key columns input for table: subscription_plans */
export type Subscription_Plans_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "subscription_plans" */
export enum Subscription_Plans_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  StripePriceId = 'stripe_price_id',
  /** column name */
  SubscriptionPlanType = 'subscription_plan_type',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subscription_plans" */
export type Subscription_Plans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['numeric']>;
  short_description?: InputMaybe<Scalars['String']>;
  stripe_price_id?: InputMaybe<Scalars['String']>;
  subscription_plan_type?: InputMaybe<Subscription_Plan_Types_Enum>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Subscription_Plans_Stddev_Fields = {
  __typename?: 'subscription_plans_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "subscription_plans" */
export type Subscription_Plans_Stddev_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Subscription_Plans_Stddev_Pop_Fields = {
  __typename?: 'subscription_plans_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "subscription_plans" */
export type Subscription_Plans_Stddev_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Subscription_Plans_Stddev_Samp_Fields = {
  __typename?: 'subscription_plans_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "subscription_plans" */
export type Subscription_Plans_Stddev_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Subscription_Plans_Sum_Fields = {
  __typename?: 'subscription_plans_sum_fields';
  price?: Maybe<Scalars['numeric']>;
};

/** order by sum() on columns of table "subscription_plans" */
export type Subscription_Plans_Sum_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** update columns of table "subscription_plans" */
export enum Subscription_Plans_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Price = 'price',
  /** column name */
  ShortDescription = 'short_description',
  /** column name */
  StripePriceId = 'stripe_price_id',
  /** column name */
  SubscriptionPlanType = 'subscription_plan_type',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Subscription_Plans_Var_Pop_Fields = {
  __typename?: 'subscription_plans_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "subscription_plans" */
export type Subscription_Plans_Var_Pop_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Subscription_Plans_Var_Samp_Fields = {
  __typename?: 'subscription_plans_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "subscription_plans" */
export type Subscription_Plans_Var_Samp_Order_By = {
  price?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Subscription_Plans_Variance_Fields = {
  __typename?: 'subscription_plans_variance_fields';
  price?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "subscription_plans" */
export type Subscription_Plans_Variance_Order_By = {
  price?: InputMaybe<Order_By>;
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** An array relationship */
  account_roles: Array<Account_Roles>;
  /** An aggregate relationship */
  account_roles_aggregate: Account_Roles_Aggregate;
  /** fetch data from the table: "account_roles" using primary key columns */
  account_roles_by_pk?: Maybe<Account_Roles>;
  /** fetch data from the table: "accounts" */
  accounts: Array<Accounts>;
  /** fetch aggregated fields from the table: "accounts" */
  accounts_aggregate: Accounts_Aggregate;
  /** fetch data from the table: "accounts" using primary key columns */
  accounts_by_pk?: Maybe<Accounts>;
  /** fetch data from the table: "collection_badges" */
  collection_badges: Array<Collection_Badges>;
  /** fetch aggregated fields from the table: "collection_badges" */
  collection_badges_aggregate: Collection_Badges_Aggregate;
  /** fetch data from the table: "collection_badges" using primary key columns */
  collection_badges_by_pk?: Maybe<Collection_Badges>;
  /** An array relationship */
  collection_flows: Array<Collection_Flows>;
  /** An aggregate relationship */
  collection_flows_aggregate: Collection_Flows_Aggregate;
  /** fetch data from the table: "collection_flows" using primary key columns */
  collection_flows_by_pk?: Maybe<Collection_Flows>;
  /** fetch data from the table: "collection_visibility" */
  collection_visibility: Array<Collection_Visibility>;
  /** fetch aggregated fields from the table: "collection_visibility" */
  collection_visibility_aggregate: Collection_Visibility_Aggregate;
  /** fetch data from the table: "collection_visibility" using primary key columns */
  collection_visibility_by_pk?: Maybe<Collection_Visibility>;
  /** An array relationship */
  collections: Array<Collections>;
  /** An aggregate relationship */
  collections_aggregate: Collections_Aggregate;
  /** fetch data from the table: "collections" using primary key columns */
  collections_by_pk?: Maybe<Collections>;
  /** fetch data from the table: "flow_app_info" */
  flow_app_info: Array<Flow_App_Info>;
  /** fetch aggregated fields from the table: "flow_app_info" */
  flow_app_info_aggregate: Flow_App_Info_Aggregate;
  /** fetch data from the table: "flow_app_info" using primary key columns */
  flow_app_info_by_pk?: Maybe<Flow_App_Info>;
  /** An array relationship */
  flow_attachments: Array<Flow_Attachments>;
  /** An aggregate relationship */
  flow_attachments_aggregate: Flow_Attachments_Aggregate;
  /** fetch data from the table: "flow_attachments" using primary key columns */
  flow_attachments_by_pk?: Maybe<Flow_Attachments>;
  /** An array relationship */
  flow_badge_values: Array<Flow_Badge_Values>;
  /** An aggregate relationship */
  flow_badge_values_aggregate: Flow_Badge_Values_Aggregate;
  /** fetch data from the table: "flow_badge_values" using primary key columns */
  flow_badge_values_by_pk?: Maybe<Flow_Badge_Values>;
  /** fetch data from the table: "flow_badges" */
  flow_badges: Array<Flow_Badges>;
  /** fetch aggregated fields from the table: "flow_badges" */
  flow_badges_aggregate: Flow_Badges_Aggregate;
  /** fetch data from the table: "flow_badges" using primary key columns */
  flow_badges_by_pk?: Maybe<Flow_Badges>;
  /** fetch data from the table: "flow_components" */
  flow_components: Array<Flow_Components>;
  /** fetch aggregated fields from the table: "flow_components" */
  flow_components_aggregate: Flow_Components_Aggregate;
  /** fetch data from the table: "flow_components" using primary key columns */
  flow_components_by_pk?: Maybe<Flow_Components>;
  /** An array relationship */
  flow_keywords: Array<Flow_Keywords>;
  /** An aggregate relationship */
  flow_keywords_aggregate: Flow_Keywords_Aggregate;
  /** fetch data from the table: "flow_keywords" using primary key columns */
  flow_keywords_by_pk?: Maybe<Flow_Keywords>;
  /** An array relationship */
  flow_screencast_components: Array<Flow_Screencast_Components>;
  /** An aggregate relationship */
  flow_screencast_components_aggregate: Flow_Screencast_Components_Aggregate;
  /** fetch data from the table: "flow_screencast_components" using primary key columns */
  flow_screencast_components_by_pk?: Maybe<Flow_Screencast_Components>;
  /** fetch data from the table: "flow_screencast_details" */
  flow_screencast_details: Array<Flow_Screencast_Details>;
  /** fetch aggregated fields from the table: "flow_screencast_details" */
  flow_screencast_details_aggregate: Flow_Screencast_Details_Aggregate;
  /** fetch data from the table: "flow_screencast_details" using primary key columns */
  flow_screencast_details_by_pk?: Maybe<Flow_Screencast_Details>;
  /** An array relationship */
  flow_screencast_likes: Array<Flow_Screencast_Likes>;
  /** An aggregate relationship */
  flow_screencast_likes_aggregate: Flow_Screencast_Likes_Aggregate;
  /** fetch data from the table: "flow_screencast_likes" using primary key columns */
  flow_screencast_likes_by_pk?: Maybe<Flow_Screencast_Likes>;
  /** An array relationship */
  flow_screencast_timestamps: Array<Flow_Screencast_Timestamps>;
  /** An aggregate relationship */
  flow_screencast_timestamps_aggregate: Flow_Screencast_Timestamps_Aggregate;
  /** fetch data from the table: "flow_screencast_timestamps" using primary key columns */
  flow_screencast_timestamps_by_pk?: Maybe<Flow_Screencast_Timestamps>;
  /** An array relationship */
  flow_screencasts: Array<Flow_Screencasts>;
  /** An aggregate relationship */
  flow_screencasts_aggregate: Flow_Screencasts_Aggregate;
  /** An array relationship */
  flow_screencasts_badges: Array<Flow_Screencasts_Badges>;
  /** An aggregate relationship */
  flow_screencasts_badges_aggregate: Flow_Screencasts_Badges_Aggregate;
  /** fetch data from the table: "flow_screencasts_badges" using primary key columns */
  flow_screencasts_badges_by_pk?: Maybe<Flow_Screencasts_Badges>;
  /** fetch data from the table: "flow_screencasts" using primary key columns */
  flow_screencasts_by_pk?: Maybe<Flow_Screencasts>;
  /** An array relationship */
  flow_screenshots: Array<Flow_Screenshots>;
  /** An aggregate relationship */
  flow_screenshots_aggregate: Flow_Screenshots_Aggregate;
  /** fetch data from the table: "flow_screenshots" using primary key columns */
  flow_screenshots_by_pk?: Maybe<Flow_Screenshots>;
  /** An array relationship */
  flows: Array<Flows>;
  /** An aggregate relationship */
  flows_aggregate: Flows_Aggregate;
  /** fetch data from the table: "flows" using primary key columns */
  flows_by_pk?: Maybe<Flows>;
  /** An array relationship */
  invites: Array<Invites>;
  /** An aggregate relationship */
  invites_aggregate: Invites_Aggregate;
  /** fetch data from the table: "invites" using primary key columns */
  invites_by_pk?: Maybe<Invites>;
  /** fetch data from the table: "payment_providers" */
  payment_providers: Array<Payment_Providers>;
  /** fetch aggregated fields from the table: "payment_providers" */
  payment_providers_aggregate: Payment_Providers_Aggregate;
  /** fetch data from the table: "payment_providers" using primary key columns */
  payment_providers_by_pk?: Maybe<Payment_Providers>;
  /** An array relationship */
  refresh_tokens: Array<Refresh_Tokens>;
  /** An aggregate relationship */
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  /** fetch data from the table: "refresh_tokens" using primary key columns */
  refresh_tokens_by_pk?: Maybe<Refresh_Tokens>;
  /** fetch data from the table: "roles" */
  roles: Array<Roles>;
  /** fetch aggregated fields from the table: "roles" */
  roles_aggregate: Roles_Aggregate;
  /** fetch data from the table: "roles" using primary key columns */
  roles_by_pk?: Maybe<Roles>;
  /** fetch data from the table: "subscription_plan_types" */
  subscription_plan_types: Array<Subscription_Plan_Types>;
  /** fetch aggregated fields from the table: "subscription_plan_types" */
  subscription_plan_types_aggregate: Subscription_Plan_Types_Aggregate;
  /** fetch data from the table: "subscription_plan_types" using primary key columns */
  subscription_plan_types_by_pk?: Maybe<Subscription_Plan_Types>;
  /** An array relationship */
  subscription_plans: Array<Subscription_Plans>;
  /** An aggregate relationship */
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  /** fetch data from the table: "subscription_plans" using primary key columns */
  subscription_plans_by_pk?: Maybe<Subscription_Plans>;
  /** An array relationship */
  user_checkout_sessions: Array<User_Checkout_Sessions>;
  /** An aggregate relationship */
  user_checkout_sessions_aggregate: User_Checkout_Sessions_Aggregate;
  /** fetch data from the table: "user_checkout_sessions" using primary key columns */
  user_checkout_sessions_by_pk?: Maybe<User_Checkout_Sessions>;
  /** An array relationship */
  user_subscription_card_details: Array<User_Subscription_Card_Details>;
  /** An aggregate relationship */
  user_subscription_card_details_aggregate: User_Subscription_Card_Details_Aggregate;
  /** fetch data from the table: "user_subscription_card_details" using primary key columns */
  user_subscription_card_details_by_pk?: Maybe<User_Subscription_Card_Details>;
  /** An array relationship */
  user_subscriptions: Array<User_Subscriptions>;
  /** An aggregate relationship */
  user_subscriptions_aggregate: User_Subscriptions_Aggregate;
  /** fetch data from the table: "user_subscriptions" using primary key columns */
  user_subscriptions_by_pk?: Maybe<User_Subscriptions>;
  /** fetch data from the table: "users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "users" */
  users_aggregate: Users_Aggregate;
  /** fetch data from the table: "users" using primary key columns */
  users_by_pk?: Maybe<Users>;
};


export type Subscription_RootAccount_RolesArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


export type Subscription_RootAccount_Roles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Roles_Order_By>>;
  where?: InputMaybe<Account_Roles_Bool_Exp>;
};


export type Subscription_RootAccount_Roles_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootAccountsArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Accounts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Accounts_Order_By>>;
  where?: InputMaybe<Accounts_Bool_Exp>;
};


export type Subscription_RootAccounts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCollection_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Collection_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Badges_Order_By>>;
  where?: InputMaybe<Collection_Badges_Bool_Exp>;
};


export type Subscription_RootCollection_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Badges_Order_By>>;
  where?: InputMaybe<Collection_Badges_Bool_Exp>;
};


export type Subscription_RootCollection_Badges_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCollection_FlowsArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


export type Subscription_RootCollection_Flows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Flows_Order_By>>;
  where?: InputMaybe<Collection_Flows_Bool_Exp>;
};


export type Subscription_RootCollection_Flows_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootCollection_VisibilityArgs = {
  distinct_on?: InputMaybe<Array<Collection_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Visibility_Order_By>>;
  where?: InputMaybe<Collection_Visibility_Bool_Exp>;
};


export type Subscription_RootCollection_Visibility_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collection_Visibility_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collection_Visibility_Order_By>>;
  where?: InputMaybe<Collection_Visibility_Bool_Exp>;
};


export type Subscription_RootCollection_Visibility_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


export type Subscription_RootCollections_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_App_InfoArgs = {
  distinct_on?: InputMaybe<Array<Flow_App_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_App_Info_Order_By>>;
  where?: InputMaybe<Flow_App_Info_Bool_Exp>;
};


export type Subscription_RootFlow_App_Info_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_App_Info_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_App_Info_Order_By>>;
  where?: InputMaybe<Flow_App_Info_Bool_Exp>;
};


export type Subscription_RootFlow_App_Info_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_AttachmentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


export type Subscription_RootFlow_Attachments_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Attachments_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Attachments_Order_By>>;
  where?: InputMaybe<Flow_Attachments_Bool_Exp>;
};


export type Subscription_RootFlow_Attachments_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Badge_ValuesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


export type Subscription_RootFlow_Badge_Values_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badge_Values_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badge_Values_Order_By>>;
  where?: InputMaybe<Flow_Badge_Values_Bool_Exp>;
};


export type Subscription_RootFlow_Badge_Values_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badges_Order_By>>;
  where?: InputMaybe<Flow_Badges_Bool_Exp>;
};


export type Subscription_RootFlow_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Badges_Order_By>>;
  where?: InputMaybe<Flow_Badges_Bool_Exp>;
};


export type Subscription_RootFlow_Badges_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFlow_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Components_Order_By>>;
  where?: InputMaybe<Flow_Components_Bool_Exp>;
};


export type Subscription_RootFlow_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Components_Order_By>>;
  where?: InputMaybe<Flow_Components_Bool_Exp>;
};


export type Subscription_RootFlow_Components_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootFlow_KeywordsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


export type Subscription_RootFlow_Keywords_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Keywords_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Keywords_Order_By>>;
  where?: InputMaybe<Flow_Keywords_Bool_Exp>;
};


export type Subscription_RootFlow_Keywords_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Screencast_ComponentsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Components_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Components_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Components_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Components_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Components_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Screencast_DetailsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Details_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Details_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Details_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Screencast_LikesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Likes_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Screencast_TimestampsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Timestamps_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Timestamps_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Timestamps_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Timestamps_Bool_Exp>;
};


export type Subscription_RootFlow_Screencast_Timestamps_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_ScreencastsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


export type Subscription_RootFlow_Screencasts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Bool_Exp>;
};


export type Subscription_RootFlow_Screencasts_BadgesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


export type Subscription_RootFlow_Screencasts_Badges_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencasts_Badges_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencasts_Badges_Order_By>>;
  where?: InputMaybe<Flow_Screencasts_Badges_Bool_Exp>;
};


export type Subscription_RootFlow_Screencasts_Badges_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_Screencasts_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlow_ScreenshotsArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};


export type Subscription_RootFlow_Screenshots_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screenshots_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screenshots_Order_By>>;
  where?: InputMaybe<Flow_Screenshots_Bool_Exp>;
};


export type Subscription_RootFlow_Screenshots_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootFlowsArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};


export type Subscription_RootFlows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};


export type Subscription_RootFlows_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootInvitesArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Invites_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Invites_Order_By>>;
  where?: InputMaybe<Invites_Bool_Exp>;
};


export type Subscription_RootInvites_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootPayment_ProvidersArgs = {
  distinct_on?: InputMaybe<Array<Payment_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Providers_Order_By>>;
  where?: InputMaybe<Payment_Providers_Bool_Exp>;
};


export type Subscription_RootPayment_Providers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Payment_Providers_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Payment_Providers_Order_By>>;
  where?: InputMaybe<Payment_Providers_Bool_Exp>;
};


export type Subscription_RootPayment_Providers_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRefresh_TokensArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootRefresh_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Refresh_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Refresh_Tokens_Order_By>>;
  where?: InputMaybe<Refresh_Tokens_Bool_Exp>;
};


export type Subscription_RootRefresh_Tokens_By_PkArgs = {
  refresh_token: Scalars['uuid'];
};


export type Subscription_RootRolesArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Roles_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Roles_Order_By>>;
  where?: InputMaybe<Roles_Bool_Exp>;
};


export type Subscription_RootRoles_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSubscription_Plan_TypesArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Types_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
};


export type Subscription_RootSubscription_Plan_Types_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plan_Types_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plan_Types_Order_By>>;
  where?: InputMaybe<Subscription_Plan_Types_Bool_Exp>;
};


export type Subscription_RootSubscription_Plan_Types_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootSubscription_PlansArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};


export type Subscription_RootSubscription_Plans_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Plans_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Plans_Order_By>>;
  where?: InputMaybe<Subscription_Plans_Bool_Exp>;
};


export type Subscription_RootSubscription_Plans_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Checkout_SessionsArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Checkout_Sessions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Checkout_Sessions_Order_By>>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};


export type Subscription_RootUser_Checkout_Sessions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_Subscription_Card_DetailsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};


export type Subscription_RootUser_Subscription_Card_Details_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscription_Card_Details_Order_By>>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};


export type Subscription_RootUser_Subscription_Card_Details_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUser_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};


export type Subscription_RootUser_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Subscriptions_Order_By>>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};


export type Subscription_RootUser_Subscriptions_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUsersArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Users_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Users_Order_By>>;
  where?: InputMaybe<Users_Bool_Exp>;
};


export type Subscription_RootUsers_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "time". All fields are combined with logical 'AND'. */
export type Time_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['time']>;
  _gt?: InputMaybe<Scalars['time']>;
  _gte?: InputMaybe<Scalars['time']>;
  _in?: InputMaybe<Array<Scalars['time']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['time']>;
  _lte?: InputMaybe<Scalars['time']>;
  _neq?: InputMaybe<Scalars['time']>;
  _nin?: InputMaybe<Array<Scalars['time']>>;
};

export type Timestamptz_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _cast?: InputMaybe<Timestamptz_Cast_Exp>;
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Stipe checkout sessions */
export type User_Checkout_Sessions = {
  __typename?: 'user_checkout_sessions';
  id: Scalars['uuid'];
  stripe_session_id: Scalars['String'];
  /** An object relationship */
  subscription_plan: Subscription_Plans;
  subscription_plan_id: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
};

/** aggregated selection of "user_checkout_sessions" */
export type User_Checkout_Sessions_Aggregate = {
  __typename?: 'user_checkout_sessions_aggregate';
  aggregate?: Maybe<User_Checkout_Sessions_Aggregate_Fields>;
  nodes: Array<User_Checkout_Sessions>;
};

/** aggregate fields of "user_checkout_sessions" */
export type User_Checkout_Sessions_Aggregate_Fields = {
  __typename?: 'user_checkout_sessions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Checkout_Sessions_Max_Fields>;
  min?: Maybe<User_Checkout_Sessions_Min_Fields>;
};


/** aggregate fields of "user_checkout_sessions" */
export type User_Checkout_Sessions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Checkout_Sessions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_checkout_sessions" */
export type User_Checkout_Sessions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Checkout_Sessions_Max_Order_By>;
  min?: InputMaybe<User_Checkout_Sessions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_checkout_sessions" */
export type User_Checkout_Sessions_Arr_Rel_Insert_Input = {
  data: Array<User_Checkout_Sessions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Checkout_Sessions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_checkout_sessions". All fields are combined with a logical 'AND'. */
export type User_Checkout_Sessions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Checkout_Sessions_Bool_Exp>>;
  _not?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Checkout_Sessions_Bool_Exp>>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  stripe_session_id?: InputMaybe<String_Comparison_Exp>;
  subscription_plan?: InputMaybe<Subscription_Plans_Bool_Exp>;
  subscription_plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_checkout_sessions" */
export enum User_Checkout_Sessions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserCheckoutSessionsPkey = 'user_checkout_sessions_pkey'
}

/** input type for inserting data into table "user_checkout_sessions" */
export type User_Checkout_Sessions_Insert_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  stripe_session_id?: InputMaybe<Scalars['String']>;
  subscription_plan?: InputMaybe<Subscription_Plans_Obj_Rel_Insert_Input>;
  subscription_plan_id?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Checkout_Sessions_Max_Fields = {
  __typename?: 'user_checkout_sessions_max_fields';
  id?: Maybe<Scalars['uuid']>;
  stripe_session_id?: Maybe<Scalars['String']>;
  subscription_plan_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_checkout_sessions" */
export type User_Checkout_Sessions_Max_Order_By = {
  id?: InputMaybe<Order_By>;
  stripe_session_id?: InputMaybe<Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Checkout_Sessions_Min_Fields = {
  __typename?: 'user_checkout_sessions_min_fields';
  id?: Maybe<Scalars['uuid']>;
  stripe_session_id?: Maybe<Scalars['String']>;
  subscription_plan_id?: Maybe<Scalars['uuid']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_checkout_sessions" */
export type User_Checkout_Sessions_Min_Order_By = {
  id?: InputMaybe<Order_By>;
  stripe_session_id?: InputMaybe<Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_checkout_sessions" */
export type User_Checkout_Sessions_Mutation_Response = {
  __typename?: 'user_checkout_sessions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Checkout_Sessions>;
};

/** on_conflict condition type for table "user_checkout_sessions" */
export type User_Checkout_Sessions_On_Conflict = {
  constraint: User_Checkout_Sessions_Constraint;
  update_columns?: Array<User_Checkout_Sessions_Update_Column>;
  where?: InputMaybe<User_Checkout_Sessions_Bool_Exp>;
};

/** Ordering options when selecting data from "user_checkout_sessions". */
export type User_Checkout_Sessions_Order_By = {
  id?: InputMaybe<Order_By>;
  stripe_session_id?: InputMaybe<Order_By>;
  subscription_plan?: InputMaybe<Subscription_Plans_Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_checkout_sessions */
export type User_Checkout_Sessions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_checkout_sessions" */
export enum User_Checkout_Sessions_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StripeSessionId = 'stripe_session_id',
  /** column name */
  SubscriptionPlanId = 'subscription_plan_id',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_checkout_sessions" */
export type User_Checkout_Sessions_Set_Input = {
  id?: InputMaybe<Scalars['uuid']>;
  stripe_session_id?: InputMaybe<Scalars['String']>;
  subscription_plan_id?: InputMaybe<Scalars['uuid']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_checkout_sessions" */
export enum User_Checkout_Sessions_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  StripeSessionId = 'stripe_session_id',
  /** column name */
  SubscriptionPlanId = 'subscription_plan_id',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "user_subscription_card_details" */
export type User_Subscription_Card_Details = {
  __typename?: 'user_subscription_card_details';
  cardholder_name: Scalars['String'];
  created_at: Scalars['timestamptz'];
  expires_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  last_four_digits: Scalars['String'];
  payment_provider: Payment_Providers_Enum;
  /** An object relationship */
  payment_provider_value: Payment_Providers;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_subscription: User_Subscriptions;
  user_subscription_id: Scalars['uuid'];
};

/** aggregated selection of "user_subscription_card_details" */
export type User_Subscription_Card_Details_Aggregate = {
  __typename?: 'user_subscription_card_details_aggregate';
  aggregate?: Maybe<User_Subscription_Card_Details_Aggregate_Fields>;
  nodes: Array<User_Subscription_Card_Details>;
};

/** aggregate fields of "user_subscription_card_details" */
export type User_Subscription_Card_Details_Aggregate_Fields = {
  __typename?: 'user_subscription_card_details_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Subscription_Card_Details_Max_Fields>;
  min?: Maybe<User_Subscription_Card_Details_Min_Fields>;
};


/** aggregate fields of "user_subscription_card_details" */
export type User_Subscription_Card_Details_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Subscription_Card_Details_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Subscription_Card_Details_Max_Order_By>;
  min?: InputMaybe<User_Subscription_Card_Details_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Arr_Rel_Insert_Input = {
  data: Array<User_Subscription_Card_Details_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Subscription_Card_Details_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_subscription_card_details". All fields are combined with a logical 'AND'. */
export type User_Subscription_Card_Details_Bool_Exp = {
  _and?: InputMaybe<Array<User_Subscription_Card_Details_Bool_Exp>>;
  _not?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
  _or?: InputMaybe<Array<User_Subscription_Card_Details_Bool_Exp>>;
  cardholder_name?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expires_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  last_four_digits?: InputMaybe<String_Comparison_Exp>;
  payment_provider?: InputMaybe<Payment_Providers_Enum_Comparison_Exp>;
  payment_provider_value?: InputMaybe<Payment_Providers_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_subscription?: InputMaybe<User_Subscriptions_Bool_Exp>;
  user_subscription_id?: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "user_subscription_card_details" */
export enum User_Subscription_Card_Details_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSubscriptionCardDetailsPkey = 'user_subscription_card_details_pkey',
  /** unique or primary key constraint on columns "user_subscription_id" */
  UserSubscriptionCardDetailsUserSubscriptionIdKey = 'user_subscription_card_details_user_subscription_id_key'
}

/** input type for inserting data into table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Insert_Input = {
  cardholder_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_four_digits?: InputMaybe<Scalars['String']>;
  payment_provider?: InputMaybe<Payment_Providers_Enum>;
  payment_provider_value?: InputMaybe<Payment_Providers_Obj_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_subscription?: InputMaybe<User_Subscriptions_Obj_Rel_Insert_Input>;
  user_subscription_id?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type User_Subscription_Card_Details_Max_Fields = {
  __typename?: 'user_subscription_card_details_max_fields';
  cardholder_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_four_digits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_subscription_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Max_Order_By = {
  cardholder_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_subscription_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Subscription_Card_Details_Min_Fields = {
  __typename?: 'user_subscription_card_details_min_fields';
  cardholder_name?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expires_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  last_four_digits?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_subscription_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Min_Order_By = {
  cardholder_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_subscription_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Mutation_Response = {
  __typename?: 'user_subscription_card_details_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Subscription_Card_Details>;
};

/** input type for inserting object relation for remote table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Obj_Rel_Insert_Input = {
  data: User_Subscription_Card_Details_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Subscription_Card_Details_On_Conflict>;
};

/** on_conflict condition type for table "user_subscription_card_details" */
export type User_Subscription_Card_Details_On_Conflict = {
  constraint: User_Subscription_Card_Details_Constraint;
  update_columns?: Array<User_Subscription_Card_Details_Update_Column>;
  where?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};

/** Ordering options when selecting data from "user_subscription_card_details". */
export type User_Subscription_Card_Details_Order_By = {
  cardholder_name?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expires_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_four_digits?: InputMaybe<Order_By>;
  payment_provider?: InputMaybe<Order_By>;
  payment_provider_value?: InputMaybe<Payment_Providers_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_subscription?: InputMaybe<User_Subscriptions_Order_By>;
  user_subscription_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user_subscription_card_details */
export type User_Subscription_Card_Details_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_subscription_card_details" */
export enum User_Subscription_Card_Details_Select_Column {
  /** column name */
  CardholderName = 'cardholder_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastFourDigits = 'last_four_digits',
  /** column name */
  PaymentProvider = 'payment_provider',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserSubscriptionId = 'user_subscription_id'
}

/** input type for updating data in table "user_subscription_card_details" */
export type User_Subscription_Card_Details_Set_Input = {
  cardholder_name?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expires_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_four_digits?: InputMaybe<Scalars['String']>;
  payment_provider?: InputMaybe<Payment_Providers_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_subscription_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_subscription_card_details" */
export enum User_Subscription_Card_Details_Update_Column {
  /** column name */
  CardholderName = 'cardholder_name',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  ExpiresAt = 'expires_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastFourDigits = 'last_four_digits',
  /** column name */
  PaymentProvider = 'payment_provider',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserSubscriptionId = 'user_subscription_id'
}

/** columns and relationships of "user_subscriptions" */
export type User_Subscriptions = {
  __typename?: 'user_subscriptions';
  billing_date?: Maybe<Scalars['timestamptz']>;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  subscription_plan: Subscription_Plans;
  subscription_plan_id: Scalars['uuid'];
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  user_id: Scalars['uuid'];
  /** An object relationship */
  user_subscription_card_details?: Maybe<User_Subscription_Card_Details>;
};

/** aggregated selection of "user_subscriptions" */
export type User_Subscriptions_Aggregate = {
  __typename?: 'user_subscriptions_aggregate';
  aggregate?: Maybe<User_Subscriptions_Aggregate_Fields>;
  nodes: Array<User_Subscriptions>;
};

/** aggregate fields of "user_subscriptions" */
export type User_Subscriptions_Aggregate_Fields = {
  __typename?: 'user_subscriptions_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<User_Subscriptions_Max_Fields>;
  min?: Maybe<User_Subscriptions_Min_Fields>;
};


/** aggregate fields of "user_subscriptions" */
export type User_Subscriptions_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Subscriptions_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "user_subscriptions" */
export type User_Subscriptions_Aggregate_Order_By = {
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<User_Subscriptions_Max_Order_By>;
  min?: InputMaybe<User_Subscriptions_Min_Order_By>;
};

/** input type for inserting array relation for remote table "user_subscriptions" */
export type User_Subscriptions_Arr_Rel_Insert_Input = {
  data: Array<User_Subscriptions_Insert_Input>;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Subscriptions_On_Conflict>;
};

/** Boolean expression to filter rows from the table "user_subscriptions". All fields are combined with a logical 'AND'. */
export type User_Subscriptions_Bool_Exp = {
  _and?: InputMaybe<Array<User_Subscriptions_Bool_Exp>>;
  _not?: InputMaybe<User_Subscriptions_Bool_Exp>;
  _or?: InputMaybe<Array<User_Subscriptions_Bool_Exp>>;
  billing_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  subscription_plan?: InputMaybe<Subscription_Plans_Bool_Exp>;
  subscription_plan_id?: InputMaybe<Uuid_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user?: InputMaybe<Users_Bool_Exp>;
  user_id?: InputMaybe<Uuid_Comparison_Exp>;
  user_subscription_card_details?: InputMaybe<User_Subscription_Card_Details_Bool_Exp>;
};

/** unique or primary key constraints on table "user_subscriptions" */
export enum User_Subscriptions_Constraint {
  /** unique or primary key constraint on columns "id" */
  UserSubscriptionsPkey = 'user_subscriptions_pkey',
  /** unique or primary key constraint on columns "user_id" */
  UserSubscriptionsUserIdKey = 'user_subscriptions_user_id_key'
}

/** input type for inserting data into table "user_subscriptions" */
export type User_Subscriptions_Insert_Input = {
  billing_date?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  subscription_plan?: InputMaybe<Subscription_Plans_Obj_Rel_Insert_Input>;
  subscription_plan_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<Users_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['uuid']>;
  user_subscription_card_details?: InputMaybe<User_Subscription_Card_Details_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type User_Subscriptions_Max_Fields = {
  __typename?: 'user_subscriptions_max_fields';
  billing_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscription_plan_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "user_subscriptions" */
export type User_Subscriptions_Max_Order_By = {
  billing_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type User_Subscriptions_Min_Fields = {
  __typename?: 'user_subscriptions_min_fields';
  billing_date?: Maybe<Scalars['timestamptz']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  subscription_plan_id?: Maybe<Scalars['uuid']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  user_id?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "user_subscriptions" */
export type User_Subscriptions_Min_Order_By = {
  billing_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "user_subscriptions" */
export type User_Subscriptions_Mutation_Response = {
  __typename?: 'user_subscriptions_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User_Subscriptions>;
};

/** input type for inserting object relation for remote table "user_subscriptions" */
export type User_Subscriptions_Obj_Rel_Insert_Input = {
  data: User_Subscriptions_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<User_Subscriptions_On_Conflict>;
};

/** on_conflict condition type for table "user_subscriptions" */
export type User_Subscriptions_On_Conflict = {
  constraint: User_Subscriptions_Constraint;
  update_columns?: Array<User_Subscriptions_Update_Column>;
  where?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** Ordering options when selecting data from "user_subscriptions". */
export type User_Subscriptions_Order_By = {
  billing_date?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  subscription_plan?: InputMaybe<Subscription_Plans_Order_By>;
  subscription_plan_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user?: InputMaybe<Users_Order_By>;
  user_id?: InputMaybe<Order_By>;
  user_subscription_card_details?: InputMaybe<User_Subscription_Card_Details_Order_By>;
};

/** primary key columns input for table: user_subscriptions */
export type User_Subscriptions_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "user_subscriptions" */
export enum User_Subscriptions_Select_Column {
  /** column name */
  BillingDate = 'billing_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubscriptionPlanId = 'subscription_plan_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "user_subscriptions" */
export type User_Subscriptions_Set_Input = {
  billing_date?: InputMaybe<Scalars['timestamptz']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  subscription_plan_id?: InputMaybe<Scalars['uuid']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_id?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "user_subscriptions" */
export enum User_Subscriptions_Update_Column {
  /** column name */
  BillingDate = 'billing_date',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  SubscriptionPlanId = 'subscription_plan_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'user_id'
}

/** columns and relationships of "users" */
export type Users = {
  __typename?: 'users';
  /** An object relationship */
  account?: Maybe<Accounts>;
  avatar_url?: Maybe<Scalars['String']>;
  /** An array relationship */
  collections: Array<Collections>;
  /** An aggregate relationship */
  collections_aggregate: Collections_Aggregate;
  created_at: Scalars['timestamptz'];
  first_name: Scalars['String'];
  /** An array relationship */
  flow_screencast_likes: Array<Flow_Screencast_Likes>;
  /** An aggregate relationship */
  flow_screencast_likes_aggregate: Flow_Screencast_Likes_Aggregate;
  /** An array relationship */
  flows: Array<Flows>;
  /** An aggregate relationship */
  flows_aggregate: Flows_Aggregate;
  google_id?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  /** A computed field, executes function "is_user_premium" */
  is_premium?: Maybe<Scalars['Boolean']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  /** An object relationship */
  user_subscription?: Maybe<User_Subscriptions>;
};


/** columns and relationships of "users" */
export type UsersCollectionsArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersCollections_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Collections_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Collections_Order_By>>;
  where?: InputMaybe<Collections_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlow_Screencast_LikesArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlow_Screencast_Likes_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flow_Screencast_Likes_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flow_Screencast_Likes_Order_By>>;
  where?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlowsArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};


/** columns and relationships of "users" */
export type UsersFlows_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Flows_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Flows_Order_By>>;
  where?: InputMaybe<Flows_Bool_Exp>;
};

/** aggregated selection of "users" */
export type Users_Aggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<Users_Aggregate_Fields>;
  nodes: Array<Users>;
};

/** aggregate fields of "users" */
export type Users_Aggregate_Fields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Users_Max_Fields>;
  min?: Maybe<Users_Min_Fields>;
};


/** aggregate fields of "users" */
export type Users_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Users_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "users". All fields are combined with a logical 'AND'. */
export type Users_Bool_Exp = {
  _and?: InputMaybe<Array<Users_Bool_Exp>>;
  _not?: InputMaybe<Users_Bool_Exp>;
  _or?: InputMaybe<Array<Users_Bool_Exp>>;
  account?: InputMaybe<Accounts_Bool_Exp>;
  avatar_url?: InputMaybe<String_Comparison_Exp>;
  collections?: InputMaybe<Collections_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  flow_screencast_likes?: InputMaybe<Flow_Screencast_Likes_Bool_Exp>;
  flows?: InputMaybe<Flows_Bool_Exp>;
  google_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  is_premium?: InputMaybe<Boolean_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_subscription?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** input type for inserting data into table "users" */
export type Users_Insert_Input = {
  account?: InputMaybe<Accounts_Obj_Rel_Insert_Input>;
  avatar_url?: InputMaybe<Scalars['String']>;
  collections?: InputMaybe<Collections_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  flow_screencast_likes?: InputMaybe<Flow_Screencast_Likes_Arr_Rel_Insert_Input>;
  flows?: InputMaybe<Flows_Arr_Rel_Insert_Input>;
  google_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_subscription?: InputMaybe<User_Subscriptions_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Users_Max_Fields = {
  __typename?: 'users_max_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Users_Min_Fields = {
  __typename?: 'users_min_fields';
  avatar_url?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  first_name?: Maybe<Scalars['String']>;
  google_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  last_name?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "users" */
export type Users_Mutation_Response = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "users" */
export type Users_Obj_Rel_Insert_Input = {
  data: Users_Insert_Input;
  /** upsert condition */
  on_conflict?: InputMaybe<Users_On_Conflict>;
};

/** on_conflict condition type for table "users" */
export type Users_On_Conflict = {
  constraint: Users_Constraint;
  update_columns?: Array<Users_Update_Column>;
  where?: InputMaybe<Users_Bool_Exp>;
};

/** Ordering options when selecting data from "users". */
export type Users_Order_By = {
  account?: InputMaybe<Accounts_Order_By>;
  avatar_url?: InputMaybe<Order_By>;
  collections_aggregate?: InputMaybe<Collections_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  flow_screencast_likes_aggregate?: InputMaybe<Flow_Screencast_Likes_Aggregate_Order_By>;
  flows_aggregate?: InputMaybe<Flows_Aggregate_Order_By>;
  google_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_premium?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  user_subscription?: InputMaybe<User_Subscriptions_Order_By>;
};

/** primary key columns input for table: users */
export type Users_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "users" */
export enum Users_Select_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "users" */
export type Users_Set_Input = {
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  first_name?: InputMaybe<Scalars['String']>;
  google_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  last_name?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "users" */
export enum Users_Update_Column {
  /** column name */
  AvatarUrl = 'avatar_url',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  GoogleId = 'google_id',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  UpdatedAt = 'updated_at'
}

export type Uuid_Cast_Exp = {
  String?: InputMaybe<String_Comparison_Exp>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _cast?: InputMaybe<Uuid_Cast_Exp>;
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type AppByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type AppByIdQuery = { __typename?: 'query_root', flows_by_pk?: { __typename?: 'flows', user_id: any, id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, created_at: any, updated_at: any, flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow_screencast_components: Array<{ __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum }>, flow_screencast_timestamps: Array<{ __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any }> }>, flow_screenshots: Array<{ __typename?: 'flow_screenshots', id: any, title: string, url: string, created_at: any, updated_at: any }>, flow_app_info?: { __typename?: 'flow_app_info', id: any, category?: string | null, number_of_downloads?: any | null, average_rating?: any | null, website?: string | null, developer?: string | null, app_store_link?: string | null, flow_id: any } | null, flow_attachments: Array<{ __typename?: 'flow_attachments', id: any, title: string, url: string, created_at: any, updated_at: any }> } | null };

export type CheckEmailQueryVariables = Exact<{
  email: Scalars['String'];
}>;


export type CheckEmailQuery = { __typename?: 'query_root', checkEmail: { __typename?: 'SuccessResponseBoolean', value: boolean } };

export type GoogleUrlQueryVariables = Exact<{ [key: string]: never; }>;


export type GoogleUrlQuery = { __typename?: 'query_root', google_url?: { __typename?: 'SuccessResponse', value: string } | null };

export type LogInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LogInMutation = { __typename?: 'mutation_root', login?: { __typename?: 'JWTResponse', token: string, refresh_token: string } | null };

export type RequestResetPasswordMutationVariables = Exact<{
  email: Scalars['String'];
}>;


export type RequestResetPasswordMutation = { __typename?: 'mutation_root', request_reset_password?: { __typename?: 'SuccessResponse', value: string } | null };

export type ResetPasswordMutationVariables = Exact<{
  ticket: Scalars['String'];
  password: Scalars['String'];
}>;


export type ResetPasswordMutation = { __typename?: 'mutation_root', reset_password?: { __typename?: 'JWTResponse', token: string, refresh_token: string } | null };

export type SignUpMutationVariables = Exact<{
  user: RegisterUser;
}>;


export type SignUpMutation = { __typename?: 'mutation_root', register?: { __typename?: 'JWTResponse', token: string, refresh_token: string } | null };

export type CollectionQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type CollectionQuery = { __typename?: 'query_root', collections_by_pk?: { __typename?: 'collections', id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any, collection_flows: Array<{ __typename?: 'collection_flows', flow_screencast: { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow: { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any } } }> } | null };

export type DeletCollectionFlowMutationVariables = Exact<{
  collection_id: Scalars['uuid'];
  flow_screencast_id: Scalars['uuid'];
}>;


export type DeletCollectionFlowMutation = { __typename?: 'mutation_root', delete_collection_flows?: { __typename?: 'collection_flows_mutation_response', affected_rows: number } | null };

export type InsertFlowCollectionMutationVariables = Exact<{
  collection_id: Scalars['uuid'];
  flow_screencast_id: Scalars['uuid'];
}>;


export type InsertFlowCollectionMutation = { __typename?: 'mutation_root', insert_collection_flows_one?: { __typename?: 'collection_flows', id: any } | null };

export type InsertCollectionFlowMutationVariables = Exact<{
  object: Collection_Flows_Insert_Input;
}>;


export type InsertCollectionFlowMutation = { __typename?: 'mutation_root', insert_collection_flows_one?: { __typename?: 'collection_flows', collection_id: any } | null };

export type UserCollectionsQueryVariables = Exact<{
  user_id: Scalars['uuid'];
}>;


export type UserCollectionsQuery = { __typename?: 'query_root', collections: Array<{ __typename?: 'collections', id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any }> };

export type UserSaveCollectionsQueryVariables = Exact<{
  user_id: Scalars['uuid'];
  screencast_id: Scalars['uuid'];
}>;


export type UserSaveCollectionsQuery = { __typename?: 'query_root', collections: Array<{ __typename?: 'collections', is_screencast_in_collection?: boolean | null, id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any, collection_flows_aggregate: { __typename?: 'collection_flows_aggregate', aggregate?: { __typename?: 'collection_flows_aggregate_fields', count: number } | null } }> };

export type FlowAppInfoByFlowIdQueryVariables = Exact<{
  flow_id: Scalars['uuid'];
}>;


export type FlowAppInfoByFlowIdQuery = { __typename?: 'query_root', flow_app_info: Array<{ __typename?: 'flow_app_info', id: any, category?: string | null, number_of_downloads?: any | null, average_rating?: any | null, website?: string | null, developer?: string | null, app_store_link?: string | null, flow_id: any }> };

export type UpsertFlowAppInfoMutationVariables = Exact<{
  object: Flow_App_Info_Insert_Input;
}>;


export type UpsertFlowAppInfoMutation = { __typename?: 'mutation_root', insert_flow_app_info_one?: { __typename?: 'flow_app_info', id: any } | null };

export type DeleteFlowMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteFlowMutation = { __typename?: 'mutation_root', delete_flows_by_pk?: { __typename?: 'flows', id: any } | null };

export type DeleteFlowUnusedMutationVariables = Exact<{
  screencast_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  screenshot_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  keyword_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  attachment_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_id: Scalars['uuid'];
}>;


export type DeleteFlowUnusedMutation = { __typename?: 'mutation_root', delete_flow_screencasts?: { __typename?: 'flow_screencasts_mutation_response', affected_rows: number } | null, delete_flow_screenshots?: { __typename?: 'flow_screenshots_mutation_response', affected_rows: number } | null, delete_flow_keywords?: { __typename?: 'flow_keywords_mutation_response', affected_rows: number } | null, delete_flow_attachments?: { __typename?: 'flow_attachments_mutation_response', affected_rows: number } | null };

export type FlowByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FlowByIdQuery = { __typename?: 'query_root', flows_by_pk?: { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any, flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any }>, flow_screenshots: Array<{ __typename?: 'flow_screenshots', id: any, title: string, url: string, created_at: any, updated_at: any }>, flow_keywords: Array<{ __typename?: 'flow_keywords', id: any, value: string, created_at: any, updated_at: any }>, flow_attachments: Array<{ __typename?: 'flow_attachments', id: any, title: string, url: string, created_at: any, updated_at: any }> } | null };

export type FlowComponentsQueryVariables = Exact<{ [key: string]: never; }>;


export type FlowComponentsQuery = { __typename?: 'query_root', flow_components: Array<{ __typename?: 'flow_components', value: string, comment?: string | null }> };

export type FlowsQueryVariables = Exact<{ [key: string]: never; }>;


export type FlowsQuery = { __typename?: 'query_root', flows: Array<{ __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any }> };

export type InsertUpdateFlowMutationVariables = Exact<{
  object: Flows_Insert_Input;
}>;


export type InsertUpdateFlowMutation = { __typename?: 'mutation_root', insert_flows_one?: { __typename?: 'flows', id: any, flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any }> } | null };

export type DeleteFlowKeywordsMutationVariables = Exact<{
  ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_id: Scalars['uuid'];
}>;


export type DeleteFlowKeywordsMutation = { __typename?: 'mutation_root', delete_flow_keywords?: { __typename?: 'flow_keywords_mutation_response', affected_rows: number } | null };

export type FlowKeywordsByFlowIdQueryVariables = Exact<{
  flow_id: Scalars['uuid'];
}>;


export type FlowKeywordsByFlowIdQuery = { __typename?: 'query_root', flow_keywords: Array<{ __typename?: 'flow_keywords', id: any, value: string, created_at: any, updated_at: any }> };

export type UpsertFlowKeywordsMutationVariables = Exact<{
  object: Array<Flow_Keywords_Insert_Input> | Flow_Keywords_Insert_Input;
}>;


export type UpsertFlowKeywordsMutation = { __typename?: 'mutation_root', insert_flow_keywords?: { __typename?: 'flow_keywords_mutation_response', affected_rows: number } | null };

export type DeleteFlowScreencastComponentsMutationVariables = Exact<{
  ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_screencast_id: Scalars['uuid'];
}>;


export type DeleteFlowScreencastComponentsMutation = { __typename?: 'mutation_root', delete_flow_screencast_components?: { __typename?: 'flow_screencast_components_mutation_response', affected_rows: number } | null };

export type DeleteFlowScreencastUnusedMutationVariables = Exact<{
  component_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  timestamp_ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_screencast_id: Scalars['uuid'];
}>;


export type DeleteFlowScreencastUnusedMutation = { __typename?: 'mutation_root', delete_flow_screencast_components?: { __typename?: 'flow_screencast_components_mutation_response', affected_rows: number } | null, delete_flow_screencast_timestamps?: { __typename?: 'flow_screencast_timestamps_mutation_response', affected_rows: number } | null };

export type DeleteFlowScreencastsMutationVariables = Exact<{
  ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_id: Scalars['uuid'];
}>;


export type DeleteFlowScreencastsMutation = { __typename?: 'mutation_root', delete_flow_screencasts?: { __typename?: 'flow_screencasts_mutation_response', affected_rows: number } | null };

export type DetailsByFlowScreencastIdQueryVariables = Exact<{
  flow_screencast_id: Scalars['uuid'];
}>;


export type DetailsByFlowScreencastIdQuery = { __typename?: 'query_root', flow_screencast_details: Array<{ __typename?: 'flow_screencast_details', id: any, region?: string | null, platform_version?: string | null, app_version?: string | null }> };

export type UpsertFlowScreencastDetailsMutationVariables = Exact<{
  object: Flow_Screencast_Details_Insert_Input;
}>;


export type UpsertFlowScreencastDetailsMutation = { __typename?: 'mutation_root', insert_flow_screencast_details_one?: { __typename?: 'flow_screencast_details', id: any } | null };

export type FlowScreencastsByFlowIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FlowScreencastsByFlowIdQuery = { __typename?: 'query_root', flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any }> };

export type FlowScreencastLikesByUserIdQueryVariables = Exact<{
  userId: Scalars['uuid'];
}>;


export type FlowScreencastLikesByUserIdQuery = { __typename?: 'query_root', flow_screencast_likes: Array<{ __typename?: 'flow_screencast_likes', flow_screencast_id: any, id: any, user_id: any, created_at: any, flow_screencast: { __typename?: 'flow_screencasts', banner_url: string, flow_id: any, screencast_url: string, title: string, id: any, updated_at: any, created_at: any, flow: { __typename?: 'flows', id: any, avatar_background_color?: string | null, avatar_url?: string | null, created_at: any, is_draft: boolean, title: string, updated_at: any, user_id: any } } }> };

export type InsertUpdateFlowScreencastMutationVariables = Exact<{
  object: Flow_Screencasts_Insert_Input;
}>;


export type InsertUpdateFlowScreencastMutation = { __typename?: 'mutation_root', insert_flow_screencasts_one?: { __typename?: 'flow_screencasts', id: any } | null };

export type FlowScreencastByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type FlowScreencastByIdQuery = { __typename?: 'query_root', flow_screencasts_by_pk?: { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow_screencast_timestamps: Array<{ __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any }>, flow_screencast_components: Array<{ __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum }> } | null };

export type DeleteFlowScreenshotsMutationVariables = Exact<{
  ids: Array<Scalars['uuid']> | Scalars['uuid'];
  flow_id: Scalars['uuid'];
}>;


export type DeleteFlowScreenshotsMutation = { __typename?: 'mutation_root', delete_flow_screenshots?: { __typename?: 'flow_screenshots_mutation_response', affected_rows: number } | null };

export type HomepageDataQueryVariables = Exact<{ [key: string]: never; }>;


export type HomepageDataQuery = { __typename?: 'query_root', flows: Array<{ __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any, screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any }>, app_info?: { __typename?: 'flow_app_info', category?: string | null } | null }>, screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow: { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any } }> };

export type ScreencastCardByIdQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type ScreencastCardByIdQuery = { __typename?: 'query_root', flow_screencasts_by_pk?: { __typename?: 'flow_screencasts', is_liked?: boolean | null, is_saved?: boolean | null, created_at: any, id: any, title: string, banner_url: string, screencast_url: string, updated_at: any, flow_screencast_timestamps: Array<{ __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any }>, flow_screencast_components: Array<{ __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum }>, flow_screencast_details?: { __typename?: 'flow_screencast_details', id: any, region?: string | null, platform_version?: string | null, app_version?: string | null } | null, flow_screencast_likes_aggregate: { __typename?: 'flow_screencast_likes_aggregate', aggregate?: { __typename?: 'flow_screencast_likes_aggregate_fields', count: number } | null }, flow: { __typename?: 'flows', title: string } } | null };

export type LikeScreencastMutationVariables = Exact<{
  flow_screencast_id: Scalars['uuid'];
}>;


export type LikeScreencastMutation = { __typename?: 'mutation_root', insert_flow_screencast_likes_one?: { __typename?: 'flow_screencast_likes', id: any } | null };

export type UnlikeScreencastMutationVariables = Exact<{
  flow_screencast_id: Scalars['uuid'];
}>;


export type UnlikeScreencastMutation = { __typename?: 'mutation_root', delete_flow_screencast_likes?: { __typename?: 'flow_screencast_likes_mutation_response', affected_rows: number } | null };

export type UserProfileQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type UserProfileQuery = { __typename?: 'query_root', user?: { __typename?: 'users', id: any, first_name: string, last_name?: string | null, avatar_url?: string | null, created_at: any, is_premium?: boolean | null } | null, uploads: Array<{ __typename?: 'flows', user_id: any, id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, created_at: any, updated_at: any, flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow_screencast_components: Array<{ __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum }>, flow_screencast_timestamps: Array<{ __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any }> }>, flow_screenshots: Array<{ __typename?: 'flow_screenshots', id: any, title: string, url: string, created_at: any, updated_at: any }>, flow_app_info?: { __typename?: 'flow_app_info', id: any, category?: string | null, number_of_downloads?: any | null, average_rating?: any | null, website?: string | null, developer?: string | null, app_store_link?: string | null, flow_id: any } | null, flow_attachments: Array<{ __typename?: 'flow_attachments', id: any, title: string, url: string, created_at: any, updated_at: any }> }>, collections: Array<{ __typename?: 'collections', id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any, collection_flows: Array<{ __typename?: 'collection_flows', flow_screencast: { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any } }> }>, likes: Array<{ __typename?: 'flow_screencast_likes', id: any, flow_screencast_id: any, user_id: any, created_at: any, flow_screencast: { __typename?: 'flow_screencasts', banner_url: string, flow_id: any, screencast_url: string, title: string, id: any, updated_at: any, created_at: any, flow: { __typename?: 'flows', id: any, avatar_background_color?: string | null, avatar_url?: string | null, created_at: any, is_draft: boolean, title: string, updated_at: any, user_id: any } } }> };

export type StipeSessionQueryVariables = Exact<{
  subscription_plan_id: Scalars['String'];
}>;


export type StipeSessionQuery = { __typename?: 'query_root', stripe_session?: { __typename?: 'SuccessResponse', value: string } | null };

export type AllSubscriptionPlansQueryVariables = Exact<{ [key: string]: never; }>;


export type AllSubscriptionPlansQuery = { __typename?: 'query_root', subscription_plans: Array<{ __typename?: 'subscription_plans', id: any, title: string, price: any, description: string, short_description: string, subscription_plan_type: Subscription_Plan_Types_Enum, stripe_price_id?: string | null }> };

export type GetSubscriptionByUserIdQueryVariables = Exact<{
  user_id?: InputMaybe<Scalars['uuid']>;
}>;


export type GetSubscriptionByUserIdQuery = { __typename?: 'query_root', user_subscriptions: Array<{ __typename?: 'user_subscriptions', subscription_plan: { __typename?: 'subscription_plans', id: any, title: string, price: any, subscription_plan_type: Subscription_Plan_Types_Enum } }> };

export type ChangePasswordMutationVariables = Exact<{
  oldPassword: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = { __typename?: 'mutation_root', change_password?: { __typename?: 'SuccessResponse', value: string } | null };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'query_root', me?: { __typename?: 'UserResponse', id: any, avatar_url?: string | null, account_id: any, first_name: string, email: string, roles: Array<string>, created_at: any } | null };

export type UpdateUserMutationVariables = Exact<{
  first_name?: InputMaybe<Scalars['String']>;
  last_name?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'mutation_root', update_users?: { __typename?: 'users_mutation_response', affected_rows: number } | null };

export type AppFragment = { __typename?: 'flows', user_id: any, id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, created_at: any, updated_at: any, flow_screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow_screencast_components: Array<{ __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum }>, flow_screencast_timestamps: Array<{ __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any }> }>, flow_screenshots: Array<{ __typename?: 'flow_screenshots', id: any, title: string, url: string, created_at: any, updated_at: any }>, flow_app_info?: { __typename?: 'flow_app_info', id: any, category?: string | null, number_of_downloads?: any | null, average_rating?: any | null, website?: string | null, developer?: string | null, app_store_link?: string | null, flow_id: any } | null, flow_attachments: Array<{ __typename?: 'flow_attachments', id: any, title: string, url: string, created_at: any, updated_at: any }> };

export type AppCardFragment = { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any, screencasts: Array<{ __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any }>, app_info?: { __typename?: 'flow_app_info', category?: string | null } | null };

export type CollectionFragment = { __typename?: 'collections', id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any };

export type CollectionAppCardFragment = { __typename?: 'collections', id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any, collection_flows: Array<{ __typename?: 'collection_flows', flow_screencast: { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any } }> };

export type CollectionFlowFragment = { __typename?: 'collection_flows', flow_screencast: { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow: { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any } } };

export type FlowFragment = { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any };

export type FlowAppInfoFragment = { __typename?: 'flow_app_info', id: any, category?: string | null, number_of_downloads?: any | null, average_rating?: any | null, website?: string | null, developer?: string | null, app_store_link?: string | null, flow_id: any };

export type FlowAttachmentFragment = { __typename?: 'flow_attachments', id: any, title: string, url: string, created_at: any, updated_at: any };

export type FlowKeywordFragment = { __typename?: 'flow_keywords', id: any, value: string, created_at: any, updated_at: any };

export type FlowLikedScreencastFragment = { __typename?: 'flow_screencast_likes', id: any, flow_screencast_id: any, user_id: any, created_at: any, flow_screencast: { __typename?: 'flow_screencasts', banner_url: string, flow_id: any, screencast_url: string, title: string, id: any, updated_at: any, created_at: any, flow: { __typename?: 'flows', id: any, avatar_background_color?: string | null, avatar_url?: string | null, created_at: any, is_draft: boolean, title: string, updated_at: any, user_id: any } } };

export type FlowScreencastFragment = { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any };

export type FlowScreencastBadgeFragment = { __typename?: 'flow_screencasts_badges', id: any, flow_badge_value: Flow_Badges_Enum, created_at: any };

export type FlowScreencastComponentFragment = { __typename?: 'flow_screencast_components', id: any, flow_component_value: Flow_Components_Enum };

export type FlowScreencastDetailsFragment = { __typename?: 'flow_screencast_details', id: any, region?: string | null, platform_version?: string | null, app_version?: string | null };

export type FlowScreencastTimestampFragment = { __typename?: 'flow_screencast_timestamps', id: any, title: string, timestamp: any };

export type FlowScreenshotFragment = { __typename?: 'flow_screenshots', id: any, title: string, url: string, created_at: any, updated_at: any };

export type ProfileFragment = { __typename?: 'users', id: any, first_name: string, last_name?: string | null, avatar_url?: string | null, created_at: any, is_premium?: boolean | null };

export type SaveCollectionFragment = { __typename?: 'collections', is_screencast_in_collection?: boolean | null, id: any, title: string, avatar_backgorund_color: string, avatar_url: string, collection_badge_value?: Collection_Badges_Enum | null, collection_visibility_value?: Collection_Visibility_Enum | null, created_at: any, updated_at: any, collection_flows_aggregate: { __typename?: 'collection_flows_aggregate', aggregate?: { __typename?: 'collection_flows_aggregate_fields', count: number } | null } };

export type ScreencastCardFragment = { __typename?: 'flow_screencasts', id: any, title: string, banner_url: string, screencast_url: string, created_at: any, updated_at: any, flow: { __typename?: 'flows', id: any, title: string, avatar_url?: string | null, avatar_background_color?: string | null, is_draft: boolean, user_id: any, created_at: any, updated_at: any } };

export type SubscriptionPlanFragment = { __typename?: 'subscription_plans', id: any, title: string, price: any, description: string, short_description: string, subscription_plan_type: Subscription_Plan_Types_Enum, stripe_price_id?: string | null };

export const FlowFragmentDoc = gql`
    fragment Flow on flows {
  id
  title
  avatar_url
  avatar_background_color
  is_draft
  user_id
  created_at
  updated_at
}
    `;
export const FlowScreencastFragmentDoc = gql`
    fragment FlowScreencast on flow_screencasts {
  id
  title
  banner_url
  screencast_url
  created_at
  updated_at
}
    `;
export const FlowScreencastComponentFragmentDoc = gql`
    fragment FlowScreencastComponent on flow_screencast_components {
  id
  flow_component_value
}
    `;
export const FlowScreencastTimestampFragmentDoc = gql`
    fragment FlowScreencastTimestamp on flow_screencast_timestamps {
  id
  title
  timestamp
}
    `;
export const FlowScreenshotFragmentDoc = gql`
    fragment FlowScreenshot on flow_screenshots {
  id
  title
  url
  created_at
  updated_at
}
    `;
export const FlowAppInfoFragmentDoc = gql`
    fragment FlowAppInfo on flow_app_info {
  id
  category
  number_of_downloads
  average_rating
  website
  developer
  app_store_link
  flow_id
}
    `;
export const FlowAttachmentFragmentDoc = gql`
    fragment FlowAttachment on flow_attachments {
  id
  title
  url
  created_at
  updated_at
}
    `;
export const AppFragmentDoc = gql`
    fragment App on flows {
  ...Flow
  user_id
  flow_screencasts {
    ...FlowScreencast
    flow_screencast_components {
      ...FlowScreencastComponent
    }
    flow_screencast_timestamps {
      ...FlowScreencastTimestamp
    }
  }
  flow_screenshots {
    ...FlowScreenshot
  }
  flow_app_info {
    ...FlowAppInfo
  }
  flow_attachments {
    ...FlowAttachment
  }
}
    ${FlowFragmentDoc}
${FlowScreencastFragmentDoc}
${FlowScreencastComponentFragmentDoc}
${FlowScreencastTimestampFragmentDoc}
${FlowScreenshotFragmentDoc}
${FlowAppInfoFragmentDoc}
${FlowAttachmentFragmentDoc}`;
export const AppCardFragmentDoc = gql`
    fragment AppCard on flows {
  ...Flow
  screencasts: flow_screencasts(limit: 1, order_by: {created_at: asc}) {
    ...FlowScreencast
  }
  app_info: flow_app_info {
    category
  }
}
    ${FlowFragmentDoc}
${FlowScreencastFragmentDoc}`;
export const CollectionFragmentDoc = gql`
    fragment Collection on collections {
  id
  title
  avatar_backgorund_color
  avatar_url
  collection_badge_value
  collection_visibility_value
  created_at
  updated_at
}
    `;
export const CollectionAppCardFragmentDoc = gql`
    fragment CollectionAppCard on collections {
  ...Collection
  collection_flows(limit: 1, order_by: {created_at: asc}) {
    flow_screencast {
      ...FlowScreencast
    }
  }
}
    ${CollectionFragmentDoc}
${FlowScreencastFragmentDoc}`;
export const ScreencastCardFragmentDoc = gql`
    fragment ScreencastCard on flow_screencasts {
  ...FlowScreencast
  flow {
    ...Flow
  }
}
    ${FlowScreencastFragmentDoc}
${FlowFragmentDoc}`;
export const CollectionFlowFragmentDoc = gql`
    fragment CollectionFlow on collection_flows {
  flow_screencast {
    ...ScreencastCard
  }
}
    ${ScreencastCardFragmentDoc}`;
export const FlowKeywordFragmentDoc = gql`
    fragment FlowKeyword on flow_keywords {
  id
  value
  created_at
  updated_at
}
    `;
export const FlowLikedScreencastFragmentDoc = gql`
    fragment FlowLikedScreencast on flow_screencast_likes {
  id
  flow_screencast_id
  user_id
  created_at
  flow_screencast {
    banner_url
    flow_id
    screencast_url
    title
    id
    updated_at
    created_at
    flow {
      id
      avatar_background_color
      avatar_url
      created_at
      is_draft
      title
      updated_at
      user_id
    }
  }
}
    `;
export const FlowScreencastBadgeFragmentDoc = gql`
    fragment FlowScreencastBadge on flow_screencasts_badges {
  id
  flow_badge_value
  created_at
}
    `;
export const FlowScreencastDetailsFragmentDoc = gql`
    fragment FlowScreencastDetails on flow_screencast_details {
  id
  region
  platform_version
  app_version
}
    `;
export const ProfileFragmentDoc = gql`
    fragment Profile on users {
  id
  first_name
  last_name
  avatar_url
  created_at
  is_premium
}
    `;
export const SaveCollectionFragmentDoc = gql`
    fragment SaveCollection on collections {
  ...Collection
  is_screencast_in_collection(args: {screencast_id: $screencast_id})
  collection_flows_aggregate {
    aggregate {
      count
    }
  }
}
    ${CollectionFragmentDoc}`;
export const SubscriptionPlanFragmentDoc = gql`
    fragment SubscriptionPlan on subscription_plans {
  id
  title
  price
  description
  short_description
  subscription_plan_type
  stripe_price_id
}
    `;
export const AppByIdDocument = gql`
    query AppById($id: uuid!) {
  flows_by_pk(id: $id) {
    ...App
  }
}
    ${AppFragmentDoc}`;

/**
 * __useAppByIdQuery__
 *
 * To run a query within a React component, call `useAppByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useAppByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAppByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAppByIdQuery(baseOptions: Apollo.QueryHookOptions<AppByIdQuery, AppByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AppByIdQuery, AppByIdQueryVariables>(AppByIdDocument, options);
      }
export function useAppByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AppByIdQuery, AppByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AppByIdQuery, AppByIdQueryVariables>(AppByIdDocument, options);
        }
export type AppByIdQueryHookResult = ReturnType<typeof useAppByIdQuery>;
export type AppByIdLazyQueryHookResult = ReturnType<typeof useAppByIdLazyQuery>;
export type AppByIdQueryResult = Apollo.QueryResult<AppByIdQuery, AppByIdQueryVariables>;
export const CheckEmailDocument = gql`
    query CheckEmail($email: String!) {
  checkEmail(email: $email) {
    value
  }
}
    `;

/**
 * __useCheckEmailQuery__
 *
 * To run a query within a React component, call `useCheckEmailQuery` and pass it any options that fit your needs.
 * When your component renders, `useCheckEmailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCheckEmailQuery({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useCheckEmailQuery(baseOptions: Apollo.QueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, options);
      }
export function useCheckEmailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CheckEmailQuery, CheckEmailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CheckEmailQuery, CheckEmailQueryVariables>(CheckEmailDocument, options);
        }
export type CheckEmailQueryHookResult = ReturnType<typeof useCheckEmailQuery>;
export type CheckEmailLazyQueryHookResult = ReturnType<typeof useCheckEmailLazyQuery>;
export type CheckEmailQueryResult = Apollo.QueryResult<CheckEmailQuery, CheckEmailQueryVariables>;
export const GoogleUrlDocument = gql`
    query GoogleUrl {
  google_url {
    value
  }
}
    `;

/**
 * __useGoogleUrlQuery__
 *
 * To run a query within a React component, call `useGoogleUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGoogleUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGoogleUrlQuery({
 *   variables: {
 *   },
 * });
 */
export function useGoogleUrlQuery(baseOptions?: Apollo.QueryHookOptions<GoogleUrlQuery, GoogleUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GoogleUrlQuery, GoogleUrlQueryVariables>(GoogleUrlDocument, options);
      }
export function useGoogleUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GoogleUrlQuery, GoogleUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GoogleUrlQuery, GoogleUrlQueryVariables>(GoogleUrlDocument, options);
        }
export type GoogleUrlQueryHookResult = ReturnType<typeof useGoogleUrlQuery>;
export type GoogleUrlLazyQueryHookResult = ReturnType<typeof useGoogleUrlLazyQuery>;
export type GoogleUrlQueryResult = Apollo.QueryResult<GoogleUrlQuery, GoogleUrlQueryVariables>;
export const LogInDocument = gql`
    mutation LogIn($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    refresh_token
  }
}
    `;
export type LogInMutationFn = Apollo.MutationFunction<LogInMutation, LogInMutationVariables>;

/**
 * __useLogInMutation__
 *
 * To run a mutation, you first call `useLogInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logInMutation, { data, loading, error }] = useLogInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLogInMutation(baseOptions?: Apollo.MutationHookOptions<LogInMutation, LogInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogInMutation, LogInMutationVariables>(LogInDocument, options);
      }
export type LogInMutationHookResult = ReturnType<typeof useLogInMutation>;
export type LogInMutationResult = Apollo.MutationResult<LogInMutation>;
export type LogInMutationOptions = Apollo.BaseMutationOptions<LogInMutation, LogInMutationVariables>;
export const RequestResetPasswordDocument = gql`
    mutation RequestResetPassword($email: String!) {
  request_reset_password(email: $email) {
    value
  }
}
    `;
export type RequestResetPasswordMutationFn = Apollo.MutationFunction<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;

/**
 * __useRequestResetPasswordMutation__
 *
 * To run a mutation, you first call `useRequestResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestResetPasswordMutation, { data, loading, error }] = useRequestResetPasswordMutation({
 *   variables: {
 *      email: // value for 'email'
 *   },
 * });
 */
export function useRequestResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>(RequestResetPasswordDocument, options);
      }
export type RequestResetPasswordMutationHookResult = ReturnType<typeof useRequestResetPasswordMutation>;
export type RequestResetPasswordMutationResult = Apollo.MutationResult<RequestResetPasswordMutation>;
export type RequestResetPasswordMutationOptions = Apollo.BaseMutationOptions<RequestResetPasswordMutation, RequestResetPasswordMutationVariables>;
export const ResetPasswordDocument = gql`
    mutation ResetPassword($ticket: String!, $password: String!) {
  reset_password(password: $password, ticket: $ticket) {
    token
    refresh_token
  }
}
    `;
export type ResetPasswordMutationFn = Apollo.MutationFunction<ResetPasswordMutation, ResetPasswordMutationVariables>;

/**
 * __useResetPasswordMutation__
 *
 * To run a mutation, you first call `useResetPasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useResetPasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [resetPasswordMutation, { data, loading, error }] = useResetPasswordMutation({
 *   variables: {
 *      ticket: // value for 'ticket'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useResetPasswordMutation(baseOptions?: Apollo.MutationHookOptions<ResetPasswordMutation, ResetPasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ResetPasswordMutation, ResetPasswordMutationVariables>(ResetPasswordDocument, options);
      }
export type ResetPasswordMutationHookResult = ReturnType<typeof useResetPasswordMutation>;
export type ResetPasswordMutationResult = Apollo.MutationResult<ResetPasswordMutation>;
export type ResetPasswordMutationOptions = Apollo.BaseMutationOptions<ResetPasswordMutation, ResetPasswordMutationVariables>;
export const SignUpDocument = gql`
    mutation SignUp($user: RegisterUser!) {
  register(user: $user) {
    token
    refresh_token
  }
}
    `;
export type SignUpMutationFn = Apollo.MutationFunction<SignUpMutation, SignUpMutationVariables>;

/**
 * __useSignUpMutation__
 *
 * To run a mutation, you first call `useSignUpMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpMutation, { data, loading, error }] = useSignUpMutation({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useSignUpMutation(baseOptions?: Apollo.MutationHookOptions<SignUpMutation, SignUpMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpMutation, SignUpMutationVariables>(SignUpDocument, options);
      }
export type SignUpMutationHookResult = ReturnType<typeof useSignUpMutation>;
export type SignUpMutationResult = Apollo.MutationResult<SignUpMutation>;
export type SignUpMutationOptions = Apollo.BaseMutationOptions<SignUpMutation, SignUpMutationVariables>;
export const CollectionDocument = gql`
    query Collection($id: uuid!) {
  collections_by_pk(id: $id) {
    ...Collection
    collection_flows {
      ...CollectionFlow
    }
  }
}
    ${CollectionFragmentDoc}
${CollectionFlowFragmentDoc}`;

/**
 * __useCollectionQuery__
 *
 * To run a query within a React component, call `useCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCollectionQuery(baseOptions: Apollo.QueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
      }
export function useCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionQuery, CollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionQuery, CollectionQueryVariables>(CollectionDocument, options);
        }
export type CollectionQueryHookResult = ReturnType<typeof useCollectionQuery>;
export type CollectionLazyQueryHookResult = ReturnType<typeof useCollectionLazyQuery>;
export type CollectionQueryResult = Apollo.QueryResult<CollectionQuery, CollectionQueryVariables>;
export const DeletCollectionFlowDocument = gql`
    mutation DeletCollectionFlow($collection_id: uuid!, $flow_screencast_id: uuid!) {
  delete_collection_flows(
    where: {collection_id: {_eq: $collection_id}, flow_screencast_id: {_eq: $flow_screencast_id}}
  ) {
    affected_rows
  }
}
    `;
export type DeletCollectionFlowMutationFn = Apollo.MutationFunction<DeletCollectionFlowMutation, DeletCollectionFlowMutationVariables>;

/**
 * __useDeletCollectionFlowMutation__
 *
 * To run a mutation, you first call `useDeletCollectionFlowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletCollectionFlowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletCollectionFlowMutation, { data, loading, error }] = useDeletCollectionFlowMutation({
 *   variables: {
 *      collection_id: // value for 'collection_id'
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useDeletCollectionFlowMutation(baseOptions?: Apollo.MutationHookOptions<DeletCollectionFlowMutation, DeletCollectionFlowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletCollectionFlowMutation, DeletCollectionFlowMutationVariables>(DeletCollectionFlowDocument, options);
      }
export type DeletCollectionFlowMutationHookResult = ReturnType<typeof useDeletCollectionFlowMutation>;
export type DeletCollectionFlowMutationResult = Apollo.MutationResult<DeletCollectionFlowMutation>;
export type DeletCollectionFlowMutationOptions = Apollo.BaseMutationOptions<DeletCollectionFlowMutation, DeletCollectionFlowMutationVariables>;
export const InsertFlowCollectionDocument = gql`
    mutation InsertFlowCollection($collection_id: uuid!, $flow_screencast_id: uuid!) {
  insert_collection_flows_one(
    object: {collection_id: $collection_id, flow_screencast_id: $flow_screencast_id}
  ) {
    id
  }
}
    `;
export type InsertFlowCollectionMutationFn = Apollo.MutationFunction<InsertFlowCollectionMutation, InsertFlowCollectionMutationVariables>;

/**
 * __useInsertFlowCollectionMutation__
 *
 * To run a mutation, you first call `useInsertFlowCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertFlowCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertFlowCollectionMutation, { data, loading, error }] = useInsertFlowCollectionMutation({
 *   variables: {
 *      collection_id: // value for 'collection_id'
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useInsertFlowCollectionMutation(baseOptions?: Apollo.MutationHookOptions<InsertFlowCollectionMutation, InsertFlowCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertFlowCollectionMutation, InsertFlowCollectionMutationVariables>(InsertFlowCollectionDocument, options);
      }
export type InsertFlowCollectionMutationHookResult = ReturnType<typeof useInsertFlowCollectionMutation>;
export type InsertFlowCollectionMutationResult = Apollo.MutationResult<InsertFlowCollectionMutation>;
export type InsertFlowCollectionMutationOptions = Apollo.BaseMutationOptions<InsertFlowCollectionMutation, InsertFlowCollectionMutationVariables>;
export const InsertCollectionFlowDocument = gql`
    mutation InsertCollectionFlow($object: collection_flows_insert_input!) {
  insert_collection_flows_one(object: $object) {
    collection_id
  }
}
    `;
export type InsertCollectionFlowMutationFn = Apollo.MutationFunction<InsertCollectionFlowMutation, InsertCollectionFlowMutationVariables>;

/**
 * __useInsertCollectionFlowMutation__
 *
 * To run a mutation, you first call `useInsertCollectionFlowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertCollectionFlowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertCollectionFlowMutation, { data, loading, error }] = useInsertCollectionFlowMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertCollectionFlowMutation(baseOptions?: Apollo.MutationHookOptions<InsertCollectionFlowMutation, InsertCollectionFlowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertCollectionFlowMutation, InsertCollectionFlowMutationVariables>(InsertCollectionFlowDocument, options);
      }
export type InsertCollectionFlowMutationHookResult = ReturnType<typeof useInsertCollectionFlowMutation>;
export type InsertCollectionFlowMutationResult = Apollo.MutationResult<InsertCollectionFlowMutation>;
export type InsertCollectionFlowMutationOptions = Apollo.BaseMutationOptions<InsertCollectionFlowMutation, InsertCollectionFlowMutationVariables>;
export const UserCollectionsDocument = gql`
    query UserCollections($user_id: uuid!) {
  collections(where: {user_id: {_eq: $user_id}}) {
    ...Collection
  }
}
    ${CollectionFragmentDoc}`;

/**
 * __useUserCollectionsQuery__
 *
 * To run a query within a React component, call `useUserCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserCollectionsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useUserCollectionsQuery(baseOptions: Apollo.QueryHookOptions<UserCollectionsQuery, UserCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserCollectionsQuery, UserCollectionsQueryVariables>(UserCollectionsDocument, options);
      }
export function useUserCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserCollectionsQuery, UserCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserCollectionsQuery, UserCollectionsQueryVariables>(UserCollectionsDocument, options);
        }
export type UserCollectionsQueryHookResult = ReturnType<typeof useUserCollectionsQuery>;
export type UserCollectionsLazyQueryHookResult = ReturnType<typeof useUserCollectionsLazyQuery>;
export type UserCollectionsQueryResult = Apollo.QueryResult<UserCollectionsQuery, UserCollectionsQueryVariables>;
export const UserSaveCollectionsDocument = gql`
    query UserSaveCollections($user_id: uuid!, $screencast_id: uuid!) {
  collections(where: {user_id: {_eq: $user_id}}, order_by: {updated_at: desc}) {
    ...SaveCollection
  }
}
    ${SaveCollectionFragmentDoc}`;

/**
 * __useUserSaveCollectionsQuery__
 *
 * To run a query within a React component, call `useUserSaveCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSaveCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSaveCollectionsQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *      screencast_id: // value for 'screencast_id'
 *   },
 * });
 */
export function useUserSaveCollectionsQuery(baseOptions: Apollo.QueryHookOptions<UserSaveCollectionsQuery, UserSaveCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserSaveCollectionsQuery, UserSaveCollectionsQueryVariables>(UserSaveCollectionsDocument, options);
      }
export function useUserSaveCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserSaveCollectionsQuery, UserSaveCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserSaveCollectionsQuery, UserSaveCollectionsQueryVariables>(UserSaveCollectionsDocument, options);
        }
export type UserSaveCollectionsQueryHookResult = ReturnType<typeof useUserSaveCollectionsQuery>;
export type UserSaveCollectionsLazyQueryHookResult = ReturnType<typeof useUserSaveCollectionsLazyQuery>;
export type UserSaveCollectionsQueryResult = Apollo.QueryResult<UserSaveCollectionsQuery, UserSaveCollectionsQueryVariables>;
export const FlowAppInfoByFlowIdDocument = gql`
    query FlowAppInfoByFlowId($flow_id: uuid!) {
  flow_app_info(where: {flow_id: {_eq: $flow_id}}) {
    ...FlowAppInfo
  }
}
    ${FlowAppInfoFragmentDoc}`;

/**
 * __useFlowAppInfoByFlowIdQuery__
 *
 * To run a query within a React component, call `useFlowAppInfoByFlowIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowAppInfoByFlowIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowAppInfoByFlowIdQuery({
 *   variables: {
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useFlowAppInfoByFlowIdQuery(baseOptions: Apollo.QueryHookOptions<FlowAppInfoByFlowIdQuery, FlowAppInfoByFlowIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowAppInfoByFlowIdQuery, FlowAppInfoByFlowIdQueryVariables>(FlowAppInfoByFlowIdDocument, options);
      }
export function useFlowAppInfoByFlowIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowAppInfoByFlowIdQuery, FlowAppInfoByFlowIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowAppInfoByFlowIdQuery, FlowAppInfoByFlowIdQueryVariables>(FlowAppInfoByFlowIdDocument, options);
        }
export type FlowAppInfoByFlowIdQueryHookResult = ReturnType<typeof useFlowAppInfoByFlowIdQuery>;
export type FlowAppInfoByFlowIdLazyQueryHookResult = ReturnType<typeof useFlowAppInfoByFlowIdLazyQuery>;
export type FlowAppInfoByFlowIdQueryResult = Apollo.QueryResult<FlowAppInfoByFlowIdQuery, FlowAppInfoByFlowIdQueryVariables>;
export const UpsertFlowAppInfoDocument = gql`
    mutation UpsertFlowAppInfo($object: flow_app_info_insert_input!) {
  insert_flow_app_info_one(
    object: $object
    on_conflict: {constraint: flow_app_info_pkey, update_columns: [category, app_store_link, average_rating, developer, number_of_downloads, website]}
  ) {
    id
  }
}
    `;
export type UpsertFlowAppInfoMutationFn = Apollo.MutationFunction<UpsertFlowAppInfoMutation, UpsertFlowAppInfoMutationVariables>;

/**
 * __useUpsertFlowAppInfoMutation__
 *
 * To run a mutation, you first call `useUpsertFlowAppInfoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFlowAppInfoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFlowAppInfoMutation, { data, loading, error }] = useUpsertFlowAppInfoMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertFlowAppInfoMutation(baseOptions?: Apollo.MutationHookOptions<UpsertFlowAppInfoMutation, UpsertFlowAppInfoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertFlowAppInfoMutation, UpsertFlowAppInfoMutationVariables>(UpsertFlowAppInfoDocument, options);
      }
export type UpsertFlowAppInfoMutationHookResult = ReturnType<typeof useUpsertFlowAppInfoMutation>;
export type UpsertFlowAppInfoMutationResult = Apollo.MutationResult<UpsertFlowAppInfoMutation>;
export type UpsertFlowAppInfoMutationOptions = Apollo.BaseMutationOptions<UpsertFlowAppInfoMutation, UpsertFlowAppInfoMutationVariables>;
export const DeleteFlowDocument = gql`
    mutation DeleteFlow($id: uuid!) {
  delete_flows_by_pk(id: $id) {
    id
  }
}
    `;
export type DeleteFlowMutationFn = Apollo.MutationFunction<DeleteFlowMutation, DeleteFlowMutationVariables>;

/**
 * __useDeleteFlowMutation__
 *
 * To run a mutation, you first call `useDeleteFlowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowMutation, { data, loading, error }] = useDeleteFlowMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteFlowMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowMutation, DeleteFlowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowMutation, DeleteFlowMutationVariables>(DeleteFlowDocument, options);
      }
export type DeleteFlowMutationHookResult = ReturnType<typeof useDeleteFlowMutation>;
export type DeleteFlowMutationResult = Apollo.MutationResult<DeleteFlowMutation>;
export type DeleteFlowMutationOptions = Apollo.BaseMutationOptions<DeleteFlowMutation, DeleteFlowMutationVariables>;
export const DeleteFlowUnusedDocument = gql`
    mutation DeleteFlowUnused($screencast_ids: [uuid!]!, $screenshot_ids: [uuid!]!, $keyword_ids: [uuid!]!, $attachment_ids: [uuid!]!, $flow_id: uuid!) {
  delete_flow_screencasts(
    where: {id: {_nin: $screencast_ids}, flow_id: {_eq: $flow_id}}
  ) {
    affected_rows
  }
  delete_flow_screenshots(
    where: {id: {_nin: $screenshot_ids}, flow_id: {_eq: $flow_id}}
  ) {
    affected_rows
  }
  delete_flow_keywords(
    where: {id: {_nin: $keyword_ids}, flow_id: {_eq: $flow_id}}
  ) {
    affected_rows
  }
  delete_flow_attachments(
    where: {id: {_nin: $attachment_ids}, flow_id: {_eq: $flow_id}}
  ) {
    affected_rows
  }
}
    `;
export type DeleteFlowUnusedMutationFn = Apollo.MutationFunction<DeleteFlowUnusedMutation, DeleteFlowUnusedMutationVariables>;

/**
 * __useDeleteFlowUnusedMutation__
 *
 * To run a mutation, you first call `useDeleteFlowUnusedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowUnusedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowUnusedMutation, { data, loading, error }] = useDeleteFlowUnusedMutation({
 *   variables: {
 *      screencast_ids: // value for 'screencast_ids'
 *      screenshot_ids: // value for 'screenshot_ids'
 *      keyword_ids: // value for 'keyword_ids'
 *      attachment_ids: // value for 'attachment_ids'
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useDeleteFlowUnusedMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowUnusedMutation, DeleteFlowUnusedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowUnusedMutation, DeleteFlowUnusedMutationVariables>(DeleteFlowUnusedDocument, options);
      }
export type DeleteFlowUnusedMutationHookResult = ReturnType<typeof useDeleteFlowUnusedMutation>;
export type DeleteFlowUnusedMutationResult = Apollo.MutationResult<DeleteFlowUnusedMutation>;
export type DeleteFlowUnusedMutationOptions = Apollo.BaseMutationOptions<DeleteFlowUnusedMutation, DeleteFlowUnusedMutationVariables>;
export const FlowByIdDocument = gql`
    query FlowById($id: uuid!) {
  flows_by_pk(id: $id) {
    ...Flow
    flow_screencasts {
      ...FlowScreencast
    }
    flow_screenshots {
      ...FlowScreenshot
    }
    flow_keywords {
      ...FlowKeyword
    }
    flow_attachments {
      ...FlowAttachment
    }
  }
}
    ${FlowFragmentDoc}
${FlowScreencastFragmentDoc}
${FlowScreenshotFragmentDoc}
${FlowKeywordFragmentDoc}
${FlowAttachmentFragmentDoc}`;

/**
 * __useFlowByIdQuery__
 *
 * To run a query within a React component, call `useFlowByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFlowByIdQuery(baseOptions: Apollo.QueryHookOptions<FlowByIdQuery, FlowByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowByIdQuery, FlowByIdQueryVariables>(FlowByIdDocument, options);
      }
export function useFlowByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowByIdQuery, FlowByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowByIdQuery, FlowByIdQueryVariables>(FlowByIdDocument, options);
        }
export type FlowByIdQueryHookResult = ReturnType<typeof useFlowByIdQuery>;
export type FlowByIdLazyQueryHookResult = ReturnType<typeof useFlowByIdLazyQuery>;
export type FlowByIdQueryResult = Apollo.QueryResult<FlowByIdQuery, FlowByIdQueryVariables>;
export const FlowComponentsDocument = gql`
    query FlowComponents {
  flow_components {
    value
    comment
  }
}
    `;

/**
 * __useFlowComponentsQuery__
 *
 * To run a query within a React component, call `useFlowComponentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowComponentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowComponentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFlowComponentsQuery(baseOptions?: Apollo.QueryHookOptions<FlowComponentsQuery, FlowComponentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowComponentsQuery, FlowComponentsQueryVariables>(FlowComponentsDocument, options);
      }
export function useFlowComponentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowComponentsQuery, FlowComponentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowComponentsQuery, FlowComponentsQueryVariables>(FlowComponentsDocument, options);
        }
export type FlowComponentsQueryHookResult = ReturnType<typeof useFlowComponentsQuery>;
export type FlowComponentsLazyQueryHookResult = ReturnType<typeof useFlowComponentsLazyQuery>;
export type FlowComponentsQueryResult = Apollo.QueryResult<FlowComponentsQuery, FlowComponentsQueryVariables>;
export const FlowsDocument = gql`
    query Flows {
  flows {
    ...Flow
  }
}
    ${FlowFragmentDoc}`;

/**
 * __useFlowsQuery__
 *
 * To run a query within a React component, call `useFlowsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowsQuery({
 *   variables: {
 *   },
 * });
 */
export function useFlowsQuery(baseOptions?: Apollo.QueryHookOptions<FlowsQuery, FlowsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowsQuery, FlowsQueryVariables>(FlowsDocument, options);
      }
export function useFlowsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowsQuery, FlowsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowsQuery, FlowsQueryVariables>(FlowsDocument, options);
        }
export type FlowsQueryHookResult = ReturnType<typeof useFlowsQuery>;
export type FlowsLazyQueryHookResult = ReturnType<typeof useFlowsLazyQuery>;
export type FlowsQueryResult = Apollo.QueryResult<FlowsQuery, FlowsQueryVariables>;
export const InsertUpdateFlowDocument = gql`
    mutation InsertUpdateFlow($object: flows_insert_input!) {
  insert_flows_one(
    object: $object
    on_conflict: {constraint: flows_pkey, update_columns: [title, avatar_url, avatar_background_color, is_draft]}
  ) {
    id
    flow_screencasts {
      id
    }
  }
}
    `;
export type InsertUpdateFlowMutationFn = Apollo.MutationFunction<InsertUpdateFlowMutation, InsertUpdateFlowMutationVariables>;

/**
 * __useInsertUpdateFlowMutation__
 *
 * To run a mutation, you first call `useInsertUpdateFlowMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUpdateFlowMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUpdateFlowMutation, { data, loading, error }] = useInsertUpdateFlowMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertUpdateFlowMutation(baseOptions?: Apollo.MutationHookOptions<InsertUpdateFlowMutation, InsertUpdateFlowMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUpdateFlowMutation, InsertUpdateFlowMutationVariables>(InsertUpdateFlowDocument, options);
      }
export type InsertUpdateFlowMutationHookResult = ReturnType<typeof useInsertUpdateFlowMutation>;
export type InsertUpdateFlowMutationResult = Apollo.MutationResult<InsertUpdateFlowMutation>;
export type InsertUpdateFlowMutationOptions = Apollo.BaseMutationOptions<InsertUpdateFlowMutation, InsertUpdateFlowMutationVariables>;
export const DeleteFlowKeywordsDocument = gql`
    mutation DeleteFlowKeywords($ids: [uuid!]!, $flow_id: uuid!) {
  delete_flow_keywords(where: {id: {_nin: $ids}, flow_id: {_eq: $flow_id}}) {
    affected_rows
  }
}
    `;
export type DeleteFlowKeywordsMutationFn = Apollo.MutationFunction<DeleteFlowKeywordsMutation, DeleteFlowKeywordsMutationVariables>;

/**
 * __useDeleteFlowKeywordsMutation__
 *
 * To run a mutation, you first call `useDeleteFlowKeywordsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowKeywordsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowKeywordsMutation, { data, loading, error }] = useDeleteFlowKeywordsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useDeleteFlowKeywordsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowKeywordsMutation, DeleteFlowKeywordsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowKeywordsMutation, DeleteFlowKeywordsMutationVariables>(DeleteFlowKeywordsDocument, options);
      }
export type DeleteFlowKeywordsMutationHookResult = ReturnType<typeof useDeleteFlowKeywordsMutation>;
export type DeleteFlowKeywordsMutationResult = Apollo.MutationResult<DeleteFlowKeywordsMutation>;
export type DeleteFlowKeywordsMutationOptions = Apollo.BaseMutationOptions<DeleteFlowKeywordsMutation, DeleteFlowKeywordsMutationVariables>;
export const FlowKeywordsByFlowIdDocument = gql`
    query FlowKeywordsByFlowId($flow_id: uuid!) {
  flow_keywords(where: {flow_id: {_eq: $flow_id}}) {
    ...FlowKeyword
  }
}
    ${FlowKeywordFragmentDoc}`;

/**
 * __useFlowKeywordsByFlowIdQuery__
 *
 * To run a query within a React component, call `useFlowKeywordsByFlowIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowKeywordsByFlowIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowKeywordsByFlowIdQuery({
 *   variables: {
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useFlowKeywordsByFlowIdQuery(baseOptions: Apollo.QueryHookOptions<FlowKeywordsByFlowIdQuery, FlowKeywordsByFlowIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowKeywordsByFlowIdQuery, FlowKeywordsByFlowIdQueryVariables>(FlowKeywordsByFlowIdDocument, options);
      }
export function useFlowKeywordsByFlowIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowKeywordsByFlowIdQuery, FlowKeywordsByFlowIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowKeywordsByFlowIdQuery, FlowKeywordsByFlowIdQueryVariables>(FlowKeywordsByFlowIdDocument, options);
        }
export type FlowKeywordsByFlowIdQueryHookResult = ReturnType<typeof useFlowKeywordsByFlowIdQuery>;
export type FlowKeywordsByFlowIdLazyQueryHookResult = ReturnType<typeof useFlowKeywordsByFlowIdLazyQuery>;
export type FlowKeywordsByFlowIdQueryResult = Apollo.QueryResult<FlowKeywordsByFlowIdQuery, FlowKeywordsByFlowIdQueryVariables>;
export const UpsertFlowKeywordsDocument = gql`
    mutation UpsertFlowKeywords($object: [flow_keywords_insert_input!]!) {
  insert_flow_keywords(
    objects: $object
    on_conflict: {constraint: flow_keywords_pkey}
  ) {
    affected_rows
  }
}
    `;
export type UpsertFlowKeywordsMutationFn = Apollo.MutationFunction<UpsertFlowKeywordsMutation, UpsertFlowKeywordsMutationVariables>;

/**
 * __useUpsertFlowKeywordsMutation__
 *
 * To run a mutation, you first call `useUpsertFlowKeywordsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFlowKeywordsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFlowKeywordsMutation, { data, loading, error }] = useUpsertFlowKeywordsMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertFlowKeywordsMutation(baseOptions?: Apollo.MutationHookOptions<UpsertFlowKeywordsMutation, UpsertFlowKeywordsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertFlowKeywordsMutation, UpsertFlowKeywordsMutationVariables>(UpsertFlowKeywordsDocument, options);
      }
export type UpsertFlowKeywordsMutationHookResult = ReturnType<typeof useUpsertFlowKeywordsMutation>;
export type UpsertFlowKeywordsMutationResult = Apollo.MutationResult<UpsertFlowKeywordsMutation>;
export type UpsertFlowKeywordsMutationOptions = Apollo.BaseMutationOptions<UpsertFlowKeywordsMutation, UpsertFlowKeywordsMutationVariables>;
export const DeleteFlowScreencastComponentsDocument = gql`
    mutation DeleteFlowScreencastComponents($ids: [uuid!]!, $flow_screencast_id: uuid!) {
  delete_flow_screencast_components(
    where: {id: {_nin: $ids}, flow_screencast_id: {_eq: $flow_screencast_id}}
  ) {
    affected_rows
  }
}
    `;
export type DeleteFlowScreencastComponentsMutationFn = Apollo.MutationFunction<DeleteFlowScreencastComponentsMutation, DeleteFlowScreencastComponentsMutationVariables>;

/**
 * __useDeleteFlowScreencastComponentsMutation__
 *
 * To run a mutation, you first call `useDeleteFlowScreencastComponentsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowScreencastComponentsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowScreencastComponentsMutation, { data, loading, error }] = useDeleteFlowScreencastComponentsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useDeleteFlowScreencastComponentsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowScreencastComponentsMutation, DeleteFlowScreencastComponentsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowScreencastComponentsMutation, DeleteFlowScreencastComponentsMutationVariables>(DeleteFlowScreencastComponentsDocument, options);
      }
export type DeleteFlowScreencastComponentsMutationHookResult = ReturnType<typeof useDeleteFlowScreencastComponentsMutation>;
export type DeleteFlowScreencastComponentsMutationResult = Apollo.MutationResult<DeleteFlowScreencastComponentsMutation>;
export type DeleteFlowScreencastComponentsMutationOptions = Apollo.BaseMutationOptions<DeleteFlowScreencastComponentsMutation, DeleteFlowScreencastComponentsMutationVariables>;
export const DeleteFlowScreencastUnusedDocument = gql`
    mutation DeleteFlowScreencastUnused($component_ids: [uuid!]!, $timestamp_ids: [uuid!]!, $flow_screencast_id: uuid!) {
  delete_flow_screencast_components(
    where: {id: {_nin: $component_ids}, flow_screencast_id: {_eq: $flow_screencast_id}}
  ) {
    affected_rows
  }
  delete_flow_screencast_timestamps(
    where: {id: {_nin: $timestamp_ids}, flow_screencast_id: {_eq: $flow_screencast_id}}
  ) {
    affected_rows
  }
}
    `;
export type DeleteFlowScreencastUnusedMutationFn = Apollo.MutationFunction<DeleteFlowScreencastUnusedMutation, DeleteFlowScreencastUnusedMutationVariables>;

/**
 * __useDeleteFlowScreencastUnusedMutation__
 *
 * To run a mutation, you first call `useDeleteFlowScreencastUnusedMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowScreencastUnusedMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowScreencastUnusedMutation, { data, loading, error }] = useDeleteFlowScreencastUnusedMutation({
 *   variables: {
 *      component_ids: // value for 'component_ids'
 *      timestamp_ids: // value for 'timestamp_ids'
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useDeleteFlowScreencastUnusedMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowScreencastUnusedMutation, DeleteFlowScreencastUnusedMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowScreencastUnusedMutation, DeleteFlowScreencastUnusedMutationVariables>(DeleteFlowScreencastUnusedDocument, options);
      }
export type DeleteFlowScreencastUnusedMutationHookResult = ReturnType<typeof useDeleteFlowScreencastUnusedMutation>;
export type DeleteFlowScreencastUnusedMutationResult = Apollo.MutationResult<DeleteFlowScreencastUnusedMutation>;
export type DeleteFlowScreencastUnusedMutationOptions = Apollo.BaseMutationOptions<DeleteFlowScreencastUnusedMutation, DeleteFlowScreencastUnusedMutationVariables>;
export const DeleteFlowScreencastsDocument = gql`
    mutation DeleteFlowScreencasts($ids: [uuid!]!, $flow_id: uuid!) {
  delete_flow_screencasts(where: {id: {_nin: $ids}, flow_id: {_eq: $flow_id}}) {
    affected_rows
  }
}
    `;
export type DeleteFlowScreencastsMutationFn = Apollo.MutationFunction<DeleteFlowScreencastsMutation, DeleteFlowScreencastsMutationVariables>;

/**
 * __useDeleteFlowScreencastsMutation__
 *
 * To run a mutation, you first call `useDeleteFlowScreencastsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowScreencastsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowScreencastsMutation, { data, loading, error }] = useDeleteFlowScreencastsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useDeleteFlowScreencastsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowScreencastsMutation, DeleteFlowScreencastsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowScreencastsMutation, DeleteFlowScreencastsMutationVariables>(DeleteFlowScreencastsDocument, options);
      }
export type DeleteFlowScreencastsMutationHookResult = ReturnType<typeof useDeleteFlowScreencastsMutation>;
export type DeleteFlowScreencastsMutationResult = Apollo.MutationResult<DeleteFlowScreencastsMutation>;
export type DeleteFlowScreencastsMutationOptions = Apollo.BaseMutationOptions<DeleteFlowScreencastsMutation, DeleteFlowScreencastsMutationVariables>;
export const DetailsByFlowScreencastIdDocument = gql`
    query DetailsByFlowScreencastId($flow_screencast_id: uuid!) {
  flow_screencast_details(where: {flow_screencast_id: {_eq: $flow_screencast_id}}) {
    ...FlowScreencastDetails
  }
}
    ${FlowScreencastDetailsFragmentDoc}`;

/**
 * __useDetailsByFlowScreencastIdQuery__
 *
 * To run a query within a React component, call `useDetailsByFlowScreencastIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useDetailsByFlowScreencastIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDetailsByFlowScreencastIdQuery({
 *   variables: {
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useDetailsByFlowScreencastIdQuery(baseOptions: Apollo.QueryHookOptions<DetailsByFlowScreencastIdQuery, DetailsByFlowScreencastIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DetailsByFlowScreencastIdQuery, DetailsByFlowScreencastIdQueryVariables>(DetailsByFlowScreencastIdDocument, options);
      }
export function useDetailsByFlowScreencastIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DetailsByFlowScreencastIdQuery, DetailsByFlowScreencastIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DetailsByFlowScreencastIdQuery, DetailsByFlowScreencastIdQueryVariables>(DetailsByFlowScreencastIdDocument, options);
        }
export type DetailsByFlowScreencastIdQueryHookResult = ReturnType<typeof useDetailsByFlowScreencastIdQuery>;
export type DetailsByFlowScreencastIdLazyQueryHookResult = ReturnType<typeof useDetailsByFlowScreencastIdLazyQuery>;
export type DetailsByFlowScreencastIdQueryResult = Apollo.QueryResult<DetailsByFlowScreencastIdQuery, DetailsByFlowScreencastIdQueryVariables>;
export const UpsertFlowScreencastDetailsDocument = gql`
    mutation UpsertFlowScreencastDetails($object: flow_screencast_details_insert_input!) {
  insert_flow_screencast_details_one(
    object: $object
    on_conflict: {constraint: flow_screencast_details_pkey, update_columns: [app_version, platform_version, region]}
  ) {
    id
  }
}
    `;
export type UpsertFlowScreencastDetailsMutationFn = Apollo.MutationFunction<UpsertFlowScreencastDetailsMutation, UpsertFlowScreencastDetailsMutationVariables>;

/**
 * __useUpsertFlowScreencastDetailsMutation__
 *
 * To run a mutation, you first call `useUpsertFlowScreencastDetailsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpsertFlowScreencastDetailsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [upsertFlowScreencastDetailsMutation, { data, loading, error }] = useUpsertFlowScreencastDetailsMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useUpsertFlowScreencastDetailsMutation(baseOptions?: Apollo.MutationHookOptions<UpsertFlowScreencastDetailsMutation, UpsertFlowScreencastDetailsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpsertFlowScreencastDetailsMutation, UpsertFlowScreencastDetailsMutationVariables>(UpsertFlowScreencastDetailsDocument, options);
      }
export type UpsertFlowScreencastDetailsMutationHookResult = ReturnType<typeof useUpsertFlowScreencastDetailsMutation>;
export type UpsertFlowScreencastDetailsMutationResult = Apollo.MutationResult<UpsertFlowScreencastDetailsMutation>;
export type UpsertFlowScreencastDetailsMutationOptions = Apollo.BaseMutationOptions<UpsertFlowScreencastDetailsMutation, UpsertFlowScreencastDetailsMutationVariables>;
export const FlowScreencastsByFlowIdDocument = gql`
    query FlowScreencastsByFlowId($id: uuid!) {
  flow_screencasts(where: {flow_id: {_eq: $id}}) {
    ...FlowScreencast
  }
}
    ${FlowScreencastFragmentDoc}`;

/**
 * __useFlowScreencastsByFlowIdQuery__
 *
 * To run a query within a React component, call `useFlowScreencastsByFlowIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowScreencastsByFlowIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowScreencastsByFlowIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFlowScreencastsByFlowIdQuery(baseOptions: Apollo.QueryHookOptions<FlowScreencastsByFlowIdQuery, FlowScreencastsByFlowIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowScreencastsByFlowIdQuery, FlowScreencastsByFlowIdQueryVariables>(FlowScreencastsByFlowIdDocument, options);
      }
export function useFlowScreencastsByFlowIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowScreencastsByFlowIdQuery, FlowScreencastsByFlowIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowScreencastsByFlowIdQuery, FlowScreencastsByFlowIdQueryVariables>(FlowScreencastsByFlowIdDocument, options);
        }
export type FlowScreencastsByFlowIdQueryHookResult = ReturnType<typeof useFlowScreencastsByFlowIdQuery>;
export type FlowScreencastsByFlowIdLazyQueryHookResult = ReturnType<typeof useFlowScreencastsByFlowIdLazyQuery>;
export type FlowScreencastsByFlowIdQueryResult = Apollo.QueryResult<FlowScreencastsByFlowIdQuery, FlowScreencastsByFlowIdQueryVariables>;
export const FlowScreencastLikesByUserIdDocument = gql`
    query FlowScreencastLikesByUserId($userId: uuid!) {
  flow_screencast_likes(where: {user_id: {_eq: $userId}}) {
    flow_screencast_id
    id
    user_id
    created_at
    flow_screencast {
      banner_url
      flow_id
      screencast_url
      title
      id
      updated_at
      created_at
      flow {
        id
        avatar_background_color
        avatar_url
        created_at
        is_draft
        title
        updated_at
        user_id
      }
    }
  }
}
    `;

/**
 * __useFlowScreencastLikesByUserIdQuery__
 *
 * To run a query within a React component, call `useFlowScreencastLikesByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowScreencastLikesByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowScreencastLikesByUserIdQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFlowScreencastLikesByUserIdQuery(baseOptions: Apollo.QueryHookOptions<FlowScreencastLikesByUserIdQuery, FlowScreencastLikesByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowScreencastLikesByUserIdQuery, FlowScreencastLikesByUserIdQueryVariables>(FlowScreencastLikesByUserIdDocument, options);
      }
export function useFlowScreencastLikesByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowScreencastLikesByUserIdQuery, FlowScreencastLikesByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowScreencastLikesByUserIdQuery, FlowScreencastLikesByUserIdQueryVariables>(FlowScreencastLikesByUserIdDocument, options);
        }
export type FlowScreencastLikesByUserIdQueryHookResult = ReturnType<typeof useFlowScreencastLikesByUserIdQuery>;
export type FlowScreencastLikesByUserIdLazyQueryHookResult = ReturnType<typeof useFlowScreencastLikesByUserIdLazyQuery>;
export type FlowScreencastLikesByUserIdQueryResult = Apollo.QueryResult<FlowScreencastLikesByUserIdQuery, FlowScreencastLikesByUserIdQueryVariables>;
export const InsertUpdateFlowScreencastDocument = gql`
    mutation InsertUpdateFlowScreencast($object: flow_screencasts_insert_input!) {
  insert_flow_screencasts_one(
    object: $object
    on_conflict: {constraint: flow_screencasts_pkey, update_columns: [title]}
  ) {
    id
  }
}
    `;
export type InsertUpdateFlowScreencastMutationFn = Apollo.MutationFunction<InsertUpdateFlowScreencastMutation, InsertUpdateFlowScreencastMutationVariables>;

/**
 * __useInsertUpdateFlowScreencastMutation__
 *
 * To run a mutation, you first call `useInsertUpdateFlowScreencastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInsertUpdateFlowScreencastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [insertUpdateFlowScreencastMutation, { data, loading, error }] = useInsertUpdateFlowScreencastMutation({
 *   variables: {
 *      object: // value for 'object'
 *   },
 * });
 */
export function useInsertUpdateFlowScreencastMutation(baseOptions?: Apollo.MutationHookOptions<InsertUpdateFlowScreencastMutation, InsertUpdateFlowScreencastMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InsertUpdateFlowScreencastMutation, InsertUpdateFlowScreencastMutationVariables>(InsertUpdateFlowScreencastDocument, options);
      }
export type InsertUpdateFlowScreencastMutationHookResult = ReturnType<typeof useInsertUpdateFlowScreencastMutation>;
export type InsertUpdateFlowScreencastMutationResult = Apollo.MutationResult<InsertUpdateFlowScreencastMutation>;
export type InsertUpdateFlowScreencastMutationOptions = Apollo.BaseMutationOptions<InsertUpdateFlowScreencastMutation, InsertUpdateFlowScreencastMutationVariables>;
export const FlowScreencastByIdDocument = gql`
    query FlowScreencastById($id: uuid!) {
  flow_screencasts_by_pk(id: $id) {
    ...FlowScreencast
    flow_screencast_timestamps {
      ...FlowScreencastTimestamp
    }
    flow_screencast_components {
      ...FlowScreencastComponent
    }
  }
}
    ${FlowScreencastFragmentDoc}
${FlowScreencastTimestampFragmentDoc}
${FlowScreencastComponentFragmentDoc}`;

/**
 * __useFlowScreencastByIdQuery__
 *
 * To run a query within a React component, call `useFlowScreencastByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useFlowScreencastByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFlowScreencastByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useFlowScreencastByIdQuery(baseOptions: Apollo.QueryHookOptions<FlowScreencastByIdQuery, FlowScreencastByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FlowScreencastByIdQuery, FlowScreencastByIdQueryVariables>(FlowScreencastByIdDocument, options);
      }
export function useFlowScreencastByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FlowScreencastByIdQuery, FlowScreencastByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FlowScreencastByIdQuery, FlowScreencastByIdQueryVariables>(FlowScreencastByIdDocument, options);
        }
export type FlowScreencastByIdQueryHookResult = ReturnType<typeof useFlowScreencastByIdQuery>;
export type FlowScreencastByIdLazyQueryHookResult = ReturnType<typeof useFlowScreencastByIdLazyQuery>;
export type FlowScreencastByIdQueryResult = Apollo.QueryResult<FlowScreencastByIdQuery, FlowScreencastByIdQueryVariables>;
export const DeleteFlowScreenshotsDocument = gql`
    mutation DeleteFlowScreenshots($ids: [uuid!]!, $flow_id: uuid!) {
  delete_flow_screenshots(where: {id: {_nin: $ids}, flow_id: {_eq: $flow_id}}) {
    affected_rows
  }
}
    `;
export type DeleteFlowScreenshotsMutationFn = Apollo.MutationFunction<DeleteFlowScreenshotsMutation, DeleteFlowScreenshotsMutationVariables>;

/**
 * __useDeleteFlowScreenshotsMutation__
 *
 * To run a mutation, you first call `useDeleteFlowScreenshotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFlowScreenshotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFlowScreenshotsMutation, { data, loading, error }] = useDeleteFlowScreenshotsMutation({
 *   variables: {
 *      ids: // value for 'ids'
 *      flow_id: // value for 'flow_id'
 *   },
 * });
 */
export function useDeleteFlowScreenshotsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFlowScreenshotsMutation, DeleteFlowScreenshotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFlowScreenshotsMutation, DeleteFlowScreenshotsMutationVariables>(DeleteFlowScreenshotsDocument, options);
      }
export type DeleteFlowScreenshotsMutationHookResult = ReturnType<typeof useDeleteFlowScreenshotsMutation>;
export type DeleteFlowScreenshotsMutationResult = Apollo.MutationResult<DeleteFlowScreenshotsMutation>;
export type DeleteFlowScreenshotsMutationOptions = Apollo.BaseMutationOptions<DeleteFlowScreenshotsMutation, DeleteFlowScreenshotsMutationVariables>;
export const HomepageDataDocument = gql`
    query HomepageData {
  flows(limit: 3, where: {is_draft: {_eq: false}}, order_by: {created_at: desc}) {
    ...AppCard
  }
  screencasts: flow_screencasts(
    limit: 4
    where: {flow: {is_draft: {_eq: false}}}
    order_by: {created_at: desc}
  ) {
    ...ScreencastCard
  }
}
    ${AppCardFragmentDoc}
${ScreencastCardFragmentDoc}`;

/**
 * __useHomepageDataQuery__
 *
 * To run a query within a React component, call `useHomepageDataQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomepageDataQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomepageDataQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomepageDataQuery(baseOptions?: Apollo.QueryHookOptions<HomepageDataQuery, HomepageDataQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HomepageDataQuery, HomepageDataQueryVariables>(HomepageDataDocument, options);
      }
export function useHomepageDataLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomepageDataQuery, HomepageDataQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HomepageDataQuery, HomepageDataQueryVariables>(HomepageDataDocument, options);
        }
export type HomepageDataQueryHookResult = ReturnType<typeof useHomepageDataQuery>;
export type HomepageDataLazyQueryHookResult = ReturnType<typeof useHomepageDataLazyQuery>;
export type HomepageDataQueryResult = Apollo.QueryResult<HomepageDataQuery, HomepageDataQueryVariables>;
export const ScreencastCardByIdDocument = gql`
    query ScreencastCardById($id: uuid!) {
  flow_screencasts_by_pk(id: $id) {
    ...FlowScreencast
    is_liked
    is_saved
    created_at
    flow_screencast_timestamps {
      ...FlowScreencastTimestamp
    }
    flow_screencast_components {
      ...FlowScreencastComponent
    }
    flow_screencast_details {
      ...FlowScreencastDetails
    }
    flow_screencast_likes_aggregate {
      aggregate {
        count
      }
    }
    flow {
      title
    }
  }
}
    ${FlowScreencastFragmentDoc}
${FlowScreencastTimestampFragmentDoc}
${FlowScreencastComponentFragmentDoc}
${FlowScreencastDetailsFragmentDoc}`;

/**
 * __useScreencastCardByIdQuery__
 *
 * To run a query within a React component, call `useScreencastCardByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useScreencastCardByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useScreencastCardByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useScreencastCardByIdQuery(baseOptions: Apollo.QueryHookOptions<ScreencastCardByIdQuery, ScreencastCardByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ScreencastCardByIdQuery, ScreencastCardByIdQueryVariables>(ScreencastCardByIdDocument, options);
      }
export function useScreencastCardByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ScreencastCardByIdQuery, ScreencastCardByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ScreencastCardByIdQuery, ScreencastCardByIdQueryVariables>(ScreencastCardByIdDocument, options);
        }
export type ScreencastCardByIdQueryHookResult = ReturnType<typeof useScreencastCardByIdQuery>;
export type ScreencastCardByIdLazyQueryHookResult = ReturnType<typeof useScreencastCardByIdLazyQuery>;
export type ScreencastCardByIdQueryResult = Apollo.QueryResult<ScreencastCardByIdQuery, ScreencastCardByIdQueryVariables>;
export const LikeScreencastDocument = gql`
    mutation LikeScreencast($flow_screencast_id: uuid!) {
  insert_flow_screencast_likes_one(
    object: {flow_screencast_id: $flow_screencast_id}
  ) {
    id
  }
}
    `;
export type LikeScreencastMutationFn = Apollo.MutationFunction<LikeScreencastMutation, LikeScreencastMutationVariables>;

/**
 * __useLikeScreencastMutation__
 *
 * To run a mutation, you first call `useLikeScreencastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLikeScreencastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [likeScreencastMutation, { data, loading, error }] = useLikeScreencastMutation({
 *   variables: {
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useLikeScreencastMutation(baseOptions?: Apollo.MutationHookOptions<LikeScreencastMutation, LikeScreencastMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LikeScreencastMutation, LikeScreencastMutationVariables>(LikeScreencastDocument, options);
      }
export type LikeScreencastMutationHookResult = ReturnType<typeof useLikeScreencastMutation>;
export type LikeScreencastMutationResult = Apollo.MutationResult<LikeScreencastMutation>;
export type LikeScreencastMutationOptions = Apollo.BaseMutationOptions<LikeScreencastMutation, LikeScreencastMutationVariables>;
export const UnlikeScreencastDocument = gql`
    mutation UnlikeScreencast($flow_screencast_id: uuid!) {
  delete_flow_screencast_likes(
    where: {flow_screencast_id: {_eq: $flow_screencast_id}}
  ) {
    affected_rows
  }
}
    `;
export type UnlikeScreencastMutationFn = Apollo.MutationFunction<UnlikeScreencastMutation, UnlikeScreencastMutationVariables>;

/**
 * __useUnlikeScreencastMutation__
 *
 * To run a mutation, you first call `useUnlikeScreencastMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUnlikeScreencastMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [unlikeScreencastMutation, { data, loading, error }] = useUnlikeScreencastMutation({
 *   variables: {
 *      flow_screencast_id: // value for 'flow_screencast_id'
 *   },
 * });
 */
export function useUnlikeScreencastMutation(baseOptions?: Apollo.MutationHookOptions<UnlikeScreencastMutation, UnlikeScreencastMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UnlikeScreencastMutation, UnlikeScreencastMutationVariables>(UnlikeScreencastDocument, options);
      }
export type UnlikeScreencastMutationHookResult = ReturnType<typeof useUnlikeScreencastMutation>;
export type UnlikeScreencastMutationResult = Apollo.MutationResult<UnlikeScreencastMutation>;
export type UnlikeScreencastMutationOptions = Apollo.BaseMutationOptions<UnlikeScreencastMutation, UnlikeScreencastMutationVariables>;
export const UserProfileDocument = gql`
    query UserProfile($id: uuid!) {
  user: users_by_pk(id: $id) {
    ...Profile
  }
  uploads: flows(
    where: {_and: [{_and: {flow_screencasts: {}}}, {user_id: {_eq: $id}}]}
    order_by: {created_at: desc}
  ) {
    ...App
  }
  collections: collections(
    where: {_and: [{_and: {collection_flows: {}}}, {user_id: {_eq: $id}}]}
    order_by: {created_at: desc}
  ) {
    ...CollectionAppCard
  }
  likes: flow_screencast_likes(where: {user_id: {_eq: $id}}) {
    ...FlowLikedScreencast
  }
}
    ${ProfileFragmentDoc}
${AppFragmentDoc}
${CollectionAppCardFragmentDoc}
${FlowLikedScreencastFragmentDoc}`;

/**
 * __useUserProfileQuery__
 *
 * To run a query within a React component, call `useUserProfileQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserProfileQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserProfileQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserProfileQuery(baseOptions: Apollo.QueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
      }
export function useUserProfileLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserProfileQuery, UserProfileQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserProfileQuery, UserProfileQueryVariables>(UserProfileDocument, options);
        }
export type UserProfileQueryHookResult = ReturnType<typeof useUserProfileQuery>;
export type UserProfileLazyQueryHookResult = ReturnType<typeof useUserProfileLazyQuery>;
export type UserProfileQueryResult = Apollo.QueryResult<UserProfileQuery, UserProfileQueryVariables>;
export const StipeSessionDocument = gql`
    query StipeSession($subscription_plan_id: String!) {
  stripe_session(subscription_plan_id: $subscription_plan_id) {
    value
  }
}
    `;

/**
 * __useStipeSessionQuery__
 *
 * To run a query within a React component, call `useStipeSessionQuery` and pass it any options that fit your needs.
 * When your component renders, `useStipeSessionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useStipeSessionQuery({
 *   variables: {
 *      subscription_plan_id: // value for 'subscription_plan_id'
 *   },
 * });
 */
export function useStipeSessionQuery(baseOptions: Apollo.QueryHookOptions<StipeSessionQuery, StipeSessionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<StipeSessionQuery, StipeSessionQueryVariables>(StipeSessionDocument, options);
      }
export function useStipeSessionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<StipeSessionQuery, StipeSessionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<StipeSessionQuery, StipeSessionQueryVariables>(StipeSessionDocument, options);
        }
export type StipeSessionQueryHookResult = ReturnType<typeof useStipeSessionQuery>;
export type StipeSessionLazyQueryHookResult = ReturnType<typeof useStipeSessionLazyQuery>;
export type StipeSessionQueryResult = Apollo.QueryResult<StipeSessionQuery, StipeSessionQueryVariables>;
export const AllSubscriptionPlansDocument = gql`
    query AllSubscriptionPlans {
  subscription_plans(order_by: {price: desc}) {
    ...SubscriptionPlan
  }
}
    ${SubscriptionPlanFragmentDoc}`;

/**
 * __useAllSubscriptionPlansQuery__
 *
 * To run a query within a React component, call `useAllSubscriptionPlansQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllSubscriptionPlansQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllSubscriptionPlansQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllSubscriptionPlansQuery(baseOptions?: Apollo.QueryHookOptions<AllSubscriptionPlansQuery, AllSubscriptionPlansQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllSubscriptionPlansQuery, AllSubscriptionPlansQueryVariables>(AllSubscriptionPlansDocument, options);
      }
export function useAllSubscriptionPlansLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllSubscriptionPlansQuery, AllSubscriptionPlansQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllSubscriptionPlansQuery, AllSubscriptionPlansQueryVariables>(AllSubscriptionPlansDocument, options);
        }
export type AllSubscriptionPlansQueryHookResult = ReturnType<typeof useAllSubscriptionPlansQuery>;
export type AllSubscriptionPlansLazyQueryHookResult = ReturnType<typeof useAllSubscriptionPlansLazyQuery>;
export type AllSubscriptionPlansQueryResult = Apollo.QueryResult<AllSubscriptionPlansQuery, AllSubscriptionPlansQueryVariables>;
export const GetSubscriptionByUserIdDocument = gql`
    query GetSubscriptionByUserId($user_id: uuid) {
  user_subscriptions(
    where: {user_id: {_eq: $user_id}}
    order_by: {updated_at: desc}
  ) {
    subscription_plan {
      id
      title
      price
      subscription_plan_type
    }
  }
}
    `;

/**
 * __useGetSubscriptionByUserIdQuery__
 *
 * To run a query within a React component, call `useGetSubscriptionByUserIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetSubscriptionByUserIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetSubscriptionByUserIdQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetSubscriptionByUserIdQuery(baseOptions?: Apollo.QueryHookOptions<GetSubscriptionByUserIdQuery, GetSubscriptionByUserIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetSubscriptionByUserIdQuery, GetSubscriptionByUserIdQueryVariables>(GetSubscriptionByUserIdDocument, options);
      }
export function useGetSubscriptionByUserIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetSubscriptionByUserIdQuery, GetSubscriptionByUserIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetSubscriptionByUserIdQuery, GetSubscriptionByUserIdQueryVariables>(GetSubscriptionByUserIdDocument, options);
        }
export type GetSubscriptionByUserIdQueryHookResult = ReturnType<typeof useGetSubscriptionByUserIdQuery>;
export type GetSubscriptionByUserIdLazyQueryHookResult = ReturnType<typeof useGetSubscriptionByUserIdLazyQuery>;
export type GetSubscriptionByUserIdQueryResult = Apollo.QueryResult<GetSubscriptionByUserIdQuery, GetSubscriptionByUserIdQueryVariables>;
export const ChangePasswordDocument = gql`
    mutation ChangePassword($oldPassword: String!, $newPassword: String!) {
  change_password(oldPassword: $oldPassword, newPassword: $newPassword) {
    value
  }
}
    `;
export type ChangePasswordMutationFn = Apollo.MutationFunction<ChangePasswordMutation, ChangePasswordMutationVariables>;

/**
 * __useChangePasswordMutation__
 *
 * To run a mutation, you first call `useChangePasswordMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useChangePasswordMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [changePasswordMutation, { data, loading, error }] = useChangePasswordMutation({
 *   variables: {
 *      oldPassword: // value for 'oldPassword'
 *      newPassword: // value for 'newPassword'
 *   },
 * });
 */
export function useChangePasswordMutation(baseOptions?: Apollo.MutationHookOptions<ChangePasswordMutation, ChangePasswordMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ChangePasswordMutation, ChangePasswordMutationVariables>(ChangePasswordDocument, options);
      }
export type ChangePasswordMutationHookResult = ReturnType<typeof useChangePasswordMutation>;
export type ChangePasswordMutationResult = Apollo.MutationResult<ChangePasswordMutation>;
export type ChangePasswordMutationOptions = Apollo.BaseMutationOptions<ChangePasswordMutation, ChangePasswordMutationVariables>;
export const MeDocument = gql`
    query Me {
  me {
    id
    avatar_url
    account_id
    first_name
    account_id
    email
    roles
    created_at
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const UpdateUserDocument = gql`
    mutation UpdateUser($first_name: String, $last_name: String, $avatar_url: String) {
  update_users(
    where: {}
    _set: {first_name: $first_name, last_name: $last_name, avatar_url: $avatar_url}
  ) {
    affected_rows
  }
}
    `;
export type UpdateUserMutationFn = Apollo.MutationFunction<UpdateUserMutation, UpdateUserMutationVariables>;

/**
 * __useUpdateUserMutation__
 *
 * To run a mutation, you first call `useUpdateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserMutation, { data, loading, error }] = useUpdateUserMutation({
 *   variables: {
 *      first_name: // value for 'first_name'
 *      last_name: // value for 'last_name'
 *      avatar_url: // value for 'avatar_url'
 *   },
 * });
 */
export function useUpdateUserMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserMutation, UpdateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, options);
      }
export type UpdateUserMutationHookResult = ReturnType<typeof useUpdateUserMutation>;
export type UpdateUserMutationResult = Apollo.MutationResult<UpdateUserMutation>;
export type UpdateUserMutationOptions = Apollo.BaseMutationOptions<UpdateUserMutation, UpdateUserMutationVariables>;