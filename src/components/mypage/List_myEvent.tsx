import { eventApis } from "@/apis/event";
import { useCallback, useEffect, useState } from "react";
import Map_detailOverlay from "../Map/Map_detailOverlay";
import Map_modal from "../Map/Map_modal";

const List_myEvent = () => {
  const [myEvent, setMyEvent] = useState<any>();
  const [selectedEvent, setSelectedEvent] = useState<any>(null);

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
        <div key={event.id} onClick={() => setSelectedEvent(event)}>
          <Map_detailOverlay
            title={event.title}
            description={event.description}
            startAt={event.startAt}
            finishAt={event.finishAt}
            imageURL={event.imageUrl}
          />
        </div>
      ))}
      <Map_modal param={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </div>
  );
};

export default List_myEvent;
