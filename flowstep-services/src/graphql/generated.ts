import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  bigint: any;
  float8: any;
  money: any;
  time: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
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

export type GoogleProfile = {
  email: Scalars['String'];
  familyName?: InputMaybe<Scalars['String']>;
  givenName?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  imageUrl: Scalars['String'];
  name: Scalars['String'];
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
  AccountsPkey = 'accounts_pkey',
  /** unique or primary key constraint */
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

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type Bigint_Comparison_Exp = {
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
  /** fetch data from the table: "collections" */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** fetch data from the table: "collections" */
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
  /** unique or primary key constraint */
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
  collection_badge: Collection_Badges;
  collection_badge_value: Collection_Badges_Enum;
  /** An array relationship */
  collection_flows: Array<Collection_Flows>;
  /** An aggregate relationship */
  collection_flows_aggregate: Collection_Flows_Aggregate;
  /** An object relationship */
  collection_visibility: Collection_Visibility;
  collection_visibility_value: Collection_Visibility_Enum;
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
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
  /** unique or primary key constraint */
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

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
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
  /** unique or primary key constraint */
  FlowAppInfoFlowIdKey = 'flow_app_info_flow_id_key',
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
  FlowScreencastDetailsFlowScreencastIdKey = 'flow_screencast_details_flow_screencast_id_key',
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  screencast_url?: InputMaybe<String_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "flow_screencasts" */
export enum Flow_Screencasts_Constraint {
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
  FlowsPkey = 'flows_pkey'
}

/** input type for inserting data into table "flows" */
export type Flows_Insert_Input = {
  avatar_background_color?: InputMaybe<Scalars['String']>;
  avatar_url?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  flow_app_info?: InputMaybe<Flow_App_Info_Obj_Rel_Insert_Input>;
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
  /** unique or primary key constraint */
  InvitesEmailUnique = 'invites_email_unique',
  /** unique or primary key constraint */
  InvitesPkey = 'invites_pkey',
  /** unique or primary key constraint */
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

/** Boolean expression to compare columns of type "money". All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['money']>;
  _gt?: InputMaybe<Scalars['money']>;
  _gte?: InputMaybe<Scalars['money']>;
  _in?: InputMaybe<Array<Scalars['money']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['money']>;
  _lte?: InputMaybe<Scalars['money']>;
  _neq?: InputMaybe<Scalars['money']>;
  _nin?: InputMaybe<Array<Scalars['money']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
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
  /** delete data from the table: "subscription_plans" */
  delete_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** delete single row from the table: "subscription_plans" */
  delete_subscription_plans_by_pk?: Maybe<Subscription_Plans>;
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
  /** insert data into the table: "subscription_plans" */
  insert_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** insert a single row into the table: "subscription_plans" */
  insert_subscription_plans_one?: Maybe<Subscription_Plans>;
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
  loginRegisterGoogle?: Maybe<JwtResponse>;
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
  /** update data of the table: "subscription_plans" */
  update_subscription_plans?: Maybe<Subscription_Plans_Mutation_Response>;
  /** update single row of the table: "subscription_plans" */
  update_subscription_plans_by_pk?: Maybe<Subscription_Plans>;
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
export type Mutation_RootDelete_Subscription_PlansArgs = {
  where: Subscription_Plans_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_Plans_By_PkArgs = {
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
export type Mutation_RootLoginRegisterGoogleArgs = {
  profile: GoogleProfile;
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
  /** unique or primary key constraint */
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
  /** fetch data from the table: "collections" */
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
  /** fetch data from the table: "subscription_plans" */
  subscription_plans: Array<Subscription_Plans>;
  /** fetch aggregated fields from the table: "subscription_plans" */
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  /** fetch data from the table: "subscription_plans" using primary key columns */
  subscription_plans_by_pk?: Maybe<Subscription_Plans>;
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
  /** unique or primary key constraint */
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
  /** unique or primary key constraint */
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

/** columns and relationships of "subscription_plans" */
export type Subscription_Plans = {
  __typename?: 'subscription_plans';
  created_at: Scalars['timestamptz'];
  description: Scalars['String'];
  id: Scalars['uuid'];
  price: Scalars['money'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  /** An array relationship */
  user_subscriptions: Array<User_Subscriptions>;
  /** An aggregate relationship */
  user_subscriptions_aggregate: User_Subscriptions_Aggregate;
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

/** aggregate avg on columns */
export type Subscription_Plans_Avg_Fields = {
  __typename?: 'subscription_plans_avg_fields';
  price?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "subscription_plans". All fields are combined with a logical 'AND'. */
export type Subscription_Plans_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Plans_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Plans_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Plans_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  price?: InputMaybe<Money_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_subscriptions?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** unique or primary key constraints on table "subscription_plans" */
export enum Subscription_Plans_Constraint {
  /** unique or primary key constraint */
  SubscriptionPlansPkey = 'subscription_plans_pkey'
}

/** input type for incrementing numeric columns in table "subscription_plans" */
export type Subscription_Plans_Inc_Input = {
  price?: InputMaybe<Scalars['money']>;
};

/** input type for inserting data into table "subscription_plans" */
export type Subscription_Plans_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  user_subscriptions?: InputMaybe<User_Subscriptions_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Subscription_Plans_Max_Fields = {
  __typename?: 'subscription_plans_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type Subscription_Plans_Min_Fields = {
  __typename?: 'subscription_plans_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  price?: Maybe<Scalars['money']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
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
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
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
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "subscription_plans" */
export type Subscription_Plans_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  description?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  price?: InputMaybe<Scalars['money']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type Subscription_Plans_Stddev_Fields = {
  __typename?: 'subscription_plans_stddev_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Subscription_Plans_Stddev_Pop_Fields = {
  __typename?: 'subscription_plans_stddev_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Subscription_Plans_Stddev_Samp_Fields = {
  __typename?: 'subscription_plans_stddev_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Subscription_Plans_Sum_Fields = {
  __typename?: 'subscription_plans_sum_fields';
  price?: Maybe<Scalars['money']>;
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
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type Subscription_Plans_Var_Pop_Fields = {
  __typename?: 'subscription_plans_var_pop_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Subscription_Plans_Var_Samp_Fields = {
  __typename?: 'subscription_plans_var_samp_fields';
  price?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Subscription_Plans_Variance_Fields = {
  __typename?: 'subscription_plans_variance_fields';
  price?: Maybe<Scalars['Float']>;
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
  /** fetch data from the table: "collections" */
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
  /** fetch data from the table: "subscription_plans" */
  subscription_plans: Array<Subscription_Plans>;
  /** fetch aggregated fields from the table: "subscription_plans" */
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  /** fetch data from the table: "subscription_plans" using primary key columns */
  subscription_plans_by_pk?: Maybe<Subscription_Plans>;
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

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
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
  /** unique or primary key constraint */
  UserSubscriptionCardDetailsPkey = 'user_subscription_card_details_pkey',
  /** unique or primary key constraint */
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
  billing_date: Scalars['timestamptz'];
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
  /** unique or primary key constraint */
  UserSubscriptionsPkey = 'user_subscriptions_pkey',
  /** unique or primary key constraint */
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
  /** fetch data from the table: "collections" */
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
  last_name?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  user_subscription?: InputMaybe<User_Subscriptions_Bool_Exp>;
};

/** unique or primary key constraints on table "users" */
export enum Users_Constraint {
  /** unique or primary key constraint */
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

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
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



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: ResolverTypeWrapper<Scalars['Float']>;
  GoogleProfile: GoogleProfile;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  JWTResponse: ResolverTypeWrapper<JwtResponse>;
  RegisterUser: RegisterUser;
  String: ResolverTypeWrapper<Scalars['String']>;
  String_comparison_exp: String_Comparison_Exp;
  SuccessResponse: ResolverTypeWrapper<SuccessResponse>;
  SuccessResponseBoolean: ResolverTypeWrapper<SuccessResponseBoolean>;
  UserResponse: ResolverTypeWrapper<UserResponse>;
  account_roles: ResolverTypeWrapper<Account_Roles>;
  account_roles_aggregate: ResolverTypeWrapper<Account_Roles_Aggregate>;
  account_roles_aggregate_fields: ResolverTypeWrapper<Account_Roles_Aggregate_Fields>;
  account_roles_aggregate_order_by: Account_Roles_Aggregate_Order_By;
  account_roles_arr_rel_insert_input: Account_Roles_Arr_Rel_Insert_Input;
  account_roles_bool_exp: Account_Roles_Bool_Exp;
  account_roles_constraint: Account_Roles_Constraint;
  account_roles_insert_input: Account_Roles_Insert_Input;
  account_roles_max_fields: ResolverTypeWrapper<Account_Roles_Max_Fields>;
  account_roles_max_order_by: Account_Roles_Max_Order_By;
  account_roles_min_fields: ResolverTypeWrapper<Account_Roles_Min_Fields>;
  account_roles_min_order_by: Account_Roles_Min_Order_By;
  account_roles_mutation_response: ResolverTypeWrapper<Account_Roles_Mutation_Response>;
  account_roles_on_conflict: Account_Roles_On_Conflict;
  account_roles_order_by: Account_Roles_Order_By;
  account_roles_pk_columns_input: Account_Roles_Pk_Columns_Input;
  account_roles_select_column: Account_Roles_Select_Column;
  account_roles_set_input: Account_Roles_Set_Input;
  account_roles_update_column: Account_Roles_Update_Column;
  accounts: ResolverTypeWrapper<Accounts>;
  accounts_aggregate: ResolverTypeWrapper<Accounts_Aggregate>;
  accounts_aggregate_fields: ResolverTypeWrapper<Accounts_Aggregate_Fields>;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_constraint: Accounts_Constraint;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: ResolverTypeWrapper<Accounts_Max_Fields>;
  accounts_min_fields: ResolverTypeWrapper<Accounts_Min_Fields>;
  accounts_mutation_response: ResolverTypeWrapper<Accounts_Mutation_Response>;
  accounts_obj_rel_insert_input: Accounts_Obj_Rel_Insert_Input;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_select_column: Accounts_Select_Column;
  accounts_set_input: Accounts_Set_Input;
  accounts_update_column: Accounts_Update_Column;
  bigint: ResolverTypeWrapper<Scalars['bigint']>;
  bigint_comparison_exp: Bigint_Comparison_Exp;
  collection_badges: ResolverTypeWrapper<Collection_Badges>;
  collection_badges_aggregate: ResolverTypeWrapper<Collection_Badges_Aggregate>;
  collection_badges_aggregate_fields: ResolverTypeWrapper<Collection_Badges_Aggregate_Fields>;
  collection_badges_bool_exp: Collection_Badges_Bool_Exp;
  collection_badges_constraint: Collection_Badges_Constraint;
  collection_badges_enum: Collection_Badges_Enum;
  collection_badges_enum_comparison_exp: Collection_Badges_Enum_Comparison_Exp;
  collection_badges_insert_input: Collection_Badges_Insert_Input;
  collection_badges_max_fields: ResolverTypeWrapper<Collection_Badges_Max_Fields>;
  collection_badges_min_fields: ResolverTypeWrapper<Collection_Badges_Min_Fields>;
  collection_badges_mutation_response: ResolverTypeWrapper<Collection_Badges_Mutation_Response>;
  collection_badges_obj_rel_insert_input: Collection_Badges_Obj_Rel_Insert_Input;
  collection_badges_on_conflict: Collection_Badges_On_Conflict;
  collection_badges_order_by: Collection_Badges_Order_By;
  collection_badges_pk_columns_input: Collection_Badges_Pk_Columns_Input;
  collection_badges_select_column: Collection_Badges_Select_Column;
  collection_badges_set_input: Collection_Badges_Set_Input;
  collection_badges_update_column: Collection_Badges_Update_Column;
  collection_flows: ResolverTypeWrapper<Collection_Flows>;
  collection_flows_aggregate: ResolverTypeWrapper<Collection_Flows_Aggregate>;
  collection_flows_aggregate_fields: ResolverTypeWrapper<Collection_Flows_Aggregate_Fields>;
  collection_flows_aggregate_order_by: Collection_Flows_Aggregate_Order_By;
  collection_flows_arr_rel_insert_input: Collection_Flows_Arr_Rel_Insert_Input;
  collection_flows_bool_exp: Collection_Flows_Bool_Exp;
  collection_flows_constraint: Collection_Flows_Constraint;
  collection_flows_insert_input: Collection_Flows_Insert_Input;
  collection_flows_max_fields: ResolverTypeWrapper<Collection_Flows_Max_Fields>;
  collection_flows_max_order_by: Collection_Flows_Max_Order_By;
  collection_flows_min_fields: ResolverTypeWrapper<Collection_Flows_Min_Fields>;
  collection_flows_min_order_by: Collection_Flows_Min_Order_By;
  collection_flows_mutation_response: ResolverTypeWrapper<Collection_Flows_Mutation_Response>;
  collection_flows_on_conflict: Collection_Flows_On_Conflict;
  collection_flows_order_by: Collection_Flows_Order_By;
  collection_flows_pk_columns_input: Collection_Flows_Pk_Columns_Input;
  collection_flows_select_column: Collection_Flows_Select_Column;
  collection_flows_set_input: Collection_Flows_Set_Input;
  collection_flows_update_column: Collection_Flows_Update_Column;
  collection_visibility: ResolverTypeWrapper<Collection_Visibility>;
  collection_visibility_aggregate: ResolverTypeWrapper<Collection_Visibility_Aggregate>;
  collection_visibility_aggregate_fields: ResolverTypeWrapper<Collection_Visibility_Aggregate_Fields>;
  collection_visibility_bool_exp: Collection_Visibility_Bool_Exp;
  collection_visibility_constraint: Collection_Visibility_Constraint;
  collection_visibility_enum: Collection_Visibility_Enum;
  collection_visibility_enum_comparison_exp: Collection_Visibility_Enum_Comparison_Exp;
  collection_visibility_insert_input: Collection_Visibility_Insert_Input;
  collection_visibility_max_fields: ResolverTypeWrapper<Collection_Visibility_Max_Fields>;
  collection_visibility_min_fields: ResolverTypeWrapper<Collection_Visibility_Min_Fields>;
  collection_visibility_mutation_response: ResolverTypeWrapper<Collection_Visibility_Mutation_Response>;
  collection_visibility_obj_rel_insert_input: Collection_Visibility_Obj_Rel_Insert_Input;
  collection_visibility_on_conflict: Collection_Visibility_On_Conflict;
  collection_visibility_order_by: Collection_Visibility_Order_By;
  collection_visibility_pk_columns_input: Collection_Visibility_Pk_Columns_Input;
  collection_visibility_select_column: Collection_Visibility_Select_Column;
  collection_visibility_set_input: Collection_Visibility_Set_Input;
  collection_visibility_update_column: Collection_Visibility_Update_Column;
  collections: ResolverTypeWrapper<Collections>;
  collections_aggregate: ResolverTypeWrapper<Collections_Aggregate>;
  collections_aggregate_fields: ResolverTypeWrapper<Collections_Aggregate_Fields>;
  collections_aggregate_order_by: Collections_Aggregate_Order_By;
  collections_arr_rel_insert_input: Collections_Arr_Rel_Insert_Input;
  collections_bool_exp: Collections_Bool_Exp;
  collections_constraint: Collections_Constraint;
  collections_insert_input: Collections_Insert_Input;
  collections_max_fields: ResolverTypeWrapper<Collections_Max_Fields>;
  collections_max_order_by: Collections_Max_Order_By;
  collections_min_fields: ResolverTypeWrapper<Collections_Min_Fields>;
  collections_min_order_by: Collections_Min_Order_By;
  collections_mutation_response: ResolverTypeWrapper<Collections_Mutation_Response>;
  collections_obj_rel_insert_input: Collections_Obj_Rel_Insert_Input;
  collections_on_conflict: Collections_On_Conflict;
  collections_order_by: Collections_Order_By;
  collections_pk_columns_input: Collections_Pk_Columns_Input;
  collections_select_column: Collections_Select_Column;
  collections_set_input: Collections_Set_Input;
  collections_update_column: Collections_Update_Column;
  float8: ResolverTypeWrapper<Scalars['float8']>;
  float8_comparison_exp: Float8_Comparison_Exp;
  flow_app_info: ResolverTypeWrapper<Flow_App_Info>;
  flow_app_info_aggregate: ResolverTypeWrapper<Flow_App_Info_Aggregate>;
  flow_app_info_aggregate_fields: ResolverTypeWrapper<Flow_App_Info_Aggregate_Fields>;
  flow_app_info_avg_fields: ResolverTypeWrapper<Flow_App_Info_Avg_Fields>;
  flow_app_info_bool_exp: Flow_App_Info_Bool_Exp;
  flow_app_info_constraint: Flow_App_Info_Constraint;
  flow_app_info_inc_input: Flow_App_Info_Inc_Input;
  flow_app_info_insert_input: Flow_App_Info_Insert_Input;
  flow_app_info_max_fields: ResolverTypeWrapper<Flow_App_Info_Max_Fields>;
  flow_app_info_min_fields: ResolverTypeWrapper<Flow_App_Info_Min_Fields>;
  flow_app_info_mutation_response: ResolverTypeWrapper<Flow_App_Info_Mutation_Response>;
  flow_app_info_obj_rel_insert_input: Flow_App_Info_Obj_Rel_Insert_Input;
  flow_app_info_on_conflict: Flow_App_Info_On_Conflict;
  flow_app_info_order_by: Flow_App_Info_Order_By;
  flow_app_info_pk_columns_input: Flow_App_Info_Pk_Columns_Input;
  flow_app_info_select_column: Flow_App_Info_Select_Column;
  flow_app_info_set_input: Flow_App_Info_Set_Input;
  flow_app_info_stddev_fields: ResolverTypeWrapper<Flow_App_Info_Stddev_Fields>;
  flow_app_info_stddev_pop_fields: ResolverTypeWrapper<Flow_App_Info_Stddev_Pop_Fields>;
  flow_app_info_stddev_samp_fields: ResolverTypeWrapper<Flow_App_Info_Stddev_Samp_Fields>;
  flow_app_info_sum_fields: ResolverTypeWrapper<Flow_App_Info_Sum_Fields>;
  flow_app_info_update_column: Flow_App_Info_Update_Column;
  flow_app_info_var_pop_fields: ResolverTypeWrapper<Flow_App_Info_Var_Pop_Fields>;
  flow_app_info_var_samp_fields: ResolverTypeWrapper<Flow_App_Info_Var_Samp_Fields>;
  flow_app_info_variance_fields: ResolverTypeWrapper<Flow_App_Info_Variance_Fields>;
  flow_badge_values: ResolverTypeWrapper<Flow_Badge_Values>;
  flow_badge_values_aggregate: ResolverTypeWrapper<Flow_Badge_Values_Aggregate>;
  flow_badge_values_aggregate_fields: ResolverTypeWrapper<Flow_Badge_Values_Aggregate_Fields>;
  flow_badge_values_aggregate_order_by: Flow_Badge_Values_Aggregate_Order_By;
  flow_badge_values_arr_rel_insert_input: Flow_Badge_Values_Arr_Rel_Insert_Input;
  flow_badge_values_bool_exp: Flow_Badge_Values_Bool_Exp;
  flow_badge_values_constraint: Flow_Badge_Values_Constraint;
  flow_badge_values_insert_input: Flow_Badge_Values_Insert_Input;
  flow_badge_values_max_fields: ResolverTypeWrapper<Flow_Badge_Values_Max_Fields>;
  flow_badge_values_max_order_by: Flow_Badge_Values_Max_Order_By;
  flow_badge_values_min_fields: ResolverTypeWrapper<Flow_Badge_Values_Min_Fields>;
  flow_badge_values_min_order_by: Flow_Badge_Values_Min_Order_By;
  flow_badge_values_mutation_response: ResolverTypeWrapper<Flow_Badge_Values_Mutation_Response>;
  flow_badge_values_on_conflict: Flow_Badge_Values_On_Conflict;
  flow_badge_values_order_by: Flow_Badge_Values_Order_By;
  flow_badge_values_pk_columns_input: Flow_Badge_Values_Pk_Columns_Input;
  flow_badge_values_select_column: Flow_Badge_Values_Select_Column;
  flow_badge_values_set_input: Flow_Badge_Values_Set_Input;
  flow_badge_values_update_column: Flow_Badge_Values_Update_Column;
  flow_badges: ResolverTypeWrapper<Flow_Badges>;
  flow_badges_aggregate: ResolverTypeWrapper<Flow_Badges_Aggregate>;
  flow_badges_aggregate_fields: ResolverTypeWrapper<Flow_Badges_Aggregate_Fields>;
  flow_badges_bool_exp: Flow_Badges_Bool_Exp;
  flow_badges_constraint: Flow_Badges_Constraint;
  flow_badges_enum: Flow_Badges_Enum;
  flow_badges_enum_comparison_exp: Flow_Badges_Enum_Comparison_Exp;
  flow_badges_insert_input: Flow_Badges_Insert_Input;
  flow_badges_max_fields: ResolverTypeWrapper<Flow_Badges_Max_Fields>;
  flow_badges_min_fields: ResolverTypeWrapper<Flow_Badges_Min_Fields>;
  flow_badges_mutation_response: ResolverTypeWrapper<Flow_Badges_Mutation_Response>;
  flow_badges_obj_rel_insert_input: Flow_Badges_Obj_Rel_Insert_Input;
  flow_badges_on_conflict: Flow_Badges_On_Conflict;
  flow_badges_order_by: Flow_Badges_Order_By;
  flow_badges_pk_columns_input: Flow_Badges_Pk_Columns_Input;
  flow_badges_select_column: Flow_Badges_Select_Column;
  flow_badges_set_input: Flow_Badges_Set_Input;
  flow_badges_update_column: Flow_Badges_Update_Column;
  flow_components: ResolverTypeWrapper<Flow_Components>;
  flow_components_aggregate: ResolverTypeWrapper<Flow_Components_Aggregate>;
  flow_components_aggregate_fields: ResolverTypeWrapper<Flow_Components_Aggregate_Fields>;
  flow_components_bool_exp: Flow_Components_Bool_Exp;
  flow_components_constraint: Flow_Components_Constraint;
  flow_components_enum: Flow_Components_Enum;
  flow_components_enum_comparison_exp: Flow_Components_Enum_Comparison_Exp;
  flow_components_insert_input: Flow_Components_Insert_Input;
  flow_components_max_fields: ResolverTypeWrapper<Flow_Components_Max_Fields>;
  flow_components_min_fields: ResolverTypeWrapper<Flow_Components_Min_Fields>;
  flow_components_mutation_response: ResolverTypeWrapper<Flow_Components_Mutation_Response>;
  flow_components_obj_rel_insert_input: Flow_Components_Obj_Rel_Insert_Input;
  flow_components_on_conflict: Flow_Components_On_Conflict;
  flow_components_order_by: Flow_Components_Order_By;
  flow_components_pk_columns_input: Flow_Components_Pk_Columns_Input;
  flow_components_select_column: Flow_Components_Select_Column;
  flow_components_set_input: Flow_Components_Set_Input;
  flow_components_update_column: Flow_Components_Update_Column;
  flow_keywords: ResolverTypeWrapper<Flow_Keywords>;
  flow_keywords_aggregate: ResolverTypeWrapper<Flow_Keywords_Aggregate>;
  flow_keywords_aggregate_fields: ResolverTypeWrapper<Flow_Keywords_Aggregate_Fields>;
  flow_keywords_aggregate_order_by: Flow_Keywords_Aggregate_Order_By;
  flow_keywords_arr_rel_insert_input: Flow_Keywords_Arr_Rel_Insert_Input;
  flow_keywords_bool_exp: Flow_Keywords_Bool_Exp;
  flow_keywords_constraint: Flow_Keywords_Constraint;
  flow_keywords_insert_input: Flow_Keywords_Insert_Input;
  flow_keywords_max_fields: ResolverTypeWrapper<Flow_Keywords_Max_Fields>;
  flow_keywords_max_order_by: Flow_Keywords_Max_Order_By;
  flow_keywords_min_fields: ResolverTypeWrapper<Flow_Keywords_Min_Fields>;
  flow_keywords_min_order_by: Flow_Keywords_Min_Order_By;
  flow_keywords_mutation_response: ResolverTypeWrapper<Flow_Keywords_Mutation_Response>;
  flow_keywords_on_conflict: Flow_Keywords_On_Conflict;
  flow_keywords_order_by: Flow_Keywords_Order_By;
  flow_keywords_pk_columns_input: Flow_Keywords_Pk_Columns_Input;
  flow_keywords_select_column: Flow_Keywords_Select_Column;
  flow_keywords_set_input: Flow_Keywords_Set_Input;
  flow_keywords_update_column: Flow_Keywords_Update_Column;
  flow_screencast_components: ResolverTypeWrapper<Flow_Screencast_Components>;
  flow_screencast_components_aggregate: ResolverTypeWrapper<Flow_Screencast_Components_Aggregate>;
  flow_screencast_components_aggregate_fields: ResolverTypeWrapper<Flow_Screencast_Components_Aggregate_Fields>;
  flow_screencast_components_aggregate_order_by: Flow_Screencast_Components_Aggregate_Order_By;
  flow_screencast_components_arr_rel_insert_input: Flow_Screencast_Components_Arr_Rel_Insert_Input;
  flow_screencast_components_bool_exp: Flow_Screencast_Components_Bool_Exp;
  flow_screencast_components_constraint: Flow_Screencast_Components_Constraint;
  flow_screencast_components_insert_input: Flow_Screencast_Components_Insert_Input;
  flow_screencast_components_max_fields: ResolverTypeWrapper<Flow_Screencast_Components_Max_Fields>;
  flow_screencast_components_max_order_by: Flow_Screencast_Components_Max_Order_By;
  flow_screencast_components_min_fields: ResolverTypeWrapper<Flow_Screencast_Components_Min_Fields>;
  flow_screencast_components_min_order_by: Flow_Screencast_Components_Min_Order_By;
  flow_screencast_components_mutation_response: ResolverTypeWrapper<Flow_Screencast_Components_Mutation_Response>;
  flow_screencast_components_on_conflict: Flow_Screencast_Components_On_Conflict;
  flow_screencast_components_order_by: Flow_Screencast_Components_Order_By;
  flow_screencast_components_pk_columns_input: Flow_Screencast_Components_Pk_Columns_Input;
  flow_screencast_components_select_column: Flow_Screencast_Components_Select_Column;
  flow_screencast_components_set_input: Flow_Screencast_Components_Set_Input;
  flow_screencast_components_update_column: Flow_Screencast_Components_Update_Column;
  flow_screencast_details: ResolverTypeWrapper<Flow_Screencast_Details>;
  flow_screencast_details_aggregate: ResolverTypeWrapper<Flow_Screencast_Details_Aggregate>;
  flow_screencast_details_aggregate_fields: ResolverTypeWrapper<Flow_Screencast_Details_Aggregate_Fields>;
  flow_screencast_details_bool_exp: Flow_Screencast_Details_Bool_Exp;
  flow_screencast_details_constraint: Flow_Screencast_Details_Constraint;
  flow_screencast_details_insert_input: Flow_Screencast_Details_Insert_Input;
  flow_screencast_details_max_fields: ResolverTypeWrapper<Flow_Screencast_Details_Max_Fields>;
  flow_screencast_details_min_fields: ResolverTypeWrapper<Flow_Screencast_Details_Min_Fields>;
  flow_screencast_details_mutation_response: ResolverTypeWrapper<Flow_Screencast_Details_Mutation_Response>;
  flow_screencast_details_obj_rel_insert_input: Flow_Screencast_Details_Obj_Rel_Insert_Input;
  flow_screencast_details_on_conflict: Flow_Screencast_Details_On_Conflict;
  flow_screencast_details_order_by: Flow_Screencast_Details_Order_By;
  flow_screencast_details_pk_columns_input: Flow_Screencast_Details_Pk_Columns_Input;
  flow_screencast_details_select_column: Flow_Screencast_Details_Select_Column;
  flow_screencast_details_set_input: Flow_Screencast_Details_Set_Input;
  flow_screencast_details_update_column: Flow_Screencast_Details_Update_Column;
  flow_screencast_likes: ResolverTypeWrapper<Flow_Screencast_Likes>;
  flow_screencast_likes_aggregate: ResolverTypeWrapper<Flow_Screencast_Likes_Aggregate>;
  flow_screencast_likes_aggregate_fields: ResolverTypeWrapper<Flow_Screencast_Likes_Aggregate_Fields>;
  flow_screencast_likes_aggregate_order_by: Flow_Screencast_Likes_Aggregate_Order_By;
  flow_screencast_likes_arr_rel_insert_input: Flow_Screencast_Likes_Arr_Rel_Insert_Input;
  flow_screencast_likes_bool_exp: Flow_Screencast_Likes_Bool_Exp;
  flow_screencast_likes_constraint: Flow_Screencast_Likes_Constraint;
  flow_screencast_likes_insert_input: Flow_Screencast_Likes_Insert_Input;
  flow_screencast_likes_max_fields: ResolverTypeWrapper<Flow_Screencast_Likes_Max_Fields>;
  flow_screencast_likes_max_order_by: Flow_Screencast_Likes_Max_Order_By;
  flow_screencast_likes_min_fields: ResolverTypeWrapper<Flow_Screencast_Likes_Min_Fields>;
  flow_screencast_likes_min_order_by: Flow_Screencast_Likes_Min_Order_By;
  flow_screencast_likes_mutation_response: ResolverTypeWrapper<Flow_Screencast_Likes_Mutation_Response>;
  flow_screencast_likes_on_conflict: Flow_Screencast_Likes_On_Conflict;
  flow_screencast_likes_order_by: Flow_Screencast_Likes_Order_By;
  flow_screencast_likes_pk_columns_input: Flow_Screencast_Likes_Pk_Columns_Input;
  flow_screencast_likes_select_column: Flow_Screencast_Likes_Select_Column;
  flow_screencast_likes_set_input: Flow_Screencast_Likes_Set_Input;
  flow_screencast_likes_update_column: Flow_Screencast_Likes_Update_Column;
  flow_screencast_timestamps: ResolverTypeWrapper<Flow_Screencast_Timestamps>;
  flow_screencast_timestamps_aggregate: ResolverTypeWrapper<Flow_Screencast_Timestamps_Aggregate>;
  flow_screencast_timestamps_aggregate_fields: ResolverTypeWrapper<Flow_Screencast_Timestamps_Aggregate_Fields>;
  flow_screencast_timestamps_aggregate_order_by: Flow_Screencast_Timestamps_Aggregate_Order_By;
  flow_screencast_timestamps_arr_rel_insert_input: Flow_Screencast_Timestamps_Arr_Rel_Insert_Input;
  flow_screencast_timestamps_bool_exp: Flow_Screencast_Timestamps_Bool_Exp;
  flow_screencast_timestamps_constraint: Flow_Screencast_Timestamps_Constraint;
  flow_screencast_timestamps_insert_input: Flow_Screencast_Timestamps_Insert_Input;
  flow_screencast_timestamps_max_fields: ResolverTypeWrapper<Flow_Screencast_Timestamps_Max_Fields>;
  flow_screencast_timestamps_max_order_by: Flow_Screencast_Timestamps_Max_Order_By;
  flow_screencast_timestamps_min_fields: ResolverTypeWrapper<Flow_Screencast_Timestamps_Min_Fields>;
  flow_screencast_timestamps_min_order_by: Flow_Screencast_Timestamps_Min_Order_By;
  flow_screencast_timestamps_mutation_response: ResolverTypeWrapper<Flow_Screencast_Timestamps_Mutation_Response>;
  flow_screencast_timestamps_on_conflict: Flow_Screencast_Timestamps_On_Conflict;
  flow_screencast_timestamps_order_by: Flow_Screencast_Timestamps_Order_By;
  flow_screencast_timestamps_pk_columns_input: Flow_Screencast_Timestamps_Pk_Columns_Input;
  flow_screencast_timestamps_select_column: Flow_Screencast_Timestamps_Select_Column;
  flow_screencast_timestamps_set_input: Flow_Screencast_Timestamps_Set_Input;
  flow_screencast_timestamps_update_column: Flow_Screencast_Timestamps_Update_Column;
  flow_screencasts: ResolverTypeWrapper<Flow_Screencasts>;
  flow_screencasts_aggregate: ResolverTypeWrapper<Flow_Screencasts_Aggregate>;
  flow_screencasts_aggregate_fields: ResolverTypeWrapper<Flow_Screencasts_Aggregate_Fields>;
  flow_screencasts_aggregate_order_by: Flow_Screencasts_Aggregate_Order_By;
  flow_screencasts_arr_rel_insert_input: Flow_Screencasts_Arr_Rel_Insert_Input;
  flow_screencasts_badges: ResolverTypeWrapper<Flow_Screencasts_Badges>;
  flow_screencasts_badges_aggregate: ResolverTypeWrapper<Flow_Screencasts_Badges_Aggregate>;
  flow_screencasts_badges_aggregate_fields: ResolverTypeWrapper<Flow_Screencasts_Badges_Aggregate_Fields>;
  flow_screencasts_badges_aggregate_order_by: Flow_Screencasts_Badges_Aggregate_Order_By;
  flow_screencasts_badges_arr_rel_insert_input: Flow_Screencasts_Badges_Arr_Rel_Insert_Input;
  flow_screencasts_badges_bool_exp: Flow_Screencasts_Badges_Bool_Exp;
  flow_screencasts_badges_constraint: Flow_Screencasts_Badges_Constraint;
  flow_screencasts_badges_insert_input: Flow_Screencasts_Badges_Insert_Input;
  flow_screencasts_badges_max_fields: ResolverTypeWrapper<Flow_Screencasts_Badges_Max_Fields>;
  flow_screencasts_badges_max_order_by: Flow_Screencasts_Badges_Max_Order_By;
  flow_screencasts_badges_min_fields: ResolverTypeWrapper<Flow_Screencasts_Badges_Min_Fields>;
  flow_screencasts_badges_min_order_by: Flow_Screencasts_Badges_Min_Order_By;
  flow_screencasts_badges_mutation_response: ResolverTypeWrapper<Flow_Screencasts_Badges_Mutation_Response>;
  flow_screencasts_badges_on_conflict: Flow_Screencasts_Badges_On_Conflict;
  flow_screencasts_badges_order_by: Flow_Screencasts_Badges_Order_By;
  flow_screencasts_badges_pk_columns_input: Flow_Screencasts_Badges_Pk_Columns_Input;
  flow_screencasts_badges_select_column: Flow_Screencasts_Badges_Select_Column;
  flow_screencasts_badges_set_input: Flow_Screencasts_Badges_Set_Input;
  flow_screencasts_badges_update_column: Flow_Screencasts_Badges_Update_Column;
  flow_screencasts_bool_exp: Flow_Screencasts_Bool_Exp;
  flow_screencasts_constraint: Flow_Screencasts_Constraint;
  flow_screencasts_insert_input: Flow_Screencasts_Insert_Input;
  flow_screencasts_max_fields: ResolverTypeWrapper<Flow_Screencasts_Max_Fields>;
  flow_screencasts_max_order_by: Flow_Screencasts_Max_Order_By;
  flow_screencasts_min_fields: ResolverTypeWrapper<Flow_Screencasts_Min_Fields>;
  flow_screencasts_min_order_by: Flow_Screencasts_Min_Order_By;
  flow_screencasts_mutation_response: ResolverTypeWrapper<Flow_Screencasts_Mutation_Response>;
  flow_screencasts_obj_rel_insert_input: Flow_Screencasts_Obj_Rel_Insert_Input;
  flow_screencasts_on_conflict: Flow_Screencasts_On_Conflict;
  flow_screencasts_order_by: Flow_Screencasts_Order_By;
  flow_screencasts_pk_columns_input: Flow_Screencasts_Pk_Columns_Input;
  flow_screencasts_select_column: Flow_Screencasts_Select_Column;
  flow_screencasts_set_input: Flow_Screencasts_Set_Input;
  flow_screencasts_update_column: Flow_Screencasts_Update_Column;
  flow_screenshots: ResolverTypeWrapper<Flow_Screenshots>;
  flow_screenshots_aggregate: ResolverTypeWrapper<Flow_Screenshots_Aggregate>;
  flow_screenshots_aggregate_fields: ResolverTypeWrapper<Flow_Screenshots_Aggregate_Fields>;
  flow_screenshots_aggregate_order_by: Flow_Screenshots_Aggregate_Order_By;
  flow_screenshots_arr_rel_insert_input: Flow_Screenshots_Arr_Rel_Insert_Input;
  flow_screenshots_bool_exp: Flow_Screenshots_Bool_Exp;
  flow_screenshots_constraint: Flow_Screenshots_Constraint;
  flow_screenshots_insert_input: Flow_Screenshots_Insert_Input;
  flow_screenshots_max_fields: ResolverTypeWrapper<Flow_Screenshots_Max_Fields>;
  flow_screenshots_max_order_by: Flow_Screenshots_Max_Order_By;
  flow_screenshots_min_fields: ResolverTypeWrapper<Flow_Screenshots_Min_Fields>;
  flow_screenshots_min_order_by: Flow_Screenshots_Min_Order_By;
  flow_screenshots_mutation_response: ResolverTypeWrapper<Flow_Screenshots_Mutation_Response>;
  flow_screenshots_on_conflict: Flow_Screenshots_On_Conflict;
  flow_screenshots_order_by: Flow_Screenshots_Order_By;
  flow_screenshots_pk_columns_input: Flow_Screenshots_Pk_Columns_Input;
  flow_screenshots_select_column: Flow_Screenshots_Select_Column;
  flow_screenshots_set_input: Flow_Screenshots_Set_Input;
  flow_screenshots_update_column: Flow_Screenshots_Update_Column;
  flows: ResolverTypeWrapper<Flows>;
  flows_aggregate: ResolverTypeWrapper<Flows_Aggregate>;
  flows_aggregate_fields: ResolverTypeWrapper<Flows_Aggregate_Fields>;
  flows_aggregate_order_by: Flows_Aggregate_Order_By;
  flows_arr_rel_insert_input: Flows_Arr_Rel_Insert_Input;
  flows_bool_exp: Flows_Bool_Exp;
  flows_constraint: Flows_Constraint;
  flows_insert_input: Flows_Insert_Input;
  flows_max_fields: ResolverTypeWrapper<Flows_Max_Fields>;
  flows_max_order_by: Flows_Max_Order_By;
  flows_min_fields: ResolverTypeWrapper<Flows_Min_Fields>;
  flows_min_order_by: Flows_Min_Order_By;
  flows_mutation_response: ResolverTypeWrapper<Flows_Mutation_Response>;
  flows_obj_rel_insert_input: Flows_Obj_Rel_Insert_Input;
  flows_on_conflict: Flows_On_Conflict;
  flows_order_by: Flows_Order_By;
  flows_pk_columns_input: Flows_Pk_Columns_Input;
  flows_select_column: Flows_Select_Column;
  flows_set_input: Flows_Set_Input;
  flows_update_column: Flows_Update_Column;
  invites: ResolverTypeWrapper<Invites>;
  invites_aggregate: ResolverTypeWrapper<Invites_Aggregate>;
  invites_aggregate_fields: ResolverTypeWrapper<Invites_Aggregate_Fields>;
  invites_aggregate_order_by: Invites_Aggregate_Order_By;
  invites_arr_rel_insert_input: Invites_Arr_Rel_Insert_Input;
  invites_bool_exp: Invites_Bool_Exp;
  invites_constraint: Invites_Constraint;
  invites_insert_input: Invites_Insert_Input;
  invites_max_fields: ResolverTypeWrapper<Invites_Max_Fields>;
  invites_max_order_by: Invites_Max_Order_By;
  invites_min_fields: ResolverTypeWrapper<Invites_Min_Fields>;
  invites_min_order_by: Invites_Min_Order_By;
  invites_mutation_response: ResolverTypeWrapper<Invites_Mutation_Response>;
  invites_on_conflict: Invites_On_Conflict;
  invites_order_by: Invites_Order_By;
  invites_pk_columns_input: Invites_Pk_Columns_Input;
  invites_select_column: Invites_Select_Column;
  invites_set_input: Invites_Set_Input;
  invites_update_column: Invites_Update_Column;
  money: ResolverTypeWrapper<Scalars['money']>;
  money_comparison_exp: Money_Comparison_Exp;
  mutation_root: ResolverTypeWrapper<{}>;
  order_by: Order_By;
  payment_providers: ResolverTypeWrapper<Payment_Providers>;
  payment_providers_aggregate: ResolverTypeWrapper<Payment_Providers_Aggregate>;
  payment_providers_aggregate_fields: ResolverTypeWrapper<Payment_Providers_Aggregate_Fields>;
  payment_providers_bool_exp: Payment_Providers_Bool_Exp;
  payment_providers_constraint: Payment_Providers_Constraint;
  payment_providers_enum: Payment_Providers_Enum;
  payment_providers_enum_comparison_exp: Payment_Providers_Enum_Comparison_Exp;
  payment_providers_insert_input: Payment_Providers_Insert_Input;
  payment_providers_max_fields: ResolverTypeWrapper<Payment_Providers_Max_Fields>;
  payment_providers_min_fields: ResolverTypeWrapper<Payment_Providers_Min_Fields>;
  payment_providers_mutation_response: ResolverTypeWrapper<Payment_Providers_Mutation_Response>;
  payment_providers_obj_rel_insert_input: Payment_Providers_Obj_Rel_Insert_Input;
  payment_providers_on_conflict: Payment_Providers_On_Conflict;
  payment_providers_order_by: Payment_Providers_Order_By;
  payment_providers_pk_columns_input: Payment_Providers_Pk_Columns_Input;
  payment_providers_select_column: Payment_Providers_Select_Column;
  payment_providers_set_input: Payment_Providers_Set_Input;
  payment_providers_update_column: Payment_Providers_Update_Column;
  query_root: ResolverTypeWrapper<{}>;
  refresh_tokens: ResolverTypeWrapper<Refresh_Tokens>;
  refresh_tokens_aggregate: ResolverTypeWrapper<Refresh_Tokens_Aggregate>;
  refresh_tokens_aggregate_fields: ResolverTypeWrapper<Refresh_Tokens_Aggregate_Fields>;
  refresh_tokens_aggregate_order_by: Refresh_Tokens_Aggregate_Order_By;
  refresh_tokens_arr_rel_insert_input: Refresh_Tokens_Arr_Rel_Insert_Input;
  refresh_tokens_bool_exp: Refresh_Tokens_Bool_Exp;
  refresh_tokens_constraint: Refresh_Tokens_Constraint;
  refresh_tokens_insert_input: Refresh_Tokens_Insert_Input;
  refresh_tokens_max_fields: ResolverTypeWrapper<Refresh_Tokens_Max_Fields>;
  refresh_tokens_max_order_by: Refresh_Tokens_Max_Order_By;
  refresh_tokens_min_fields: ResolverTypeWrapper<Refresh_Tokens_Min_Fields>;
  refresh_tokens_min_order_by: Refresh_Tokens_Min_Order_By;
  refresh_tokens_mutation_response: ResolverTypeWrapper<Refresh_Tokens_Mutation_Response>;
  refresh_tokens_on_conflict: Refresh_Tokens_On_Conflict;
  refresh_tokens_order_by: Refresh_Tokens_Order_By;
  refresh_tokens_pk_columns_input: Refresh_Tokens_Pk_Columns_Input;
  refresh_tokens_select_column: Refresh_Tokens_Select_Column;
  refresh_tokens_set_input: Refresh_Tokens_Set_Input;
  refresh_tokens_update_column: Refresh_Tokens_Update_Column;
  roles: ResolverTypeWrapper<Roles>;
  roles_aggregate: ResolverTypeWrapper<Roles_Aggregate>;
  roles_aggregate_fields: ResolverTypeWrapper<Roles_Aggregate_Fields>;
  roles_bool_exp: Roles_Bool_Exp;
  roles_constraint: Roles_Constraint;
  roles_insert_input: Roles_Insert_Input;
  roles_max_fields: ResolverTypeWrapper<Roles_Max_Fields>;
  roles_min_fields: ResolverTypeWrapper<Roles_Min_Fields>;
  roles_mutation_response: ResolverTypeWrapper<Roles_Mutation_Response>;
  roles_obj_rel_insert_input: Roles_Obj_Rel_Insert_Input;
  roles_on_conflict: Roles_On_Conflict;
  roles_order_by: Roles_Order_By;
  roles_pk_columns_input: Roles_Pk_Columns_Input;
  roles_select_column: Roles_Select_Column;
  roles_set_input: Roles_Set_Input;
  roles_update_column: Roles_Update_Column;
  subscription_plans: ResolverTypeWrapper<Subscription_Plans>;
  subscription_plans_aggregate: ResolverTypeWrapper<Subscription_Plans_Aggregate>;
  subscription_plans_aggregate_fields: ResolverTypeWrapper<Subscription_Plans_Aggregate_Fields>;
  subscription_plans_avg_fields: ResolverTypeWrapper<Subscription_Plans_Avg_Fields>;
  subscription_plans_bool_exp: Subscription_Plans_Bool_Exp;
  subscription_plans_constraint: Subscription_Plans_Constraint;
  subscription_plans_inc_input: Subscription_Plans_Inc_Input;
  subscription_plans_insert_input: Subscription_Plans_Insert_Input;
  subscription_plans_max_fields: ResolverTypeWrapper<Subscription_Plans_Max_Fields>;
  subscription_plans_min_fields: ResolverTypeWrapper<Subscription_Plans_Min_Fields>;
  subscription_plans_mutation_response: ResolverTypeWrapper<Subscription_Plans_Mutation_Response>;
  subscription_plans_obj_rel_insert_input: Subscription_Plans_Obj_Rel_Insert_Input;
  subscription_plans_on_conflict: Subscription_Plans_On_Conflict;
  subscription_plans_order_by: Subscription_Plans_Order_By;
  subscription_plans_pk_columns_input: Subscription_Plans_Pk_Columns_Input;
  subscription_plans_select_column: Subscription_Plans_Select_Column;
  subscription_plans_set_input: Subscription_Plans_Set_Input;
  subscription_plans_stddev_fields: ResolverTypeWrapper<Subscription_Plans_Stddev_Fields>;
  subscription_plans_stddev_pop_fields: ResolverTypeWrapper<Subscription_Plans_Stddev_Pop_Fields>;
  subscription_plans_stddev_samp_fields: ResolverTypeWrapper<Subscription_Plans_Stddev_Samp_Fields>;
  subscription_plans_sum_fields: ResolverTypeWrapper<Subscription_Plans_Sum_Fields>;
  subscription_plans_update_column: Subscription_Plans_Update_Column;
  subscription_plans_var_pop_fields: ResolverTypeWrapper<Subscription_Plans_Var_Pop_Fields>;
  subscription_plans_var_samp_fields: ResolverTypeWrapper<Subscription_Plans_Var_Samp_Fields>;
  subscription_plans_variance_fields: ResolverTypeWrapper<Subscription_Plans_Variance_Fields>;
  subscription_root: ResolverTypeWrapper<{}>;
  time: ResolverTypeWrapper<Scalars['time']>;
  time_comparison_exp: Time_Comparison_Exp;
  timestamptz: ResolverTypeWrapper<Scalars['timestamptz']>;
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_subscription_card_details: ResolverTypeWrapper<User_Subscription_Card_Details>;
  user_subscription_card_details_aggregate: ResolverTypeWrapper<User_Subscription_Card_Details_Aggregate>;
  user_subscription_card_details_aggregate_fields: ResolverTypeWrapper<User_Subscription_Card_Details_Aggregate_Fields>;
  user_subscription_card_details_aggregate_order_by: User_Subscription_Card_Details_Aggregate_Order_By;
  user_subscription_card_details_arr_rel_insert_input: User_Subscription_Card_Details_Arr_Rel_Insert_Input;
  user_subscription_card_details_bool_exp: User_Subscription_Card_Details_Bool_Exp;
  user_subscription_card_details_constraint: User_Subscription_Card_Details_Constraint;
  user_subscription_card_details_insert_input: User_Subscription_Card_Details_Insert_Input;
  user_subscription_card_details_max_fields: ResolverTypeWrapper<User_Subscription_Card_Details_Max_Fields>;
  user_subscription_card_details_max_order_by: User_Subscription_Card_Details_Max_Order_By;
  user_subscription_card_details_min_fields: ResolverTypeWrapper<User_Subscription_Card_Details_Min_Fields>;
  user_subscription_card_details_min_order_by: User_Subscription_Card_Details_Min_Order_By;
  user_subscription_card_details_mutation_response: ResolverTypeWrapper<User_Subscription_Card_Details_Mutation_Response>;
  user_subscription_card_details_obj_rel_insert_input: User_Subscription_Card_Details_Obj_Rel_Insert_Input;
  user_subscription_card_details_on_conflict: User_Subscription_Card_Details_On_Conflict;
  user_subscription_card_details_order_by: User_Subscription_Card_Details_Order_By;
  user_subscription_card_details_pk_columns_input: User_Subscription_Card_Details_Pk_Columns_Input;
  user_subscription_card_details_select_column: User_Subscription_Card_Details_Select_Column;
  user_subscription_card_details_set_input: User_Subscription_Card_Details_Set_Input;
  user_subscription_card_details_update_column: User_Subscription_Card_Details_Update_Column;
  user_subscriptions: ResolverTypeWrapper<User_Subscriptions>;
  user_subscriptions_aggregate: ResolverTypeWrapper<User_Subscriptions_Aggregate>;
  user_subscriptions_aggregate_fields: ResolverTypeWrapper<User_Subscriptions_Aggregate_Fields>;
  user_subscriptions_aggregate_order_by: User_Subscriptions_Aggregate_Order_By;
  user_subscriptions_arr_rel_insert_input: User_Subscriptions_Arr_Rel_Insert_Input;
  user_subscriptions_bool_exp: User_Subscriptions_Bool_Exp;
  user_subscriptions_constraint: User_Subscriptions_Constraint;
  user_subscriptions_insert_input: User_Subscriptions_Insert_Input;
  user_subscriptions_max_fields: ResolverTypeWrapper<User_Subscriptions_Max_Fields>;
  user_subscriptions_max_order_by: User_Subscriptions_Max_Order_By;
  user_subscriptions_min_fields: ResolverTypeWrapper<User_Subscriptions_Min_Fields>;
  user_subscriptions_min_order_by: User_Subscriptions_Min_Order_By;
  user_subscriptions_mutation_response: ResolverTypeWrapper<User_Subscriptions_Mutation_Response>;
  user_subscriptions_obj_rel_insert_input: User_Subscriptions_Obj_Rel_Insert_Input;
  user_subscriptions_on_conflict: User_Subscriptions_On_Conflict;
  user_subscriptions_order_by: User_Subscriptions_Order_By;
  user_subscriptions_pk_columns_input: User_Subscriptions_Pk_Columns_Input;
  user_subscriptions_select_column: User_Subscriptions_Select_Column;
  user_subscriptions_set_input: User_Subscriptions_Set_Input;
  user_subscriptions_update_column: User_Subscriptions_Update_Column;
  users: ResolverTypeWrapper<Users>;
  users_aggregate: ResolverTypeWrapper<Users_Aggregate>;
  users_aggregate_fields: ResolverTypeWrapper<Users_Aggregate_Fields>;
  users_bool_exp: Users_Bool_Exp;
  users_constraint: Users_Constraint;
  users_insert_input: Users_Insert_Input;
  users_max_fields: ResolverTypeWrapper<Users_Max_Fields>;
  users_min_fields: ResolverTypeWrapper<Users_Min_Fields>;
  users_mutation_response: ResolverTypeWrapper<Users_Mutation_Response>;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_select_column: Users_Select_Column;
  users_set_input: Users_Set_Input;
  users_update_column: Users_Update_Column;
  uuid: ResolverTypeWrapper<Scalars['uuid']>;
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  Boolean_comparison_exp: Boolean_Comparison_Exp;
  Float: Scalars['Float'];
  GoogleProfile: GoogleProfile;
  Int: Scalars['Int'];
  JWTResponse: JwtResponse;
  RegisterUser: RegisterUser;
  String: Scalars['String'];
  String_comparison_exp: String_Comparison_Exp;
  SuccessResponse: SuccessResponse;
  SuccessResponseBoolean: SuccessResponseBoolean;
  UserResponse: UserResponse;
  account_roles: Account_Roles;
  account_roles_aggregate: Account_Roles_Aggregate;
  account_roles_aggregate_fields: Account_Roles_Aggregate_Fields;
  account_roles_aggregate_order_by: Account_Roles_Aggregate_Order_By;
  account_roles_arr_rel_insert_input: Account_Roles_Arr_Rel_Insert_Input;
  account_roles_bool_exp: Account_Roles_Bool_Exp;
  account_roles_insert_input: Account_Roles_Insert_Input;
  account_roles_max_fields: Account_Roles_Max_Fields;
  account_roles_max_order_by: Account_Roles_Max_Order_By;
  account_roles_min_fields: Account_Roles_Min_Fields;
  account_roles_min_order_by: Account_Roles_Min_Order_By;
  account_roles_mutation_response: Account_Roles_Mutation_Response;
  account_roles_on_conflict: Account_Roles_On_Conflict;
  account_roles_order_by: Account_Roles_Order_By;
  account_roles_pk_columns_input: Account_Roles_Pk_Columns_Input;
  account_roles_set_input: Account_Roles_Set_Input;
  accounts: Accounts;
  accounts_aggregate: Accounts_Aggregate;
  accounts_aggregate_fields: Accounts_Aggregate_Fields;
  accounts_bool_exp: Accounts_Bool_Exp;
  accounts_insert_input: Accounts_Insert_Input;
  accounts_max_fields: Accounts_Max_Fields;
  accounts_min_fields: Accounts_Min_Fields;
  accounts_mutation_response: Accounts_Mutation_Response;
  accounts_obj_rel_insert_input: Accounts_Obj_Rel_Insert_Input;
  accounts_on_conflict: Accounts_On_Conflict;
  accounts_order_by: Accounts_Order_By;
  accounts_pk_columns_input: Accounts_Pk_Columns_Input;
  accounts_set_input: Accounts_Set_Input;
  bigint: Scalars['bigint'];
  bigint_comparison_exp: Bigint_Comparison_Exp;
  collection_badges: Collection_Badges;
  collection_badges_aggregate: Collection_Badges_Aggregate;
  collection_badges_aggregate_fields: Collection_Badges_Aggregate_Fields;
  collection_badges_bool_exp: Collection_Badges_Bool_Exp;
  collection_badges_enum_comparison_exp: Collection_Badges_Enum_Comparison_Exp;
  collection_badges_insert_input: Collection_Badges_Insert_Input;
  collection_badges_max_fields: Collection_Badges_Max_Fields;
  collection_badges_min_fields: Collection_Badges_Min_Fields;
  collection_badges_mutation_response: Collection_Badges_Mutation_Response;
  collection_badges_obj_rel_insert_input: Collection_Badges_Obj_Rel_Insert_Input;
  collection_badges_on_conflict: Collection_Badges_On_Conflict;
  collection_badges_order_by: Collection_Badges_Order_By;
  collection_badges_pk_columns_input: Collection_Badges_Pk_Columns_Input;
  collection_badges_set_input: Collection_Badges_Set_Input;
  collection_flows: Collection_Flows;
  collection_flows_aggregate: Collection_Flows_Aggregate;
  collection_flows_aggregate_fields: Collection_Flows_Aggregate_Fields;
  collection_flows_aggregate_order_by: Collection_Flows_Aggregate_Order_By;
  collection_flows_arr_rel_insert_input: Collection_Flows_Arr_Rel_Insert_Input;
  collection_flows_bool_exp: Collection_Flows_Bool_Exp;
  collection_flows_insert_input: Collection_Flows_Insert_Input;
  collection_flows_max_fields: Collection_Flows_Max_Fields;
  collection_flows_max_order_by: Collection_Flows_Max_Order_By;
  collection_flows_min_fields: Collection_Flows_Min_Fields;
  collection_flows_min_order_by: Collection_Flows_Min_Order_By;
  collection_flows_mutation_response: Collection_Flows_Mutation_Response;
  collection_flows_on_conflict: Collection_Flows_On_Conflict;
  collection_flows_order_by: Collection_Flows_Order_By;
  collection_flows_pk_columns_input: Collection_Flows_Pk_Columns_Input;
  collection_flows_set_input: Collection_Flows_Set_Input;
  collection_visibility: Collection_Visibility;
  collection_visibility_aggregate: Collection_Visibility_Aggregate;
  collection_visibility_aggregate_fields: Collection_Visibility_Aggregate_Fields;
  collection_visibility_bool_exp: Collection_Visibility_Bool_Exp;
  collection_visibility_enum_comparison_exp: Collection_Visibility_Enum_Comparison_Exp;
  collection_visibility_insert_input: Collection_Visibility_Insert_Input;
  collection_visibility_max_fields: Collection_Visibility_Max_Fields;
  collection_visibility_min_fields: Collection_Visibility_Min_Fields;
  collection_visibility_mutation_response: Collection_Visibility_Mutation_Response;
  collection_visibility_obj_rel_insert_input: Collection_Visibility_Obj_Rel_Insert_Input;
  collection_visibility_on_conflict: Collection_Visibility_On_Conflict;
  collection_visibility_order_by: Collection_Visibility_Order_By;
  collection_visibility_pk_columns_input: Collection_Visibility_Pk_Columns_Input;
  collection_visibility_set_input: Collection_Visibility_Set_Input;
  collections: Collections;
  collections_aggregate: Collections_Aggregate;
  collections_aggregate_fields: Collections_Aggregate_Fields;
  collections_aggregate_order_by: Collections_Aggregate_Order_By;
  collections_arr_rel_insert_input: Collections_Arr_Rel_Insert_Input;
  collections_bool_exp: Collections_Bool_Exp;
  collections_insert_input: Collections_Insert_Input;
  collections_max_fields: Collections_Max_Fields;
  collections_max_order_by: Collections_Max_Order_By;
  collections_min_fields: Collections_Min_Fields;
  collections_min_order_by: Collections_Min_Order_By;
  collections_mutation_response: Collections_Mutation_Response;
  collections_obj_rel_insert_input: Collections_Obj_Rel_Insert_Input;
  collections_on_conflict: Collections_On_Conflict;
  collections_order_by: Collections_Order_By;
  collections_pk_columns_input: Collections_Pk_Columns_Input;
  collections_set_input: Collections_Set_Input;
  float8: Scalars['float8'];
  float8_comparison_exp: Float8_Comparison_Exp;
  flow_app_info: Flow_App_Info;
  flow_app_info_aggregate: Flow_App_Info_Aggregate;
  flow_app_info_aggregate_fields: Flow_App_Info_Aggregate_Fields;
  flow_app_info_avg_fields: Flow_App_Info_Avg_Fields;
  flow_app_info_bool_exp: Flow_App_Info_Bool_Exp;
  flow_app_info_inc_input: Flow_App_Info_Inc_Input;
  flow_app_info_insert_input: Flow_App_Info_Insert_Input;
  flow_app_info_max_fields: Flow_App_Info_Max_Fields;
  flow_app_info_min_fields: Flow_App_Info_Min_Fields;
  flow_app_info_mutation_response: Flow_App_Info_Mutation_Response;
  flow_app_info_obj_rel_insert_input: Flow_App_Info_Obj_Rel_Insert_Input;
  flow_app_info_on_conflict: Flow_App_Info_On_Conflict;
  flow_app_info_order_by: Flow_App_Info_Order_By;
  flow_app_info_pk_columns_input: Flow_App_Info_Pk_Columns_Input;
  flow_app_info_set_input: Flow_App_Info_Set_Input;
  flow_app_info_stddev_fields: Flow_App_Info_Stddev_Fields;
  flow_app_info_stddev_pop_fields: Flow_App_Info_Stddev_Pop_Fields;
  flow_app_info_stddev_samp_fields: Flow_App_Info_Stddev_Samp_Fields;
  flow_app_info_sum_fields: Flow_App_Info_Sum_Fields;
  flow_app_info_var_pop_fields: Flow_App_Info_Var_Pop_Fields;
  flow_app_info_var_samp_fields: Flow_App_Info_Var_Samp_Fields;
  flow_app_info_variance_fields: Flow_App_Info_Variance_Fields;
  flow_badge_values: Flow_Badge_Values;
  flow_badge_values_aggregate: Flow_Badge_Values_Aggregate;
  flow_badge_values_aggregate_fields: Flow_Badge_Values_Aggregate_Fields;
  flow_badge_values_aggregate_order_by: Flow_Badge_Values_Aggregate_Order_By;
  flow_badge_values_arr_rel_insert_input: Flow_Badge_Values_Arr_Rel_Insert_Input;
  flow_badge_values_bool_exp: Flow_Badge_Values_Bool_Exp;
  flow_badge_values_insert_input: Flow_Badge_Values_Insert_Input;
  flow_badge_values_max_fields: Flow_Badge_Values_Max_Fields;
  flow_badge_values_max_order_by: Flow_Badge_Values_Max_Order_By;
  flow_badge_values_min_fields: Flow_Badge_Values_Min_Fields;
  flow_badge_values_min_order_by: Flow_Badge_Values_Min_Order_By;
  flow_badge_values_mutation_response: Flow_Badge_Values_Mutation_Response;
  flow_badge_values_on_conflict: Flow_Badge_Values_On_Conflict;
  flow_badge_values_order_by: Flow_Badge_Values_Order_By;
  flow_badge_values_pk_columns_input: Flow_Badge_Values_Pk_Columns_Input;
  flow_badge_values_set_input: Flow_Badge_Values_Set_Input;
  flow_badges: Flow_Badges;
  flow_badges_aggregate: Flow_Badges_Aggregate;
  flow_badges_aggregate_fields: Flow_Badges_Aggregate_Fields;
  flow_badges_bool_exp: Flow_Badges_Bool_Exp;
  flow_badges_enum_comparison_exp: Flow_Badges_Enum_Comparison_Exp;
  flow_badges_insert_input: Flow_Badges_Insert_Input;
  flow_badges_max_fields: Flow_Badges_Max_Fields;
  flow_badges_min_fields: Flow_Badges_Min_Fields;
  flow_badges_mutation_response: Flow_Badges_Mutation_Response;
  flow_badges_obj_rel_insert_input: Flow_Badges_Obj_Rel_Insert_Input;
  flow_badges_on_conflict: Flow_Badges_On_Conflict;
  flow_badges_order_by: Flow_Badges_Order_By;
  flow_badges_pk_columns_input: Flow_Badges_Pk_Columns_Input;
  flow_badges_set_input: Flow_Badges_Set_Input;
  flow_components: Flow_Components;
  flow_components_aggregate: Flow_Components_Aggregate;
  flow_components_aggregate_fields: Flow_Components_Aggregate_Fields;
  flow_components_bool_exp: Flow_Components_Bool_Exp;
  flow_components_enum_comparison_exp: Flow_Components_Enum_Comparison_Exp;
  flow_components_insert_input: Flow_Components_Insert_Input;
  flow_components_max_fields: Flow_Components_Max_Fields;
  flow_components_min_fields: Flow_Components_Min_Fields;
  flow_components_mutation_response: Flow_Components_Mutation_Response;
  flow_components_obj_rel_insert_input: Flow_Components_Obj_Rel_Insert_Input;
  flow_components_on_conflict: Flow_Components_On_Conflict;
  flow_components_order_by: Flow_Components_Order_By;
  flow_components_pk_columns_input: Flow_Components_Pk_Columns_Input;
  flow_components_set_input: Flow_Components_Set_Input;
  flow_keywords: Flow_Keywords;
  flow_keywords_aggregate: Flow_Keywords_Aggregate;
  flow_keywords_aggregate_fields: Flow_Keywords_Aggregate_Fields;
  flow_keywords_aggregate_order_by: Flow_Keywords_Aggregate_Order_By;
  flow_keywords_arr_rel_insert_input: Flow_Keywords_Arr_Rel_Insert_Input;
  flow_keywords_bool_exp: Flow_Keywords_Bool_Exp;
  flow_keywords_insert_input: Flow_Keywords_Insert_Input;
  flow_keywords_max_fields: Flow_Keywords_Max_Fields;
  flow_keywords_max_order_by: Flow_Keywords_Max_Order_By;
  flow_keywords_min_fields: Flow_Keywords_Min_Fields;
  flow_keywords_min_order_by: Flow_Keywords_Min_Order_By;
  flow_keywords_mutation_response: Flow_Keywords_Mutation_Response;
  flow_keywords_on_conflict: Flow_Keywords_On_Conflict;
  flow_keywords_order_by: Flow_Keywords_Order_By;
  flow_keywords_pk_columns_input: Flow_Keywords_Pk_Columns_Input;
  flow_keywords_set_input: Flow_Keywords_Set_Input;
  flow_screencast_components: Flow_Screencast_Components;
  flow_screencast_components_aggregate: Flow_Screencast_Components_Aggregate;
  flow_screencast_components_aggregate_fields: Flow_Screencast_Components_Aggregate_Fields;
  flow_screencast_components_aggregate_order_by: Flow_Screencast_Components_Aggregate_Order_By;
  flow_screencast_components_arr_rel_insert_input: Flow_Screencast_Components_Arr_Rel_Insert_Input;
  flow_screencast_components_bool_exp: Flow_Screencast_Components_Bool_Exp;
  flow_screencast_components_insert_input: Flow_Screencast_Components_Insert_Input;
  flow_screencast_components_max_fields: Flow_Screencast_Components_Max_Fields;
  flow_screencast_components_max_order_by: Flow_Screencast_Components_Max_Order_By;
  flow_screencast_components_min_fields: Flow_Screencast_Components_Min_Fields;
  flow_screencast_components_min_order_by: Flow_Screencast_Components_Min_Order_By;
  flow_screencast_components_mutation_response: Flow_Screencast_Components_Mutation_Response;
  flow_screencast_components_on_conflict: Flow_Screencast_Components_On_Conflict;
  flow_screencast_components_order_by: Flow_Screencast_Components_Order_By;
  flow_screencast_components_pk_columns_input: Flow_Screencast_Components_Pk_Columns_Input;
  flow_screencast_components_set_input: Flow_Screencast_Components_Set_Input;
  flow_screencast_details: Flow_Screencast_Details;
  flow_screencast_details_aggregate: Flow_Screencast_Details_Aggregate;
  flow_screencast_details_aggregate_fields: Flow_Screencast_Details_Aggregate_Fields;
  flow_screencast_details_bool_exp: Flow_Screencast_Details_Bool_Exp;
  flow_screencast_details_insert_input: Flow_Screencast_Details_Insert_Input;
  flow_screencast_details_max_fields: Flow_Screencast_Details_Max_Fields;
  flow_screencast_details_min_fields: Flow_Screencast_Details_Min_Fields;
  flow_screencast_details_mutation_response: Flow_Screencast_Details_Mutation_Response;
  flow_screencast_details_obj_rel_insert_input: Flow_Screencast_Details_Obj_Rel_Insert_Input;
  flow_screencast_details_on_conflict: Flow_Screencast_Details_On_Conflict;
  flow_screencast_details_order_by: Flow_Screencast_Details_Order_By;
  flow_screencast_details_pk_columns_input: Flow_Screencast_Details_Pk_Columns_Input;
  flow_screencast_details_set_input: Flow_Screencast_Details_Set_Input;
  flow_screencast_likes: Flow_Screencast_Likes;
  flow_screencast_likes_aggregate: Flow_Screencast_Likes_Aggregate;
  flow_screencast_likes_aggregate_fields: Flow_Screencast_Likes_Aggregate_Fields;
  flow_screencast_likes_aggregate_order_by: Flow_Screencast_Likes_Aggregate_Order_By;
  flow_screencast_likes_arr_rel_insert_input: Flow_Screencast_Likes_Arr_Rel_Insert_Input;
  flow_screencast_likes_bool_exp: Flow_Screencast_Likes_Bool_Exp;
  flow_screencast_likes_insert_input: Flow_Screencast_Likes_Insert_Input;
  flow_screencast_likes_max_fields: Flow_Screencast_Likes_Max_Fields;
  flow_screencast_likes_max_order_by: Flow_Screencast_Likes_Max_Order_By;
  flow_screencast_likes_min_fields: Flow_Screencast_Likes_Min_Fields;
  flow_screencast_likes_min_order_by: Flow_Screencast_Likes_Min_Order_By;
  flow_screencast_likes_mutation_response: Flow_Screencast_Likes_Mutation_Response;
  flow_screencast_likes_on_conflict: Flow_Screencast_Likes_On_Conflict;
  flow_screencast_likes_order_by: Flow_Screencast_Likes_Order_By;
  flow_screencast_likes_pk_columns_input: Flow_Screencast_Likes_Pk_Columns_Input;
  flow_screencast_likes_set_input: Flow_Screencast_Likes_Set_Input;
  flow_screencast_timestamps: Flow_Screencast_Timestamps;
  flow_screencast_timestamps_aggregate: Flow_Screencast_Timestamps_Aggregate;
  flow_screencast_timestamps_aggregate_fields: Flow_Screencast_Timestamps_Aggregate_Fields;
  flow_screencast_timestamps_aggregate_order_by: Flow_Screencast_Timestamps_Aggregate_Order_By;
  flow_screencast_timestamps_arr_rel_insert_input: Flow_Screencast_Timestamps_Arr_Rel_Insert_Input;
  flow_screencast_timestamps_bool_exp: Flow_Screencast_Timestamps_Bool_Exp;
  flow_screencast_timestamps_insert_input: Flow_Screencast_Timestamps_Insert_Input;
  flow_screencast_timestamps_max_fields: Flow_Screencast_Timestamps_Max_Fields;
  flow_screencast_timestamps_max_order_by: Flow_Screencast_Timestamps_Max_Order_By;
  flow_screencast_timestamps_min_fields: Flow_Screencast_Timestamps_Min_Fields;
  flow_screencast_timestamps_min_order_by: Flow_Screencast_Timestamps_Min_Order_By;
  flow_screencast_timestamps_mutation_response: Flow_Screencast_Timestamps_Mutation_Response;
  flow_screencast_timestamps_on_conflict: Flow_Screencast_Timestamps_On_Conflict;
  flow_screencast_timestamps_order_by: Flow_Screencast_Timestamps_Order_By;
  flow_screencast_timestamps_pk_columns_input: Flow_Screencast_Timestamps_Pk_Columns_Input;
  flow_screencast_timestamps_set_input: Flow_Screencast_Timestamps_Set_Input;
  flow_screencasts: Flow_Screencasts;
  flow_screencasts_aggregate: Flow_Screencasts_Aggregate;
  flow_screencasts_aggregate_fields: Flow_Screencasts_Aggregate_Fields;
  flow_screencasts_aggregate_order_by: Flow_Screencasts_Aggregate_Order_By;
  flow_screencasts_arr_rel_insert_input: Flow_Screencasts_Arr_Rel_Insert_Input;
  flow_screencasts_badges: Flow_Screencasts_Badges;
  flow_screencasts_badges_aggregate: Flow_Screencasts_Badges_Aggregate;
  flow_screencasts_badges_aggregate_fields: Flow_Screencasts_Badges_Aggregate_Fields;
  flow_screencasts_badges_aggregate_order_by: Flow_Screencasts_Badges_Aggregate_Order_By;
  flow_screencasts_badges_arr_rel_insert_input: Flow_Screencasts_Badges_Arr_Rel_Insert_Input;
  flow_screencasts_badges_bool_exp: Flow_Screencasts_Badges_Bool_Exp;
  flow_screencasts_badges_insert_input: Flow_Screencasts_Badges_Insert_Input;
  flow_screencasts_badges_max_fields: Flow_Screencasts_Badges_Max_Fields;
  flow_screencasts_badges_max_order_by: Flow_Screencasts_Badges_Max_Order_By;
  flow_screencasts_badges_min_fields: Flow_Screencasts_Badges_Min_Fields;
  flow_screencasts_badges_min_order_by: Flow_Screencasts_Badges_Min_Order_By;
  flow_screencasts_badges_mutation_response: Flow_Screencasts_Badges_Mutation_Response;
  flow_screencasts_badges_on_conflict: Flow_Screencasts_Badges_On_Conflict;
  flow_screencasts_badges_order_by: Flow_Screencasts_Badges_Order_By;
  flow_screencasts_badges_pk_columns_input: Flow_Screencasts_Badges_Pk_Columns_Input;
  flow_screencasts_badges_set_input: Flow_Screencasts_Badges_Set_Input;
  flow_screencasts_bool_exp: Flow_Screencasts_Bool_Exp;
  flow_screencasts_insert_input: Flow_Screencasts_Insert_Input;
  flow_screencasts_max_fields: Flow_Screencasts_Max_Fields;
  flow_screencasts_max_order_by: Flow_Screencasts_Max_Order_By;
  flow_screencasts_min_fields: Flow_Screencasts_Min_Fields;
  flow_screencasts_min_order_by: Flow_Screencasts_Min_Order_By;
  flow_screencasts_mutation_response: Flow_Screencasts_Mutation_Response;
  flow_screencasts_obj_rel_insert_input: Flow_Screencasts_Obj_Rel_Insert_Input;
  flow_screencasts_on_conflict: Flow_Screencasts_On_Conflict;
  flow_screencasts_order_by: Flow_Screencasts_Order_By;
  flow_screencasts_pk_columns_input: Flow_Screencasts_Pk_Columns_Input;
  flow_screencasts_set_input: Flow_Screencasts_Set_Input;
  flow_screenshots: Flow_Screenshots;
  flow_screenshots_aggregate: Flow_Screenshots_Aggregate;
  flow_screenshots_aggregate_fields: Flow_Screenshots_Aggregate_Fields;
  flow_screenshots_aggregate_order_by: Flow_Screenshots_Aggregate_Order_By;
  flow_screenshots_arr_rel_insert_input: Flow_Screenshots_Arr_Rel_Insert_Input;
  flow_screenshots_bool_exp: Flow_Screenshots_Bool_Exp;
  flow_screenshots_insert_input: Flow_Screenshots_Insert_Input;
  flow_screenshots_max_fields: Flow_Screenshots_Max_Fields;
  flow_screenshots_max_order_by: Flow_Screenshots_Max_Order_By;
  flow_screenshots_min_fields: Flow_Screenshots_Min_Fields;
  flow_screenshots_min_order_by: Flow_Screenshots_Min_Order_By;
  flow_screenshots_mutation_response: Flow_Screenshots_Mutation_Response;
  flow_screenshots_on_conflict: Flow_Screenshots_On_Conflict;
  flow_screenshots_order_by: Flow_Screenshots_Order_By;
  flow_screenshots_pk_columns_input: Flow_Screenshots_Pk_Columns_Input;
  flow_screenshots_set_input: Flow_Screenshots_Set_Input;
  flows: Flows;
  flows_aggregate: Flows_Aggregate;
  flows_aggregate_fields: Flows_Aggregate_Fields;
  flows_aggregate_order_by: Flows_Aggregate_Order_By;
  flows_arr_rel_insert_input: Flows_Arr_Rel_Insert_Input;
  flows_bool_exp: Flows_Bool_Exp;
  flows_insert_input: Flows_Insert_Input;
  flows_max_fields: Flows_Max_Fields;
  flows_max_order_by: Flows_Max_Order_By;
  flows_min_fields: Flows_Min_Fields;
  flows_min_order_by: Flows_Min_Order_By;
  flows_mutation_response: Flows_Mutation_Response;
  flows_obj_rel_insert_input: Flows_Obj_Rel_Insert_Input;
  flows_on_conflict: Flows_On_Conflict;
  flows_order_by: Flows_Order_By;
  flows_pk_columns_input: Flows_Pk_Columns_Input;
  flows_set_input: Flows_Set_Input;
  invites: Invites;
  invites_aggregate: Invites_Aggregate;
  invites_aggregate_fields: Invites_Aggregate_Fields;
  invites_aggregate_order_by: Invites_Aggregate_Order_By;
  invites_arr_rel_insert_input: Invites_Arr_Rel_Insert_Input;
  invites_bool_exp: Invites_Bool_Exp;
  invites_insert_input: Invites_Insert_Input;
  invites_max_fields: Invites_Max_Fields;
  invites_max_order_by: Invites_Max_Order_By;
  invites_min_fields: Invites_Min_Fields;
  invites_min_order_by: Invites_Min_Order_By;
  invites_mutation_response: Invites_Mutation_Response;
  invites_on_conflict: Invites_On_Conflict;
  invites_order_by: Invites_Order_By;
  invites_pk_columns_input: Invites_Pk_Columns_Input;
  invites_set_input: Invites_Set_Input;
  money: Scalars['money'];
  money_comparison_exp: Money_Comparison_Exp;
  mutation_root: {};
  payment_providers: Payment_Providers;
  payment_providers_aggregate: Payment_Providers_Aggregate;
  payment_providers_aggregate_fields: Payment_Providers_Aggregate_Fields;
  payment_providers_bool_exp: Payment_Providers_Bool_Exp;
  payment_providers_enum_comparison_exp: Payment_Providers_Enum_Comparison_Exp;
  payment_providers_insert_input: Payment_Providers_Insert_Input;
  payment_providers_max_fields: Payment_Providers_Max_Fields;
  payment_providers_min_fields: Payment_Providers_Min_Fields;
  payment_providers_mutation_response: Payment_Providers_Mutation_Response;
  payment_providers_obj_rel_insert_input: Payment_Providers_Obj_Rel_Insert_Input;
  payment_providers_on_conflict: Payment_Providers_On_Conflict;
  payment_providers_order_by: Payment_Providers_Order_By;
  payment_providers_pk_columns_input: Payment_Providers_Pk_Columns_Input;
  payment_providers_set_input: Payment_Providers_Set_Input;
  query_root: {};
  refresh_tokens: Refresh_Tokens;
  refresh_tokens_aggregate: Refresh_Tokens_Aggregate;
  refresh_tokens_aggregate_fields: Refresh_Tokens_Aggregate_Fields;
  refresh_tokens_aggregate_order_by: Refresh_Tokens_Aggregate_Order_By;
  refresh_tokens_arr_rel_insert_input: Refresh_Tokens_Arr_Rel_Insert_Input;
  refresh_tokens_bool_exp: Refresh_Tokens_Bool_Exp;
  refresh_tokens_insert_input: Refresh_Tokens_Insert_Input;
  refresh_tokens_max_fields: Refresh_Tokens_Max_Fields;
  refresh_tokens_max_order_by: Refresh_Tokens_Max_Order_By;
  refresh_tokens_min_fields: Refresh_Tokens_Min_Fields;
  refresh_tokens_min_order_by: Refresh_Tokens_Min_Order_By;
  refresh_tokens_mutation_response: Refresh_Tokens_Mutation_Response;
  refresh_tokens_on_conflict: Refresh_Tokens_On_Conflict;
  refresh_tokens_order_by: Refresh_Tokens_Order_By;
  refresh_tokens_pk_columns_input: Refresh_Tokens_Pk_Columns_Input;
  refresh_tokens_set_input: Refresh_Tokens_Set_Input;
  roles: Roles;
  roles_aggregate: Roles_Aggregate;
  roles_aggregate_fields: Roles_Aggregate_Fields;
  roles_bool_exp: Roles_Bool_Exp;
  roles_insert_input: Roles_Insert_Input;
  roles_max_fields: Roles_Max_Fields;
  roles_min_fields: Roles_Min_Fields;
  roles_mutation_response: Roles_Mutation_Response;
  roles_obj_rel_insert_input: Roles_Obj_Rel_Insert_Input;
  roles_on_conflict: Roles_On_Conflict;
  roles_order_by: Roles_Order_By;
  roles_pk_columns_input: Roles_Pk_Columns_Input;
  roles_set_input: Roles_Set_Input;
  subscription_plans: Subscription_Plans;
  subscription_plans_aggregate: Subscription_Plans_Aggregate;
  subscription_plans_aggregate_fields: Subscription_Plans_Aggregate_Fields;
  subscription_plans_avg_fields: Subscription_Plans_Avg_Fields;
  subscription_plans_bool_exp: Subscription_Plans_Bool_Exp;
  subscription_plans_inc_input: Subscription_Plans_Inc_Input;
  subscription_plans_insert_input: Subscription_Plans_Insert_Input;
  subscription_plans_max_fields: Subscription_Plans_Max_Fields;
  subscription_plans_min_fields: Subscription_Plans_Min_Fields;
  subscription_plans_mutation_response: Subscription_Plans_Mutation_Response;
  subscription_plans_obj_rel_insert_input: Subscription_Plans_Obj_Rel_Insert_Input;
  subscription_plans_on_conflict: Subscription_Plans_On_Conflict;
  subscription_plans_order_by: Subscription_Plans_Order_By;
  subscription_plans_pk_columns_input: Subscription_Plans_Pk_Columns_Input;
  subscription_plans_set_input: Subscription_Plans_Set_Input;
  subscription_plans_stddev_fields: Subscription_Plans_Stddev_Fields;
  subscription_plans_stddev_pop_fields: Subscription_Plans_Stddev_Pop_Fields;
  subscription_plans_stddev_samp_fields: Subscription_Plans_Stddev_Samp_Fields;
  subscription_plans_sum_fields: Subscription_Plans_Sum_Fields;
  subscription_plans_var_pop_fields: Subscription_Plans_Var_Pop_Fields;
  subscription_plans_var_samp_fields: Subscription_Plans_Var_Samp_Fields;
  subscription_plans_variance_fields: Subscription_Plans_Variance_Fields;
  subscription_root: {};
  time: Scalars['time'];
  time_comparison_exp: Time_Comparison_Exp;
  timestamptz: Scalars['timestamptz'];
  timestamptz_comparison_exp: Timestamptz_Comparison_Exp;
  user_subscription_card_details: User_Subscription_Card_Details;
  user_subscription_card_details_aggregate: User_Subscription_Card_Details_Aggregate;
  user_subscription_card_details_aggregate_fields: User_Subscription_Card_Details_Aggregate_Fields;
  user_subscription_card_details_aggregate_order_by: User_Subscription_Card_Details_Aggregate_Order_By;
  user_subscription_card_details_arr_rel_insert_input: User_Subscription_Card_Details_Arr_Rel_Insert_Input;
  user_subscription_card_details_bool_exp: User_Subscription_Card_Details_Bool_Exp;
  user_subscription_card_details_insert_input: User_Subscription_Card_Details_Insert_Input;
  user_subscription_card_details_max_fields: User_Subscription_Card_Details_Max_Fields;
  user_subscription_card_details_max_order_by: User_Subscription_Card_Details_Max_Order_By;
  user_subscription_card_details_min_fields: User_Subscription_Card_Details_Min_Fields;
  user_subscription_card_details_min_order_by: User_Subscription_Card_Details_Min_Order_By;
  user_subscription_card_details_mutation_response: User_Subscription_Card_Details_Mutation_Response;
  user_subscription_card_details_obj_rel_insert_input: User_Subscription_Card_Details_Obj_Rel_Insert_Input;
  user_subscription_card_details_on_conflict: User_Subscription_Card_Details_On_Conflict;
  user_subscription_card_details_order_by: User_Subscription_Card_Details_Order_By;
  user_subscription_card_details_pk_columns_input: User_Subscription_Card_Details_Pk_Columns_Input;
  user_subscription_card_details_set_input: User_Subscription_Card_Details_Set_Input;
  user_subscriptions: User_Subscriptions;
  user_subscriptions_aggregate: User_Subscriptions_Aggregate;
  user_subscriptions_aggregate_fields: User_Subscriptions_Aggregate_Fields;
  user_subscriptions_aggregate_order_by: User_Subscriptions_Aggregate_Order_By;
  user_subscriptions_arr_rel_insert_input: User_Subscriptions_Arr_Rel_Insert_Input;
  user_subscriptions_bool_exp: User_Subscriptions_Bool_Exp;
  user_subscriptions_insert_input: User_Subscriptions_Insert_Input;
  user_subscriptions_max_fields: User_Subscriptions_Max_Fields;
  user_subscriptions_max_order_by: User_Subscriptions_Max_Order_By;
  user_subscriptions_min_fields: User_Subscriptions_Min_Fields;
  user_subscriptions_min_order_by: User_Subscriptions_Min_Order_By;
  user_subscriptions_mutation_response: User_Subscriptions_Mutation_Response;
  user_subscriptions_obj_rel_insert_input: User_Subscriptions_Obj_Rel_Insert_Input;
  user_subscriptions_on_conflict: User_Subscriptions_On_Conflict;
  user_subscriptions_order_by: User_Subscriptions_Order_By;
  user_subscriptions_pk_columns_input: User_Subscriptions_Pk_Columns_Input;
  user_subscriptions_set_input: User_Subscriptions_Set_Input;
  users: Users;
  users_aggregate: Users_Aggregate;
  users_aggregate_fields: Users_Aggregate_Fields;
  users_bool_exp: Users_Bool_Exp;
  users_insert_input: Users_Insert_Input;
  users_max_fields: Users_Max_Fields;
  users_min_fields: Users_Min_Fields;
  users_mutation_response: Users_Mutation_Response;
  users_obj_rel_insert_input: Users_Obj_Rel_Insert_Input;
  users_on_conflict: Users_On_Conflict;
  users_order_by: Users_Order_By;
  users_pk_columns_input: Users_Pk_Columns_Input;
  users_set_input: Users_Set_Input;
  uuid: Scalars['uuid'];
  uuid_comparison_exp: Uuid_Comparison_Exp;
};

export type CachedDirectiveArgs = {
  refresh?: Scalars['Boolean'];
  ttl?: Scalars['Int'];
};

export type CachedDirectiveResolver<Result, Parent, ContextType = any, Args = CachedDirectiveArgs> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type JwtResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['JWTResponse'] = ResolversParentTypes['JWTResponse']> = {
  refresh_token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  token?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessResponse'] = ResolversParentTypes['SuccessResponse']> = {
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuccessResponseBooleanResolvers<ContextType = any, ParentType extends ResolversParentTypes['SuccessResponseBoolean'] = ResolversParentTypes['SuccessResponseBoolean']> = {
  value?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['UserResponse'] = ResolversParentTypes['UserResponse']> = {
  account_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  roles?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles'] = ResolversParentTypes['account_roles']> = {
  account?: Resolver<ResolversTypes['accounts'], ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleByRole?: Resolver<ResolversTypes['roles'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Roles_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles_aggregate'] = ResolversParentTypes['account_roles_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['account_roles_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['account_roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Roles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles_aggregate_fields'] = ResolversParentTypes['account_roles_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Account_Roles_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['account_roles_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['account_roles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Roles_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles_max_fields'] = ResolversParentTypes['account_roles_max_fields']> = {
  account_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Roles_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles_min_fields'] = ResolversParentTypes['account_roles_min_fields']> = {
  account_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Account_Roles_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['account_roles_mutation_response'] = ResolversParentTypes['account_roles_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['account_roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AccountsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts'] = ResolversParentTypes['accounts']> = {
  account_roles?: Resolver<Array<ResolversTypes['account_roles']>, ParentType, ContextType, Partial<AccountsAccount_RolesArgs>>;
  account_roles_aggregate?: Resolver<ResolversTypes['account_roles_aggregate'], ParentType, ContextType, Partial<AccountsAccount_Roles_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  is_active?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  refresh_tokens?: Resolver<Array<ResolversTypes['refresh_tokens']>, ParentType, ContextType, Partial<AccountsRefresh_TokensArgs>>;
  refresh_tokens_aggregate?: Resolver<ResolversTypes['refresh_tokens_aggregate'], ParentType, ContextType, Partial<AccountsRefresh_Tokens_AggregateArgs>>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  ticket_expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_aggregate'] = ResolversParentTypes['accounts_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['accounts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_aggregate_fields'] = ResolversParentTypes['accounts_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Accounts_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['accounts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['accounts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_max_fields'] = ResolversParentTypes['accounts_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  ticket_expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_min_fields'] = ResolversParentTypes['accounts_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  password_hash?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  ticket_expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Accounts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['accounts_mutation_response'] = ResolversParentTypes['accounts_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigintScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['bigint'], any> {
  name: 'bigint';
}

export type Collection_BadgesResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges'] = ResolversParentTypes['collection_badges']> = {
  collections?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType, Partial<Collection_BadgesCollectionsArgs>>;
  collections_aggregate?: Resolver<ResolversTypes['collections_aggregate'], ParentType, ContextType, Partial<Collection_BadgesCollections_AggregateArgs>>;
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Badges_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges_aggregate'] = ResolversParentTypes['collection_badges_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['collection_badges_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['collection_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Badges_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges_aggregate_fields'] = ResolversParentTypes['collection_badges_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Collection_Badges_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['collection_badges_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['collection_badges_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Badges_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges_max_fields'] = ResolversParentTypes['collection_badges_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Badges_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges_min_fields'] = ResolversParentTypes['collection_badges_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Badges_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_badges_mutation_response'] = ResolversParentTypes['collection_badges_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['collection_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_FlowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows'] = ResolversParentTypes['collection_flows']> = {
  collection?: Resolver<ResolversTypes['collections'], ParentType, ContextType>;
  collection_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Flows_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows_aggregate'] = ResolversParentTypes['collection_flows_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['collection_flows_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['collection_flows']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Flows_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows_aggregate_fields'] = ResolversParentTypes['collection_flows_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Collection_Flows_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['collection_flows_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['collection_flows_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Flows_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows_max_fields'] = ResolversParentTypes['collection_flows_max_fields']> = {
  collection_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Flows_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows_min_fields'] = ResolversParentTypes['collection_flows_min_fields']> = {
  collection_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Flows_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_flows_mutation_response'] = ResolversParentTypes['collection_flows_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['collection_flows']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_VisibilityResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility'] = ResolversParentTypes['collection_visibility']> = {
  collections?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType, Partial<Collection_VisibilityCollectionsArgs>>;
  collections_aggregate?: Resolver<ResolversTypes['collections_aggregate'], ParentType, ContextType, Partial<Collection_VisibilityCollections_AggregateArgs>>;
  comment?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Visibility_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility_aggregate'] = ResolversParentTypes['collection_visibility_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['collection_visibility_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['collection_visibility']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Visibility_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility_aggregate_fields'] = ResolversParentTypes['collection_visibility_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Collection_Visibility_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['collection_visibility_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['collection_visibility_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Visibility_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility_max_fields'] = ResolversParentTypes['collection_visibility_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Visibility_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility_min_fields'] = ResolversParentTypes['collection_visibility_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collection_Visibility_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['collection_visibility_mutation_response'] = ResolversParentTypes['collection_visibility_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['collection_visibility']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CollectionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections'] = ResolversParentTypes['collections']> = {
  avatar_backgorund_color?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  avatar_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collection_badge?: Resolver<ResolversTypes['collection_badges'], ParentType, ContextType>;
  collection_badge_value?: Resolver<ResolversTypes['collection_badges_enum'], ParentType, ContextType>;
  collection_flows?: Resolver<Array<ResolversTypes['collection_flows']>, ParentType, ContextType, Partial<CollectionsCollection_FlowsArgs>>;
  collection_flows_aggregate?: Resolver<ResolversTypes['collection_flows_aggregate'], ParentType, ContextType, Partial<CollectionsCollection_Flows_AggregateArgs>>;
  collection_visibility?: Resolver<ResolversTypes['collection_visibility'], ParentType, ContextType>;
  collection_visibility_value?: Resolver<ResolversTypes['collection_visibility_enum'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collections_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections_aggregate'] = ResolversParentTypes['collections_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['collections_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collections_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections_aggregate_fields'] = ResolversParentTypes['collections_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Collections_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['collections_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['collections_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collections_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections_max_fields'] = ResolversParentTypes['collections_max_fields']> = {
  avatar_backgorund_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collections_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections_min_fields'] = ResolversParentTypes['collections_min_fields']> = {
  avatar_backgorund_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Collections_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['collections_mutation_response'] = ResolversParentTypes['collections_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface Float8ScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['float8'], any> {
  name: 'float8';
}

export type Flow_App_InfoResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info'] = ResolversParentTypes['flow_app_info']> = {
  app_store_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  average_rating?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  developer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flow?: Resolver<ResolversTypes['flows'], ParentType, ContextType>;
  flow_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  release_date?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_aggregate'] = ResolversParentTypes['flow_app_info_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_app_info_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_app_info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_aggregate_fields'] = ResolversParentTypes['flow_app_info_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['flow_app_info_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_App_Info_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_app_info_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_app_info_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['flow_app_info_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['flow_app_info_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['flow_app_info_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['flow_app_info_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['flow_app_info_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['flow_app_info_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['flow_app_info_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_avg_fields'] = ResolversParentTypes['flow_app_info_avg_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_max_fields'] = ResolversParentTypes['flow_app_info_max_fields']> = {
  app_store_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  average_rating?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  developer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  release_date?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_min_fields'] = ResolversParentTypes['flow_app_info_min_fields']> = {
  app_store_link?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  average_rating?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  category?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  developer?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  release_date?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  website?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_mutation_response'] = ResolversParentTypes['flow_app_info_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_app_info']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_stddev_fields'] = ResolversParentTypes['flow_app_info_stddev_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_stddev_pop_fields'] = ResolversParentTypes['flow_app_info_stddev_pop_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_stddev_samp_fields'] = ResolversParentTypes['flow_app_info_stddev_samp_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_sum_fields'] = ResolversParentTypes['flow_app_info_sum_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['float8']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['bigint']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_var_pop_fields'] = ResolversParentTypes['flow_app_info_var_pop_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_var_samp_fields'] = ResolversParentTypes['flow_app_info_var_samp_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_App_Info_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_app_info_variance_fields'] = ResolversParentTypes['flow_app_info_variance_fields']> = {
  average_rating?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  number_of_downloads?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_ValuesResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values'] = ResolversParentTypes['flow_badge_values']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow?: Resolver<ResolversTypes['flows'], ParentType, ContextType>;
  flow_badge?: Resolver<ResolversTypes['flow_badges'], ParentType, ContextType>;
  flow_badge_value?: Resolver<ResolversTypes['flow_badges_enum'], ParentType, ContextType>;
  flow_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_Values_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values_aggregate'] = ResolversParentTypes['flow_badge_values_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_badge_values_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_badge_values']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_Values_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values_aggregate_fields'] = ResolversParentTypes['flow_badge_values_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Badge_Values_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_badge_values_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_badge_values_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_Values_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values_max_fields'] = ResolversParentTypes['flow_badge_values_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_Values_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values_min_fields'] = ResolversParentTypes['flow_badge_values_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badge_Values_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badge_values_mutation_response'] = ResolversParentTypes['flow_badge_values_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_badge_values']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_BadgesResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges'] = ResolversParentTypes['flow_badges']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flow_badge_values?: Resolver<Array<ResolversTypes['flow_badge_values']>, ParentType, ContextType, Partial<Flow_BadgesFlow_Badge_ValuesArgs>>;
  flow_badge_values_aggregate?: Resolver<ResolversTypes['flow_badge_values_aggregate'], ParentType, ContextType, Partial<Flow_BadgesFlow_Badge_Values_AggregateArgs>>;
  flow_screencasts_badges?: Resolver<Array<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, Partial<Flow_BadgesFlow_Screencasts_BadgesArgs>>;
  flow_screencasts_badges_aggregate?: Resolver<ResolversTypes['flow_screencasts_badges_aggregate'], ParentType, ContextType, Partial<Flow_BadgesFlow_Screencasts_Badges_AggregateArgs>>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badges_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges_aggregate'] = ResolversParentTypes['flow_badges_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_badges_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badges_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges_aggregate_fields'] = ResolversParentTypes['flow_badges_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Badges_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_badges_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_badges_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badges_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges_max_fields'] = ResolversParentTypes['flow_badges_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badges_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges_min_fields'] = ResolversParentTypes['flow_badges_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Badges_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_badges_mutation_response'] = ResolversParentTypes['flow_badges_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_ComponentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components'] = ResolversParentTypes['flow_components']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flow_screencast_components?: Resolver<Array<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, Partial<Flow_ComponentsFlow_Screencast_ComponentsArgs>>;
  flow_screencast_components_aggregate?: Resolver<ResolversTypes['flow_screencast_components_aggregate'], ParentType, ContextType, Partial<Flow_ComponentsFlow_Screencast_Components_AggregateArgs>>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Components_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components_aggregate'] = ResolversParentTypes['flow_components_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_components_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_components']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Components_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components_aggregate_fields'] = ResolversParentTypes['flow_components_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Components_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_components_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_components_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Components_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components_max_fields'] = ResolversParentTypes['flow_components_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Components_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components_min_fields'] = ResolversParentTypes['flow_components_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Components_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_components_mutation_response'] = ResolversParentTypes['flow_components_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_components']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_KeywordsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords'] = ResolversParentTypes['flow_keywords']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow?: Resolver<ResolversTypes['flows'], ParentType, ContextType>;
  flow_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Keywords_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords_aggregate'] = ResolversParentTypes['flow_keywords_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_keywords_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_keywords']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Keywords_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords_aggregate_fields'] = ResolversParentTypes['flow_keywords_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Keywords_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_keywords_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_keywords_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Keywords_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords_max_fields'] = ResolversParentTypes['flow_keywords_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Keywords_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords_min_fields'] = ResolversParentTypes['flow_keywords_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Keywords_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_keywords_mutation_response'] = ResolversParentTypes['flow_keywords_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_keywords']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_ComponentsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components'] = ResolversParentTypes['flow_screencast_components']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_component?: Resolver<ResolversTypes['flow_components'], ParentType, ContextType>;
  flow_component_value?: Resolver<ResolversTypes['flow_components_enum'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Components_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components_aggregate'] = ResolversParentTypes['flow_screencast_components_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencast_components_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencast_components']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Components_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components_aggregate_fields'] = ResolversParentTypes['flow_screencast_components_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencast_Components_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencast_components_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencast_components_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Components_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components_max_fields'] = ResolversParentTypes['flow_screencast_components_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Components_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components_min_fields'] = ResolversParentTypes['flow_screencast_components_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Components_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_components_mutation_response'] = ResolversParentTypes['flow_screencast_components_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencast_components']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_DetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details'] = ResolversParentTypes['flow_screencast_details']> = {
  app_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  platform_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Details_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details_aggregate'] = ResolversParentTypes['flow_screencast_details_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencast_details_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencast_details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Details_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details_aggregate_fields'] = ResolversParentTypes['flow_screencast_details_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencast_Details_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencast_details_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencast_details_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Details_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details_max_fields'] = ResolversParentTypes['flow_screencast_details_max_fields']> = {
  app_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  platform_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Details_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details_min_fields'] = ResolversParentTypes['flow_screencast_details_min_fields']> = {
  app_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  platform_version?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  region?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Details_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_details_mutation_response'] = ResolversParentTypes['flow_screencast_details_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencast_details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_LikesResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes'] = ResolversParentTypes['flow_screencast_likes']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Likes_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes_aggregate'] = ResolversParentTypes['flow_screencast_likes_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Likes_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes_aggregate_fields'] = ResolversParentTypes['flow_screencast_likes_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencast_Likes_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Likes_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes_max_fields'] = ResolversParentTypes['flow_screencast_likes_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Likes_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes_min_fields'] = ResolversParentTypes['flow_screencast_likes_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Likes_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_likes_mutation_response'] = ResolversParentTypes['flow_screencast_likes_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_TimestampsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps'] = ResolversParentTypes['flow_screencast_timestamps']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  timestamp?: Resolver<ResolversTypes['time'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Timestamps_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps_aggregate'] = ResolversParentTypes['flow_screencast_timestamps_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Timestamps_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps_aggregate_fields'] = ResolversParentTypes['flow_screencast_timestamps_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencast_Timestamps_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Timestamps_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps_max_fields'] = ResolversParentTypes['flow_screencast_timestamps_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Timestamps_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps_min_fields'] = ResolversParentTypes['flow_screencast_timestamps_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencast_Timestamps_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencast_timestamps_mutation_response'] = ResolversParentTypes['flow_screencast_timestamps_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_ScreencastsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts'] = ResolversParentTypes['flow_screencasts']> = {
  banner_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  collection_flows?: Resolver<Array<ResolversTypes['collection_flows']>, ParentType, ContextType, Partial<Flow_ScreencastsCollection_FlowsArgs>>;
  collection_flows_aggregate?: Resolver<ResolversTypes['collection_flows_aggregate'], ParentType, ContextType, Partial<Flow_ScreencastsCollection_Flows_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow?: Resolver<ResolversTypes['flows'], ParentType, ContextType>;
  flow_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  flow_screencast_components?: Resolver<Array<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_ComponentsArgs>>;
  flow_screencast_components_aggregate?: Resolver<ResolversTypes['flow_screencast_components_aggregate'], ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_Components_AggregateArgs>>;
  flow_screencast_details?: Resolver<Maybe<ResolversTypes['flow_screencast_details']>, ParentType, ContextType>;
  flow_screencast_likes?: Resolver<Array<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_LikesArgs>>;
  flow_screencast_likes_aggregate?: Resolver<ResolversTypes['flow_screencast_likes_aggregate'], ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_Likes_AggregateArgs>>;
  flow_screencast_timestamps?: Resolver<Array<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_TimestampsArgs>>;
  flow_screencast_timestamps_aggregate?: Resolver<ResolversTypes['flow_screencast_timestamps_aggregate'], ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencast_Timestamps_AggregateArgs>>;
  flow_screencasts_badges?: Resolver<Array<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencasts_BadgesArgs>>;
  flow_screencasts_badges_aggregate?: Resolver<ResolversTypes['flow_screencasts_badges_aggregate'], ParentType, ContextType, Partial<Flow_ScreencastsFlow_Screencasts_Badges_AggregateArgs>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  screencast_url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_aggregate'] = ResolversParentTypes['flow_screencasts_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencasts_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencasts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_aggregate_fields'] = ResolversParentTypes['flow_screencasts_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencasts_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencasts_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencasts_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_BadgesResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges'] = ResolversParentTypes['flow_screencasts_badges']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_badge?: Resolver<ResolversTypes['flow_badges'], ParentType, ContextType>;
  flow_badge_value?: Resolver<ResolversTypes['flow_badges_enum'], ParentType, ContextType>;
  flow_screencast?: Resolver<ResolversTypes['flow_screencasts'], ParentType, ContextType>;
  flow_screencast_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Badges_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges_aggregate'] = ResolversParentTypes['flow_screencasts_badges_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Badges_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges_aggregate_fields'] = ResolversParentTypes['flow_screencasts_badges_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screencasts_Badges_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Badges_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges_max_fields'] = ResolversParentTypes['flow_screencasts_badges_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Badges_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges_min_fields'] = ResolversParentTypes['flow_screencasts_badges_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_screencast_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Badges_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_badges_mutation_response'] = ResolversParentTypes['flow_screencasts_badges_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_max_fields'] = ResolversParentTypes['flow_screencasts_max_fields']> = {
  banner_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  screencast_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_min_fields'] = ResolversParentTypes['flow_screencasts_min_fields']> = {
  banner_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  screencast_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screencasts_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screencasts_mutation_response'] = ResolversParentTypes['flow_screencasts_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screencasts']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_ScreenshotsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots'] = ResolversParentTypes['flow_screenshots']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow?: Resolver<ResolversTypes['flows'], ParentType, ContextType>;
  flow_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  url?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screenshots_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots_aggregate'] = ResolversParentTypes['flow_screenshots_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flow_screenshots_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flow_screenshots']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screenshots_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots_aggregate_fields'] = ResolversParentTypes['flow_screenshots_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flow_Screenshots_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flow_screenshots_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flow_screenshots_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screenshots_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots_max_fields'] = ResolversParentTypes['flow_screenshots_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screenshots_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots_min_fields'] = ResolversParentTypes['flow_screenshots_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  flow_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flow_Screenshots_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flow_screenshots_mutation_response'] = ResolversParentTypes['flow_screenshots_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flow_screenshots']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type FlowsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows'] = ResolversParentTypes['flows']> = {
  avatar_background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  flow_app_info?: Resolver<Maybe<ResolversTypes['flow_app_info']>, ParentType, ContextType>;
  flow_badge_values?: Resolver<Array<ResolversTypes['flow_badge_values']>, ParentType, ContextType, Partial<FlowsFlow_Badge_ValuesArgs>>;
  flow_badge_values_aggregate?: Resolver<ResolversTypes['flow_badge_values_aggregate'], ParentType, ContextType, Partial<FlowsFlow_Badge_Values_AggregateArgs>>;
  flow_keywords?: Resolver<Array<ResolversTypes['flow_keywords']>, ParentType, ContextType, Partial<FlowsFlow_KeywordsArgs>>;
  flow_keywords_aggregate?: Resolver<ResolversTypes['flow_keywords_aggregate'], ParentType, ContextType, Partial<FlowsFlow_Keywords_AggregateArgs>>;
  flow_screencasts?: Resolver<Array<ResolversTypes['flow_screencasts']>, ParentType, ContextType, Partial<FlowsFlow_ScreencastsArgs>>;
  flow_screencasts_aggregate?: Resolver<ResolversTypes['flow_screencasts_aggregate'], ParentType, ContextType, Partial<FlowsFlow_Screencasts_AggregateArgs>>;
  flow_screenshots?: Resolver<Array<ResolversTypes['flow_screenshots']>, ParentType, ContextType, Partial<FlowsFlow_ScreenshotsArgs>>;
  flow_screenshots_aggregate?: Resolver<ResolversTypes['flow_screenshots_aggregate'], ParentType, ContextType, Partial<FlowsFlow_Screenshots_AggregateArgs>>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  is_draft?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flows_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows_aggregate'] = ResolversParentTypes['flows_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['flows_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['flows']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flows_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows_aggregate_fields'] = ResolversParentTypes['flows_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Flows_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['flows_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['flows_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flows_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows_max_fields'] = ResolversParentTypes['flows_max_fields']> = {
  avatar_background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flows_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows_min_fields'] = ResolversParentTypes['flows_min_fields']> = {
  avatar_background_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Flows_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['flows_mutation_response'] = ResolversParentTypes['flows_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['flows']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type InvitesResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites'] = ResolversParentTypes['invites']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  role?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  roleByRole?: Resolver<ResolversTypes['roles'], ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Invites_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites_aggregate'] = ResolversParentTypes['invites_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['invites_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['invites']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Invites_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites_aggregate_fields'] = ResolversParentTypes['invites_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Invites_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['invites_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['invites_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Invites_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites_max_fields'] = ResolversParentTypes['invites_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Invites_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites_min_fields'] = ResolversParentTypes['invites_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  ticket?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Invites_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['invites_mutation_response'] = ResolversParentTypes['invites_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['invites']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface MoneyScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['money'], any> {
  name: 'money';
}

export type Mutation_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['mutation_root'] = ResolversParentTypes['mutation_root']> = {
  delete_account_roles?: Resolver<Maybe<ResolversTypes['account_roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Account_RolesArgs, 'where'>>;
  delete_account_roles_by_pk?: Resolver<Maybe<ResolversTypes['account_roles']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Account_Roles_By_PkArgs, 'id'>>;
  delete_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_AccountsArgs, 'where'>>;
  delete_accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Accounts_By_PkArgs, 'id'>>;
  delete_collection_badges?: Resolver<Maybe<ResolversTypes['collection_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_BadgesArgs, 'where'>>;
  delete_collection_badges_by_pk?: Resolver<Maybe<ResolversTypes['collection_badges']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_Badges_By_PkArgs, 'value'>>;
  delete_collection_flows?: Resolver<Maybe<ResolversTypes['collection_flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_FlowsArgs, 'where'>>;
  delete_collection_flows_by_pk?: Resolver<Maybe<ResolversTypes['collection_flows']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_Flows_By_PkArgs, 'id'>>;
  delete_collection_visibility?: Resolver<Maybe<ResolversTypes['collection_visibility_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_VisibilityArgs, 'where'>>;
  delete_collection_visibility_by_pk?: Resolver<Maybe<ResolversTypes['collection_visibility']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collection_Visibility_By_PkArgs, 'value'>>;
  delete_collections?: Resolver<Maybe<ResolversTypes['collections_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_CollectionsArgs, 'where'>>;
  delete_collections_by_pk?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Collections_By_PkArgs, 'id'>>;
  delete_flow_app_info?: Resolver<Maybe<ResolversTypes['flow_app_info_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_App_InfoArgs, 'where'>>;
  delete_flow_app_info_by_pk?: Resolver<Maybe<ResolversTypes['flow_app_info']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_App_Info_By_PkArgs, 'id'>>;
  delete_flow_badge_values?: Resolver<Maybe<ResolversTypes['flow_badge_values_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Badge_ValuesArgs, 'where'>>;
  delete_flow_badge_values_by_pk?: Resolver<Maybe<ResolversTypes['flow_badge_values']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Badge_Values_By_PkArgs, 'id'>>;
  delete_flow_badges?: Resolver<Maybe<ResolversTypes['flow_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_BadgesArgs, 'where'>>;
  delete_flow_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_badges']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Badges_By_PkArgs, 'value'>>;
  delete_flow_components?: Resolver<Maybe<ResolversTypes['flow_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_ComponentsArgs, 'where'>>;
  delete_flow_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_components']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Components_By_PkArgs, 'value'>>;
  delete_flow_keywords?: Resolver<Maybe<ResolversTypes['flow_keywords_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_KeywordsArgs, 'where'>>;
  delete_flow_keywords_by_pk?: Resolver<Maybe<ResolversTypes['flow_keywords']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Keywords_By_PkArgs, 'id'>>;
  delete_flow_screencast_components?: Resolver<Maybe<ResolversTypes['flow_screencast_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_ComponentsArgs, 'where'>>;
  delete_flow_screencast_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_Components_By_PkArgs, 'id'>>;
  delete_flow_screencast_details?: Resolver<Maybe<ResolversTypes['flow_screencast_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_DetailsArgs, 'where'>>;
  delete_flow_screencast_details_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_details']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_Details_By_PkArgs, 'id'>>;
  delete_flow_screencast_likes?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_LikesArgs, 'where'>>;
  delete_flow_screencast_likes_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_Likes_By_PkArgs, 'id'>>;
  delete_flow_screencast_timestamps?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_TimestampsArgs, 'where'>>;
  delete_flow_screencast_timestamps_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencast_Timestamps_By_PkArgs, 'id'>>;
  delete_flow_screencasts?: Resolver<Maybe<ResolversTypes['flow_screencasts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_ScreencastsArgs, 'where'>>;
  delete_flow_screencasts_badges?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencasts_BadgesArgs, 'where'>>;
  delete_flow_screencasts_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencasts_Badges_By_PkArgs, 'id'>>;
  delete_flow_screencasts_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screencasts_By_PkArgs, 'id'>>;
  delete_flow_screenshots?: Resolver<Maybe<ResolversTypes['flow_screenshots_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_ScreenshotsArgs, 'where'>>;
  delete_flow_screenshots_by_pk?: Resolver<Maybe<ResolversTypes['flow_screenshots']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flow_Screenshots_By_PkArgs, 'id'>>;
  delete_flows?: Resolver<Maybe<ResolversTypes['flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_FlowsArgs, 'where'>>;
  delete_flows_by_pk?: Resolver<Maybe<ResolversTypes['flows']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Flows_By_PkArgs, 'id'>>;
  delete_invites?: Resolver<Maybe<ResolversTypes['invites_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_InvitesArgs, 'where'>>;
  delete_invites_by_pk?: Resolver<Maybe<ResolversTypes['invites']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Invites_By_PkArgs, 'id'>>;
  delete_payment_providers?: Resolver<Maybe<ResolversTypes['payment_providers_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Payment_ProvidersArgs, 'where'>>;
  delete_payment_providers_by_pk?: Resolver<Maybe<ResolversTypes['payment_providers']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Payment_Providers_By_PkArgs, 'value'>>;
  delete_refresh_tokens?: Resolver<Maybe<ResolversTypes['refresh_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Refresh_TokensArgs, 'where'>>;
  delete_refresh_tokens_by_pk?: Resolver<Maybe<ResolversTypes['refresh_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Refresh_Tokens_By_PkArgs, 'refresh_token'>>;
  delete_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_RolesArgs, 'where'>>;
  delete_roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Roles_By_PkArgs, 'value'>>;
  delete_subscription_plans?: Resolver<Maybe<ResolversTypes['subscription_plans_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Subscription_PlansArgs, 'where'>>;
  delete_subscription_plans_by_pk?: Resolver<Maybe<ResolversTypes['subscription_plans']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Subscription_Plans_By_PkArgs, 'id'>>;
  delete_user_subscription_card_details?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Subscription_Card_DetailsArgs, 'where'>>;
  delete_user_subscription_card_details_by_pk?: Resolver<Maybe<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Subscription_Card_Details_By_PkArgs, 'id'>>;
  delete_user_subscriptions?: Resolver<Maybe<ResolversTypes['user_subscriptions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_SubscriptionsArgs, 'where'>>;
  delete_user_subscriptions_by_pk?: Resolver<Maybe<ResolversTypes['user_subscriptions']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_User_Subscriptions_By_PkArgs, 'id'>>;
  delete_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_UsersArgs, 'where'>>;
  delete_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootDelete_Users_By_PkArgs, 'id'>>;
  insert_account_roles?: Resolver<Maybe<ResolversTypes['account_roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Account_RolesArgs, 'objects'>>;
  insert_account_roles_one?: Resolver<Maybe<ResolversTypes['account_roles']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Account_Roles_OneArgs, 'object'>>;
  insert_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_AccountsArgs, 'objects'>>;
  insert_accounts_one?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Accounts_OneArgs, 'object'>>;
  insert_collection_badges?: Resolver<Maybe<ResolversTypes['collection_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_BadgesArgs, 'objects'>>;
  insert_collection_badges_one?: Resolver<Maybe<ResolversTypes['collection_badges']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_Badges_OneArgs, 'object'>>;
  insert_collection_flows?: Resolver<Maybe<ResolversTypes['collection_flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_FlowsArgs, 'objects'>>;
  insert_collection_flows_one?: Resolver<Maybe<ResolversTypes['collection_flows']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_Flows_OneArgs, 'object'>>;
  insert_collection_visibility?: Resolver<Maybe<ResolversTypes['collection_visibility_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_VisibilityArgs, 'objects'>>;
  insert_collection_visibility_one?: Resolver<Maybe<ResolversTypes['collection_visibility']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collection_Visibility_OneArgs, 'object'>>;
  insert_collections?: Resolver<Maybe<ResolversTypes['collections_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_CollectionsArgs, 'objects'>>;
  insert_collections_one?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Collections_OneArgs, 'object'>>;
  insert_flow_app_info?: Resolver<Maybe<ResolversTypes['flow_app_info_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_App_InfoArgs, 'objects'>>;
  insert_flow_app_info_one?: Resolver<Maybe<ResolversTypes['flow_app_info']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_App_Info_OneArgs, 'object'>>;
  insert_flow_badge_values?: Resolver<Maybe<ResolversTypes['flow_badge_values_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Badge_ValuesArgs, 'objects'>>;
  insert_flow_badge_values_one?: Resolver<Maybe<ResolversTypes['flow_badge_values']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Badge_Values_OneArgs, 'object'>>;
  insert_flow_badges?: Resolver<Maybe<ResolversTypes['flow_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_BadgesArgs, 'objects'>>;
  insert_flow_badges_one?: Resolver<Maybe<ResolversTypes['flow_badges']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Badges_OneArgs, 'object'>>;
  insert_flow_components?: Resolver<Maybe<ResolversTypes['flow_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_ComponentsArgs, 'objects'>>;
  insert_flow_components_one?: Resolver<Maybe<ResolversTypes['flow_components']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Components_OneArgs, 'object'>>;
  insert_flow_keywords?: Resolver<Maybe<ResolversTypes['flow_keywords_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_KeywordsArgs, 'objects'>>;
  insert_flow_keywords_one?: Resolver<Maybe<ResolversTypes['flow_keywords']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Keywords_OneArgs, 'object'>>;
  insert_flow_screencast_components?: Resolver<Maybe<ResolversTypes['flow_screencast_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_ComponentsArgs, 'objects'>>;
  insert_flow_screencast_components_one?: Resolver<Maybe<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_Components_OneArgs, 'object'>>;
  insert_flow_screencast_details?: Resolver<Maybe<ResolversTypes['flow_screencast_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_DetailsArgs, 'objects'>>;
  insert_flow_screencast_details_one?: Resolver<Maybe<ResolversTypes['flow_screencast_details']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_Details_OneArgs, 'object'>>;
  insert_flow_screencast_likes?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_LikesArgs, 'objects'>>;
  insert_flow_screencast_likes_one?: Resolver<Maybe<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_Likes_OneArgs, 'object'>>;
  insert_flow_screencast_timestamps?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_TimestampsArgs, 'objects'>>;
  insert_flow_screencast_timestamps_one?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencast_Timestamps_OneArgs, 'object'>>;
  insert_flow_screencasts?: Resolver<Maybe<ResolversTypes['flow_screencasts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_ScreencastsArgs, 'objects'>>;
  insert_flow_screencasts_badges?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencasts_BadgesArgs, 'objects'>>;
  insert_flow_screencasts_badges_one?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencasts_Badges_OneArgs, 'object'>>;
  insert_flow_screencasts_one?: Resolver<Maybe<ResolversTypes['flow_screencasts']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screencasts_OneArgs, 'object'>>;
  insert_flow_screenshots?: Resolver<Maybe<ResolversTypes['flow_screenshots_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_ScreenshotsArgs, 'objects'>>;
  insert_flow_screenshots_one?: Resolver<Maybe<ResolversTypes['flow_screenshots']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flow_Screenshots_OneArgs, 'object'>>;
  insert_flows?: Resolver<Maybe<ResolversTypes['flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_FlowsArgs, 'objects'>>;
  insert_flows_one?: Resolver<Maybe<ResolversTypes['flows']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Flows_OneArgs, 'object'>>;
  insert_invites?: Resolver<Maybe<ResolversTypes['invites_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_InvitesArgs, 'objects'>>;
  insert_invites_one?: Resolver<Maybe<ResolversTypes['invites']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Invites_OneArgs, 'object'>>;
  insert_payment_providers?: Resolver<Maybe<ResolversTypes['payment_providers_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Payment_ProvidersArgs, 'objects'>>;
  insert_payment_providers_one?: Resolver<Maybe<ResolversTypes['payment_providers']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Payment_Providers_OneArgs, 'object'>>;
  insert_refresh_tokens?: Resolver<Maybe<ResolversTypes['refresh_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Refresh_TokensArgs, 'objects'>>;
  insert_refresh_tokens_one?: Resolver<Maybe<ResolversTypes['refresh_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Refresh_Tokens_OneArgs, 'object'>>;
  insert_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_RolesArgs, 'objects'>>;
  insert_roles_one?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Roles_OneArgs, 'object'>>;
  insert_subscription_plans?: Resolver<Maybe<ResolversTypes['subscription_plans_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Subscription_PlansArgs, 'objects'>>;
  insert_subscription_plans_one?: Resolver<Maybe<ResolversTypes['subscription_plans']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Subscription_Plans_OneArgs, 'object'>>;
  insert_user_subscription_card_details?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Subscription_Card_DetailsArgs, 'objects'>>;
  insert_user_subscription_card_details_one?: Resolver<Maybe<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Subscription_Card_Details_OneArgs, 'object'>>;
  insert_user_subscriptions?: Resolver<Maybe<ResolversTypes['user_subscriptions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_SubscriptionsArgs, 'objects'>>;
  insert_user_subscriptions_one?: Resolver<Maybe<ResolversTypes['user_subscriptions']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_User_Subscriptions_OneArgs, 'object'>>;
  insert_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_UsersArgs, 'objects'>>;
  insert_users_one?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootInsert_Users_OneArgs, 'object'>>;
  invite?: Resolver<ResolversTypes['SuccessResponse'], ParentType, ContextType, RequireFields<Mutation_RootInviteArgs, 'email' | 'role'>>;
  login?: Resolver<Maybe<ResolversTypes['JWTResponse']>, ParentType, ContextType, RequireFields<Mutation_RootLoginArgs, 'email' | 'password'>>;
  loginRegisterGoogle?: Resolver<Maybe<ResolversTypes['JWTResponse']>, ParentType, ContextType, RequireFields<Mutation_RootLoginRegisterGoogleArgs, 'profile'>>;
  register?: Resolver<Maybe<ResolversTypes['JWTResponse']>, ParentType, ContextType, RequireFields<Mutation_RootRegisterArgs, 'user'>>;
  request_reset_password?: Resolver<Maybe<ResolversTypes['SuccessResponse']>, ParentType, ContextType, RequireFields<Mutation_RootRequest_Reset_PasswordArgs, 'email'>>;
  reset_password?: Resolver<Maybe<ResolversTypes['JWTResponse']>, ParentType, ContextType, RequireFields<Mutation_RootReset_PasswordArgs, 'password' | 'ticket'>>;
  update_account_roles?: Resolver<Maybe<ResolversTypes['account_roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Account_RolesArgs, 'where'>>;
  update_account_roles_by_pk?: Resolver<Maybe<ResolversTypes['account_roles']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Account_Roles_By_PkArgs, 'pk_columns'>>;
  update_accounts?: Resolver<Maybe<ResolversTypes['accounts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_AccountsArgs, 'where'>>;
  update_accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Accounts_By_PkArgs, 'pk_columns'>>;
  update_collection_badges?: Resolver<Maybe<ResolversTypes['collection_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_BadgesArgs, 'where'>>;
  update_collection_badges_by_pk?: Resolver<Maybe<ResolversTypes['collection_badges']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_Badges_By_PkArgs, 'pk_columns'>>;
  update_collection_flows?: Resolver<Maybe<ResolversTypes['collection_flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_FlowsArgs, 'where'>>;
  update_collection_flows_by_pk?: Resolver<Maybe<ResolversTypes['collection_flows']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_Flows_By_PkArgs, 'pk_columns'>>;
  update_collection_visibility?: Resolver<Maybe<ResolversTypes['collection_visibility_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_VisibilityArgs, 'where'>>;
  update_collection_visibility_by_pk?: Resolver<Maybe<ResolversTypes['collection_visibility']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collection_Visibility_By_PkArgs, 'pk_columns'>>;
  update_collections?: Resolver<Maybe<ResolversTypes['collections_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_CollectionsArgs, 'where'>>;
  update_collections_by_pk?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Collections_By_PkArgs, 'pk_columns'>>;
  update_flow_app_info?: Resolver<Maybe<ResolversTypes['flow_app_info_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_App_InfoArgs, 'where'>>;
  update_flow_app_info_by_pk?: Resolver<Maybe<ResolversTypes['flow_app_info']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_App_Info_By_PkArgs, 'pk_columns'>>;
  update_flow_badge_values?: Resolver<Maybe<ResolversTypes['flow_badge_values_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Badge_ValuesArgs, 'where'>>;
  update_flow_badge_values_by_pk?: Resolver<Maybe<ResolversTypes['flow_badge_values']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Badge_Values_By_PkArgs, 'pk_columns'>>;
  update_flow_badges?: Resolver<Maybe<ResolversTypes['flow_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_BadgesArgs, 'where'>>;
  update_flow_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_badges']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Badges_By_PkArgs, 'pk_columns'>>;
  update_flow_components?: Resolver<Maybe<ResolversTypes['flow_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_ComponentsArgs, 'where'>>;
  update_flow_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_components']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Components_By_PkArgs, 'pk_columns'>>;
  update_flow_keywords?: Resolver<Maybe<ResolversTypes['flow_keywords_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_KeywordsArgs, 'where'>>;
  update_flow_keywords_by_pk?: Resolver<Maybe<ResolversTypes['flow_keywords']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Keywords_By_PkArgs, 'pk_columns'>>;
  update_flow_screencast_components?: Resolver<Maybe<ResolversTypes['flow_screencast_components_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_ComponentsArgs, 'where'>>;
  update_flow_screencast_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_Components_By_PkArgs, 'pk_columns'>>;
  update_flow_screencast_details?: Resolver<Maybe<ResolversTypes['flow_screencast_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_DetailsArgs, 'where'>>;
  update_flow_screencast_details_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_details']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_Details_By_PkArgs, 'pk_columns'>>;
  update_flow_screencast_likes?: Resolver<Maybe<ResolversTypes['flow_screencast_likes_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_LikesArgs, 'where'>>;
  update_flow_screencast_likes_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_Likes_By_PkArgs, 'pk_columns'>>;
  update_flow_screencast_timestamps?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_TimestampsArgs, 'where'>>;
  update_flow_screencast_timestamps_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencast_Timestamps_By_PkArgs, 'pk_columns'>>;
  update_flow_screencasts?: Resolver<Maybe<ResolversTypes['flow_screencasts_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_ScreencastsArgs, 'where'>>;
  update_flow_screencasts_badges?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencasts_BadgesArgs, 'where'>>;
  update_flow_screencasts_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencasts_Badges_By_PkArgs, 'pk_columns'>>;
  update_flow_screencasts_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screencasts_By_PkArgs, 'pk_columns'>>;
  update_flow_screenshots?: Resolver<Maybe<ResolversTypes['flow_screenshots_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_ScreenshotsArgs, 'where'>>;
  update_flow_screenshots_by_pk?: Resolver<Maybe<ResolversTypes['flow_screenshots']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flow_Screenshots_By_PkArgs, 'pk_columns'>>;
  update_flows?: Resolver<Maybe<ResolversTypes['flows_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_FlowsArgs, 'where'>>;
  update_flows_by_pk?: Resolver<Maybe<ResolversTypes['flows']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Flows_By_PkArgs, 'pk_columns'>>;
  update_invites?: Resolver<Maybe<ResolversTypes['invites_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_InvitesArgs, 'where'>>;
  update_invites_by_pk?: Resolver<Maybe<ResolversTypes['invites']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Invites_By_PkArgs, 'pk_columns'>>;
  update_payment_providers?: Resolver<Maybe<ResolversTypes['payment_providers_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Payment_ProvidersArgs, 'where'>>;
  update_payment_providers_by_pk?: Resolver<Maybe<ResolversTypes['payment_providers']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Payment_Providers_By_PkArgs, 'pk_columns'>>;
  update_refresh_tokens?: Resolver<Maybe<ResolversTypes['refresh_tokens_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Refresh_TokensArgs, 'where'>>;
  update_refresh_tokens_by_pk?: Resolver<Maybe<ResolversTypes['refresh_tokens']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Refresh_Tokens_By_PkArgs, 'pk_columns'>>;
  update_roles?: Resolver<Maybe<ResolversTypes['roles_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_RolesArgs, 'where'>>;
  update_roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Roles_By_PkArgs, 'pk_columns'>>;
  update_subscription_plans?: Resolver<Maybe<ResolversTypes['subscription_plans_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Subscription_PlansArgs, 'where'>>;
  update_subscription_plans_by_pk?: Resolver<Maybe<ResolversTypes['subscription_plans']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Subscription_Plans_By_PkArgs, 'pk_columns'>>;
  update_user_subscription_card_details?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Subscription_Card_DetailsArgs, 'where'>>;
  update_user_subscription_card_details_by_pk?: Resolver<Maybe<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Subscription_Card_Details_By_PkArgs, 'pk_columns'>>;
  update_user_subscriptions?: Resolver<Maybe<ResolversTypes['user_subscriptions_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_SubscriptionsArgs, 'where'>>;
  update_user_subscriptions_by_pk?: Resolver<Maybe<ResolversTypes['user_subscriptions']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_User_Subscriptions_By_PkArgs, 'pk_columns'>>;
  update_users?: Resolver<Maybe<ResolversTypes['users_mutation_response']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_UsersArgs, 'where'>>;
  update_users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Mutation_RootUpdate_Users_By_PkArgs, 'pk_columns'>>;
};

export type Payment_ProvidersResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers'] = ResolversParentTypes['payment_providers']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  user_subscription_card_details?: Resolver<Array<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, Partial<Payment_ProvidersUser_Subscription_Card_DetailsArgs>>;
  user_subscription_card_details_aggregate?: Resolver<ResolversTypes['user_subscription_card_details_aggregate'], ParentType, ContextType, Partial<Payment_ProvidersUser_Subscription_Card_Details_AggregateArgs>>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Payment_Providers_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers_aggregate'] = ResolversParentTypes['payment_providers_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['payment_providers_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['payment_providers']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Payment_Providers_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers_aggregate_fields'] = ResolversParentTypes['payment_providers_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Payment_Providers_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['payment_providers_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['payment_providers_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Payment_Providers_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers_max_fields'] = ResolversParentTypes['payment_providers_max_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Payment_Providers_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers_min_fields'] = ResolversParentTypes['payment_providers_min_fields']> = {
  comment?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Payment_Providers_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['payment_providers_mutation_response'] = ResolversParentTypes['payment_providers_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['payment_providers']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Query_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['query_root'] = ResolversParentTypes['query_root']> = {
  account_roles?: Resolver<Array<ResolversTypes['account_roles']>, ParentType, ContextType, Partial<Query_RootAccount_RolesArgs>>;
  account_roles_aggregate?: Resolver<ResolversTypes['account_roles_aggregate'], ParentType, ContextType, Partial<Query_RootAccount_Roles_AggregateArgs>>;
  account_roles_by_pk?: Resolver<Maybe<ResolversTypes['account_roles']>, ParentType, ContextType, RequireFields<Query_RootAccount_Roles_By_PkArgs, 'id'>>;
  accounts?: Resolver<Array<ResolversTypes['accounts']>, ParentType, ContextType, Partial<Query_RootAccountsArgs>>;
  accounts_aggregate?: Resolver<ResolversTypes['accounts_aggregate'], ParentType, ContextType, Partial<Query_RootAccounts_AggregateArgs>>;
  accounts_by_pk?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType, RequireFields<Query_RootAccounts_By_PkArgs, 'id'>>;
  checkEmail?: Resolver<ResolversTypes['SuccessResponseBoolean'], ParentType, ContextType, RequireFields<Query_RootCheckEmailArgs, 'email'>>;
  collection_badges?: Resolver<Array<ResolversTypes['collection_badges']>, ParentType, ContextType, Partial<Query_RootCollection_BadgesArgs>>;
  collection_badges_aggregate?: Resolver<ResolversTypes['collection_badges_aggregate'], ParentType, ContextType, Partial<Query_RootCollection_Badges_AggregateArgs>>;
  collection_badges_by_pk?: Resolver<Maybe<ResolversTypes['collection_badges']>, ParentType, ContextType, RequireFields<Query_RootCollection_Badges_By_PkArgs, 'value'>>;
  collection_flows?: Resolver<Array<ResolversTypes['collection_flows']>, ParentType, ContextType, Partial<Query_RootCollection_FlowsArgs>>;
  collection_flows_aggregate?: Resolver<ResolversTypes['collection_flows_aggregate'], ParentType, ContextType, Partial<Query_RootCollection_Flows_AggregateArgs>>;
  collection_flows_by_pk?: Resolver<Maybe<ResolversTypes['collection_flows']>, ParentType, ContextType, RequireFields<Query_RootCollection_Flows_By_PkArgs, 'id'>>;
  collection_visibility?: Resolver<Array<ResolversTypes['collection_visibility']>, ParentType, ContextType, Partial<Query_RootCollection_VisibilityArgs>>;
  collection_visibility_aggregate?: Resolver<ResolversTypes['collection_visibility_aggregate'], ParentType, ContextType, Partial<Query_RootCollection_Visibility_AggregateArgs>>;
  collection_visibility_by_pk?: Resolver<Maybe<ResolversTypes['collection_visibility']>, ParentType, ContextType, RequireFields<Query_RootCollection_Visibility_By_PkArgs, 'value'>>;
  collections?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType, Partial<Query_RootCollectionsArgs>>;
  collections_aggregate?: Resolver<ResolversTypes['collections_aggregate'], ParentType, ContextType, Partial<Query_RootCollections_AggregateArgs>>;
  collections_by_pk?: Resolver<Maybe<ResolversTypes['collections']>, ParentType, ContextType, RequireFields<Query_RootCollections_By_PkArgs, 'id'>>;
  flow_app_info?: Resolver<Array<ResolversTypes['flow_app_info']>, ParentType, ContextType, Partial<Query_RootFlow_App_InfoArgs>>;
  flow_app_info_aggregate?: Resolver<ResolversTypes['flow_app_info_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_App_Info_AggregateArgs>>;
  flow_app_info_by_pk?: Resolver<Maybe<ResolversTypes['flow_app_info']>, ParentType, ContextType, RequireFields<Query_RootFlow_App_Info_By_PkArgs, 'id'>>;
  flow_badge_values?: Resolver<Array<ResolversTypes['flow_badge_values']>, ParentType, ContextType, Partial<Query_RootFlow_Badge_ValuesArgs>>;
  flow_badge_values_aggregate?: Resolver<ResolversTypes['flow_badge_values_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Badge_Values_AggregateArgs>>;
  flow_badge_values_by_pk?: Resolver<Maybe<ResolversTypes['flow_badge_values']>, ParentType, ContextType, RequireFields<Query_RootFlow_Badge_Values_By_PkArgs, 'id'>>;
  flow_badges?: Resolver<Array<ResolversTypes['flow_badges']>, ParentType, ContextType, Partial<Query_RootFlow_BadgesArgs>>;
  flow_badges_aggregate?: Resolver<ResolversTypes['flow_badges_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Badges_AggregateArgs>>;
  flow_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_badges']>, ParentType, ContextType, RequireFields<Query_RootFlow_Badges_By_PkArgs, 'value'>>;
  flow_components?: Resolver<Array<ResolversTypes['flow_components']>, ParentType, ContextType, Partial<Query_RootFlow_ComponentsArgs>>;
  flow_components_aggregate?: Resolver<ResolversTypes['flow_components_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Components_AggregateArgs>>;
  flow_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_components']>, ParentType, ContextType, RequireFields<Query_RootFlow_Components_By_PkArgs, 'value'>>;
  flow_keywords?: Resolver<Array<ResolversTypes['flow_keywords']>, ParentType, ContextType, Partial<Query_RootFlow_KeywordsArgs>>;
  flow_keywords_aggregate?: Resolver<ResolversTypes['flow_keywords_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Keywords_AggregateArgs>>;
  flow_keywords_by_pk?: Resolver<Maybe<ResolversTypes['flow_keywords']>, ParentType, ContextType, RequireFields<Query_RootFlow_Keywords_By_PkArgs, 'id'>>;
  flow_screencast_components?: Resolver<Array<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, Partial<Query_RootFlow_Screencast_ComponentsArgs>>;
  flow_screencast_components_aggregate?: Resolver<ResolversTypes['flow_screencast_components_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencast_Components_AggregateArgs>>;
  flow_screencast_components_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_components']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencast_Components_By_PkArgs, 'id'>>;
  flow_screencast_details?: Resolver<Array<ResolversTypes['flow_screencast_details']>, ParentType, ContextType, Partial<Query_RootFlow_Screencast_DetailsArgs>>;
  flow_screencast_details_aggregate?: Resolver<ResolversTypes['flow_screencast_details_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencast_Details_AggregateArgs>>;
  flow_screencast_details_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_details']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencast_Details_By_PkArgs, 'id'>>;
  flow_screencast_likes?: Resolver<Array<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, Partial<Query_RootFlow_Screencast_LikesArgs>>;
  flow_screencast_likes_aggregate?: Resolver<ResolversTypes['flow_screencast_likes_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencast_Likes_AggregateArgs>>;
  flow_screencast_likes_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencast_Likes_By_PkArgs, 'id'>>;
  flow_screencast_timestamps?: Resolver<Array<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, Partial<Query_RootFlow_Screencast_TimestampsArgs>>;
  flow_screencast_timestamps_aggregate?: Resolver<ResolversTypes['flow_screencast_timestamps_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencast_Timestamps_AggregateArgs>>;
  flow_screencast_timestamps_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencast_timestamps']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencast_Timestamps_By_PkArgs, 'id'>>;
  flow_screencasts?: Resolver<Array<ResolversTypes['flow_screencasts']>, ParentType, ContextType, Partial<Query_RootFlow_ScreencastsArgs>>;
  flow_screencasts_aggregate?: Resolver<ResolversTypes['flow_screencasts_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencasts_AggregateArgs>>;
  flow_screencasts_badges?: Resolver<Array<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, Partial<Query_RootFlow_Screencasts_BadgesArgs>>;
  flow_screencasts_badges_aggregate?: Resolver<ResolversTypes['flow_screencasts_badges_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screencasts_Badges_AggregateArgs>>;
  flow_screencasts_badges_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts_badges']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencasts_Badges_By_PkArgs, 'id'>>;
  flow_screencasts_by_pk?: Resolver<Maybe<ResolversTypes['flow_screencasts']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screencasts_By_PkArgs, 'id'>>;
  flow_screenshots?: Resolver<Array<ResolversTypes['flow_screenshots']>, ParentType, ContextType, Partial<Query_RootFlow_ScreenshotsArgs>>;
  flow_screenshots_aggregate?: Resolver<ResolversTypes['flow_screenshots_aggregate'], ParentType, ContextType, Partial<Query_RootFlow_Screenshots_AggregateArgs>>;
  flow_screenshots_by_pk?: Resolver<Maybe<ResolversTypes['flow_screenshots']>, ParentType, ContextType, RequireFields<Query_RootFlow_Screenshots_By_PkArgs, 'id'>>;
  flows?: Resolver<Array<ResolversTypes['flows']>, ParentType, ContextType, Partial<Query_RootFlowsArgs>>;
  flows_aggregate?: Resolver<ResolversTypes['flows_aggregate'], ParentType, ContextType, Partial<Query_RootFlows_AggregateArgs>>;
  flows_by_pk?: Resolver<Maybe<ResolversTypes['flows']>, ParentType, ContextType, RequireFields<Query_RootFlows_By_PkArgs, 'id'>>;
  invites?: Resolver<Array<ResolversTypes['invites']>, ParentType, ContextType, Partial<Query_RootInvitesArgs>>;
  invites_aggregate?: Resolver<ResolversTypes['invites_aggregate'], ParentType, ContextType, Partial<Query_RootInvites_AggregateArgs>>;
  invites_by_pk?: Resolver<Maybe<ResolversTypes['invites']>, ParentType, ContextType, RequireFields<Query_RootInvites_By_PkArgs, 'id'>>;
  me?: Resolver<Maybe<ResolversTypes['UserResponse']>, ParentType, ContextType>;
  payment_providers?: Resolver<Array<ResolversTypes['payment_providers']>, ParentType, ContextType, Partial<Query_RootPayment_ProvidersArgs>>;
  payment_providers_aggregate?: Resolver<ResolversTypes['payment_providers_aggregate'], ParentType, ContextType, Partial<Query_RootPayment_Providers_AggregateArgs>>;
  payment_providers_by_pk?: Resolver<Maybe<ResolversTypes['payment_providers']>, ParentType, ContextType, RequireFields<Query_RootPayment_Providers_By_PkArgs, 'value'>>;
  refresh_tokens?: Resolver<Array<ResolversTypes['refresh_tokens']>, ParentType, ContextType, Partial<Query_RootRefresh_TokensArgs>>;
  refresh_tokens_aggregate?: Resolver<ResolversTypes['refresh_tokens_aggregate'], ParentType, ContextType, Partial<Query_RootRefresh_Tokens_AggregateArgs>>;
  refresh_tokens_by_pk?: Resolver<Maybe<ResolversTypes['refresh_tokens']>, ParentType, ContextType, RequireFields<Query_RootRefresh_Tokens_By_PkArgs, 'refresh_token'>>;
  roles?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType, Partial<Query_RootRolesArgs>>;
  roles_aggregate?: Resolver<ResolversTypes['roles_aggregate'], ParentType, ContextType, Partial<Query_RootRoles_AggregateArgs>>;
  roles_by_pk?: Resolver<Maybe<ResolversTypes['roles']>, ParentType, ContextType, RequireFields<Query_RootRoles_By_PkArgs, 'value'>>;
  subscription_plans?: Resolver<Array<ResolversTypes['subscription_plans']>, ParentType, ContextType, Partial<Query_RootSubscription_PlansArgs>>;
  subscription_plans_aggregate?: Resolver<ResolversTypes['subscription_plans_aggregate'], ParentType, ContextType, Partial<Query_RootSubscription_Plans_AggregateArgs>>;
  subscription_plans_by_pk?: Resolver<Maybe<ResolversTypes['subscription_plans']>, ParentType, ContextType, RequireFields<Query_RootSubscription_Plans_By_PkArgs, 'id'>>;
  user_subscription_card_details?: Resolver<Array<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, Partial<Query_RootUser_Subscription_Card_DetailsArgs>>;
  user_subscription_card_details_aggregate?: Resolver<ResolversTypes['user_subscription_card_details_aggregate'], ParentType, ContextType, Partial<Query_RootUser_Subscription_Card_Details_AggregateArgs>>;
  user_subscription_card_details_by_pk?: Resolver<Maybe<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType, RequireFields<Query_RootUser_Subscription_Card_Details_By_PkArgs, 'id'>>;
  user_subscriptions?: Resolver<Array<ResolversTypes['user_subscriptions']>, ParentType, ContextType, Partial<Query_RootUser_SubscriptionsArgs>>;
  user_subscriptions_aggregate?: Resolver<ResolversTypes['user_subscriptions_aggregate'], ParentType, ContextType, Partial<Query_RootUser_Subscriptions_AggregateArgs>>;
  user_subscriptions_by_pk?: Resolver<Maybe<ResolversTypes['user_subscriptions']>, ParentType, ContextType, RequireFields<Query_RootUser_Subscriptions_By_PkArgs, 'id'>>;
  users?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType, Partial<Query_RootUsersArgs>>;
  users_aggregate?: Resolver<ResolversTypes['users_aggregate'], ParentType, ContextType, Partial<Query_RootUsers_AggregateArgs>>;
  users_by_pk?: Resolver<Maybe<ResolversTypes['users']>, ParentType, ContextType, RequireFields<Query_RootUsers_By_PkArgs, 'id'>>;
};

export type Refresh_TokensResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens'] = ResolversParentTypes['refresh_tokens']> = {
  account?: Resolver<ResolversTypes['accounts'], ParentType, ContextType>;
  account_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  refresh_token?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Refresh_Tokens_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens_aggregate'] = ResolversParentTypes['refresh_tokens_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['refresh_tokens_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['refresh_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Refresh_Tokens_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens_aggregate_fields'] = ResolversParentTypes['refresh_tokens_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Refresh_Tokens_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['refresh_tokens_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['refresh_tokens_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Refresh_Tokens_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens_max_fields'] = ResolversParentTypes['refresh_tokens_max_fields']> = {
  account_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Refresh_Tokens_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens_min_fields'] = ResolversParentTypes['refresh_tokens_min_fields']> = {
  account_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  refresh_token?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Refresh_Tokens_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['refresh_tokens_mutation_response'] = ResolversParentTypes['refresh_tokens_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['refresh_tokens']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type RolesResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles'] = ResolversParentTypes['roles']> = {
  account_roles?: Resolver<Array<ResolversTypes['account_roles']>, ParentType, ContextType, Partial<RolesAccount_RolesArgs>>;
  account_roles_aggregate?: Resolver<ResolversTypes['account_roles_aggregate'], ParentType, ContextType, Partial<RolesAccount_Roles_AggregateArgs>>;
  invites?: Resolver<Array<ResolversTypes['invites']>, ParentType, ContextType, Partial<RolesInvitesArgs>>;
  invites_aggregate?: Resolver<ResolversTypes['invites_aggregate'], ParentType, ContextType, Partial<RolesInvites_AggregateArgs>>;
  value?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_aggregate'] = ResolversParentTypes['roles_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['roles_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_aggregate_fields'] = ResolversParentTypes['roles_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Roles_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['roles_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['roles_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_max_fields'] = ResolversParentTypes['roles_max_fields']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_min_fields'] = ResolversParentTypes['roles_min_fields']> = {
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Roles_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['roles_mutation_response'] = ResolversParentTypes['roles_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['roles']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_PlansResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans'] = ResolversParentTypes['subscription_plans']> = {
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  price?: Resolver<ResolversTypes['money'], ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_subscriptions?: Resolver<Array<ResolversTypes['user_subscriptions']>, ParentType, ContextType, Partial<Subscription_PlansUser_SubscriptionsArgs>>;
  user_subscriptions_aggregate?: Resolver<ResolversTypes['user_subscriptions_aggregate'], ParentType, ContextType, Partial<Subscription_PlansUser_Subscriptions_AggregateArgs>>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_aggregate'] = ResolversParentTypes['subscription_plans_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['subscription_plans_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['subscription_plans']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_aggregate_fields'] = ResolversParentTypes['subscription_plans_aggregate_fields']> = {
  avg?: Resolver<Maybe<ResolversTypes['subscription_plans_avg_fields']>, ParentType, ContextType>;
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Subscription_Plans_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['subscription_plans_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['subscription_plans_min_fields']>, ParentType, ContextType>;
  stddev?: Resolver<Maybe<ResolversTypes['subscription_plans_stddev_fields']>, ParentType, ContextType>;
  stddev_pop?: Resolver<Maybe<ResolversTypes['subscription_plans_stddev_pop_fields']>, ParentType, ContextType>;
  stddev_samp?: Resolver<Maybe<ResolversTypes['subscription_plans_stddev_samp_fields']>, ParentType, ContextType>;
  sum?: Resolver<Maybe<ResolversTypes['subscription_plans_sum_fields']>, ParentType, ContextType>;
  var_pop?: Resolver<Maybe<ResolversTypes['subscription_plans_var_pop_fields']>, ParentType, ContextType>;
  var_samp?: Resolver<Maybe<ResolversTypes['subscription_plans_var_samp_fields']>, ParentType, ContextType>;
  variance?: Resolver<Maybe<ResolversTypes['subscription_plans_variance_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Avg_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_avg_fields'] = ResolversParentTypes['subscription_plans_avg_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_max_fields'] = ResolversParentTypes['subscription_plans_max_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_min_fields'] = ResolversParentTypes['subscription_plans_min_fields']> = {
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  price?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_mutation_response'] = ResolversParentTypes['subscription_plans_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['subscription_plans']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Stddev_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_stddev_fields'] = ResolversParentTypes['subscription_plans_stddev_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Stddev_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_stddev_pop_fields'] = ResolversParentTypes['subscription_plans_stddev_pop_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Stddev_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_stddev_samp_fields'] = ResolversParentTypes['subscription_plans_stddev_samp_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Sum_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_sum_fields'] = ResolversParentTypes['subscription_plans_sum_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['money']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Var_Pop_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_var_pop_fields'] = ResolversParentTypes['subscription_plans_var_pop_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Var_Samp_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_var_samp_fields'] = ResolversParentTypes['subscription_plans_var_samp_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_Plans_Variance_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_plans_variance_fields'] = ResolversParentTypes['subscription_plans_variance_fields']> = {
  price?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Subscription_RootResolvers<ContextType = any, ParentType extends ResolversParentTypes['subscription_root'] = ResolversParentTypes['subscription_root']> = {
  account_roles?: SubscriptionResolver<Array<ResolversTypes['account_roles']>, "account_roles", ParentType, ContextType, Partial<Subscription_RootAccount_RolesArgs>>;
  account_roles_aggregate?: SubscriptionResolver<ResolversTypes['account_roles_aggregate'], "account_roles_aggregate", ParentType, ContextType, Partial<Subscription_RootAccount_Roles_AggregateArgs>>;
  account_roles_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['account_roles']>, "account_roles_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAccount_Roles_By_PkArgs, 'id'>>;
  accounts?: SubscriptionResolver<Array<ResolversTypes['accounts']>, "accounts", ParentType, ContextType, Partial<Subscription_RootAccountsArgs>>;
  accounts_aggregate?: SubscriptionResolver<ResolversTypes['accounts_aggregate'], "accounts_aggregate", ParentType, ContextType, Partial<Subscription_RootAccounts_AggregateArgs>>;
  accounts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['accounts']>, "accounts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootAccounts_By_PkArgs, 'id'>>;
  collection_badges?: SubscriptionResolver<Array<ResolversTypes['collection_badges']>, "collection_badges", ParentType, ContextType, Partial<Subscription_RootCollection_BadgesArgs>>;
  collection_badges_aggregate?: SubscriptionResolver<ResolversTypes['collection_badges_aggregate'], "collection_badges_aggregate", ParentType, ContextType, Partial<Subscription_RootCollection_Badges_AggregateArgs>>;
  collection_badges_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['collection_badges']>, "collection_badges_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCollection_Badges_By_PkArgs, 'value'>>;
  collection_flows?: SubscriptionResolver<Array<ResolversTypes['collection_flows']>, "collection_flows", ParentType, ContextType, Partial<Subscription_RootCollection_FlowsArgs>>;
  collection_flows_aggregate?: SubscriptionResolver<ResolversTypes['collection_flows_aggregate'], "collection_flows_aggregate", ParentType, ContextType, Partial<Subscription_RootCollection_Flows_AggregateArgs>>;
  collection_flows_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['collection_flows']>, "collection_flows_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCollection_Flows_By_PkArgs, 'id'>>;
  collection_visibility?: SubscriptionResolver<Array<ResolversTypes['collection_visibility']>, "collection_visibility", ParentType, ContextType, Partial<Subscription_RootCollection_VisibilityArgs>>;
  collection_visibility_aggregate?: SubscriptionResolver<ResolversTypes['collection_visibility_aggregate'], "collection_visibility_aggregate", ParentType, ContextType, Partial<Subscription_RootCollection_Visibility_AggregateArgs>>;
  collection_visibility_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['collection_visibility']>, "collection_visibility_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCollection_Visibility_By_PkArgs, 'value'>>;
  collections?: SubscriptionResolver<Array<ResolversTypes['collections']>, "collections", ParentType, ContextType, Partial<Subscription_RootCollectionsArgs>>;
  collections_aggregate?: SubscriptionResolver<ResolversTypes['collections_aggregate'], "collections_aggregate", ParentType, ContextType, Partial<Subscription_RootCollections_AggregateArgs>>;
  collections_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['collections']>, "collections_by_pk", ParentType, ContextType, RequireFields<Subscription_RootCollections_By_PkArgs, 'id'>>;
  flow_app_info?: SubscriptionResolver<Array<ResolversTypes['flow_app_info']>, "flow_app_info", ParentType, ContextType, Partial<Subscription_RootFlow_App_InfoArgs>>;
  flow_app_info_aggregate?: SubscriptionResolver<ResolversTypes['flow_app_info_aggregate'], "flow_app_info_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_App_Info_AggregateArgs>>;
  flow_app_info_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_app_info']>, "flow_app_info_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_App_Info_By_PkArgs, 'id'>>;
  flow_badge_values?: SubscriptionResolver<Array<ResolversTypes['flow_badge_values']>, "flow_badge_values", ParentType, ContextType, Partial<Subscription_RootFlow_Badge_ValuesArgs>>;
  flow_badge_values_aggregate?: SubscriptionResolver<ResolversTypes['flow_badge_values_aggregate'], "flow_badge_values_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Badge_Values_AggregateArgs>>;
  flow_badge_values_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_badge_values']>, "flow_badge_values_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Badge_Values_By_PkArgs, 'id'>>;
  flow_badges?: SubscriptionResolver<Array<ResolversTypes['flow_badges']>, "flow_badges", ParentType, ContextType, Partial<Subscription_RootFlow_BadgesArgs>>;
  flow_badges_aggregate?: SubscriptionResolver<ResolversTypes['flow_badges_aggregate'], "flow_badges_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Badges_AggregateArgs>>;
  flow_badges_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_badges']>, "flow_badges_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Badges_By_PkArgs, 'value'>>;
  flow_components?: SubscriptionResolver<Array<ResolversTypes['flow_components']>, "flow_components", ParentType, ContextType, Partial<Subscription_RootFlow_ComponentsArgs>>;
  flow_components_aggregate?: SubscriptionResolver<ResolversTypes['flow_components_aggregate'], "flow_components_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Components_AggregateArgs>>;
  flow_components_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_components']>, "flow_components_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Components_By_PkArgs, 'value'>>;
  flow_keywords?: SubscriptionResolver<Array<ResolversTypes['flow_keywords']>, "flow_keywords", ParentType, ContextType, Partial<Subscription_RootFlow_KeywordsArgs>>;
  flow_keywords_aggregate?: SubscriptionResolver<ResolversTypes['flow_keywords_aggregate'], "flow_keywords_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Keywords_AggregateArgs>>;
  flow_keywords_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_keywords']>, "flow_keywords_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Keywords_By_PkArgs, 'id'>>;
  flow_screencast_components?: SubscriptionResolver<Array<ResolversTypes['flow_screencast_components']>, "flow_screencast_components", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_ComponentsArgs>>;
  flow_screencast_components_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencast_components_aggregate'], "flow_screencast_components_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_Components_AggregateArgs>>;
  flow_screencast_components_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencast_components']>, "flow_screencast_components_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencast_Components_By_PkArgs, 'id'>>;
  flow_screencast_details?: SubscriptionResolver<Array<ResolversTypes['flow_screencast_details']>, "flow_screencast_details", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_DetailsArgs>>;
  flow_screencast_details_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencast_details_aggregate'], "flow_screencast_details_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_Details_AggregateArgs>>;
  flow_screencast_details_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencast_details']>, "flow_screencast_details_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencast_Details_By_PkArgs, 'id'>>;
  flow_screencast_likes?: SubscriptionResolver<Array<ResolversTypes['flow_screencast_likes']>, "flow_screencast_likes", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_LikesArgs>>;
  flow_screencast_likes_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencast_likes_aggregate'], "flow_screencast_likes_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_Likes_AggregateArgs>>;
  flow_screencast_likes_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencast_likes']>, "flow_screencast_likes_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencast_Likes_By_PkArgs, 'id'>>;
  flow_screencast_timestamps?: SubscriptionResolver<Array<ResolversTypes['flow_screencast_timestamps']>, "flow_screencast_timestamps", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_TimestampsArgs>>;
  flow_screencast_timestamps_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencast_timestamps_aggregate'], "flow_screencast_timestamps_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencast_Timestamps_AggregateArgs>>;
  flow_screencast_timestamps_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencast_timestamps']>, "flow_screencast_timestamps_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencast_Timestamps_By_PkArgs, 'id'>>;
  flow_screencasts?: SubscriptionResolver<Array<ResolversTypes['flow_screencasts']>, "flow_screencasts", ParentType, ContextType, Partial<Subscription_RootFlow_ScreencastsArgs>>;
  flow_screencasts_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencasts_aggregate'], "flow_screencasts_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencasts_AggregateArgs>>;
  flow_screencasts_badges?: SubscriptionResolver<Array<ResolversTypes['flow_screencasts_badges']>, "flow_screencasts_badges", ParentType, ContextType, Partial<Subscription_RootFlow_Screencasts_BadgesArgs>>;
  flow_screencasts_badges_aggregate?: SubscriptionResolver<ResolversTypes['flow_screencasts_badges_aggregate'], "flow_screencasts_badges_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screencasts_Badges_AggregateArgs>>;
  flow_screencasts_badges_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencasts_badges']>, "flow_screencasts_badges_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencasts_Badges_By_PkArgs, 'id'>>;
  flow_screencasts_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screencasts']>, "flow_screencasts_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screencasts_By_PkArgs, 'id'>>;
  flow_screenshots?: SubscriptionResolver<Array<ResolversTypes['flow_screenshots']>, "flow_screenshots", ParentType, ContextType, Partial<Subscription_RootFlow_ScreenshotsArgs>>;
  flow_screenshots_aggregate?: SubscriptionResolver<ResolversTypes['flow_screenshots_aggregate'], "flow_screenshots_aggregate", ParentType, ContextType, Partial<Subscription_RootFlow_Screenshots_AggregateArgs>>;
  flow_screenshots_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flow_screenshots']>, "flow_screenshots_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlow_Screenshots_By_PkArgs, 'id'>>;
  flows?: SubscriptionResolver<Array<ResolversTypes['flows']>, "flows", ParentType, ContextType, Partial<Subscription_RootFlowsArgs>>;
  flows_aggregate?: SubscriptionResolver<ResolversTypes['flows_aggregate'], "flows_aggregate", ParentType, ContextType, Partial<Subscription_RootFlows_AggregateArgs>>;
  flows_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['flows']>, "flows_by_pk", ParentType, ContextType, RequireFields<Subscription_RootFlows_By_PkArgs, 'id'>>;
  invites?: SubscriptionResolver<Array<ResolversTypes['invites']>, "invites", ParentType, ContextType, Partial<Subscription_RootInvitesArgs>>;
  invites_aggregate?: SubscriptionResolver<ResolversTypes['invites_aggregate'], "invites_aggregate", ParentType, ContextType, Partial<Subscription_RootInvites_AggregateArgs>>;
  invites_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['invites']>, "invites_by_pk", ParentType, ContextType, RequireFields<Subscription_RootInvites_By_PkArgs, 'id'>>;
  payment_providers?: SubscriptionResolver<Array<ResolversTypes['payment_providers']>, "payment_providers", ParentType, ContextType, Partial<Subscription_RootPayment_ProvidersArgs>>;
  payment_providers_aggregate?: SubscriptionResolver<ResolversTypes['payment_providers_aggregate'], "payment_providers_aggregate", ParentType, ContextType, Partial<Subscription_RootPayment_Providers_AggregateArgs>>;
  payment_providers_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['payment_providers']>, "payment_providers_by_pk", ParentType, ContextType, RequireFields<Subscription_RootPayment_Providers_By_PkArgs, 'value'>>;
  refresh_tokens?: SubscriptionResolver<Array<ResolversTypes['refresh_tokens']>, "refresh_tokens", ParentType, ContextType, Partial<Subscription_RootRefresh_TokensArgs>>;
  refresh_tokens_aggregate?: SubscriptionResolver<ResolversTypes['refresh_tokens_aggregate'], "refresh_tokens_aggregate", ParentType, ContextType, Partial<Subscription_RootRefresh_Tokens_AggregateArgs>>;
  refresh_tokens_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['refresh_tokens']>, "refresh_tokens_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRefresh_Tokens_By_PkArgs, 'refresh_token'>>;
  roles?: SubscriptionResolver<Array<ResolversTypes['roles']>, "roles", ParentType, ContextType, Partial<Subscription_RootRolesArgs>>;
  roles_aggregate?: SubscriptionResolver<ResolversTypes['roles_aggregate'], "roles_aggregate", ParentType, ContextType, Partial<Subscription_RootRoles_AggregateArgs>>;
  roles_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['roles']>, "roles_by_pk", ParentType, ContextType, RequireFields<Subscription_RootRoles_By_PkArgs, 'value'>>;
  subscription_plans?: SubscriptionResolver<Array<ResolversTypes['subscription_plans']>, "subscription_plans", ParentType, ContextType, Partial<Subscription_RootSubscription_PlansArgs>>;
  subscription_plans_aggregate?: SubscriptionResolver<ResolversTypes['subscription_plans_aggregate'], "subscription_plans_aggregate", ParentType, ContextType, Partial<Subscription_RootSubscription_Plans_AggregateArgs>>;
  subscription_plans_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['subscription_plans']>, "subscription_plans_by_pk", ParentType, ContextType, RequireFields<Subscription_RootSubscription_Plans_By_PkArgs, 'id'>>;
  user_subscription_card_details?: SubscriptionResolver<Array<ResolversTypes['user_subscription_card_details']>, "user_subscription_card_details", ParentType, ContextType, Partial<Subscription_RootUser_Subscription_Card_DetailsArgs>>;
  user_subscription_card_details_aggregate?: SubscriptionResolver<ResolversTypes['user_subscription_card_details_aggregate'], "user_subscription_card_details_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_Subscription_Card_Details_AggregateArgs>>;
  user_subscription_card_details_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_subscription_card_details']>, "user_subscription_card_details_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Subscription_Card_Details_By_PkArgs, 'id'>>;
  user_subscriptions?: SubscriptionResolver<Array<ResolversTypes['user_subscriptions']>, "user_subscriptions", ParentType, ContextType, Partial<Subscription_RootUser_SubscriptionsArgs>>;
  user_subscriptions_aggregate?: SubscriptionResolver<ResolversTypes['user_subscriptions_aggregate'], "user_subscriptions_aggregate", ParentType, ContextType, Partial<Subscription_RootUser_Subscriptions_AggregateArgs>>;
  user_subscriptions_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['user_subscriptions']>, "user_subscriptions_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUser_Subscriptions_By_PkArgs, 'id'>>;
  users?: SubscriptionResolver<Array<ResolversTypes['users']>, "users", ParentType, ContextType, Partial<Subscription_RootUsersArgs>>;
  users_aggregate?: SubscriptionResolver<ResolversTypes['users_aggregate'], "users_aggregate", ParentType, ContextType, Partial<Subscription_RootUsers_AggregateArgs>>;
  users_by_pk?: SubscriptionResolver<Maybe<ResolversTypes['users']>, "users_by_pk", ParentType, ContextType, RequireFields<Subscription_RootUsers_By_PkArgs, 'id'>>;
};

export interface TimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['time'], any> {
  name: 'time';
}

export interface TimestamptzScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['timestamptz'], any> {
  name: 'timestamptz';
}

export type User_Subscription_Card_DetailsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details'] = ResolversParentTypes['user_subscription_card_details']> = {
  cardholder_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  expires_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  last_four_digits?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  payment_provider?: Resolver<ResolversTypes['payment_providers_enum'], ParentType, ContextType>;
  payment_provider_value?: Resolver<ResolversTypes['payment_providers'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_subscription?: Resolver<ResolversTypes['user_subscriptions'], ParentType, ContextType>;
  user_subscription_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscription_Card_Details_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details_aggregate'] = ResolversParentTypes['user_subscription_card_details_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscription_Card_Details_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details_aggregate_fields'] = ResolversParentTypes['user_subscription_card_details_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Subscription_Card_Details_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_subscription_card_details_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscription_Card_Details_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details_max_fields'] = ResolversParentTypes['user_subscription_card_details_max_fields']> = {
  cardholder_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_four_digits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_subscription_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscription_Card_Details_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details_min_fields'] = ResolversParentTypes['user_subscription_card_details_min_fields']> = {
  cardholder_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  expires_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_four_digits?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_subscription_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscription_Card_Details_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscription_card_details_mutation_response'] = ResolversParentTypes['user_subscription_card_details_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_SubscriptionsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions'] = ResolversParentTypes['user_subscriptions']> = {
  billing_date?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  subscription_plan?: Resolver<ResolversTypes['subscription_plans'], ParentType, ContextType>;
  subscription_plan_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user?: Resolver<ResolversTypes['users'], ParentType, ContextType>;
  user_id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  user_subscription_card_details?: Resolver<Maybe<ResolversTypes['user_subscription_card_details']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscriptions_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions_aggregate'] = ResolversParentTypes['user_subscriptions_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['user_subscriptions_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['user_subscriptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscriptions_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions_aggregate_fields'] = ResolversParentTypes['user_subscriptions_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<User_Subscriptions_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['user_subscriptions_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['user_subscriptions_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscriptions_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions_max_fields'] = ResolversParentTypes['user_subscriptions_max_fields']> = {
  billing_date?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  subscription_plan_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscriptions_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions_min_fields'] = ResolversParentTypes['user_subscriptions_min_fields']> = {
  billing_date?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  subscription_plan_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  user_id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type User_Subscriptions_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['user_subscriptions_mutation_response'] = ResolversParentTypes['user_subscriptions_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['user_subscriptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResolvers<ContextType = any, ParentType extends ResolversParentTypes['users'] = ResolversParentTypes['users']> = {
  account?: Resolver<Maybe<ResolversTypes['accounts']>, ParentType, ContextType>;
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  collections?: Resolver<Array<ResolversTypes['collections']>, ParentType, ContextType, Partial<UsersCollectionsArgs>>;
  collections_aggregate?: Resolver<ResolversTypes['collections_aggregate'], ParentType, ContextType, Partial<UsersCollections_AggregateArgs>>;
  created_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  first_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  flow_screencast_likes?: Resolver<Array<ResolversTypes['flow_screencast_likes']>, ParentType, ContextType, Partial<UsersFlow_Screencast_LikesArgs>>;
  flow_screencast_likes_aggregate?: Resolver<ResolversTypes['flow_screencast_likes_aggregate'], ParentType, ContextType, Partial<UsersFlow_Screencast_Likes_AggregateArgs>>;
  flows?: Resolver<Array<ResolversTypes['flows']>, ParentType, ContextType, Partial<UsersFlowsArgs>>;
  flows_aggregate?: Resolver<ResolversTypes['flows_aggregate'], ParentType, ContextType, Partial<UsersFlows_AggregateArgs>>;
  google_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['uuid'], ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<ResolversTypes['timestamptz'], ParentType, ContextType>;
  user_subscription?: Resolver<Maybe<ResolversTypes['user_subscriptions']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_AggregateResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate'] = ResolversParentTypes['users_aggregate']> = {
  aggregate?: Resolver<Maybe<ResolversTypes['users_aggregate_fields']>, ParentType, ContextType>;
  nodes?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Aggregate_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_aggregate_fields'] = ResolversParentTypes['users_aggregate_fields']> = {
  count?: Resolver<ResolversTypes['Int'], ParentType, ContextType, Partial<Users_Aggregate_FieldsCountArgs>>;
  max?: Resolver<Maybe<ResolversTypes['users_max_fields']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['users_min_fields']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Max_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_max_fields'] = ResolversParentTypes['users_max_fields']> = {
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Min_FieldsResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_min_fields'] = ResolversParentTypes['users_min_fields']> = {
  avatar_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  created_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  first_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  google_id?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['uuid']>, ParentType, ContextType>;
  last_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updated_at?: Resolver<Maybe<ResolversTypes['timestamptz']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Users_Mutation_ResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['users_mutation_response'] = ResolversParentTypes['users_mutation_response']> = {
  affected_rows?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  returning?: Resolver<Array<ResolversTypes['users']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['uuid'], any> {
  name: 'uuid';
}

export type Resolvers<ContextType = any> = {
  JWTResponse?: JwtResponseResolvers<ContextType>;
  SuccessResponse?: SuccessResponseResolvers<ContextType>;
  SuccessResponseBoolean?: SuccessResponseBooleanResolvers<ContextType>;
  UserResponse?: UserResponseResolvers<ContextType>;
  account_roles?: Account_RolesResolvers<ContextType>;
  account_roles_aggregate?: Account_Roles_AggregateResolvers<ContextType>;
  account_roles_aggregate_fields?: Account_Roles_Aggregate_FieldsResolvers<ContextType>;
  account_roles_max_fields?: Account_Roles_Max_FieldsResolvers<ContextType>;
  account_roles_min_fields?: Account_Roles_Min_FieldsResolvers<ContextType>;
  account_roles_mutation_response?: Account_Roles_Mutation_ResponseResolvers<ContextType>;
  accounts?: AccountsResolvers<ContextType>;
  accounts_aggregate?: Accounts_AggregateResolvers<ContextType>;
  accounts_aggregate_fields?: Accounts_Aggregate_FieldsResolvers<ContextType>;
  accounts_max_fields?: Accounts_Max_FieldsResolvers<ContextType>;
  accounts_min_fields?: Accounts_Min_FieldsResolvers<ContextType>;
  accounts_mutation_response?: Accounts_Mutation_ResponseResolvers<ContextType>;
  bigint?: GraphQLScalarType;
  collection_badges?: Collection_BadgesResolvers<ContextType>;
  collection_badges_aggregate?: Collection_Badges_AggregateResolvers<ContextType>;
  collection_badges_aggregate_fields?: Collection_Badges_Aggregate_FieldsResolvers<ContextType>;
  collection_badges_max_fields?: Collection_Badges_Max_FieldsResolvers<ContextType>;
  collection_badges_min_fields?: Collection_Badges_Min_FieldsResolvers<ContextType>;
  collection_badges_mutation_response?: Collection_Badges_Mutation_ResponseResolvers<ContextType>;
  collection_flows?: Collection_FlowsResolvers<ContextType>;
  collection_flows_aggregate?: Collection_Flows_AggregateResolvers<ContextType>;
  collection_flows_aggregate_fields?: Collection_Flows_Aggregate_FieldsResolvers<ContextType>;
  collection_flows_max_fields?: Collection_Flows_Max_FieldsResolvers<ContextType>;
  collection_flows_min_fields?: Collection_Flows_Min_FieldsResolvers<ContextType>;
  collection_flows_mutation_response?: Collection_Flows_Mutation_ResponseResolvers<ContextType>;
  collection_visibility?: Collection_VisibilityResolvers<ContextType>;
  collection_visibility_aggregate?: Collection_Visibility_AggregateResolvers<ContextType>;
  collection_visibility_aggregate_fields?: Collection_Visibility_Aggregate_FieldsResolvers<ContextType>;
  collection_visibility_max_fields?: Collection_Visibility_Max_FieldsResolvers<ContextType>;
  collection_visibility_min_fields?: Collection_Visibility_Min_FieldsResolvers<ContextType>;
  collection_visibility_mutation_response?: Collection_Visibility_Mutation_ResponseResolvers<ContextType>;
  collections?: CollectionsResolvers<ContextType>;
  collections_aggregate?: Collections_AggregateResolvers<ContextType>;
  collections_aggregate_fields?: Collections_Aggregate_FieldsResolvers<ContextType>;
  collections_max_fields?: Collections_Max_FieldsResolvers<ContextType>;
  collections_min_fields?: Collections_Min_FieldsResolvers<ContextType>;
  collections_mutation_response?: Collections_Mutation_ResponseResolvers<ContextType>;
  float8?: GraphQLScalarType;
  flow_app_info?: Flow_App_InfoResolvers<ContextType>;
  flow_app_info_aggregate?: Flow_App_Info_AggregateResolvers<ContextType>;
  flow_app_info_aggregate_fields?: Flow_App_Info_Aggregate_FieldsResolvers<ContextType>;
  flow_app_info_avg_fields?: Flow_App_Info_Avg_FieldsResolvers<ContextType>;
  flow_app_info_max_fields?: Flow_App_Info_Max_FieldsResolvers<ContextType>;
  flow_app_info_min_fields?: Flow_App_Info_Min_FieldsResolvers<ContextType>;
  flow_app_info_mutation_response?: Flow_App_Info_Mutation_ResponseResolvers<ContextType>;
  flow_app_info_stddev_fields?: Flow_App_Info_Stddev_FieldsResolvers<ContextType>;
  flow_app_info_stddev_pop_fields?: Flow_App_Info_Stddev_Pop_FieldsResolvers<ContextType>;
  flow_app_info_stddev_samp_fields?: Flow_App_Info_Stddev_Samp_FieldsResolvers<ContextType>;
  flow_app_info_sum_fields?: Flow_App_Info_Sum_FieldsResolvers<ContextType>;
  flow_app_info_var_pop_fields?: Flow_App_Info_Var_Pop_FieldsResolvers<ContextType>;
  flow_app_info_var_samp_fields?: Flow_App_Info_Var_Samp_FieldsResolvers<ContextType>;
  flow_app_info_variance_fields?: Flow_App_Info_Variance_FieldsResolvers<ContextType>;
  flow_badge_values?: Flow_Badge_ValuesResolvers<ContextType>;
  flow_badge_values_aggregate?: Flow_Badge_Values_AggregateResolvers<ContextType>;
  flow_badge_values_aggregate_fields?: Flow_Badge_Values_Aggregate_FieldsResolvers<ContextType>;
  flow_badge_values_max_fields?: Flow_Badge_Values_Max_FieldsResolvers<ContextType>;
  flow_badge_values_min_fields?: Flow_Badge_Values_Min_FieldsResolvers<ContextType>;
  flow_badge_values_mutation_response?: Flow_Badge_Values_Mutation_ResponseResolvers<ContextType>;
  flow_badges?: Flow_BadgesResolvers<ContextType>;
  flow_badges_aggregate?: Flow_Badges_AggregateResolvers<ContextType>;
  flow_badges_aggregate_fields?: Flow_Badges_Aggregate_FieldsResolvers<ContextType>;
  flow_badges_max_fields?: Flow_Badges_Max_FieldsResolvers<ContextType>;
  flow_badges_min_fields?: Flow_Badges_Min_FieldsResolvers<ContextType>;
  flow_badges_mutation_response?: Flow_Badges_Mutation_ResponseResolvers<ContextType>;
  flow_components?: Flow_ComponentsResolvers<ContextType>;
  flow_components_aggregate?: Flow_Components_AggregateResolvers<ContextType>;
  flow_components_aggregate_fields?: Flow_Components_Aggregate_FieldsResolvers<ContextType>;
  flow_components_max_fields?: Flow_Components_Max_FieldsResolvers<ContextType>;
  flow_components_min_fields?: Flow_Components_Min_FieldsResolvers<ContextType>;
  flow_components_mutation_response?: Flow_Components_Mutation_ResponseResolvers<ContextType>;
  flow_keywords?: Flow_KeywordsResolvers<ContextType>;
  flow_keywords_aggregate?: Flow_Keywords_AggregateResolvers<ContextType>;
  flow_keywords_aggregate_fields?: Flow_Keywords_Aggregate_FieldsResolvers<ContextType>;
  flow_keywords_max_fields?: Flow_Keywords_Max_FieldsResolvers<ContextType>;
  flow_keywords_min_fields?: Flow_Keywords_Min_FieldsResolvers<ContextType>;
  flow_keywords_mutation_response?: Flow_Keywords_Mutation_ResponseResolvers<ContextType>;
  flow_screencast_components?: Flow_Screencast_ComponentsResolvers<ContextType>;
  flow_screencast_components_aggregate?: Flow_Screencast_Components_AggregateResolvers<ContextType>;
  flow_screencast_components_aggregate_fields?: Flow_Screencast_Components_Aggregate_FieldsResolvers<ContextType>;
  flow_screencast_components_max_fields?: Flow_Screencast_Components_Max_FieldsResolvers<ContextType>;
  flow_screencast_components_min_fields?: Flow_Screencast_Components_Min_FieldsResolvers<ContextType>;
  flow_screencast_components_mutation_response?: Flow_Screencast_Components_Mutation_ResponseResolvers<ContextType>;
  flow_screencast_details?: Flow_Screencast_DetailsResolvers<ContextType>;
  flow_screencast_details_aggregate?: Flow_Screencast_Details_AggregateResolvers<ContextType>;
  flow_screencast_details_aggregate_fields?: Flow_Screencast_Details_Aggregate_FieldsResolvers<ContextType>;
  flow_screencast_details_max_fields?: Flow_Screencast_Details_Max_FieldsResolvers<ContextType>;
  flow_screencast_details_min_fields?: Flow_Screencast_Details_Min_FieldsResolvers<ContextType>;
  flow_screencast_details_mutation_response?: Flow_Screencast_Details_Mutation_ResponseResolvers<ContextType>;
  flow_screencast_likes?: Flow_Screencast_LikesResolvers<ContextType>;
  flow_screencast_likes_aggregate?: Flow_Screencast_Likes_AggregateResolvers<ContextType>;
  flow_screencast_likes_aggregate_fields?: Flow_Screencast_Likes_Aggregate_FieldsResolvers<ContextType>;
  flow_screencast_likes_max_fields?: Flow_Screencast_Likes_Max_FieldsResolvers<ContextType>;
  flow_screencast_likes_min_fields?: Flow_Screencast_Likes_Min_FieldsResolvers<ContextType>;
  flow_screencast_likes_mutation_response?: Flow_Screencast_Likes_Mutation_ResponseResolvers<ContextType>;
  flow_screencast_timestamps?: Flow_Screencast_TimestampsResolvers<ContextType>;
  flow_screencast_timestamps_aggregate?: Flow_Screencast_Timestamps_AggregateResolvers<ContextType>;
  flow_screencast_timestamps_aggregate_fields?: Flow_Screencast_Timestamps_Aggregate_FieldsResolvers<ContextType>;
  flow_screencast_timestamps_max_fields?: Flow_Screencast_Timestamps_Max_FieldsResolvers<ContextType>;
  flow_screencast_timestamps_min_fields?: Flow_Screencast_Timestamps_Min_FieldsResolvers<ContextType>;
  flow_screencast_timestamps_mutation_response?: Flow_Screencast_Timestamps_Mutation_ResponseResolvers<ContextType>;
  flow_screencasts?: Flow_ScreencastsResolvers<ContextType>;
  flow_screencasts_aggregate?: Flow_Screencasts_AggregateResolvers<ContextType>;
  flow_screencasts_aggregate_fields?: Flow_Screencasts_Aggregate_FieldsResolvers<ContextType>;
  flow_screencasts_badges?: Flow_Screencasts_BadgesResolvers<ContextType>;
  flow_screencasts_badges_aggregate?: Flow_Screencasts_Badges_AggregateResolvers<ContextType>;
  flow_screencasts_badges_aggregate_fields?: Flow_Screencasts_Badges_Aggregate_FieldsResolvers<ContextType>;
  flow_screencasts_badges_max_fields?: Flow_Screencasts_Badges_Max_FieldsResolvers<ContextType>;
  flow_screencasts_badges_min_fields?: Flow_Screencasts_Badges_Min_FieldsResolvers<ContextType>;
  flow_screencasts_badges_mutation_response?: Flow_Screencasts_Badges_Mutation_ResponseResolvers<ContextType>;
  flow_screencasts_max_fields?: Flow_Screencasts_Max_FieldsResolvers<ContextType>;
  flow_screencasts_min_fields?: Flow_Screencasts_Min_FieldsResolvers<ContextType>;
  flow_screencasts_mutation_response?: Flow_Screencasts_Mutation_ResponseResolvers<ContextType>;
  flow_screenshots?: Flow_ScreenshotsResolvers<ContextType>;
  flow_screenshots_aggregate?: Flow_Screenshots_AggregateResolvers<ContextType>;
  flow_screenshots_aggregate_fields?: Flow_Screenshots_Aggregate_FieldsResolvers<ContextType>;
  flow_screenshots_max_fields?: Flow_Screenshots_Max_FieldsResolvers<ContextType>;
  flow_screenshots_min_fields?: Flow_Screenshots_Min_FieldsResolvers<ContextType>;
  flow_screenshots_mutation_response?: Flow_Screenshots_Mutation_ResponseResolvers<ContextType>;
  flows?: FlowsResolvers<ContextType>;
  flows_aggregate?: Flows_AggregateResolvers<ContextType>;
  flows_aggregate_fields?: Flows_Aggregate_FieldsResolvers<ContextType>;
  flows_max_fields?: Flows_Max_FieldsResolvers<ContextType>;
  flows_min_fields?: Flows_Min_FieldsResolvers<ContextType>;
  flows_mutation_response?: Flows_Mutation_ResponseResolvers<ContextType>;
  invites?: InvitesResolvers<ContextType>;
  invites_aggregate?: Invites_AggregateResolvers<ContextType>;
  invites_aggregate_fields?: Invites_Aggregate_FieldsResolvers<ContextType>;
  invites_max_fields?: Invites_Max_FieldsResolvers<ContextType>;
  invites_min_fields?: Invites_Min_FieldsResolvers<ContextType>;
  invites_mutation_response?: Invites_Mutation_ResponseResolvers<ContextType>;
  money?: GraphQLScalarType;
  mutation_root?: Mutation_RootResolvers<ContextType>;
  payment_providers?: Payment_ProvidersResolvers<ContextType>;
  payment_providers_aggregate?: Payment_Providers_AggregateResolvers<ContextType>;
  payment_providers_aggregate_fields?: Payment_Providers_Aggregate_FieldsResolvers<ContextType>;
  payment_providers_max_fields?: Payment_Providers_Max_FieldsResolvers<ContextType>;
  payment_providers_min_fields?: Payment_Providers_Min_FieldsResolvers<ContextType>;
  payment_providers_mutation_response?: Payment_Providers_Mutation_ResponseResolvers<ContextType>;
  query_root?: Query_RootResolvers<ContextType>;
  refresh_tokens?: Refresh_TokensResolvers<ContextType>;
  refresh_tokens_aggregate?: Refresh_Tokens_AggregateResolvers<ContextType>;
  refresh_tokens_aggregate_fields?: Refresh_Tokens_Aggregate_FieldsResolvers<ContextType>;
  refresh_tokens_max_fields?: Refresh_Tokens_Max_FieldsResolvers<ContextType>;
  refresh_tokens_min_fields?: Refresh_Tokens_Min_FieldsResolvers<ContextType>;
  refresh_tokens_mutation_response?: Refresh_Tokens_Mutation_ResponseResolvers<ContextType>;
  roles?: RolesResolvers<ContextType>;
  roles_aggregate?: Roles_AggregateResolvers<ContextType>;
  roles_aggregate_fields?: Roles_Aggregate_FieldsResolvers<ContextType>;
  roles_max_fields?: Roles_Max_FieldsResolvers<ContextType>;
  roles_min_fields?: Roles_Min_FieldsResolvers<ContextType>;
  roles_mutation_response?: Roles_Mutation_ResponseResolvers<ContextType>;
  subscription_plans?: Subscription_PlansResolvers<ContextType>;
  subscription_plans_aggregate?: Subscription_Plans_AggregateResolvers<ContextType>;
  subscription_plans_aggregate_fields?: Subscription_Plans_Aggregate_FieldsResolvers<ContextType>;
  subscription_plans_avg_fields?: Subscription_Plans_Avg_FieldsResolvers<ContextType>;
  subscription_plans_max_fields?: Subscription_Plans_Max_FieldsResolvers<ContextType>;
  subscription_plans_min_fields?: Subscription_Plans_Min_FieldsResolvers<ContextType>;
  subscription_plans_mutation_response?: Subscription_Plans_Mutation_ResponseResolvers<ContextType>;
  subscription_plans_stddev_fields?: Subscription_Plans_Stddev_FieldsResolvers<ContextType>;
  subscription_plans_stddev_pop_fields?: Subscription_Plans_Stddev_Pop_FieldsResolvers<ContextType>;
  subscription_plans_stddev_samp_fields?: Subscription_Plans_Stddev_Samp_FieldsResolvers<ContextType>;
  subscription_plans_sum_fields?: Subscription_Plans_Sum_FieldsResolvers<ContextType>;
  subscription_plans_var_pop_fields?: Subscription_Plans_Var_Pop_FieldsResolvers<ContextType>;
  subscription_plans_var_samp_fields?: Subscription_Plans_Var_Samp_FieldsResolvers<ContextType>;
  subscription_plans_variance_fields?: Subscription_Plans_Variance_FieldsResolvers<ContextType>;
  subscription_root?: Subscription_RootResolvers<ContextType>;
  time?: GraphQLScalarType;
  timestamptz?: GraphQLScalarType;
  user_subscription_card_details?: User_Subscription_Card_DetailsResolvers<ContextType>;
  user_subscription_card_details_aggregate?: User_Subscription_Card_Details_AggregateResolvers<ContextType>;
  user_subscription_card_details_aggregate_fields?: User_Subscription_Card_Details_Aggregate_FieldsResolvers<ContextType>;
  user_subscription_card_details_max_fields?: User_Subscription_Card_Details_Max_FieldsResolvers<ContextType>;
  user_subscription_card_details_min_fields?: User_Subscription_Card_Details_Min_FieldsResolvers<ContextType>;
  user_subscription_card_details_mutation_response?: User_Subscription_Card_Details_Mutation_ResponseResolvers<ContextType>;
  user_subscriptions?: User_SubscriptionsResolvers<ContextType>;
  user_subscriptions_aggregate?: User_Subscriptions_AggregateResolvers<ContextType>;
  user_subscriptions_aggregate_fields?: User_Subscriptions_Aggregate_FieldsResolvers<ContextType>;
  user_subscriptions_max_fields?: User_Subscriptions_Max_FieldsResolvers<ContextType>;
  user_subscriptions_min_fields?: User_Subscriptions_Min_FieldsResolvers<ContextType>;
  user_subscriptions_mutation_response?: User_Subscriptions_Mutation_ResponseResolvers<ContextType>;
  users?: UsersResolvers<ContextType>;
  users_aggregate?: Users_AggregateResolvers<ContextType>;
  users_aggregate_fields?: Users_Aggregate_FieldsResolvers<ContextType>;
  users_max_fields?: Users_Max_FieldsResolvers<ContextType>;
  users_min_fields?: Users_Min_FieldsResolvers<ContextType>;
  users_mutation_response?: Users_Mutation_ResponseResolvers<ContextType>;
  uuid?: GraphQLScalarType;
};

export type DirectiveResolvers<ContextType = any> = {
  cached?: CachedDirectiveResolver<any, any, ContextType>;
};
