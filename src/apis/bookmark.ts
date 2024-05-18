import api from "./common";

export const bookmarkAPIs = {
  getBookmarks: async () => api.getWithAuth("bookmark"),

  postBookmarks: async (id: number) =>
    api.postWithAuth("bookmark", { eventId: id }),

  deleteBookmark: async (id: number) => api.delete(`bookmark/${id}`),
};
