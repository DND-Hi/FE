import { IconHome } from "@/icons/Icon_home";
import { IconMyPage } from "@/icons/Icon_myPage";

import { IconSettings } from "@/icons/Icon_settings";
import useMenuStore, { Menu } from "@/store/menuStore";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Map_search from "./Map/Map_search";

// 선택되면 text-primary: #2DD197
// 선택안되면 text-darkGray: #848A8A
export default function Footer() {
  const { currentMenu, setCurrentMenu } = useMenuStore();
  const [isOpen, setIsOpen] = useState(false);
  const route = useRouter();

  const isCurrentMenu = (menu: string) => {
    return currentMenu === menu;
  };

  const handleRoute = (menu: Menu) => {
    setCurrentMenu(menu);
    route.push(`/${menu === "home" ? "" : menu}`);
  };

  useEffect(() => {
    const currentPath = route.pathname;
    if (currentPath === "/") {
      setCurrentMenu("home");
    } else {
      setCurrentMenu(currentPath.slice(1) as Menu);
    }
  }, []);

  return (
    <div className="mx-[30px] h-[60px] flex relative">
      <div className="bg-white rounded-full me-[80px] w-full items-center justify-around flex">
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
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
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
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
        </motion.button>
        <motion.button
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.9,
          }}
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
        </motion.button>
      </div>
      {isOpen && (
        <Map_search
          onConfirm={(v, y) => console.log(v, y)}
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
        />
      )}
      <button
        type="button"
        className="absolute end-0 bg-primary w-[60px] h-[60px] flex flex-col gap-[4px] items-center justify-center rounded-full text-white"
        onClick={() => route.push("/new")}
      >
        <p className="text-[16px]">+</p>
        <p className="text-[10px]">등록하기</p>
      </button>
    </div>
  );
}
