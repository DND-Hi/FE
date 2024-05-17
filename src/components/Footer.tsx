import { IconHome } from "@/icons/Icon_home";
import { IconMyPage } from "@/icons/Icon_myPage";

import { IconSettings } from "@/icons/Icon_settings";
import useMenuStore, { Menu } from "@/store/menuStore";
import { useRouter } from "next/router";

// 선택되면 text-primary: #2DD197
// 선택안되면 text-darkGray: #848A8A
export default function Footer() {
  const { currentMenu, setCurrentMenu } = useMenuStore();
  const route = useRouter();

  const isCurrentMenu = (menu: string) => {
    return currentMenu === menu;
  };

  const handleRoute = (menu: Menu) => {
    setCurrentMenu(menu);
    route.push(`/${menu === "home" ? "" : menu}`);
  };

  return (
    <div className="mx-[30px] h-[60px] flex relative">
      <div className="bg-white rounded-full me-[80px] w-full items-center justify-around flex">
        <button
          className="flex items-center justify-center flex-col gap-[4px]"
          type="button"
          onClick={() => handleRoute("home")}
        >
          <IconHome isActive={isCurrentMenu("home")} />
          <p
            className={`${
              isCurrentMenu("home") ? "text-primary" : "text-darkGray"
            } text-[10px]`}
          >
            홈
          </p>
        </button>
        <button
          className="flex items-center justify-center flex-col gap-[4px]"
          type="button"
          onClick={() => handleRoute("mypage")}
        >
          <IconMyPage isActive={isCurrentMenu("mypage")} />
          <p
            className={`${
              isCurrentMenu("mypage") ? "text-primary" : "text-darkGray"
            } text-[10px]`}
          >
            마이
          </p>
        </button>
        <button
          className="flex items-center justify-center flex-col gap-[4px]"
          type="button"
          onClick={() => handleRoute("setting")}
        >
          <IconSettings isActive={isCurrentMenu("setting")} />
          <p
            className={`${
              isCurrentMenu("setting") ? "text-primary" : "text-darkGray"
            } text-[10px]`}
          >
            설정
          </p>
        </button>
      </div>
      <div className="absolute end-0 bg-primary w-[60px] h-[60px] flex flex-col gap-[4px] items-center justify-center rounded-full text-white">
        <p className="text-[16px]">+</p>
        <p className="text-[10px]">등록하기</p>
      </div>
    </div>
  );
}
