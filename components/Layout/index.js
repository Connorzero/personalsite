import React from 'react';
import { Seo } from '../SEO';
import { Header } from '../Header';
import { Footer } from '../Footer';

export const Layout = ({ seo, navigation, children, footer }) => {
  return (
    <>
      <div className="relative">
        <Seo {...seo} />
        <Header {...navigation.data} />
        <main>{children}</main>
        <Footer {...navigation.data} footer={footer} />
      </div>
    </>
  );
};
