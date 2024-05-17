import Icon_calendar from "@/icons/Icon_calendar";
import Icon_marker from "@/icons/Icon_marker";
import { FestivalFormType } from "@/pages/new";
import { register } from "module";
import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import Map_search from "../Map/Map_search";

export default function Form_secondPage() {
  const { register, getValues, watch } = useFormContext<FestivalFormType>();
  const [position, setPosition] = useState<{ lng: number; lat: number }>();
  const [isMapOpen, setIsMapOpen] = useState(false);

  console.log(isMapOpen);

  return (
    <div className="w-full h-full flex flex-col gap-[30px]">
      <div className="relative w-full h-[260px] bg-primary-10">
        {/* <Image
          src={watch("imagePreview") as string}
          alt="갱얼쥐"
          fill
          objectFit="contain"
        /> */}

        <div className="absolute bottom-[12px] text-white text-[24px] mx-[16px] bg-black/20 rounded-[10px] p-[12px]">
          <p>{getValues("title")}</p>
        </div>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">언제 진행할 예정인가요?</p>
        <article className="flex items-center w-full relative">
          <input
            type="date"
            className="w-full p-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
          />
        </article>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">어디서 진행할 예정인가요?</p>
        <button
          className="flex items-center w-full relative border-[1px] border-darkGray rounded-[10px]"
          type="button"
          onClick={() => setIsMapOpen(true)}
        >
          <div className="absolute left-[16px]">
            <Icon_marker />
          </div>
          <div className="pl-[36px] pr-[16px] w-full py-[16px] text-[12px]">
            {position
              ? `경도: ${position.lng}, 위도: ${position.lat}`
              : "축제 장소를 입력해주세요"}
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">참가 비용이 필요한가요?</p>
        <input
          placeholder="인당 참가 비용을 알려주세요."
          className="px-[16px] w-full py-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
          {...register("cost")}
        />
      </div>
      <div className="flex flex-col gap-[20px] mx-[16px]">
        <p className="font-medium">예약을 위한 URL이 있다면 입력해주세요.</p>
        <input
          placeholder="URL을 입력해주세요."
          className="px-[16px] w-full py-[16px] ring-0 outline-none border border-darkGray rounded-[10px]"
          {...register("reservationUrl")}
        />
      </div>
      <Map_search
        isOpen={isMapOpen}
        onConfirm={(lng, lat) => {
          setPosition({ lng: lng as number, lat: lat as number });
          setIsMapOpen(false);
        }}
        onClose={() => setIsMapOpen(false)}
      />
    </div>
  );
}
