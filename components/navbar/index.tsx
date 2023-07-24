'use client';
import React from 'react';
import MobileNavbar from './mobileNavbar';
import DesktopNavbar from './desktopNavbar';

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <MobileNavbar />
      <DesktopNavbar />
    </>
  );
}
