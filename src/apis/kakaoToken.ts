import api from "./common";

export const kakaoToken = {
  postKakaoCode: async (param: { code: string }) =>
    api.post("auth/kakao", param),
};
