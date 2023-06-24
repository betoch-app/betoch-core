export interface IOrganization {
  id: number;
  phone_number: string;
  name: string;
}

export interface ICreateConfirmationResponse {
  success: boolean;
  message: string;
}

export interface IOrganizationResponse {
  organization: IOrganization;
  status: string;
  is_loading: boolean;
  error: boolean;
}
