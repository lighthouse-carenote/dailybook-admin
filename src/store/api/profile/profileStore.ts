import { IRequestAuthProfileUpdate } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse } from '~/@types/response';
import { makeApiReducer } from '../../util';

export const PROFILE_GET = 'PROFILE_GET' as const;
export const PROFILE_GET_REQUEST = 'PROFILE_GET_REQUEST' as const;
export const PROFILE_GET_SUCCESS = 'PROFILE_GET_SUCCESS' as const;
export const PROFILE_GET_FAILURE = 'PROFILE_GET_FAILURE' as const;
export const PROFILE_GET_CLEAR = 'PROFILE_GET_CLEAR' as const;

export const profileGetRequest = (payload: IRequestAuthProfileUpdate) => ({
  type: PROFILE_GET_REQUEST,
  payload,
});

export const profileGetSuccess = (payload: HTTPResponse<undefined>) => ({
  type: PROFILE_GET_SUCCESS,
  payload,
});

export const profileGetFailure = (payload: BusinessErrorResponse) => ({
  type: PROFILE_GET_FAILURE,
  payload,
});

export const profileGetClear = () => ({
  type: PROFILE_GET_CLEAR,
});

const profileGetReducer = makeApiReducer<undefined, undefined>(PROFILE_GET);

export default profileGetReducer;
