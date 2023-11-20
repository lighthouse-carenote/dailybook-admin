import { AxiosRequestHeaders } from 'axios';
import { useEffect, useState } from 'react';
import {BusinessErrorResponse, HTTPResponse} from '~/@types/response'
import { apiInstance } from '~/store/util/request/Api';

interface IUseAxiosParam<D> {
  url: string;
  data?: D;
  headers?: AxiosRequestHeaders;
  method: 'post' | 'get' | 'patch' | 'delete';
}

interface IUseAxiosState<T> {
  loading: boolean;
  response: null | HTTPResponse<T>;
  error: null | BusinessErrorResponse;
}

function useAxios<D, T = undefined>({ url, data, headers, method }: IUseAxiosParam<D>) {
  const [state, setState] = useState<IUseAxiosState<T>>({ loading: false, response: null, error: null });

  useEffect(() => {
    const axiosCall = async () => {
      setState({ ...state, loading: true, response: null, error: null });
      try {
        const axiosResponse = await apiInstance[method]<T, D>({ url, data, headers });
        setState({ ...state, loading: false, response: axiosResponse, error: null });
      } catch (err: any) {
        const errResponse: BusinessErrorResponse = { data: {}, status: 500, message: '' };
        if (err.response) {
          errResponse.data = err.response.data;
          errResponse.status = err.response.status;
        } else {
          errResponse.message = '네트워크 상태를 확인해주세요.';
        }
        if (errResponse.status === 401) {
          // history.push(PATH.LOGIN);
        } else {
          setState({ ...state, loading: false, response: null, error: err });
        }
      }
    };

    axiosCall();
  }, [url, method]);

  return state;
}

export default useAxios;
