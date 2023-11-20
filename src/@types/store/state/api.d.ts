import { HTTPResponse, BusinessErrorResponse } from '~/@types/response';

export interface ApiState<T> {
  loading: boolean;
  response: null | HTTPResponse<T>;
  error: null | BusinessErrorResponse;
}
