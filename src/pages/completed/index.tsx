import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const Completed = () => {
  const router = useRouter();
  return (
    <main className="w-full h-screen max-w-[480px] bg-gradient-to-t from-primary to-white flex justify-center flex-col items-center gap-[20px]">
      <div className="w-full h-[560px] relative">
        <Image
          layout="fill"
          src="/images/completed.png"
          alt="completed"
          objectFit="contain"
        />
      </div>
      <button
        className="px-[16px] py-[8px] bg-primary rounded-[10px] h-[50px] disabled:bg-darkGray disabled:cursor-not-allowed w-full max-w-[350px]"
        type="button"
        onClick={() => router.replace("/")}
      >
        홈으로 돌아기기
      </button>
    </main>
  );
};

export default Completed;
