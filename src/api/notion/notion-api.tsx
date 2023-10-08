import {
  AxiosResponseC,
  requestWithoutJwt,
} from "../axios-config/axios-config";
import { IBaseErrorResponse } from "../axios-config/interface";
import { NotionRequest } from "./notion.interface";

export const getNotion = (params?: NotionRequest) => {
  return requestWithoutJwt
    .get(`notion`, { params })
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};
