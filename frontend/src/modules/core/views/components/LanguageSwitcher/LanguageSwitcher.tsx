import enLanguageIcon from "../../../../../media/images/language_switcher_en.svg";
import etLanguageIcon from "../../../../../media/images/language_switcher_et.svg";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux-hooks";
import { changeLanguage } from "../../../slices/languagesSlice";
const LanguageSwitcher = () => {
  const currentSelectedLanguage = useAppSelector(
    (state) => state.languageSlice.currentSelectedLanguage
  );
  const supportedLanguages = useAppSelector(
    (state) => state.languageSlice.supportedLanguages
  );
  const dispatch = useAppDispatch();
  return (
    <>
      {supportedLanguages.length > 1 && (
        <div className="language-switcher">
          {supportedLanguages.map((language) => (
            <button
              key={language.code}
              type="button"
              className={`language-btn ${
                currentSelectedLanguage.code === language.code
                  ? ""
                  : "selected-language"
              }`}
              style={{
                backgroundColor: `${
                  currentSelectedLanguage.code === language.code
                    ? "#E5E5E5"
                    : "#FFFFFF"
                }`,
              }}
              onClick={() => dispatch(changeLanguage(language))}
            >
              <img
                alt={`Language ${language.code} icon`}
                loading="lazy"
                src={language?.code === "en" ? enLanguageIcon : etLanguageIcon}
              />
              <span className="language-btn-label">
                {language.languageCode.toUpperCase()}
              </span>
            </button>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;
