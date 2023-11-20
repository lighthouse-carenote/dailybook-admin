export interface IRequestAuthProfileUpdate {
  mode: string;
  field?: string;
  codes?: string[];
  code?: string;
  value?: string;
  current?: string;
  new?: string;
  phone?: string;
  auth?: string;
  password?: string;
}
