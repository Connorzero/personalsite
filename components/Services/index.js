import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Balancer from 'react-wrap-balancer';

const Services = ({ page }) => {
  return (
    <section className="services">
      <div className="services__header">
        <div className="keyline"></div>
        <div className="services__header__title">
          <PrismicRichText
            field={page.data.services_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="heading-title">
                  <Balancer>{children}</Balancer>
                </h2>
              ),
            }}
          />
        </div>
        <div className="services__header__description">
          <PrismicRichText
            field={page.data.services_description}
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
      <div className="services__grid">
        <div className="services__grid__grid-item introduction">
          <h3 className="heading-subtitle">
            <Balancer>UX and Interaction design</Balancer>
          </h3>
          <p>
            <Balancer>
              I am a constantly curious designer and thinker, passionate about
              imagination and exploration. I aim to create memorable experiences
              for human beings that transform lives and move the digital and
              physical world forward.
            </Balancer>
          </p>
        </div>
        {page.data.images.map((document, id) => (
          <PrismicNextImage
            key={id}
            className="services__grid__grid-item"
            field={document.image}
            imgixParams={{ q: 80 }}
            sizes="50vw"
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
