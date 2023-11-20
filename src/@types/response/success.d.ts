export interface HTTPResponse<T> {
  status: number;
  data: T;
}

export interface IResponseAuthProfileGet {
  id: number;
}

export interface IResponseAuthProfileUpdate {
  id: number;
}
