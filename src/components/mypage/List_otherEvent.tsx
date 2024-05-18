import { bookmarkAPIs } from "@/apis/bookmark";
import { useCallback, useEffect, useState } from "react";
import Map_detailOverlay from "../Map/Map_detailOverlay";

const List_otherEvent = () => {
  const [data, setData] = useState<any>();

  const getBookmarks = useCallback(async () => {
    const { data } = await bookmarkAPIs.getBookmarks();
    setData(data.data);
  }, []);

  useEffect(() => {
    getBookmarks();
  }, [getBookmarks]);

  const deleteBookmark = async (bookmarkId: number) => {
    await bookmarkAPIs.deleteBookmark(bookmarkId);
    const { data } = await bookmarkAPIs.getBookmarks();
    setData(data.data);
  };

  return (
    <div className="flex flex-col gap-[16px] w-full">
      {data?.map((event: any, index: number) => (
        <div
          key={`${event.bookmarkId}-${index}`}
          className="flex w-full overflow-auto gap-[16px] scrollbar-hide"
        >
          <Map_detailOverlay
            title={event.title}
            description={event.description}
            startAt={event.startAt}
            finishAt={event.finishAt}
            imageURL={event.imageURL}
          />
          <button
            className="bg-[#FF5757] rounded-full text-white flex items-center justify-center w-[50px] h-[50px] flex-shrink-0 self-center"
            onClick={() => deleteBookmark(event.bookmarkId)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default List_otherEvent;
