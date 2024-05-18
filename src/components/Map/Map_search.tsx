import Icon_x from "@/icons/Icon_x";
import { FC, useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
interface Props {
  onConfirm: (lng?: number, lat?: number) => void;
  isOpen: boolean;
  onClose: () => void;
}

const Map_search: FC<Props> = ({ onClose, onConfirm, isOpen }) => {
  const center = {
    lat: 37.566826,
    lng: 126.9786567,
  };
  const [map, setMap] = useState<any>();
  const [keyword, setKeyword] = useState("");
  const [position, setPosition] = useState<{
    lat: number;
    lng: number;
  }>();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        const bounds = new kakao.maps.LatLngBounds();

        setPosition({
          lat: Number(data[0].y),
          lng: Number(data[0].x),
        });

        //   // @ts-ignore
        bounds.extend(
          new kakao.maps.LatLng(Number(data[0].y), Number(data[0].x))
        );

        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-[999]"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[480px] h-[650px] bg-white mx-[16px] rounded-[16px] flex flex-col p-[32px] relative gap-[8px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-0 right-0 z-[100]"
          type="button"
          onClick={onClose}
        >
          <Icon_x />
        </button>
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="search"
          className="rounded-full border-[1px] border-darkGray px-[16px] py-[12px]"
        />
        <Map // 로드뷰를 표시할 Container
          center={{
            lat: 37.566826,
            lng: 126.9786567,
          }}
          style={{
            borderRadius: "16px",
            width: "100%",
            height: "300px",
          }}
          level={3}
          onCreate={setMap}
          onClick={(_, mouseEvent) => {
            const latlng = mouseEvent.latLng;
            setPosition({
              lat: latlng.getLat(),
              lng: latlng.getLng(),
            });
          }}
        >
          <MapMarker position={position ?? center} />
        </Map>
        <button
          className="px-[16px] py-[8px] bg-primary rounded-full"
          type="button"
          onClick={() => onConfirm(position?.lat, position?.lng)}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Map_search;
