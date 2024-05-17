import React, { FC } from "react";

interface Props {
  count: number;
}

const Map_ongoing: FC<Props> = ({ count }) => {
  return (
    <div className="w-full border-[1px] border-primary-80  flex justify-center">
      <div className="text-primary-90 font-bold whitespace-nowrap border-[2px] border-primary-70 px-[16px] py-[10px] rounded-full w-min bg-white">
        <p>{count}개의 이벤트 진행 중</p>
      </div>
    </div>
  );
};

export default Map_ongoing;
