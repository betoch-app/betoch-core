import { IJwt } from "./JWT";
export interface IHttpResponse {
  success: boolean;
  message: string;
  data: IJwt;
  error: boolean;
}
