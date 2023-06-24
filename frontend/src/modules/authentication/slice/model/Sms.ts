export interface ICreateSMSResponse {
  success: boolean;
  message: string;
  error: boolean;
}

export interface ICreateConfirmationCode {
  receiver_phone: string;
  organization: number;
}
