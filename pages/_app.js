import Script from 'next/script';
import Link from 'next/link';
import { Manrope } from 'next/font/google';
import { linkResolver, repositoryName } from '../prismicio';
import { PrismicProvider } from '@prismicio/react';
import { PrismicPreview } from '@prismicio/next';
import * as gtag from '../components/Utilities/gtag';
import '../styles/style.scss';

const NextLinkShim = ({ href, children, locale, ...props }) => {
  return (
    <Link href={href} locale={locale} {...props}>
      {children}
    </Link>
  );
};

const manrope = Manrope({ subsets: ['latin'] });

export default function App({ Component, pageProps }) {
  return (
    <PrismicProvider
      linkResolver={linkResolver}
      internalLinkComponent={NextLinkShim}
    >
      <PrismicPreview repositoryName={repositoryName}>
        <div className={manrope.className}>
          <Component {...pageProps} />
        </div>
        {/* <Script id="modal-js" src="/./scripts/modal.js" /> */}
        {/* <Script id="alert-js" src="/./scripts/alert.js" /> */}
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
        />
        <Script
          strategy="lazyOnload"
          id="gtag-init"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
          }}
        />
      </PrismicPreview>
    </PrismicProvider>
  );
}
