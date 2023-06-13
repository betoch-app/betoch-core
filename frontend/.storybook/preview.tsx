import React from "react";
import { Provider } from "react-redux";
import { IntlProvider } from "react-intl";
import messages from "../src/locale/output/translation.json";
import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";
import { addSelectedLanguageToLocalStorage } from "../src/modules/core/utils/consts";
import { CURRENT_SELECETED_LANGUAGE } from "../src/modules/core/utils/consts";

import "../src/styles/scss/main.scss";

const initialState: any = {
  supportedLanguages: [
    {
      name: "English",
      languageCode: "EN",
      countryCode: "en-US",
      code: "en",
    },
    {
      name: "አማርኛ",
      languageCode: "አማ",
      countryCode: "am-ET",
      code: "am",
    },
  ],
  currentSelectedLanguage: CURRENT_SELECETED_LANGUAGE,
};
const withProviders = (story) => (
  <Provider
    store={configureStore({
      reducer: {
        supportedLanguages: createSlice({
          name: "language",
          initialState: initialState,
          reducers: {
            addLanguage(state, action: PayloadAction<any>) {
              state.supportedLanguages.push(action.payload);
            },
            changeLanguage(state, action: PayloadAction<any>) {
              addSelectedLanguageToLocalStorage(action.payload);
              state.currentSelectedLanguage = action.payload;
            },
          },
        }).reducer,
      },
    })}
  >
    <IntlProvider locale="en" messages={messages["en-US"]}>
      {story()}
    </IntlProvider>
  </Provider>
);
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: "Mobile",
        styles: {
          height: "620px",
          width: "375px",
        },
        type: "mobile",
      },
      mobileLarge: {
        name: "MobileLarge",
        styles: {
          height: "896px",
          width: "414px",
        },
        type: "mobile",
      },
      ipad: {
        name: "iPad",
        styles: {
          height: "1024px",
          width: "769px",
        },
        type: "tablet",
      },
      ipadPro: {
        name: "iPad Pro",
        styles: {
          height: "1366px",
          width: "1024px",
        },
        type: "tablet",
      },
      desktopSmall: {
        name: "Desktop Small",
        styles: {
          height: "768px",
          width: "1200px",
        },
        type: "desktop",
      },
      desktopLarge: {
        name: "Desktop Large",
        styles: {
          height: "1080px",
          width: "1920px",
        },
        type: "desktop",
      },
      kioskStandard: {
        name: "Kiosk - Standard",
        styles: {
          height: "1920px",
          width: "1080px",
        },
        type: "desktop",
      },
    },
  },
};

const preview = {
  decorators: [withProviders],
};

export default preview;
