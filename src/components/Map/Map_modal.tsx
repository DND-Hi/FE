import useModalStore from "@/store/modalStore";
import React, { FC, useState } from "react";
import Image from "next/image";
import Icon_calendar from "@/icons/Icon_calendar";
import Icon_marker from "@/icons/Icon_marker";
import KeywordChip from "../common/KeywordChip";
import RedirectButton from "../common/RedirectButton";
import Icon_heart from "@/icons/Icon_heart";
import Icon_x from "@/icons/Icon_x";

interface Props {}

const Map_modal: FC<Props> = ({}) => {
  const { isOpen, setIsOpen } = useModalStore();

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999]"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-[480px] h-[650px] bg-white mx-[16px] rounded-[16px] flex flex-col justify-between pb-[16px] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 z-[100]"
          type="button"
          onClick={() => setIsOpen(false)}
        >
          <Icon_x />
        </button>
        <div className="w-full h-[220px] min-h-[220px] relative">
          <Image fill src="/images/image4.png" alt="eventImage" objectFit="contain" />
        </div>
        <div className="w-full h-auto flex flex-col gap-[12px] p-[18px] overflow-auto">
          <p className="text-[16px] font-bold">차 없는 잠수교 뚜벅뚜벅 축제</p>
          <div className="w-min flex items-center gap-[4px]  px-[8px] py-[4px] bg-primary-10 rounded-[50px] ">
            <Icon_calendar />
            <p className="text-[12px] whitespace-nowrap text-primary">
              yyyy.mm.dd - yyyy.mm.dd
            </p>
          </div>
          <p className="text-[14px] leading-5">
            2024 차 없는 잠수교 뚜벅뚜벅 축제는 오감으로 만나는 힐링 놀이터의
            컨셉으로 개최합니다. 매주 일요일, 몸과 마음을 쉬어갈 수 있는 한강
            위의 축제 놀이와 힐링을 동시에 즐기며 컬러풀한 한강으로 충전 할 수
            있는 축제입니다. 특별한 프로그램과 다양한 공연, 힐링존, 푸드트럭
            등을 준비하고, 전국의 농부들을 만나볼 수 있는 농부의 시장, 플리마켓,
            놀이 체험 공간 등 다양한 즐길 거리를 구성하여 참여하는 행사
            방문객들에게 즐거움과 휴식을 제공합니다. 2024 차 없는 잠수교
            뚜벅뚜벅 축제는 오감으로 만나는 힐링 놀이터의 컨셉으로 개최합니다.
            매주 일요일, 2024 차 없는 잠수교 뚜벅뚜벅 축제는 오감으로 만나는
            힐링 놀이터의 컨셉으로 개최합니다. 매주 일요일, 몸과 마음을 쉬어갈
            수 있는 한강 위의 축제 놀이와 힐링을 동시에 즐기며 컬러풀한 한강으로
            충전 할 수 있는 축제입니다. 특별한 프로그램과 다양한 공연, 힐링존,
            푸드트럭 등을 준비하고, 전국의 농부들을 만나볼 수 있는 농부의 시장,
            플리마켓, 놀이 체험 공간 등 다양한 즐길 거리를 구성하여 참여하는
            행사 방문객들에게 즐거움과 휴식을 제공합니다. 2024 차 없는 잠수교
            뚜벅뚜벅 축제는 오감으로 만나는 힐링 놀이터의 컨셉으로 개최합니다.
            매주 일요일,
          </p>
          <div className="flex w-full  gap-[8px]">
            <KeywordChip
              icon={<Icon_marker />}
              text="서울특별시 서초구 반포동 "
            />
            <KeywordChip
              icon={<Icon_marker />}
              text="서울특별시 서초구 반포동 "
            />
          </div>
          <div className="w-full flex justify-end">
            <RedirectButton url="https://www.naver.com" />
          </div>
        </div>
        <div className="w-full h-[36px] bg-white flex justify-between px-[16px] mt-[16px]">
          <div className="flex gap-[4px]">
            <Image
              width={32}
              height={32}
              className="rounded-full border-[1px] border-darkGray"
              src={"/images/잠수교.png"}
              alt="profileImage"
            />
            <div className="flex flex-col gap-[4px] justify-center">
              <p className="text-[12px] text-darkGray">Owned by</p>
              <p className="text-[16px] font-bold">모어</p>
            </div>
          </div>
          <button className="w-[32px] h-[32px] border-[1px] border-darkGray rounded-full flex justify-center items-center">
            <Icon_heart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Map_modal;
