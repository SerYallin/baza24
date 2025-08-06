import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import { Button } from '@modules/common/button';

export const App = () => {
  const location = useLocation();
  const background = location.state?.background;
  const navigate = useNavigate();

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
