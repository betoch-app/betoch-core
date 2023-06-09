import { ConfigProvider, Button } from 'antd';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GenericSpinner from './modules/core/views/components/GenericSwipper/GenericSpinner';
import './styles/scss/main.scss';
import _tokens from './styles/_theme_tokens.json';
const loader = <GenericSpinner />;
const router = (
  <div>
    <Button type="default">Button</Button>
  </div>
);
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
