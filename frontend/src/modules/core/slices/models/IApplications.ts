export interface IApplications {
  name: string;
  id: number;
}

export interface IAllApplications {
  applications: IApplications[];
  currentApplication: IApplications;
}
