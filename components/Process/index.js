import { useRef } from 'react';
import Image from 'next/image';
import { PrismicRichText } from '@prismicio/react';
import Balancer from 'react-wrap-balancer';
import { useIsomorphicEffect } from '../Utilities/useIsomorphicEffect';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import processImageOne from '../../public/images/Process/process-one.png';
import processImageTwo from '../../public/images/Process/process-two.png';
import processImageThree from '../../public/images/Process/process-three.png';
import processImageFour from '../../public/images/Process/process-four.png';

const Process = ({ page }) => {
  const isomorphicEffect = useIsomorphicEffect();
  const component = useRef();

  isomorphicEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();
      mm.add('(min-width: 1024px)', () => {
        let tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.process__sections',
            pin: '.animation-container',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true,
          },
        });

        tl.addLabel('start')
          .fromTo(
            '.circular__1',
            { autoAlpha: 0.5, translateX: '-50%' },
            { autoAlpha: 1, translateX: '0%' },
            0
          )
          .fromTo(
            '.circular__3',
            { autoAlpha: 0.25, translateX: '50%' },
            { autoAlpha: 1, translateX: '0%' },
            '<'
          )
          .addLabel('process__section--one')
          .fromTo(
            '.circular__1',
            { autoAlpha: 1, scale: '1' },
            { autoAlpha: 0.5, scale: '1.3' }
          )
          .fromTo(
            '.circular__3',
            { autoAlpha: 1, scale: '1' },
            { autoAlpha: 0.25, scale: '1.6' },
            '<'
          )
          .addLabel('process__section--two')
          .fromTo(
            '.circular__1',
            { autoAlpha: 0.5, scale: '1.3', translateX: '0%' },
            { autoAlpha: 0.5, scale: '1', translateX: '-40%' }
          )
          .fromTo(
            '.circular__2',
            { translateY: '0%' },
            { translateY: '-40%' },
            '<'
          )
          .fromTo(
            '.circular__3',
            { autoAlpha: 0.25, scale: '1.6', translateX: '0%' },
            { autoAlpha: 0.25, scale: '1', translateX: '40%' },
            '<'
          )
          .addLabel('process__section--three')
          .fromTo(
            '.circular__1',
            {
              autoAlpha: 0.5,
              scale: '1',
              translateX: '-40%',
            },
            {
              autoAlpha: 1,
              scale: '0.5',
              translateX: '-50%',
            }
          )
          .fromTo(
            '.circular__2',
            {
              scale: '1',
              translateY: '-40%',
            },
            {
              scale: '0.5',
              translateY: '0%',
            },
            '<'
          )
          .fromTo(
            '.circular__3',
            {
              autoAlpha: 0.25,
              scale: '1',
              translateX: '40%',
            },
            {
              autoAlpha: 1,
              scale: '0.5',
              translateX: '50%',
            },
            '<'
          )
          .addLabel('process__section--four');
      });
    }, component); // <- IMPORTANT! Scopes selector text
    return () => ctx.revert(); // cleanup
  }, []);

  return (
    <section className="process" ref={component}>
      <div className="process__header">
        <div className="keyline"></div>
        <div className="process__header__title">
          <PrismicRichText
            field={page.data.process_title}
            components={{
              heading2: ({ children }) => (
                <h2 className="heading-title">
                  <Balancer>{children}</Balancer>
                </h2>
              ),
            }}
          />
        </div>
        <div className="process__header__description">
          <PrismicRichText
            field={page.data.process_description}
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
      <div className="process__sections">
        <div className="animation-container">
          <div className="process-animation">
            <div className="circular circular__1"></div>
            <div className="circular circular__2"></div>
            <div className="circular circular__3"></div>
          </div>
          {/* <div className="progress-bar">
            <div className="progress"></div>
          </div> */}
        </div>
        <div className="process__section--one">
          <div className="process__content-wrapper">
            <Image
              alt="understanding"
              src={processImageOne}
              className="process-image"
              quality={100}
              width={512}
            />
            <h3 className="heading-subtitle">Understanding</h3>
            <p>
              <Balancer>
                My first step is to open our minds only then are we able to
                attempt to feel the feelings, thoughts and emotions of any human
                being who may be affected by a challenge or idea we are working
                with.
              </Balancer>
            </p>
          </div>
        </div>
        <div className="process__section--two">
          <div className="process__content-wrapper">
            <Image
              alt="expanding"
              src={processImageTwo}
              className="process-image"
              quality={100}
              width={512}
            />
            <h3 className="heading-subtitle">Expanding</h3>
            <p>
              <Balancer>
                I believe in the bigger picture and stepping out as far into it
                as we need to, in order for us to go deeper into the worlds of
                humans we are designing for. By researching, conversing and
                becoming a user myself, I am able to propel my understanding and
                perspectives into expansive strategic thinking.
              </Balancer>
            </p>
          </div>
        </div>
        <div className="process__section--three">
          <div className="process__content-wrapper">
            <Image
              alt="transforming"
              src={processImageThree}
              className="process-image"
              quality={100}
              width={512}
            />
            <h3 className="heading-subtitle">Transforming</h3>
            <p>
              <Balancer>
                I take my learnings and find the best ways to translate them
                into explorative strategic design thinking and executional
                solutions that transform user experiences and relationships with
                brands.
              </Balancer>
            </p>
          </div>
        </div>
        <div className="process__section--four">
          <div className="process__content-wrapper">
            <Image
              alt="transcending"
              src={processImageFour}
              className="process-image"
              quality={100}
              width={512}
            />
            <h3 className="heading-subtitle">Transcending</h3>
            <p>
              <Balancer>
                For anything to transcend time it has to adapt and move with it.
                I follow my solutions as they move through time and experience
                customer interaction. Finding ways for the solutions to become
                more efficient through iterating and learning to ensure the
                solution is in a state of constant evolution.
              </Balancer>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
