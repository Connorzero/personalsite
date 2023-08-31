/**
 * @typedef {import("@prismicio/client").Content.TextSlice} TextSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextSlice>} TextProps
 * @param {TextProps}
 */

import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Balancer from 'react-wrap-balancer';

const Text = ({ slice }) => {
  const isTitleFilled = prismicH.isFilled.richText(slice.primary.title);
  const isDescriptionFilled = prismicH.isFilled.richText(
    slice.primary.description
  );

  return (
    <section
      className="text"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isTitleFilled && (
        <div className="text__title">
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
        <div className="text__description">
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
    </section>
  );
};

export default Text;
