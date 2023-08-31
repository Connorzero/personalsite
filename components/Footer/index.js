// import { useState } from 'react';
import Image from 'next/image';
import { PrismicLink, PrismicRichText } from '@prismicio/react';
import Balancer from 'react-wrap-balancer';
// import { ContactForm } from '../Contact/ContactForm';
import star from '../../public/images/Home/Rigel-rotated.png';

export const Footer = ({ footer }) => {
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <footer className="footer" id="footer">
        <div className="keyline"></div>
        <div className="footer__title">
          <PrismicRichText
            field={footer.data.title}
            components={{
              heading2: ({ children }) => (
                <h2 className="heading-headline">
                  <Balancer>{children}</Balancer>
                </h2>
              ),
            }}
          />
        </div>
        <div className="footer__cta">
          <PrismicLink
            className="button"
            href="mailto:connorchadwick93@gmail.com"
          >
            {footer.data.link_label}
          </PrismicLink>
        </div>
        <div className="footer__copyright">
          <p>
            &copy; {new Date().getFullYear()} Connor Chadwick. All rights
            reserved.
          </p>
        </div>
        <Image alt="star" src={star} className="star" priority quality={80} />
        <div className="starfield">
          <span className="starfield__1"></span>
          <span className="starfield__2"></span>
          <span className="starfield__3"></span>
          <span className="starfield__4"></span>
          <span className="starfield__5"></span>
        </div>
      </footer>

      {/* <div
        id="contact-form-modal"
        className="modal modal--animate-scale modal-background js-modal"
        className={`box ${
          modalOpen
            ? 'modal modal--animate-scale modal-background js-modal modal--is-visible'
            : 'modal modal--animate-scale modal-background js-modal'
        }`}
      >
        <div
          className="modal__content"
          role="alertdialog"
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
        >
          <header className="modal__content__header">
            <h2 id="modal-title" className="heading-subtitle">
              Get in touch
            </h2>
          </header>
          <div className="modal__content__body">
            <ContactForm />
          </div>
        </div>
      </div> */}
    </>
  );
};
