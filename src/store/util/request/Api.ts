import axios, { AxiosInstance } from 'axios';
import { HTTPResponse, BusinessErrorResponse } from '~/@types/response';
import { RequestParam } from '~/@types/request';
import { toQueryString } from '~/libs/util';

export const API_SERVER = process.env.API_URL || '';

const getHttpResponse = async <T>({ fn }): Promise<HTTPResponse<T>> => {
  try {
    const result = await fn();
    const { status, data } = result;
    const successResponse: HTTPResponse<T> = { status, data };
    return successResponse;
  } catch (err: any) {
    const errResponse: BusinessErrorResponse = { data: {}, status: 500, message: '' };
    if (err.response) {
      errResponse.data = err.response.data;
      errResponse.status = err.response.status;
    } else {
      errResponse.message = '네트워크 상태를 확인해주세요.';
    }
    throw errResponse;
  }
};

export default class Api {
  private axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_SERVER,
      timeout: 0,
      withCredentials: true,
    });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public get<T, D = undefined>({ url, data, headers }: RequestParam<D>): Promise<HTTPResponse<T>> {
    if (data !== undefined && toQueryString(data) !== '') {
      url += '?' + toQueryString(data);
    }
    const fn = () => this.axiosInstance.get(url, { headers });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public post<T, D = undefined>({ url, data, headers }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.post(url, data, { headers });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public patch<T, D = undefined>({ url, data, headers }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.patch(url, data, { headers });
    return getHttpResponse<T>({ fn });
  }

  /**
   * @method
   * @template T Response Type
   * @template D Request Type. default: undefined
   * @param {RequestParam<D>} param - { url: string, data: D | undefined }: RequestParam<D>
   * @returns {Promise<HTTPResponse<T>>}
   */
  public delete<T, D = undefined>({ url, data, headers }: RequestParam<D>): Promise<HTTPResponse<T>> {
    const fn = () => this.axiosInstance.delete(url, { data, headers });
    return getHttpResponse<T>({ fn });
  }
}

export const apiInstance = new Api();
