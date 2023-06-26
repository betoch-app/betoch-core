export interface ISignUpResponse {
  success: boolean;
  message: string;
}

export interface ILogin {
  phone: string;
  password: string;
}
