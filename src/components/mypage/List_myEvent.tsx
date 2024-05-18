import { eventApis } from "@/apis/event";
import { useCallback, useEffect, useState } from "react";
import Map_detailOverlay from "../Map/Map_detailOverlay";

const events = [
  {
    id: 1,
    imageURL: "/images/잠수교.png",
    title: "차 없는 잠수교 뚜벅뚜벅 축제",
    description:
      "2024 차 없는 잠수교 뚜벅뚜벅 축제의 오감으로 만나는 힐링 놀이터로 놀러와 힐링을 동시에 즐겨보세요.",
    startAt: new Date("2022-01-01T00:00:00"),
    finishAt: new Date("2022-01-01T01:00:00"),
  },
  {
    id: 2,
    imageURL: "/images/잠수교.png",
    title: "차 없는 잠수교 뚜벅뚜벅 축제",
    description:
      "2024 차 없는 잠수교 뚜벅뚜벅 축제의 오감으로 만나는 힐링 놀이터로 놀러와 힐링을 동시에 즐겨보세요.",
    startAt: new Date("2022-01-02T00:00:00"),
    finishAt: new Date("2022-01-02T01:00:00"),
  },
  // Add more events as needed
];

const List_myEvent = () => {
  const [myEvent, setMyEvent] = useState<any>();

  const getMyEvent = useCallback(async () => {
    try {
      const { data } = await eventApis.getMyEvent();
      setMyEvent(data.data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getMyEvent();
  }, [getMyEvent]);

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {myEvent?.map((event: any) => (
        <Map_detailOverlay
          key={event.id}
          title={event.title}
          description={event.description}
          startAt={event.startAt}
          finishAt={event.finishAt}
          imageURL={event.imageURL}
        />
      ))}
    </div>
  );
};

export default List_myEvent;
