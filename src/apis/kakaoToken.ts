import api from './common';

export const kakaoToken = {
  getKaKaoToken: async () => api.post('auth/kakao', {}),
};
