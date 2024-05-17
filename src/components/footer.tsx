import { IconHome } from "@/icons/Icon_home";
import { IconMyPage } from "@/icons/Icon_mypage";
import { IconSettings } from "@/icons/Icon_settings";

// 선택되면 text-primary: #2DD197
// 선택안되면 text-darkGray: #848A8A
export default function Footer() {
  return (
    <div className="mx-[30px] h-[60px] flex relative">
      <div className="bg-red-200 rounded-full me-[80px] w-full items-center justify-around flex">
        <div className="flex items-center justify-center flex-col gap-[4px]">
          <IconHome />
          <p className="text-darkGray text-[10px]">홈</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[4px]">
          <IconMyPage />
          <p className="text-darkGray text-[10px]">마이</p>
        </div>
        <div className="flex items-center justify-center flex-col gap-[4px]">
          <IconSettings />
          <p className="text-darkGray text-[10px]">설정</p>
        </div>
      </div>
      <div className="absolute end-0 bg-primary w-[60px] h-[60px] flex flex-col gap-[4px] items-center justify-center rounded-full text-white">
        <p className="text-[16px]">+</p>
        <p className="text-[10px]">등록하기</p>
      </div>
    </div>
  );
}
