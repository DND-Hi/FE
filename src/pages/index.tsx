import Keyword from "@/components/Map/Map_keyword";
import { TKeyword } from "@/store/keywordStore";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";

import { eventApis } from "@/apis/event";
import Footer from "@/components/Footer";
import Map_modal from "@/components/Map/Map_modal";
import Map_ongoing from "@/components/Map/Map_ongoing";
import useKeywordStore from "@/store/keywordStore";
import { motion } from "framer-motion";

const Home = () => {
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  const { currentKeyword, setCurrentKeyword } = useKeywordStore();

  const [data, setData] = useState<any>();

  const [state, setState] = useState<{
    center: { lat: number; lng: number };
    errMsg: string | null;
    isLoading: boolean;
  }>({
    center: {
      lat: 33.450701,
      lng: 126.570667,
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

  return (
    <motion.div className="w-full h-full flex justify-center items-center relative">
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
        {data?.map((item: any, index: number) => (
          <MapMarker
            key={`${item.title}-${item.latitude}-${item.id}-${index}`}
            position={{ lat: item.latitude, lng: item.longitude }} // 마커를 표시할 위치
            image={{
              src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
              size: {
                width: 24,
                height: 35,
              }, // 마커이미지의 크기입니다
            }}
            title={item.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
          />
        ))}
        {/* <MarkerClusterer averageCenter={true} minLevel={10}>
          <MapMarker
            position={state.center}
            clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
            onClick={() => {}}
            image={{
              src: "https://cdn-icons-png.flaticon.com/512/1181/1181732.png",
              size: { width: 24, height: 24 },
            }}
          />
        </MarkerClusterer> */}

        <Map_modal />

        {!state.isLoading && <MapMarker position={state.center}></MapMarker>}
      </Map>

      <div className="absolute w-11/12 max-w-[480px] bottom-[120px] left-1/2 translate-x-[-50%] z-[20] flex flex-col gap-[20px]">
        <Map_ongoing count={10} />

        {/* <Map_detailOverlay /> */}
      </div>

      <div className="w-full absolute bottom-0 left-0 mb-[30px] z-[30]">
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
