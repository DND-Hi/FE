import { memberApis } from "@/apis/member";
import Footer from "@/components/Footer";
import { useKaKaoLogin } from "@/hooks/useKaKaoLogin";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { UserType } from "../../../types/user.type";
import { motion } from "framer-motion";

const Setting = () => {
  const [userData, setUserData] = useState<UserType>();
  const router = useRouter();
  const { logout } = useKaKaoLogin();

  const getUser = useCallback(async () => {
    try {
      const response = await memberApis.getMemberMe();
      setUserData(response.data.data);
    } catch (error) {
      console.log(error);
      router.replace("/login");
    }
  }, []);

  useEffect(() => {
    getUser();
  }, [getUser]);

  if (!userData) return <></>;

  return (
    <motion.main
      className="w-full h-screen bg-[#F7F8F7] relative"
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="flex flex-col gap-[30px] mx-[16px]">
        <header className="w-full flex justify-between h-[44px] items-center">
          <p className="text-[18px]">설정</p>
        </header>
        <article className="flex gap-[16px] items-center">
          <Image
            src={userData?.profileImage ?? "/"}
            alt="profile"
            className="rounded-full"
            width={80}
            height={80}
          />
          <p>{userData?.email}</p>
        </article>
        <article className="flex flex-col">
          <button
            className="flex items-center justify-center w-full rounded-[10px] text-white bg-primary py-[20px]"
            onClick={logout}
          >
            로그아웃
          </button>
        </article>
        <div className="w-full fixed bottom-0 left-0 mb-[30px] z-[30]">
          <Footer />
        </div>
      </div>
    </motion.main>
  );
};

export default Setting;
