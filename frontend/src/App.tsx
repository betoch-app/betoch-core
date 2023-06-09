import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import GenericSpinner from './modules/core/views/components/GenericSwipper/GenericSpinner';
import './styles/scss/main.scss';

const loader = <GenericSpinner />;
const router = <div>Router</div>;
function App() {
  return (
    <BrowserRouter key={''}>
      <Suspense fallback={loader}>{router}</Suspense>
    </BrowserRouter>
  );
}

export default App;
