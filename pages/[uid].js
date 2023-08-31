import { createClient } from '../prismicio';
import { components } from '../slices/';
import { PrismicRichText, SliceZone } from '@prismicio/react';
import { Layout } from '../components/Layout';
import { Styleguide } from '../components/Styleguide';

const Page = ({ url, lang, layout, page }) => {
  const seo = {
    metaTitle: page.data.metaTitle || layout.seo?.data?.metaTitle,
    metaDescription:
      page.data.metaDescription || layout.seo?.data?.metaDescription,
    metaImage: page.data.metaImage.url || layout.seo?.data?.metaImage.url,
    url: url,
    article: false,
    lang: lang,
  };

  return (
    <Layout {...layout} seo={seo}>
      <section className="hero">
        <div className="container">
          <PrismicRichText
            field={page.data.title}
            components={{
              heading1: ({ children }) => <h1>{children}</h1>,
            }}
          />
        </div>
      </section>

      <Styleguide />

      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

// Fetch content from prismic - previews but doesn't hot reload
export const getStaticProps = async ({ params, previewData }) => {
  const client = createClient({ previewData });

  // Default Layout components reused across the site
  // If a singleton document is missing, `getStaticProps` will throw a PrismicError.
  const seo = await client.getSingle('defaultseo');
  const navigation = await client.getSingle('navigation');
  // const header = await client.getSingle("header");
  // const footer = await client.getSingle("footer");
  const page = await client.getByUID('page', params.uid);

  return {
    props: {
      key: params.uid,
      layout: {
        seo,
        navigation,
        // header,
        // footer
      },
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 6 hours
    revalidate: 21600, // every 6 hours
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType('page');

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: 'blocking',
  };
};

export default Page;
