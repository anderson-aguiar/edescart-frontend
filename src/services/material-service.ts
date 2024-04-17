import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";
import { MaterialDTO } from "../models/material";

export function findAllRequest() {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: "/materials",
  };
  return requestBackend(config);
}
export function deleteById(id: number) {
  const config: AxiosRequestConfig = {
    method: "DELETE",
    url: `/materials/${id}`,
    withCredentials: true,
  };
  return requestBackend(config);
}
export function findById(id: number) {
  const config: AxiosRequestConfig = {
    method: "GET",
    url: `/materials/${id}`,
  };
  return requestBackend(config);
}

export function updateRequest(obj: MaterialDTO){
  const config: AxiosRequestConfig = {
    method: "PUT",
    url: `/materials/${obj.id}`,
    withCredentials: true,
    data: obj
  }
  return requestBackend(config)
}
export function insertRequest(obj: MaterialDTO){
  const config: AxiosRequestConfig = {
    method: "POST",
    url: `/materials`,
    withCredentials: true,
    data: obj
  }
  return requestBackend(config)
}