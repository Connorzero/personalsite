import { createClient } from '../prismicio';
import { components } from '../slices/';
import { SliceZone } from '@prismicio/react';
import { Layout } from '../components/Layout';
import Hero from '../components/Hero';
import Process from '../components/Process';
import Services from '../components/Services';
import Explorations from '../components/Explorations';
import { useIsomorphicEffect } from '../components/Utilities/useIsomorphicEffect';

const Homepage = ({ url, lang, layout, page, caseStudies }) => {
  const seo = {
    metaTitle: page.data.metaTitle || layout.seo?.data?.metaTitle,
    metaDescription:
      page.data.metaDescription || layout.seo?.data?.metaDescription,
    metaImage: page.data.metaImage.url || layout.seo?.data?.metaImage.url,
    url: url,
    article: false,
    lang: lang,
  };

  const isomorphicEffect = useIsomorphicEffect();

  isomorphicEffect(() => {
    document.body.classList.add('home-page');

    return () => {
      document.body.classList.remove('home-page');
    };
  }, []);

  return (
    <Layout {...layout} seo={seo}>
      <Hero page={page} />
      <Services page={page} />
      <Process page={page} />
      <Explorations page={page} caseStudies={caseStudies} />
      <SliceZone slices={page.data.slices} components={components} />
    </Layout>
  );
};

export const getStaticProps = async ({ previewData }) => {
  const client = createClient({ previewData });

  // Default Layout components reused across the site
  // If a singleton document is missing, `getStaticProps` will throw a PrismicError.
  const seo = await client.getSingle('defaultseo');
  const navigation = await client.getSingle('navigation');
  const page = await client.getSingle('homepage');
  const footer = await client.getSingle('footer');
  const caseStudies = await client.getAllByType('case_study');

  return {
    props: {
      layout: {
        seo,
        navigation,
        // header,
        footer,
      },
      caseStudies,
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 6 hours
    revalidate: 21600, // every 6 hours
  };
};

export default Homepage;
