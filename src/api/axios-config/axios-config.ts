/* BASE REQUEST INTERCEPTORS CONFIG
   ========================================================================== */

import axios, { AxiosError, AxiosResponse } from "axios";

import { getFromSessionStorage } from "../../utils/functrion";
import { IBaseErrorResponse } from "./interface";

/**
 * Authenticated Request Interceptors config
 */
export const requestWithJwt = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
  },
});

requestWithJwt.interceptors.request.use(async (config: any) => {
  const refreshToken = getFromSessionStorage<string | null>("refresh-token");

  return {
    ...config,
    headers: {
      Authorization: `Bearer ${refreshToken || ""}`,
      ...config.headers,
    },
  };
});

requestWithJwt.interceptors.response.use(
  (response) => {
    return response?.data;
  },
  (error: AxiosError<IBaseErrorResponse>) => {
    if (error?.response?.status === 401) {
      sessionStorage.clear();
      // window.location.href = ROUTES.login;
    }

    if (!error.response || !error.response?.data) {
      return Promise.reject({
        code: "Unknown",
        status: 500,
        message: "Server error",
      });
    }
    return Promise.reject({
      ...error.response?.data,
    });
  }
);

/**
 * Non-authenticated Request Interceptors config
 */
export interface AxiosResponseC extends AxiosResponse {
  message?: string;
  statusCode?: number;
}

export const requestWithoutJwt = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: 10000,
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS",
  },
});

requestWithoutJwt.interceptors.response.use(
  (response: AxiosResponseC) => {
    return response?.data;
  },
  (error: AxiosError<IBaseErrorResponse>) => {
    return Promise.reject({
      ...error.response?.data,
    });
  }
);
