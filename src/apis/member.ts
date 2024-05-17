import api from "./common";

export const memberApis = {
  getMemberMe: async (accessToken: string, refreshToken: string) =>
    api.getWithAuthParams("member/me", { accessToken, refreshToken }),
};
