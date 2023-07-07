'use client';
import React, { useEffect, useState } from 'react';
import MobileNavbar from './mobileNavbar';
import DesktopNavbar from './desktopNavbar';
import FallbackNavbar from './fallbackNavbar';

type Props = {};

export default function Navbar({}: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [isFallback, setIsFallback] = useState<boolean>(true);

  useEffect(() => {
    const getIsMobile = () => window.innerWidth <= 640; // default tailwind sm size

    setIsMobile(getIsMobile());
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    setIsFallback(false);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return (
    <>
      {isFallback ? (
        <FallbackNavbar />
      ) : isMobile ? (
        <MobileNavbar />
      ) : (
        <DesktopNavbar />
      )}
    </>
  );
}
