import { ILanguage } from "../../../../core/slices/models/ILanguage.model";
import CaretDown from "../../Icons/CaretDown";

type Props = {
  activeLanguage: ILanguage;
  showLanguageList: boolean;
  isWhiteVariant: boolean;
};
const SelectLanguageSwitcher = ({
  activeLanguage,
  showLanguageList,
  isWhiteVariant,
}: Props) => {
  return (
    <div className={"selected-language-wrapper"}>
      <span
        className={
          !showLanguageList && isWhiteVariant
            ? "white-language-text"
            : "black-language-text"
        }
      >
        {activeLanguage.code.toUpperCase()}
      </span>
      <CaretDown fillColor={!showLanguageList ? "white" : "black"} />
    </div>
  );
};

export default SelectLanguageSwitcher;
