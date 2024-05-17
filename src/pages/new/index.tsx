import { eventApis } from "@/apis/event";
import { formApis } from "@/apis/form";
import Form_firstPage from "@/components/New/Form_firstPage";
import Form_secondPage from "@/components/New/Form_secondPage";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import Icon_arrowLeft from "@/icons/Icon_arrowLeft";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface FestivalFormType {
  title: string;
  description: string;
  host: string;
  longitude: number;
  latitude: number;
  startAt: Date;
  finishAt: Date;
  reservationUrl: string;
  cost: number;
  imageUrl: string;
  imageFile: File | null;
  imagePreview: string | null;
}

const EventNew = () => {
  const [isFirstPage, setIsFirstPage] = React.useState(true);
  const router = useRouter();
  const { getSessionStorage } = useSessionStorage();

  const formMethods = useForm<FestivalFormType>({
    defaultValues: {
      title: "",
      description: "",
      host: "host",
      longitude: 0,
      latitude: 0,
      startAt: new Date(),
      finishAt: new Date(),
      cost: 0,
      imageUrl: "",
      imageFile: null,
      imagePreview: null,
    },
  });
  const { register, setValue, handleSubmit } = formMethods;

  const onSubmit = async (data: FestivalFormType) => {
    const res = await formApis
      .postImage({
        file: data.imageFile!,
        type: "event",
      })
      .then((res) => res.data);

    const imageUrl = res.data.url;

    const result = await eventApis
      .postEvent({
        cost: data.cost,
        description: data.description,
        host: getSessionStorage("nickname") as string,
        latitude: data.latitude,
        longitude: data.longitude,
        reservationUrl: data.reservationUrl,
        title: data.title,
        startAt: new Date(data.startAt),
        finishAt: new Date(data.startAt),
        imageUrl,
      })
      .then((res) => res.data);

    router.replace("/");
  };

  return (
    <main className="w-full h-full bg-white">
      <header className="w-full flex justify-between h-[44px] items-center px-[16px]">
        <button type="button" onClick={() => router.push("/")}>
          <Icon_arrowLeft />
        </button>
        <p className="text-[18px] font-bold">소소한 축제 만들기</p>
        <div />
      </header>
      <section className="w-full h-full  p-[16px]">
        <div className="flex flex-col items-start">
          <p className="text-[24px] font-bold">어떤 소소한 축제를 </p>
          <p className="text-[24px] font-bold">생각 중이신가요? 🎈</p>
        </div>

        <FormProvider {...formMethods}>
          <form
            className="w-full flex flex-col justify-between gap-[16px] py-[30px]"
            onSubmit={handleSubmit(onSubmit)}
          >
            {isFirstPage ? (
              <Form_firstPage
                isFirstPage={isFirstPage}
                onNext={() => setIsFirstPage(false)}
              />
            ) : (
              <>
                <Form_secondPage />
                <button
                  className="px-[16px] py-[8px] bg-primary rounded-full h-[50px] disabled:bg-darkGray disabled:cursor-not-allowed"
                  type="submit"
                >
                  완료하기
                </button>
              </>
            )}
          </form>
        </FormProvider>
      </section>
    </main>
  );
};

export default EventNew;
