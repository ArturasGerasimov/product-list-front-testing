import axios from "axios"

const API_BASE_URL = "http://127.0.0.1:8000/api/"

const instance = axios.create({
  baseURL: API_BASE_URL,
})

instance.interceptors.request.use(function (axiosConfig) {
  return axiosConfig
}, null)

instance.interceptors.response.use(
  response => response,
  error => {
    const { response } = error
    if (!response) {

      return Promise.reject(new Error("Network error or no response"))
    }

    if (response.data && response.data.message) {
      error.message = response.data.message
    }

    return Promise.reject(error)
  }
)

export default instance
