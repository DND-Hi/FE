import Icon_arrowLeft from "@/icons/Icon_arrowLeft";
import Icon_x from "@/icons/Icon_x";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";

interface FestivalFormType {
  title: string;
  description: string;
  host: string;
  longitude: 0;
  latitude: 0;
  startAt: Date | null;
  finishAt: Date | null;
}

const EventNew = () => {
  const router = useRouter();

  const formMethods = useForm<FestivalFormType>({
    defaultValues: {
      title: "",
      description: "",
      host: "",
      longitude: 0,
      latitude: 0,
      startAt: null,
      finishAt: null,
    },
  });
  const { register, setValue } = formMethods;

  return (
    <main className="w-full h-full bg-white">
      <header className="w-full flex justify-between h-[44px] items-center">
        <button type="button" onClick={() => router.push("/")}>
          <Icon_arrowLeft />
        </button>
        <p className="text-[18px] font-bold">소소한 축제 만들기</p>
        <div />
      </header>
      <section className="w-full h-full  p-[16px]">
        <div className="flex flex-col items-start">
          <p className="text-[30px] font-bold">어떤 소소한 축제를 </p>
          <p className="text-[30px] font-bold">생각 중이신가요?</p>
        </div>

        <form className="w-full flex justify-center">
          <div className="w-full flex items-center pt-[30px] max-w[]">
            <input
              className="border-b-[1px] border-dark px-[8px] py-[8px]"
              type="text"
              placeholder="축제 이름을 입력해주세요"
              {...register}
            />
            <button onClick={() => setValue("title", "")}>
              <Icon_x />
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};

export default EventNew;
