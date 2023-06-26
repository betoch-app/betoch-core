export interface IUser {
  full_name: string;
  phone: string;
}

export interface IUserResponse {
  loading: boolean;
  status: boolean;
  error: boolean;
  data: IUser;
}
