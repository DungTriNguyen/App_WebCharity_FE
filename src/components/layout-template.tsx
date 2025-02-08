'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

const EXCLUDED_HEADER_FOOTER_PATHS = ['/login', '/register'];

const LayoutTemplate = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  if (EXCLUDED_HEADER_FOOTER_PATHS.includes(pathName)) {
    return <>{children}</>;
  }
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutTemplate;
