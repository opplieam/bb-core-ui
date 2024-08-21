import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3030/v1",
  withCredentials: true
});

class ApiClient<T, R> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getToken = (data: R) => {
    return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
  };
}

export default ApiClient;
