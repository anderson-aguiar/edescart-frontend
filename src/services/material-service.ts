import { AxiosRequestConfig } from "axios";
import { requestBackend } from "../utils/requests";

export function findAllRequest(){
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/materials",

    }
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