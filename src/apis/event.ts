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

  getEvents: async (param: {
    longitude: number;
    latitude: number;
    distance: number;
  }) => api.get("event", param),

  getEventById: async (
    id: number,
    param: {
      longitude: number;
      latitude: number;
      distance: number;
    }
  ) => api.get(`event/${id}`, param),

  getMyEvent: async () => api.getWithAuth(`event/my`),
};
