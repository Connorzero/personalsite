import Link from 'next/link';
import { createClient } from '../../prismicio';
import { components } from '../../slices';
import { SliceZone } from '@prismicio/react';
import { Layout } from '../../components/Layout';
import ExplorationHero from '../../components/Hero/explorationDetailHero';
import { useIsomorphicEffect } from '../../components/Utilities/useIsomorphicEffect';

const CaseStudy = ({ url, lang, layout, page }) => {
  const isomorphicEffect = useIsomorphicEffect();

  const seo = {
    metaTitle: page.data.metaTitle || layout.seo?.data?.metaTitle,
    metaDescription:
      page.data.metaDescription || layout.seo?.data?.metaDescription,
    metaImage: page.data.metaImage.url || layout.seo?.data?.metaImage.url,
    url: url,
    article: false,
    lang: lang,
  };

  isomorphicEffect(() => {
    document.body.classList.add('exploration-detail-page');

    return () => {
      document.body.classList.remove('exploration-detail-page');
    };
  }, []);

  return (
    <Layout {...layout} seo={seo}>
      <ExplorationHero page={page} />
      <SliceZone slices={page.data.slices} components={components} />
      <section className="exploration_detail_footer">
        <Link href="/#explorations" className="button">
          Back to explorations
        </Link>
      </section>
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
  const footer = await client.getSingle('footer');
  const page = await client.getByUID('case_study', params.uid);

  return {
    props: {
      key: params.uid,
      layout: {
        seo,
        navigation,
        // header,
        footer,
      },
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 10, // In seconds
  };
};

export const getStaticPaths = async () => {
  const client = createClient();

  const pages = await client.getAllByType('case_study');

  return {
    paths: pages.map((page) => {
      return {
        params: { uid: page.uid },
      };
    }),
    fallback: 'blocking',
  };
};

export default CaseStudy;
