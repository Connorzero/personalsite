import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';
import { createResolver } from 'next-slicezone/resolver';
import { useIsomorphicEffect } from '../components/Utilities/useIsomorphicEffect';

export default class extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    await createResolver();
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="body">
          <Main />
          <NextScript />
          <Script
            strategy="beforeInteractive"
            id="codyhouse-js"
            dangerouslySetInnerHTML={{
              __html: `
            document.getElementsByTagName("html")[0].className += " js";
          `,
            }}
          />
          <Script
            strategy="beforeInteractive"
            id="codyhouse-utils-js"
            src="https://unpkg.com/codyhouse-framework/main/assets/js/util.js"
          />
        </body>
      </Html>
    );
  }
}
