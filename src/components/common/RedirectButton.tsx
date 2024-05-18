import React from "react";

interface RedirectButtonProps {
  url: string;
}

const RedirectButton: React.FC<RedirectButtonProps> = ({ url }) => {
  const handleButtonClick = () => {
    window.open(url, "_blank");
  };

  return (
    <button
      className="px-[16px] py-[8px] bg-primary text-white rounded-full w-min whitespace-nowrap text-[12px]"
      onClick={handleButtonClick}
    >
      해당 축제는 예약이 필요해요!
    </button>
  );
};

export default RedirectButton;
