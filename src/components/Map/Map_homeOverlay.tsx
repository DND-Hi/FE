import dayjs from "dayjs";
import React, { FC } from "react";
import Image from "next/image";
import Icon_calendar from "../../icons/Icon_calendar";

const Map_homeOverlay = ({
  param,
  onClick,
}: {
  param: any;
  onClick: () => void;
}) => {
  console.log(param, "param");
  const formattedStartAt =
    dayjs(param?.startAt).format("YYYY.MM.DD") ??
    dayjs(new Date()).format("YYYY.MM.DD");
  const formattedFinishAt =
    dayjs(param?.finishAt).format("YYYY.MM.DD") ??
    dayjs(new Date()).format("YYYY.MM.DD");

  return (
    <div
      className="w-full h-[132px] max-w-[480px] flex rounded-[16px] "
      onClick={onClick}
    >
      <div className="min-w-[132px] min-h-[132px] bg-white flex justify-center items-center rounded-l-[16px]">
        <Image
          width={120}
          height={120}
          src={param?.imageUrl ?? "/images/잠수교.png"}
          alt="잠수교"
        />
      </div>
      <div className="w-full bg-white p-[16px] rounded-r-[16px] flex flex-col justify-between h-full">
        <p className="font-bold text-[16px]">{param?.title}</p>
        <p className="text-[14px] line-clamp-3">{param?.description}</p>
        <div className="w-min flex items-center gap-[4px]  px-[8px] py-[4px] bg-primary-10 rounded-[50px] ">
          <Icon_calendar />
          <p className="text-[12px] whitespace-nowrap text-primary">
            {formattedStartAt} - {formattedFinishAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Map_homeOverlay;
