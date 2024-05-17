import React, { useState } from "react";
import { Map, MapMarker, MarkerClusterer } from "react-kakao-maps-sdk";

const clusterPositionsData = {
  positions: [
    { lat: 37.5665, lng: 126.978 }, // Seoul
    { lat: 35.1796, lng: 129.0756 }, // Busan
    { lat: 35.1595, lng: 126.8526 }, // Gwangju
    { lat: 37.4563, lng: 126.7052 }, // Incheon
    { lat: 35.8722, lng: 128.6025 }, // Daegu
    { lat: 36.351, lng: 127.385 }, // Daejeon
    { lat: 33.4996, lng: 126.5312 }, // Jeju
    { lat: 35.5407, lng: 129.3114 }, // Ulsan
    { lat: 37.2747, lng: 127.0096 }, // Suwon
    { lat: 37.5673, lng: 127.0052 }, // Seongnam
  ],
};

const Kakao = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkerClick = () => {
    setIsOpen(true);
  };

  const markerPosition = {
    lat: 33.450701,
    lng: 126.570667,
  };
  return (
    <div className="w-full h-full flex justify-center items-center relative">
      <Map
        center={{ lat: 36.2683, lng: 127.6358 }}
        style={{ width: "50%", height: "500px" }}
        level={14}
      >
        <MarkerClusterer averageCenter={true} minLevel={10}>
          {clusterPositionsData.positions.map((pos) => (
            <MapMarker
              key={`${pos.lat}-${pos.lng}`}
              position={pos}
              clickable={true} // 마커를 클릭했을 때 지도의 클릭 이벤트가 발생하지 않도록 설정합니다
              onClick={handleMarkerClick}
              image={{
                src: "https://cdn-icons-png.flaticon.com/512/1181/1181732.png",
                size: { width: 24, height: 24 },
              }}
            ></MapMarker>
          ))}
        </MarkerClusterer>
      </Map>
    </div>
  );
};

export default Kakao;
