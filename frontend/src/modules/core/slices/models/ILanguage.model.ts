export interface ILanguage {
  name: string;
  code: string;
  countryCode: string;
  languageCode: any;
}

export interface IAllLanguages {
  supportedLanguages: ILanguage[];
  currentSelectedLanguage: ILanguage;
}
