import React, { FC } from "react";

interface Props {
  count: number;
}

const Map_ongoing: FC<Props> = ({ count }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="text-primary font-bold whitespace-nowrap px-[16px] py-[10px] rounded-full w-min bg-white border-[1px] border-primary  ">
        <p className="text-[12px]">나만 몰랐던 {count}가지 축제 👀</p>
      </div>
    </div>
  );
};

export default Map_ongoing;
