import axios, { AxiosRequestConfig } from "axios";
import { BASE_URL } from "../utils/system";

export function findAllRequest(){
    const config: AxiosRequestConfig = {
        method: "GET",
        baseURL: BASE_URL,
        url: "/materials",

    }
    return axios(config);
}