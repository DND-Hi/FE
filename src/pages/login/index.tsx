import { useKaKaoLogin } from "@/hooks/useKaKaoLogin";
import { useSession } from "next-auth/react";
import Image from "next/image";

// https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code
export default function Login() {
  const { data: session } = useSession();
  const { login } = useKaKaoLogin();
  // console.log(session?.accessToken)
  // if (session) {
  //   return (
  //     <div className="flex flex-col gap-[4px]">
  //       <p>Sign in {session.user?.email}</p>
  //       {/* {session.user?.name} */}
  //       <button onClick={() => signOut()}>Sign Out</button>
  //     </div>
  //   );
  // }

  return (
    <div className="overflow-hidden w-full h-full">
      <Image fill objectFit="contain" src="/images/Signin.png" alt="signIn" />

      <div
        className="absolute bottom-[40px] left-1/2 translate-x-[-50%] scale-125 flex flex-col  items-center gap-[8px]"
        onClick={login}
      >
        <p className="text-[10px]">로그인하고 가고 싶은 축제 모아보기!</p>
        <Image
          src={"/images/kakao_login_medium_wide.png"}
          alt="kakao_login_wide"
          className=""
          width={300}
          height={45}
        />
      </div>
    </div>
  );
}
