import {
  AxiosResponseC,
  requestWithoutJwt,
} from "../axios-config/axios-config";
import { IBaseErrorResponse } from "../axios-config/interface";

export const getUser = (dataParams?: any) => {
  return requestWithoutJwt
    .get(`user`)
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};
