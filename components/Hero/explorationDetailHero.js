import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Balancer from 'react-wrap-balancer';

const ExplorationHero = ({ page }) => {
  return (
    <section className="hero_exploration">
      <div className="hero_exploration__client">
        <PrismicRichText
          field={page.data.client}
          components={{
            paragraph: ({ children }) => (
              <p className="body-large">
                <Balancer>{children}</Balancer>
              </p>
            ),
          }}
        />
      </div>
      <div className="hero_exploration__title">
        <PrismicRichText
          field={page.data.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="heading-headline">
                <Balancer>{children}</Balancer>
              </h1>
            ),
          }}
        />
      </div>
      <PrismicNextImage
        className="featured_image"
        field={page.data.featured_image}
        imgixParams={{ q: 80 }}
        priority={true}
      />
      <div className="hero_exploration__description">
        <PrismicRichText
          field={page.data.description}
          components={{
            paragraph: ({ children }) => (
              <p className="heading-subtitle">
                <Balancer>{children}</Balancer>
              </p>
            ),
          }}
        />
      </div>
      <div className="hero_exploration__services">
        {page.tags.map((tag, id) => (
          <p key={id} className="tag">
            {tag}
          </p>
        ))}
      </div>
      <div className="keyline keyline__top"></div>
    </section>
  );
};

export default ExplorationHero;
