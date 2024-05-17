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
          authorization: `Bearer ${accessToken}`,
          refreshToken,
        },
      });
    } else {
      return await axios.get(settings.baseUrl + url, { params });
    }
  },

  getWithAuthParams: async (url: string, params?: any) => {
    const accessToken = params.accessToken;
    const refreshToken = params.refreshToken;

    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);

    if (accessToken && refreshToken) {
      return await axios.get(settings.baseUrl + url, {
        headers: {
          authorization: `Bearer ${accessToken}`,
          refreshToken,
        },
      });
    } else {
      return await axios.get(settings.baseUrl + url);
    }
  },

  post: async (url: string, data: any) =>
    await axios.post(settings.baseUrl + url, data),

  postWithAuth: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    // Check if data is an instance of FormData
    const headers: any = {
      authorization: `Bearer ${accessToken}`,
      refreshToken,
    };

    // If data is FormData, let the browser set the correct Content-Type
    if (!(data instanceof FormData)) {
      headers["Content-Type"] = "application/json"; // or any other default Content-Type
    }

    return await axios.post(settings.baseUrl + url, data, {
      headers: headers,
    });
  },

  put: async (url: string, data?: any) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();

    return await axios.put(settings.baseUrl + url, data, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        refreshToken,
      },
    });
  },

  delete: async (url: string) => {
    const accessToken = tokenService.getAccessToken();
    const refreshToken = tokenService.getRefreshToken();
    return await axios.delete(settings.baseUrl + url, {
      headers: {
        authorization: `Bearer ${accessToken}`,
        refreshToken,
      },
    });
  },
};
