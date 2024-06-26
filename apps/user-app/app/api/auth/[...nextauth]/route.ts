import NextAuth from "next-auth/next";
import { authoptions } from "../../../lib/auth";

const handler = NextAuth(authoptions)

export { handler as GET, handler as POST }