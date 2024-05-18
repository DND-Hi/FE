import Icon_marker from "@/icons/Icon_marker";
import Image from "next/image";

export default function Test() {
  return (
    <div className="w-full h-full flex flex-col gap-[30px]">
      <div className="relative w-full h-[260px] bg-primary-10">
        <Image src="/images/image4.png" alt="갱얼쥐" fill objectFit="contain" />
        {/* <Image src="/images/image4.png" alt="갱얼쥐" fill objectFit="contain" /> */}
        <div className="absolute bottom-[12px] text-white text-[24px] mx-[16px] bg-black/20 rounded-[10px] p-[12px]">
          <p>누룽지 생일</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">언제 진행할 예정인가요?</p>
        <article className="flex items-center w-full relative">
          {/* <div className="absolute right-[16px]">
            <Icon_calendar color="#ADADAD" />
          </div> */}

          {/* <div className="pl-[16px] pr-[36px] w-full py-[16px] border border-solid border-darkGray rounded-[10px] text-[#999] text-[16px]">
            축제 진행 기간을 입력해주세요.
          </div> */}
          <input
            type="date"
            className="w-full p-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
          />
        </article>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">언제 진행할 예정인가요?</p>
        <article className="flex items-center w-full relative">
          <div className="absolute left-[16px]">
            <Icon_marker />
          </div>
          <input
            placeholder="축제 장소를 입력해주세요"
            className="pl-[36px] pr-[16px] w-full py-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
          />
        </article>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">참가 비용이 필요한가요?</p>
        <input
          placeholder="인당 참가 비용을 알려주세요."
          className="px-[16px] w-full py-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
        />
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">예약을 위한 URL이 있다면 입력해주세요.</p>
        <input
          placeholder="URL을 입력해주세요."
          className="px-[16px] w-full py-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
        />
      </div>
    </div>
  );
}
