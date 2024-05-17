import { kakaoToken } from "@/apis/kakaoToken";
import { useCookies } from "@/hooks/useCookies";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { useCallback, useEffect } from "react";

export default function CheckToken() {
  const router = useRouter();
  const { code }: ParsedUrlQuery = router.query;
  const { setSessionStorage } = useSessionStorage();
  const { setCookie } = useCookies();

  const getTokenInfo = useCallback(async () => {
    try {
      const response = await kakaoToken.postKakaoCode({ code: code as string });
      if (response) {
        setSessionStorage("access", response.data.accessToken);
        setCookie("refresh", response.data.refreshToken);
        router.push("/");
        return;
      }
    } catch (error) {
      console.log(error);
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
