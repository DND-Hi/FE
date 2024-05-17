import React, { FC } from "react";

interface Props
  extends React.ButtonHTMLAttributes<
    Omit<HTMLButtonElement, "onClick" | "className">
  > {
  text: string;
  isActive?: boolean;
  onClick: () => void;
  className?: string;
}

const Map_keyword: FC<Props> = ({
  text,
  isActive = false,
  onClick,
  className,
  ...props
}) => {
  return (
    <button
      className={`px-[20px] py-[8px] rounded-[30px] text-[14px] max-h-[32px] ${
        isActive ? "bg-primary text-white" : "bg-white text-darkGray"
      } ${className}`}
      type="button"
      onClick={onClick}
      {...props}
    >
      {text}
    </button>
  );
};

export default Map_keyword;
