import Form_firstPage from "@/components/New/Form_firstPage";
import Form_secondPage from "@/components/New/Form_secondPage";
import Icon_arrowLeft from "@/icons/Icon_arrowLeft";
import Icon_x from "@/icons/Icon_x";
import { useRouter } from "next/router";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

export interface FestivalFormType {
  title: string;
  description: string;
  host: string;
  longitude: 0;
  latitude: 0;
  startAt: Date | null;
  finishAt: Date | null;
  reservationUrl: string;
  cost: number;
  imageUrl: string;
  imageFile: File | null;
  imagePreview: string | null;
}

const EventNew = () => {
  const [isFirstPage, setIsFirstPage] = React.useState(true);
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
      cost: 0,
      imageUrl: "",
      imageFile: null,
      imagePreview: null,
    },
  });
  const { register, setValue, handleSubmit } = formMethods;

  const onSubmit = (data: FestivalFormType) => {
    
    
  }

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
          <form className="w-full flex flex-col justify-between gap-[16px] py-[30px]" onSubmit={handleSubmit(onSubmit)}>
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
