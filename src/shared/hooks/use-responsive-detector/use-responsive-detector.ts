import { useEffect, useState } from 'react';

import { useDebounce } from '@app/shared/hooks';

export const useResponsiveDetector = () => {
  const [state, setState] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
  });
  const handleWindowResize = () => {
    setState({
      isMobile: window.innerWidth <= 768,
      isTablet: window.innerWidth > 768 && window.innerWidth <= 992,
      isDesktop: window.innerWidth > 992,
    });
  };

  const debouncedCall = useDebounce(handleWindowResize, 300);

  useEffect(() => {
    window.addEventListener('resize', debouncedCall);
    return () => {
      window.removeEventListener('resize', debouncedCall);
    };
  }, []);
  return state;
};
