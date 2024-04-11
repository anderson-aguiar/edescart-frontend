import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { CompanyDTO } from "../models/company";

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

export function findAll(page: number, size = 12, sort = "name") {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/companies",
    params: {
      page,
      size,
      sort,
    },
  };
  return requestBackend(config);
}
export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/companies/${id}`,
    withCredentials: true,
  };
  return requestBackend(config);
}
export function findById(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/companies/${id}`,
  };
  return requestBackend(config);
}
export function updateRequest(obj: CompanyDTO){
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/companies/${obj.id}`,
    withCredentials: true,
    data: obj
  }
  return requestBackend(config)
}
export function insertRequest(obj: CompanyDTO){
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/companies`,
    withCredentials: true,
    data: obj
  }
  return requestBackend(config)
}