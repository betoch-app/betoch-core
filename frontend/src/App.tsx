import { ConfigProvider } from "antd";
import { Suspense, lazy } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import messages from "./locale/output/translation.json";
import { useAppSelector } from "./modules/core/hooks/redux-hooks";
import GenericSpinner from "./modules/core/views/components/GenericSwipper/GenericSpinner";
import "./styles/scss/main.scss";
import _tokens from "./styles/_theme_tokens.json";

const AsyncRouterApp = lazy(() => import("./RouterApp"));
const loader = <GenericSpinner />;
const routerApp = (
  <div>
    <AsyncRouterApp />
  </div>
);

const router = routerApp;
function App() {
  const currentSelectedLanguage = useAppSelector(
    (state) => state.languageSlice.currentSelectedLanguage
  );
  const locale: string = currentSelectedLanguage.code;
  const countryCode: string = currentSelectedLanguage.countryCode;
  return (
    <IntlProvider
      locale={locale}
      defaultLocale={locale}
      messages={messages[countryCode as keyof typeof messages]}
    >
      <BrowserRouter key={""}>
        <ConfigProvider
          theme={{
            token: _tokens,
          }}
        >
          <Suspense fallback={loader}>{router}</Suspense>
        </ConfigProvider>
      </BrowserRouter>
    </IntlProvider>
  );
}

export default App;
