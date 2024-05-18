import { bookmarkAPIs } from "@/apis/bookmark";
import Icon_calendar from "@/icons/Icon_calendar";
import Icon_heart from "@/icons/Icon_heart";
import Icon_x from "@/icons/Icon_x";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import Image from "next/image";
import RedirectButton from "../common/RedirectButton";

const Map_modal = ({ param, onClose }: { param: any; onClose: () => void }) => {
  const formattedStartAt =
    dayjs(param?.startAt).format("YYYY.MM.DD") ??
    dayjs(new Date()).format("YYYY.MM.DD");
  const formattedFinishAt =
    dayjs(param?.finishAt).format("YYYY.MM.DD") ??
    dayjs(new Date()).format("YYYY.MM.DD");

  if (!param) return null;

  const clickBookmark = async (id: number) => {
    try {
      const response = await bookmarkAPIs.postBookmarks(id);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999]"
      onClick={onClose}
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div
        className="w-full max-w-[480px] h-[650px] bg-white mx-[16px] rounded-[16px] flex flex-col justify-between pb-[16px] relative"
        onClick={e => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 z-[100]"
          type="button"
          onClick={onClose}
        >
          <Icon_x />
        </button>
        <div className="w-full h-[220px] min-h-[220px] relative rounded-[16px]">
          <Image
            fill
            src={param?.imageUrl ?? "/images/잠수교.png"}
            alt="eventImage"
            objectFit="contain"
            className="rounded-t-[16px]"
          />
        </div>
        <div className="w-full h-auto flex flex-col gap-[12px] p-[18px] overflow-auto">
          <p className="text-[16px] font-bold">{param?.title}</p>
          <div className="w-min flex items-center gap-[4px]  px-[8px] py-[4px] bg-primary-10 rounded-[50px] ">
            <Icon_calendar />
            <p className="text-[12px] whitespace-nowrap text-primary">
              {formattedStartAt} - {formattedFinishAt}
            </p>
          </div>
          <p className="text-[14px] leading-5">{param?.description}</p>
          {/* <div className="flex w-full  gap-[8px]">
            <KeywordChip
              icon={<Icon_marker />}
              text="서울특별시 서초구 반포동 "
            />
            <KeywordChip
              icon={<Icon_marker />}
              text="서울특별시 서초구 반포동 "
            />
          </div> */}
          <div className="w-full flex justify-end">
            <RedirectButton url={param.reservationUrl} />
          </div>
        </div>
        <div className="w-full h-[36px] bg-white flex justify-between px-[16px] mt-[16px]">
          <div className="flex gap-[4px]">
            <Image
              width={32}
              height={32}
              className="rounded-full border-[1px] border-darkGray"
              src={"/images/잠수교.png"}
              alt="profileImage"
            />
            <div className="flex flex-col gap-[4px] justify-center">
              <p className="text-[12px] text-darkGray">Owned by</p>
              <p className="text-[16px] font-bold">{param.host ?? "익명"}</p>
            </div>
          </div>
          <button
            className="w-[32px] h-[32px] border-[1px] border-darkGray rounded-full flex justify-center items-center"
            onClick={() => clickBookmark(param.id)}
          >
            <Icon_heart />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Map_modal;
