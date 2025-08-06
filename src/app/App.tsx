import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from '@pages/home';

export const App = () => {
  const location = useLocation();
  const background = location.state?.background;

  return (
    <div className="app" data-cy="app">
      <Routes location={background || location}>
        <Route path="/" element={<Home />} />
      </Routes>
      {background && (
        <Routes>
          <Route path="/skill/:id" element={<Home />} />
        </Routes>
      )}
    </div>
  );
};
