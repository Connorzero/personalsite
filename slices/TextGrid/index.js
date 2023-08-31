/**
 * @typedef {import("@prismicio/client").Content.TextGridSlice} TextGridSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<TextGridSlice>} TextGridProps
 * @param {TextGridProps}
 */

import * as prismicH from '@prismicio/helpers';
import { PrismicRichText } from '@prismicio/react';
import Balancer from 'react-wrap-balancer';

const TextGrid = ({ slice }) => {
  const isTitleFilled = prismicH.isFilled.richText(slice.primary.title);
  return (
    <section
      className="text_grid"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      {isTitleFilled && (
        <PrismicRichText
          field={slice.primary.title}
          components={{
            heading2: ({ children }) => (
              <h2 className="text_grid__title heading-title">
                <Balancer>{children}</Balancer>
              </h2>
            ),
          }}
        />
      )}
      <div className="text_sections_wrapper">
        {slice.items.map((item, id) => (
          <div className="text_section" key={id}>
            <PrismicRichText
              field={item.text_section_title}
              components={{
                heading3: ({ children }) => (
                  <h2 className="heading-subtitle">{children}</h2>
                ),
              }}
            />
            <PrismicRichText
              field={item.text_section_content}
              components={{
                paragraph: ({ children }) => <p>{children}</p>,
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TextGrid;
