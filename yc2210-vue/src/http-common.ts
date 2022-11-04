import axios, { type AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: import.meta.env.VUE_APP_JAVA_API,
    headers: {
        "Content-Type": "application/json"
    }
});
export default httpClient;