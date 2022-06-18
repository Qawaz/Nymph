import axios, { AxiosError } from "axios";

const AxiosErrorHandler = (error: Error | AxiosError): string =>
  axios.isAxiosError(error)
    ? error.response
      ? // Request made and server responded
        error.response.data
      : // Request made but server error | Native js error
        error.message
    : error.message;

export default AxiosErrorHandler;
