import { AxiosObservable } from "axios-observable/dist/axios-observable.interface";
import api from "./api-config";

export const get = <T>(url: string): AxiosObservable<T> => {
  return api.get<T>(url);
};

export const post = <T>(url: string, item: any): AxiosObservable<T> => {
  return api.post<T>(url, item);
};

export const deleteById = (url: string, id: string): AxiosObservable<void> => {
  return api.delete<void>(`${url}/${id}`);
};

export const update = (url: string, item: any): AxiosObservable<void> => {
  return api.put<void>(url, item);
};
