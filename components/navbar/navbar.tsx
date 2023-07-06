'use client';
import React, { useEffect, useState } from 'react';
import MobileNavbar from './mobileNavbar';
import DesktopNavbar from './desktopNavbar';

type Props = {};

export default function Navbar({}: Props) {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const getIsMobile = () => window.innerWidth <= 640; // default tailwind sm size

    setIsMobile(getIsMobile());
    const onResize = () => {
      setIsMobile(getIsMobile());
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);
  return <>{isMobile ? <MobileNavbar /> : <DesktopNavbar />}</>;
}
