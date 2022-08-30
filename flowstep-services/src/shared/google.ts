import { google } from 'googleapis'
import axios from 'axios'
import { GoogleProfile } from '@/graphql/generated'

const oauth2Client = new google.auth.OAuth2(
  process.env.GOOGLE_CLIENT_ID,
  process.env.GOOGLE_CLIENT_SECRET,
  /*
   * This is where Google will redirect the user after they
   * give permission to your application
   */
  process.env.SERVER_ROOT_HOST + '/api/auth/googe/callback'
)

export const getGoogleAuthURL = () => {
  /*
   * Generate a url that asks permissions to the user's email and profile
   */
  const scopes = [
    'https://www.googleapis.com/auth/userinfo.profile',
    'https://www.googleapis.com/auth/userinfo.email',
  ]

  return oauth2Client.generateAuthUrl({
    access_type: 'offline',
    prompt: 'consent',
    scope: scopes, // If you only need one scope you can pass it as string
  })
}

export const getGoogleUser = async (code: string) => {
  const { tokens } = await oauth2Client.getToken(code)

  // Fetch the user's profile with the access token and bearer
  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${tokens.access_token}`,
      {
        headers: {
          Authorization: `Bearer ${tokens.id_token}`,
        },
      }
    )
    .then(res => res.data as GoogleProfile)
    .catch(error => {
      throw new Error(error.message)
    })

  return googleUser
}
