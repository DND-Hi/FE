import { signIn, signOut, useSession } from "next-auth/react";
import Image from 'next/image';

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div className="flex flex-col gap-[4px]">
        <p>Sign in {session.user?.email}</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="w-[632px] h-[632px] rounded-full bg-primary fixed left-[50%] translate-x-[-50%] bottom-[50vh]" />
      <div className="relative">
        {/* <Image src={"/"} alt="logo" width={160} height={160} /> */}
        <div className='bg-primary-10 w-[160px] h-[160px] flex items-center justify-center mx-[16px]'>로고 들어올 자리</div>
      </div>
      <article className="relative z-[999] text-white flex flex-col gap-[12px] px-[16px]">
        <div className="text-[48px] font-bold flex flex-col gap-[4px]">
          <p>모르는데</p>
          <p>어떻게가요?</p>
        </div>
        <div className="text-[16px] flex flex-col gap-[4px]">
          <p>나 몰래 진행 중인 이벤트들</p>
          <p>놓치지 않게 챙겨드릴게요</p>
        </div>
      </article>

      <div className="w-[60px] h-[44px] bg-primary rounded-[30px] fixed top-[55vh] left-[50%] translate-x-[-50%]" />
      <div className="absolute bottom-[60px] flex flex-col gap-[24px] items-center justify-center w-full max-w-[480px]">
        <p className="font-bold text-[16px]">
          빠른 회원가입 후 마이 기능 사용하기
        </p>
        <div className="relative 2xsm:hidden" onClick={() => signIn()}>
          <Image
            src={"/images/kakao_login_medium_narrow.png"}
            alt="kakao_login_narrow"
            width={183}
            height={45}
          />
        </div>
        <div className="relative hidden 2xsm:flex" onClick={() => signIn()}>
          <Image
            src={"/images/kakao_login_medium_wide.png"}
            alt="kakao_login_wide"
            className=""
            width={300}
            height={45}
          />
        </div>
      </div>
    </div>
  );
}
