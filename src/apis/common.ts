import { settings } from "@/constants/settings";
import { tokenService } from "@/libs/tokenService";
import axios from "axios";
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: async (url: string, params?: any) =>
    await axios.get(settings.baseUrl + url, { params }),

  getWithAuth: async (url: string, params?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    if (accessToken && refreshToken) {
      return await axios.get(settings.baseUrl + url, {
        params,
        headers: {
          authorization: accessToken,
          refreshToken,
        },
      });
    } else {
      return await axios.get(settings.baseUrl + url, { params });
    }
  },

  post: async (url: string, data: any) =>
    await axios.post(settings.baseUrl + url, data),

  postWithAuth: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    return await axios.post(settings.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },

  put: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    return await axios.put(settings.baseUrl + url, data, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },

  delete: async (url: string) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();
    return await axios.delete(settings.baseUrl + url, {
      headers: {
        authorization: accessToken,
        refreshToken,
      },
    });
  },
};
