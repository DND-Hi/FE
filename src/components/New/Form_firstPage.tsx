import Icon_x from "@/icons/Icon_x";
import { FestivalFormType } from "@/pages/new";
import React, { ChangeEvent, ChangeEventHandler, FC, FormEvent } from "react";
import { useFormContext } from "react-hook-form";
import Image from "next/image";

interface Props {
  isFirstPage: boolean;
  onNext: () => void;
}

const Form_firstPage: FC<Props> = ({ isFirstPage, onNext }) => {
  const { register, setValue, watch } = useFormContext<FestivalFormType>();
  const fileUplaodRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = async (e: ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files?.[0]) return;

    setValue("imageFile", e.target.files?.[0]);
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files?.[0]);
    reader.onloadend = () => {
      setValue("imagePreview", reader.result as string);
    };
  };

  const handleOnFileClick = () => {
    fileUplaodRef.current?.click();
  };

  const handleOnNext = () => {
    onNext();
  };

  return (
    <div className="w-full h-auto overflow-auto flex flex-col gap-[16px]">
      <div className="w-full">
        <button
          className="w-full border-[1px] border-darkGray border-dashed h-[165px] flex  flex-col justify-center items-center rounded-[32px] gap-[8px]"
          onClick={handleOnFileClick}
          type="button"
        >
          {!!watch("imagePreview") ? (
            <div className="relative w-full h-[165px]">
              <Image
                fill
                objectFit="contain"
                src={watch("imagePreview") as string}
                alt="festivalImage"
              />
            </div>
          ) : (
            <>
              <p>축제를 잘 보여주는 대표이미지를</p>
              <p>업로드해주세요!</p>
              <div className="w-[52px] h-[52px] rounded-full bg-darkGray/20 flex justify-center items-center">
                <Icon_x />
              </div>
            </>
          )}
        </button>
        <input
          type="file"
          ref={fileUplaodRef}
          className="hidden"
          accept="image/*"
          onChange={(e) => handleFileUpload(e)}
        />
      </div>

      <div className="flex flex-col items-start gap-[8px] w-full px-[2px]">
        <label htmlFor="">축제 이름을 정해볼까요?</label>
        <input
          className="border-[1px] border-darkGray px-[8px] py-[8px] rounded-[10px] p-[16px] w-full focus:ring-primary focus:ring-1 focus:outline-none focus:border-none"
          type="text"
          placeholder="축제 이름을 입력해주세요"
          {...register("title")}
        />
      </div>

      <div className="flex flex-col items-start gap-[8px] w-full px-[2px]">
        <label className="w-full" htmlFor="">
          축제에 대한 자세한 설명을 듣고싶어요.
        </label>
        <textarea
          id="festival-description"
          className="w-full p-[16px] border-[1px] border-darkGray rounded-[10px] h-[216px]  focus:ring-primary focus:ring-1 focus:outline-none focus:border-none"
          placeholder="설명을 입력해주세요."
          maxLength={300}
          {...register("description")}
        ></textarea>
      </div>

      <button
        className="px-[16px] py-[8px] bg-primary rounded-full h-[50px] disabled:bg-darkGray disabled:cursor-not-allowed"
        type="button"
        onClick={handleOnNext}
        disabled={
          !watch("title") || !watch("description") || !watch("imageFile")
        }
      >
        확인
      </button>
    </div>
  );
};

export default Form_firstPage;
