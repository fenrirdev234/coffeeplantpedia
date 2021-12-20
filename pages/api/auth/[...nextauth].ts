import NextAuth from "next-auth";
import type { NextAuthOptions } from 'next-auth'
import Providers from "next-auth/providers";

/**
 * See all Next Auth configurations options at:
 * https://next-auth.js.org/configuration
 */

const options: NextAuthOptions = {
  theme: 'dark',
  debug: true,
  session: {
    // Use JWT to manage sessions since we aren't using Database
    jwt: true,
    maxAge: 60 * 15 // 15 min
  },
  jwt: {
    secret: process.env.AUTH_JWT_SECRET,
    signingKey: process.env.AUTH_JWT_SIGNIN_KEY,
    encryption: true,
    encryptionKey: process.env.AUTH_JWT_ENCRYPTION_KEY
  },
  providers: [
    Providers.Google({
      clientId: process.env.AUTH_GOOGLE_CLIENT,
      clientSecret: process.env.AUTH_GOOGLE_SECRET
    }),
    // Providers.Facebook({
    //   clientId: process.env.AUTH_FACEBOOK_CLIENT_ID,    
    //   clientSecret: process.env.AUTH_FACEBOOK_CLIENT_SECRET
    // }),
    // Providers.Credentials({
    
    //   name: 'Email',
    //   credentials: {
    //     password: {
    //       type: 'password',
    //       label: 'Password'
    //     }
    //   },
    //   async authorize(credentials) {
    //     // Conectar API
    //     const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/platzi`,{
    //       method: 'POST',
    //       body: JSON.stringify(credentials),
    //       headers: { 'Content-type': 'application/json' }
    //     })

    //     // JSON via API
    //     const user = (await res).json()

    //     // return user ?? null
    //     if(res.ok && user){
    //       return user
    //     }

    //     return null
    //   }
    // }),
    Providers.GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET
    }),
  ]
}

export default NextAuth(options)
