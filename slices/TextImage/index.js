/**
 * @typedef {import("@prismicio/client").Content.TextImageSlice} TextImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextImageSlice>} TextImageProps
 * @param {TextImageProps}
 */

import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import { PrismicNextImage } from '@prismicio/next';
import Balancer from 'react-wrap-balancer';

const TextImage = ({ slice }) => {
  const isTitleFilled = prismicH.isFilled.richText(slice.primary.title);
  const isDescriptionFilled = prismicH.isFilled.richText(
    slice.primary.description
  );

  return (
    <section
      className="text_image"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="text_image__content_wrapper">
        {isTitleFilled && (
          <div className="text_image__title">
            <PrismicRichText
              field={slice.primary.title}
              components={{
                heading3: ({ children }) => (
                  <h3 className="heading-subtitle">
                    <Balancer>{children}</Balancer>
                  </h3>
                ),
              }}
            />
          </div>
        )}
        {isDescriptionFilled && (
          <div className="text_image__description">
            <PrismicRichText
              field={slice.primary.description}
              components={{
                paragraph: ({ children }) => (
                  <p>
                    <Balancer>{children}</Balancer>
                  </p>
                ),
              }}
            />
          </div>
        )}
      </div>
      <div className="text_image__image_wrapper">
        <PrismicNextImage
          className="text_image__image"
          field={slice.primary.image}
          imgixParams={{ q: 80 }}
        />
      </div>
    </section>
  );
};

export default TextImage;
