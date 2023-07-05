import { useState, useEffect } from 'react';
const getIsMobile = () => window.innerWidth <= 640; // default tailwind sm size

export default function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState<boolean>(getIsMobile());

  useEffect(() => {
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return isMobile;
}
