export interface IUser {
  full_name: string;
  phone: string;
}

export interface IUserResponse {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: IUser;
}
