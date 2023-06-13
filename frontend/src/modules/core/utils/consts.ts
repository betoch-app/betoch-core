import { ILanguage } from "../slices/models/ILanguage.model";

export const NO_AUTHENTICATION = "NO_AUTHENTICATION";
export const KIRAY_ADMIN_ROLE = "KIRAY_ADMIN_DASHBOARD";
export const OWNERS_ADMIN_ROLE = "OWNERS_ADMIN_DASHBOARD";
export const SELLERS_ROLE = "SELLERS_DASHBOARD";
import building from "../../../media/images/building.jpg";

export const SELECTED_LANGUAGE: string = "SELECTED_LANGUAGE";

export const CURRENT_SELECETED_LANGUAGE = {
  name: "English",
  languageCode: "EN",
  code: "en",
  countryCode: "en-US",
};

export const isCurrentSelectedLanguageEmpty = (obj: any) => {
  return JSON.stringify(obj) === "{}";
};

export const addSelectedLanguageToLocalStorage = (
  selectedLanguage: ILanguage
) => {
  localStorage.setItem(SELECTED_LANGUAGE, JSON.stringify(selectedLanguage));
};

export const getCurrentSelectedLanguage = () => {
  const selectedLanguageFromLocalStorage = JSON.parse(
    localStorage.getItem(SELECTED_LANGUAGE) || "{}"
  );
  return isCurrentSelectedLanguageEmpty(selectedLanguageFromLocalStorage)
    ? CURRENT_SELECETED_LANGUAGE
    : selectedLanguageFromLocalStorage;
};

export const imagesData = [
  {
    description:
      "Control your building rent payment. find out who payed and not payed",
    image: building,
  },
  {
    description:
      "Control your building rent payment. find out who payed and not payed",
    image: building,
  },
  {
    description:
      "Control your building rent payment. find out who payed and not payed",
    image: building,
  },
  {
    description:
      "Control your building rent payment. find out who payed and not payed",
    image: building,
  },
];
