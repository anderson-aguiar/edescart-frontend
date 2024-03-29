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
