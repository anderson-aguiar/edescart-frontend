import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findDistance(name: string, postalCode: string){
    const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/companies/distance",
        params: {
            name,
            postalCode
        }
    }
    return axios(config);
}