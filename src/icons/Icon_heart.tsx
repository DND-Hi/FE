import React, { FC } from "react";

interface Props {
  isActive?: boolean;
}

const Icon_heart: FC<Props> = ({ isActive = false }) => {
  return (
    <svg
      width="18"
      height="17"
      viewBox="0 0 18 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.5 1.45831L9 3.45831L13 1.45831L16 2.95831L17 5.95831V9.95831L13.5 14.4583L9 16.4583L4.5 14.4583L1.5 10.9583L0.5 6.95831L2 2.45831L5.5 1.45831Z"
        fill={isActive ? "#FF4242" : "#848A8A"}
      />
      <path
        d="M8.95833 17C8.7 17 8.45 16.9667 8.24167 16.8917C5.05833 15.8 0 11.925 0 6.19999C0 3.28332 2.35833 0.916656 5.25833 0.916656C6.66667 0.916656 7.98333 1.46666 8.95833 2.44999C9.93333 1.46666 11.25 0.916656 12.6583 0.916656C15.5583 0.916656 17.9167 3.29166 17.9167 6.19999C17.9167 11.9333 12.8583 15.8 9.675 16.8917C9.46667 16.9667 9.21667 17 8.95833 17ZM5.25833 2.16666C3.05 2.16666 1.25 3.97499 1.25 6.19999C1.25 11.8917 6.725 15.0583 8.65 15.7167C8.8 15.7667 9.125 15.7667 9.275 15.7167C11.1917 15.0583 16.675 11.9 16.675 6.19999C16.675 3.97499 14.875 2.16666 12.6667 2.16666C11.4 2.16666 10.225 2.75832 9.46667 3.78332C9.23333 4.09999 8.7 4.09999 8.46667 3.78332C7.69167 2.74999 6.525 2.16666 5.25833 2.16666Z"
        fill={isActive ? "#FF4242" : "#848A8A"}
      />
    </svg>
  );
};

export default Icon_heart;
