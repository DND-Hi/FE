import dayjs from "dayjs";
import React, { FC } from "react";
import Image from "next/image";
import Icon_calendar from "../../icons/Icon_calendar";

interface Props {
  title: string;
  description: string;
  startAt: Date;
  finishAt: Date;
  imageURL: string;
}

const Map_detailOverlay: FC<Props> = ({
  title,
  description,
  startAt,
  finishAt,
  imageURL,
}) => {
  const formattedStartAt = dayjs(startAt).format("YYYY.MM.DD");
  const formattedFinishAt = dayjs(finishAt).format("YYYY.MM.DD");

  return (
    <div className="w-full h-[132px] max-w-[480px] flex rounded-[16px] shrink-0">
      <div className="min-w-[132px] min-h-[132px]">
        <Image
          width={132}
          height={132}
          src={imageURL ?? "/images/잠수교.png"}
          alt="잠수교"
        />
      </div>
      <div className="w-full bg-white p-[16px] rounded-r-[16px] flex flex-col justify-between h-full">
        <p className="font-bold text-[16px]">{title}</p>
        <p className="text-[14px] line-clamp-3">{description}</p>
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

export default Map_detailOverlay;
