import { PrismicLink, PrismicRichText, PrismicText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Balancer from 'react-wrap-balancer';

const Explorations = ({ page, caseStudies }) => {
  return (
    <section className="explorations" id="explorations">
      <div className="explorations__header">
        <div className="keyline"></div>
        <div className="explorations__header__title">
          <PrismicRichText
            field={page.data.explorations_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="heading-title">
                  <Balancer>{children}</Balancer>
                </h2>
              ),
            }}
          />
        </div>
        <div className="explorations__header__description">
          <PrismicRichText
            field={page.data.explorations_description}
            components={{
              paragraph: ({ children }) => (
                <p className="body-large">
                  <Balancer>{children}</Balancer>
                </p>
              ),
            }}
          />
        </div>
      </div>
      <div className="explorations__grid">
        {caseStudies.map((document, id) => (
          <PrismicLink
            className="exploration_grid_item"
            document={document}
            key={id}
          >
            <div className="exploration_grid_item__content">
              <h2 className="heading-subtitle">
                <Balancer>
                  <PrismicText field={document.data.card_title} />
                </Balancer>
              </h2>
              <p>
                <Balancer>
                  <PrismicText field={document.data.card_description} />
                </Balancer>
              </p>
              <div className="button">
                View exploration
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-arrow-right"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </div>
            <PrismicNextImage
              className="exploration_grid_item__image"
              field={document.data.card_image}
              imgixParams={{ q: 80 }}
            />
          </PrismicLink>
        ))}
      </div>
    </section>
  );
};

export default Explorations;
