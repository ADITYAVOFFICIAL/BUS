import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/utils/db";

export const authOptions: any = {
  // Configure the authentication provider
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (isPasswordCorrect) {
              // Return user object including role
              return { email: user.email, role: user.role }; // Include the user's role
            }
          }
        } catch (err: any) {
          throw new Error(err);
        }
        return null; // Return null if authentication fails
      },
    }),
    // ...add more providers here if needed
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Store the role in the JWT token
      }
      return token;
    },
    async session({ session, token }) {
      session.user.role = token.role; // Add the role to the session object
      return session;
    },
    async signIn({ user }) {
      // You can add any additional sign-in logic here if needed
      return true; // Return true to allow the sign-in
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
