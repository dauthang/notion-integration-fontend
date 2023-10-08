import {
  AxiosResponseC,
  requestWithoutJwt,
} from "../axios-config/axios-config";
import { IBaseErrorResponse } from "../axios-config/interface";
import { TaskRequest } from "./task.interface";

export const getTask = (dataParams?: TaskRequest) => {
  return requestWithoutJwt
    .get(`task`)
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};
