import { useCookies } from "@/hooks/useCookies";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useCallback, useEffect } from "react";
import { kakaoToken } from "../apis/kakaoToken";

export default function CheckToken() {
  const router = useRouter();
  const { code }: ParsedUrlQuery = router.query;
  const { setSessionStorage } = useSessionStorage();
  const { setCookie } = useCookies();

  const getTokenInfo = useCallback(async () => {
    const test = await kakaoToken.getKaKaoToken();
    console.log("test", test);
    // 최초 로그인이 아닐때 : 액세스토큰
    if (test) {
      // setSessionStorage("access", test.authorization);
      // setCookie("refresh", headers.refreshtoken);
      // setSessionStorage("nickname", data.nickname[0]);
      // setSessionStorage("email", data.userRole[0]);
      // setSessionStorage("profileImage", data.userRole[0]);
      // router.push("/main");
      return;
    }
  }, [code, setSessionStorage, setCookie, router]);

  useEffect(() => {
    if (!router.isReady) return;
    if (!code) {
      alert("카카오에서 코드를 받는데 실패함");
    } else {
      getTokenInfo();
    }
  }, [router.isReady, code, getTokenInfo]);

  return <></>;
}
