import Keyword from "@/components/Map/Map_keyword";
import { TKeyword } from "@/store/keywordStore";
import React, { useEffect, useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

import { eventApis } from "@/apis/event";
import Footer from "@/components/Footer";
import Map_homeOverlay from "@/components/Map/Map_homeOverlay";
import Map_modal from "@/components/Map/Map_modal";
import Map_ongoing from "@/components/Map/Map_ongoing";
import { useSessionStorage } from "@/hooks/useSessionStorage";
import useKeywordStore from "@/store/keywordStore";
import axios from "axios";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

const Home = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const { getSessionStorage, setSessionStorage } = useSessionStorage();

  const { currentKeyword, setCurrentKeyword } = useKeywordStore();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);
  const [selectedDetail, setSelectedDetail] = useState<any>(null);

  const [data, setData] = useState<any>();

  const { data: session } = useSession();

  const [state, setState] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null;
    isLoading: boolean;
  }>({
    center: {
      lat: Number(getSessionStorage("latitude")) ?? 37.506502,
      lng: Number(getSessionStorage("longitude")) ?? 127.053617,
    },
    errMsg: null,
    isLoading: true,
  });

  const keywords: { id: TKeyword; name: string }[] = [
    { id: "all", name: "모든 축제" },
    { id: "big", name: "대축제 🎉" },
    { id: "small", name: "소소한 축제 🎈" },
  ];

  const getEvents = async () => {
    try {
      const { data } = await eventApis.getEvents({
        latitude: 0,
        longitude: 0,
        distance: 60000000,
      });

      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEvents();

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        position => {
          setSessionStorage("latitude", String(position.coords.latitude));
          setSessionStorage("longitude", String(position.coords.longitude));
          setState(prev => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        err => {
          setState(prev => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState(prev => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  const getUserInfo = async () => {
    // kakao 서버에 한번 다시 갔다오는 로직
    // 서버측에 세션을 던져주기에 무리가 있다면 토큰을 넘겨주고 서버측에서 아래 로직을 실행하기
    // 토큰은 next-auth.session-token 값이 아님 (next-auth.session-token 보낼 시 too long for access token 에러.)
    // 서버에 던져줘야하는 토큰은 callbacks 처리를 한 session accessToken 값
    // https://developers.kakao.com/docs/latest/ko/kakaologin/rest-api#req-user-info

    // 전체적인 Flow
    // 1번 Flow
    // 1. next-auth 로그인
    // 2. session 에 필요한 정보 받음 (필요할지는 모르지만, 재요청이 필요할경우 아래 user/me 등 카카오서버에 다시 접근해서 받아오기)
    // 3. 서버에 로그인에 필요한 값(email, 우리 서비스에 필요한 정보 등) 보내주면서 회원가입요청
    // 4. 회원가입 및 우리 서비스 access, refresh 토큰으로 사용
    // 2번 Flow
    // 1. next-auth 로그인
    // 2. 카카오에 받은 액세스토큰 서버에 전달 + 우리 서비스에서 회원가입에 필요한 정보 전달
    // 3. 서버측에서 필요한 정보를 카카오에 요청(user/me 등)
    // 4. 회원가입

    // 개인적으로는 생각에 1번 방법이 더 괜찮다고 생각함.
    try {
      if (session) {
        const response = await axios.get("https://kapi.kakao.com/v2/user/me", {
          headers: {
            Authorization: `Bearer ${session?.accessToken}`,
          },
        });
        console.log("", response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserInfo();
  }, [session]);

  return (
    <motion.div
      className="w-full h-full flex justify-center items-center relative"
      initial={{
        y: 30,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
    >
      <div className="w-full px-[16px] absolute top-[44px] left-0 z-[10] flex flex-col gap-[16px]">
        <input
          ref={inputRef}
          className="w-full h-[45px] pl-[20px]  rounded-[70px]"
          placeholder="참여하고싶은 축제를 키워드로 검색해보세요."
        />
        <div className="w-auto flex gap-[12px]">
          {keywords.map(keyword => (
            <Keyword
              key={keyword.id}
              text={keyword.name}
              onClick={() => setCurrentKeyword(keyword.id)}
              isActive={currentKeyword === keyword.id}
            />
          ))}
        </div>
      </div>
      <Map
        center={state.center}
        style={{ width: "100%", height: "100vh" }}
        level={6}
      >
        <MarkerClusterer averageCenter={true} minLevel={10}>
          {data?.map((item: any, index: number) => {
            console.log(item);
            return (
              <MapMarker
                key={`${item.title}-${item.latitude}-${item.id}-${index}`}
                position={{ lat: item.longitude, lng: item.latitude }} // 마커를 표시할 위치
                title={item.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
                image={{
                  src: "/images/markerImage.png",
                  size: { width: 48, height: 66 },
                }}
                onClick={() => setSelectedEvent(item)}
              />
            );
          })}
        </MarkerClusterer>

        {/* {!state.isLoading && <MapMarker position={state.center}></MapMarker>} */}
      </Map>

      <div className="absolute w-11/12 max-w-[480px] bottom-[120px] left-1/2 translate-x-[-50%] z-[20] flex flex-col gap-[20px]">
        {!!data && <Map_ongoing count={data?.length} />}

        {selectedEvent && (
          <Map_homeOverlay
            param={selectedEvent}
            onClick={() => {
              setSelectedEvent(null);
              setSelectedDetail(selectedEvent);
            }}
          />
        )}
      </div>

      <Map_modal
        param={selectedDetail}
        onClose={() => setSelectedDetail(null)}
      />

      <div className="w-full fixed bottom-0 left-0 mb-[30px] z-[30]">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
