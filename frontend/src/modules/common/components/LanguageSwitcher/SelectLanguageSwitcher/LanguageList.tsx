import { useMemo } from "react";
import { useAppSelector } from "../../../../core/hooks/redux-hooks";
import { ILanguage } from "../../../../core/slices/models/ILanguage.model";
type Props = {
  activeLanguage: ILanguage;
  handleSelectedLanguage: (selectedLanguageCode: ILanguage) => void;
};
const LanguageList = ({ activeLanguage, handleSelectedLanguage }: Props) => {
  const supportedLanguages = useAppSelector(
    (state) => state.languageSlice.supportedLanguages
  );

  const filteredLanguagesLists = useMemo(() => {
    return supportedLanguages.filter(
      ({ code }) => code !== activeLanguage.code
    );
  }, [activeLanguage]);
  return (
    <div className="language-lists-wrapper">
      {filteredLanguagesLists?.length > 0 &&
        filteredLanguagesLists?.map((language: ILanguage) => (
          <div
            key={language.code}
            aria-hidden
            className="languages"
            onClick={() => handleSelectedLanguage(language)}
          >
            <div className="language-wrap">
              <span className="language-text">
                {language.code.toUpperCase()}
              </span>
            </div>
          </div>
        ))}
    </div>
  );
};

export default LanguageList;
