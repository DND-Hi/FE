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
      className={`px-[20px] py-[8px] rounded-[30px] ${
        isActive ? "bg-primary-40" : "bg-primary-10"
      } ${className}`}
      type="button"
      {...props}
    >
      {text}
    </button>
  );
};

export default Map_keyword;
