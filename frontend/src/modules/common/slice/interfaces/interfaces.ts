import { ICompany } from "../../model/ICompany";

export interface IUser {
  full_name: string;
  phone: string;
  company: ICompany[];
}

export interface IUserResponse {
  loading: boolean;
  success: boolean;
  error: boolean;
  data: IUser;
}
