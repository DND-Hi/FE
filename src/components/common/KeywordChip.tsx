import React, { FC, ReactNode } from "react";

interface Props {
  icon: ReactNode;
  text: string;
}

const KeywordChip: FC<Props> = ({ icon, text }) => {
  return (
    <div className="flex gap-[4px] p-[6px] bg-darkGray/30 rounded-full w-min">
      {icon}
      <p className="text-[12px] text-darkGray whitespace-nowrap">{text}</p>
    </div>
  );
};

export default KeywordChip;
