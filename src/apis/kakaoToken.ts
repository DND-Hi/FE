import api from "./common";

export const kakaoTokenApis = {
  postKakaoCode: async (param: { code: string }) =>
    api.post("auth/kakao", param),
};
