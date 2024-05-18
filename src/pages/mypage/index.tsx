import { memberApis } from "@/apis/member";
import Footer from "@/components/Footer";
import List_myEvent from "@/components/mypage/List_myEvent";
import List_otherEvent from "@/components/mypage/List_otherEvent";
import Icon_search from "@/icons/Icon_search";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import { UserType } from "../../../types/user.type";

const Mypage = () => {
  const [isMyEvent, setIsMyEvent] = useState<boolean>(true);

  const router = useRouter();

  const [userData, setUserData] = useState<UserType>();
  const toggleNavbar = () => {
    setIsMyEvent(!isMyEvent);
  };

  const getUser = useCallback(async () => {
    try {
      const { data } = await memberApis.getMemberMe();
      setUserData(data.data);
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
    <main className="w-full h-screen bg-[#F7F8F7] relative">
      <header className="w-full flex justify-between h-[44px] items-center px-[16px]">
        <p className="text-[18px] ">마이</p>
        <Icon_search />
      </header>
      <nav className="w-full flex">
        <button
          type="button"
          className={`w-full h-[48px] ${
            isMyEvent ? "text-primary" : "text-darkGray"
          } cursor-pointer ${
            isMyEvent
              ? "border-b-2 border-primary"
              : "border-b-2 border-darkGray"
          }`}
          onClick={toggleNavbar}
        >
          내가 만든 이벤트
        </button>
        <button
          type="button"
          className={`w-full h-[48px] ${
            !isMyEvent ? "text-primary" : "text-darkGray"
          } cursor-pointer ${
            !isMyEvent
              ? "border-b-2 border-primary"
              : "border-b-2 border-darkGray"
          }`}
          onClick={toggleNavbar}
        >
          가고싶은 축제
        </button>
      </nav>
      <section className="w-full h-full p-[16px]">
        {isMyEvent ? (
          <div className="flex flex-col items-start">
            <List_myEvent />
          </div>
        ) : (
          <div className="flex flex-col items-start">
            <List_otherEvent />
          </div>
        )}
      </section>
      <div className="w-full fixed bottom-0 left-0 mb-[30px] z-[30]">
        <Footer />
      </div>
    </main>
  );
};

export default Mypage;
