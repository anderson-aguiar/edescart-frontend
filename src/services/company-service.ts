import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findDistance(name: string, postalCode: string) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/companies/distance",
    params: {
      name,
      postalCode,
    },
  };
  return requestBackend(config);
}

export function findAll(page: number, size=12, sort="name"){
  const config: AxiosRequestConfig = {
    method: "GET",
    url: '/companies',
    params:{
      page,
      size,
      sort
    }
  }
  return requestBackend(config);
}
