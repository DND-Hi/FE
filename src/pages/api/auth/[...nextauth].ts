import NextAuth from "next-auth/next";
import KakaoProvider from "next-auth/providers/kakao";

export const authOptions = {
  providers: [
    KakaoProvider({
      clientId: process.env.CLIENT_ID ?? "",
      clientSecret: "",
    }),
  ],
};

export default NextAuth(authOptions);
