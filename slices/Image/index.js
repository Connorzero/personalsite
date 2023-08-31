/**
 * @typedef {import("@prismicio/client").Content.ImageSlice} ImageSlice
 * @typedef {import("@prismicio/react").SliceComponentProps<ImageSlice>} ImageProps
 * @param {ImageProps}
 */

import { PrismicNextImage } from '@prismicio/next';

const Image = ({ slice }) => {
  return (
    <section
      className="image"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextImage
        className="image__image"
        field={slice.primary.image}
        imgixParams={{ q: 80 }}
      />
    </section>
  );
};

export default Image;
