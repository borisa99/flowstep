export interface RegisterUser {
  first_name: string
  last_name: string | null
  avatar_url: string | null
  email: string
  password: string | null
  google_id: string | null
}
