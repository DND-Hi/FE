import React from "react";
import Image from "next/image";
import Icon_calendar from "../../icons/Icon_calendar";

const Map_detailOverlay = () => {
  return (
    <div className="w-full h-[132px] max-w-[480px] flex rounded-[16px] ">
      <div className="min-w-[132px] min-h-[132px]">
        <Image width={132} height={132} src="/images/잠수교.png" alt="잠수교" />
      </div>
      <div className="w-full bg-white p-[16px] rounded-r-[16px] flex flex-col justify-between h-full">
        <p className="font-bold text-[16px]">축제 이름</p>
        <p className="text-[14px] line-clamp-3">
          축제에 대한 설명이 들어갑니다. 축제에 대한 설명이 들어갑니다. 축제에
          대한 설명이 들어갑니다. 축제에 대한 설명이 들어갑니다. 축제에 대한
          설명이 들어갑니다. 축제에 대한 설명이 들어갑니다.
        </p>
        <div className="w-min flex items-center gap-[4px]  px-[8px] py-[4px] bg-primary-10 rounded-[50px] ">
          <Icon_calendar />
          <p className="text-[12px] whitespace-nowrap text-primary">
            yyyy.mm.dd - yyyy.mm.dd
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map_detailOverlay;
