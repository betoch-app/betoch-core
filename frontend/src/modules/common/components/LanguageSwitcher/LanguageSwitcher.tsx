import { useRef, useState } from "react";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../core/hooks/redux-hooks";
import IconLanguageSwitcher from "./IconLanguageSwitcher/IconLanguageSwitcher";
import SelectLanguageSwitcher from "./SelectLanguageSwitcher/SelectLanguageSwitcher";
import useOutsideClick from "../../../core/hooks/useOutsideClick";
import { changeLanguage } from "../../../core/slices/languagesSlice";
import { ILanguage } from "../../../core/slices/models/ILanguage.model";
import LanguageList from "./SelectLanguageSwitcher/LanguageList";
export type ILanguageSwitcherType = "select" | "icon";
type Props = {
  type: ILanguageSwitcherType;
};
const LanguageSwitcher = ({ type }: Props) => {
  const activeLanguage = useAppSelector(
    (state) => state.languageSlice.currentSelectedLanguage
  );
  const supportedLanguages = useAppSelector(
    (state) => state.languageSlice.supportedLanguages
  );
  const [showLanguageList, setShowLanguageList] = useState(false);
  const dispatch = useAppDispatch();

  const handleOutsideClick = () => {
    setShowLanguageList(false);
  };

  const ref = useRef();
  useOutsideClick(showLanguageList ? ref : null, handleOutsideClick);

  const handleToggleLanguagesList = () => {
    setShowLanguageList(!showLanguageList);
  };

  const handleSelectLanguage = (selectedLanguageCode: ILanguage) => {
    if (selectedLanguageCode !== activeLanguage) {
      dispatch(changeLanguage(selectedLanguageCode));
    }
    setShowLanguageList(false);
  };

  return (
    <>
      {type === "icon" ? (
        <IconLanguageSwitcher
          activeLanguage={activeLanguage}
          supportedLanguages={supportedLanguages}
        />
      ) : (
        <div ref={ref} aria-hidden className="languages-container">
          <div
            aria-hidden
            className={`language-switcher-wrapper ${
              showLanguageList ? "cta-bg-white" : ""
            }`}
            onClick={handleToggleLanguagesList}
          >
            <SelectLanguageSwitcher
              activeLanguage={activeLanguage}
              isWhiteVariant={true}
              showLanguageList={showLanguageList}
            />
          </div>
          {showLanguageList && (
            <LanguageList
              activeLanguage={activeLanguage}
              handleSelectedLanguage={handleSelectLanguage}
            />
          )}
        </div>
      )}
    </>
  );
};

export default LanguageSwitcher;
