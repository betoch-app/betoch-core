import { ConfigProvider, Button } from 'antd';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GenericSpinner from './modules/core/views/components/GenericSwipper/GenericSpinner';
import './styles/scss/main.scss';
import _tokens from './styles/_theme_tokens.json';
const AsyncRouterApp = lazy(() => import('./RouterApp'));
const loader = <GenericSpinner />;

const routerApp = (
  <div>
    <AsyncRouterApp />
  </div>
);
const router = routerApp;
function App() {
  return (
    <BrowserRouter key={''}>
      <ConfigProvider
        theme={{
          token: _tokens,
        }}
      >
        <Suspense fallback={loader}>{router}</Suspense>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;
