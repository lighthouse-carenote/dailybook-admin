import { IRequestAuthProfileUpdate } from '~/@types/request';
import { BusinessErrorResponse, HTTPResponse, IResponseAuthProfileGet, IResponseAuthProfileUpdate } from '~/@types/response';
import API_URL from '~/libs/api/url';
import Api from './Api';

export default class AuthApi extends Api {
  constructor() {
    super();
  }

  public getProfile(): Promise<HTTPResponse<IResponseAuthProfileGet> | BusinessErrorResponse> {
    return this.get<IResponseAuthProfileGet>({
      url: API_URL.AUTH_PROFILE,
    });
  }

  public postProfileUpdate(
    data: IRequestAuthProfileUpdate,
  ): Promise<HTTPResponse<IResponseAuthProfileUpdate> | BusinessErrorResponse> {
    const formData = new FormData();
    formData.append('mode', data.mode);
    if (data.mode === 'update' && data.field !== undefined) {
      formData.append('field', data.field);
      if (data.field === 'location_codes' && data.codes) {
        data.codes.forEach((v) => {
          formData.append('codes[]', v);
        });
      } else if (data.field === 'service_type_codes' && data.codes) {
        data.codes.forEach((v) => {
          formData.append('codes[]', v);
        });
      } else if (data.field === 'title_type_code' && data.code) {
        formData.append('code', data.code);
      } else if (data.field === 'name' && data.value) {
        formData.append('value', data.value);
      } else if (data.field === 'password' && data.current && data.new) {
        formData.append('current', data.current);
        formData.append('new', data.new);
      } else if (data.field === 'phone' && data.phone) {
        formData.append('phone', data.phone);
        if (data.auth) {
          formData.append('auth', data.auth);
        }
      } else if (data.field === 'birth' && data.value) {
        formData.append('value', data.value);
      } else if (data.field === 'is_event_receive' && data.value) {
        formData.append('value', data.value);
      }
    } else {
      if (data.password) {
        formData.append('password', data.password);
      }
    }
    return this.post<IResponseAuthProfileUpdate, FormData>({
      url: API_URL.AUTH_PROFILE,
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
}
