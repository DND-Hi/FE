import { useRouter } from "next/router";
import { useLoginToken } from "./useLoginToken";

export const useKaKaoLogin = () => {
  const router = useRouter();
  const { resetToken } = useLoginToken();

  const login = () => {
    router.push({
      pathname: process.env.NEXT_PUBLIC_PATHNAME,
      query: {
        response_type: process.env.NEXT_PUBLIC_RESPONSE_TYPE,
        client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
        redirect_uri: process.env.NEXT_PUBLIC_REDIRECT_URI,
      },
    });
  };
  const logout = () => {
    resetToken();
    router.push("/");
  };

  return {
    login,
    logout,
  };
};
