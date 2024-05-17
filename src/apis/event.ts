import api from "./common";

export const eventApis = {
  postEvent: async (param: {
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
  }) => api.postWithAuth("event", param),
};
