import { AxiosRequestHeaders } from 'axios';

export interface RequestParam<T> {
  url: string;
  data?: T;
  headers?: AxiosRequestHeaders;
}
