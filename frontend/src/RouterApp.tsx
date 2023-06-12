import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import LoginContainer from './modules/authentication/containers/LoginContainer';

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        {/** Anonymous route */}
        <Route key={'urlLogin'} element={<LoginContainer />} path={'/'} />
      </Routes>
    </Suspense>
  );
};

export default Router;
