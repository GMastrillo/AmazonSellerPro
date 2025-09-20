// This is a placeholder for NextAuth.js
// You would configure your authentication providers here.
// For example, using the Credentials provider to connect to your backend.

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { login } from "@/lib/api"

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: {  label: "Password", type: "password" }
      },
      async authorize(credentials) {
        try {
          if (!credentials) return null;
          const { data: user } = await login({
            email: credentials.email,
            password: credentials.password,
          });

          if (user) {
            // The user object returned here will be encoded in the JWT.
            return user;
          } else {
            return null;
          }
        } catch (e: any) {
          // You can log the error here and return null or throw an error
          console.error("Login failed", e.response.data);
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/login',
  },
  // Add other callbacks here (jwt, session) to handle the token
});

export { handler as GET, handler as POST }
