import axios, { type AxiosInstance } from "axios";

const httpClient: AxiosInstance = axios.create({
    baseURL: "https://yc2210-pythonflaskapp.azurewebsites.net",
    headers: {
        "Content-Type": "application/json"
    }
});
export default httpClient;