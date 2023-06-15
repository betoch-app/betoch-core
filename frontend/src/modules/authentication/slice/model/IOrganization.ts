export interface IOrganization {
  id: number;
  phone_number: string;
  name: string;
}

export interface IOrganizationResponse {
  organization: IOrganization;
  status: string;
  error: string;
}

export interface ICreateConfirmationCode {
  receiver_phone: string;
  organization_id: string;
}
