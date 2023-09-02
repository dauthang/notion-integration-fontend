import {
  AxiosResponseC,
  requestWithoutJwt,
} from "../axios-config/axios-config";
import { IBaseErrorResponse } from "../axios-config/interface";
import { ProductRes } from "./product.interface";

export const getProduct = (dataParams?: any) => {
  return requestWithoutJwt
    .get(`product`)
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};

export const postProduct = (data: ProductRes) => {
  return requestWithoutJwt
    .post(`product/create`, data)
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};

export const deleteProduct = (id: string) => {
  return requestWithoutJwt
    .delete(`product/${id}`)
    .then((res: AxiosResponseC) => {
      return res;
    })
    .catch((error: any) => Promise.reject(error as IBaseErrorResponse));
};
