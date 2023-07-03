import { ConfigProvider } from "antd";
import { Suspense, lazy, useEffect } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";

import messages from "./locale/output/translation.json";
import {
  useAppDispatch,
  useAppSelector,
} from "./modules/core/hooks/redux-hooks";
import GenericSpinner from "./modules/core/views/components/GenericSwipper/GenericSpinner";
import "./styles/scss/main.scss";
import _tokens from "./styles/_theme_tokens.json";
import SwiperCore, { Autoplay } from "swiper";
import { changeApplication } from "./modules/core/slices/applicationsSlice";

const AsyncRouterApp = lazy(() => import("./AuthenticationApp"));
const AsyncKirayAdminApp = lazy(() => import("./KirayAdminApplication"));
const loader = <GenericSpinner />;
const routerApp = (
  <div>
    <AsyncRouterApp />
  </div>
);

const kirayAdminApp = (
  <div>
    <AsyncKirayAdminApp />
  </div>
);

function App() {
  let router = null;
  const { currentApplication } = useAppSelector(
    (state) => state.applicationsSlice
  );
  SwiperCore.use([Autoplay]);

  const currentSelectedLanguage = useAppSelector(
    (state) => state.languageSlice.currentSelectedLanguage
  );
  const locale: string = currentSelectedLanguage.code;
  const countryCode: string = currentSelectedLanguage.countryCode;
  console.log(currentApplication);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (currentApplication === null) {
      dispatch(changeApplication("0"));
    }
  }, []);

  if (currentApplication === "0" || null) {
    router = routerApp;
  }

  if (currentApplication === "2") {
    router = kirayAdminApp;
  }

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
