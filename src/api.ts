/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-debugger */
import Axios, { AxiosRequestConfig } from 'axios';

console.log(import.meta.env.VITE_DEV_API)

const controller = new AbortController();
type SCGRequest = {
  baseUrl: string;
  headers: {
    Accept: string;
    'Content-Type': string;
  };
  signal: AbortSignal;
  withCredentials: boolean;
};
const conf: AxiosRequestConfig<SCGRequest> = {
  baseURL: `${import.meta.env.VITE_DEV_API}`,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  signal: controller.signal,
  withCredentials: true
};
const api = Axios.create(conf);



export { api };
