import api from "./common";

export const memberApis = {
  getMemberMe: async () =>
    api.getWithAuth("member/me"),
};
