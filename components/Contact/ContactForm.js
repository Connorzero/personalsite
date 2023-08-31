import React, { useEffect, useRef, useState } from 'react';
import { useIsomorphicEffect } from '../Utilities/useIsomorphicEffect';
import { gsap } from 'gsap';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import ReCAPTCHA from 'react-google-recaptcha';

export const ContactForm = () => {
  const isomorphicEffect = useIsomorphicEffect();
  const component = useRef();
  const recaptchaRef = useRef(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm({});

  const onSubmit = async (formData) => {
    // Log the validated form data in the console (front-end)
    // console.log('Form Data', formData);

    // Get the reCAPTCHA token from the reCAPTCHA element
    const captchaToken = await recaptchaRef.current.executeAsync();

    // Pass the formValues data to the API route
    await fetch('/api/contact-form', {
      method: 'POST',
      body: JSON.stringify({ formData, captchaToken }),
    });

    // Reset the reCAPTCHA
    recaptchaRef.current.reset();

    // Display the success alert message
    setHasSubmitted(true);
  };

  const onError = () => {
    console.log('There is an error on the form');
  };

  const [loaded, setLoaded] = useState(false);

  isomorphicEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
    if (!loaded) return;
  }, [formState.isSubmitSuccessful, loaded]);

  return (
    <>
      <form
        className="contact-form"
        onSubmit={handleSubmit(onSubmit, onError)}
        ref={component}
      >
        <fieldset>
          <p className="disclaimer body-small">
            All form fields are mandatory unless stated
          </p>
          <div className="form-input-wrapper">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input
              aria-invalid={errors.name ? 'true' : 'false'}
              className="form-control width-100%"
              placeholder="Enter your name"
              type="text"
              disabled={formState.isSubmitting}
              {...register('name', {
                required: 'Your name is required',
              })}
            />
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <div className="error-message" role="alert">
                  <p>{message}</p>
                </div>
              )}
            />
          </div>

          <div className="form-input-wrapper">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              aria-invalid={errors.email ? 'true' : 'false'}
              className="form-control"
              placeholder="Enter your email"
              type="email"
              disabled={formState.isSubmitting}
              {...register('email', {
                required: 'Your email address is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'This needs to be a valid email address',
                },
              })}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <div className="error-message" role="alert">
                  <p>{message}</p>
                </div>
              )}
            />
          </div>

          <div className="form-input-wrapper">
            <label className="form-label" htmlFor="phone">
              Phone number <span className="body-small">(optional)</span>
            </label>
            <input
              aria-invalid={errors.phone ? 'true' : 'false'}
              className="form-control"
              placeholder="01234 567 890"
              type="tel"
              disabled={formState.isSubmitting}
              {...register('phone')}
            />
          </div>

          <div className="form-input-wrapper">
            <label className="form-label" htmlFor="message">
              Your message
            </label>
            <textarea
              aria-invalid={errors.message ? 'true' : 'false'}
              className="form-control"
              placeholder="Enter your message..."
              rows="4"
              type="text"
              disabled={formState.isSubmitting}
              {...register('message', {
                required: 'Your message is required',
              })}
            ></textarea>
            <ErrorMessage
              errors={errors}
              name="message"
              render={({ message }) => (
                <div className="error-message" role="alert">
                  <p>{message}</p>
                </div>
              )}
            />
          </div>
        </fieldset>

        <ReCAPTCHA
          ref={recaptchaRef}
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
          size="invisible"
        />

        <div className="contact-form__footer">
          <button
            className="button"
            type="submit"
            disabled={formState.isSubmitting}
          >
            Submit
          </button>
          <button className="button button--subtle button--small js-modal__close">
            Cancel and close
          </button>
        </div>

        {hasSubmitted ? (
          <div className="success-message" role="alert">
            <p>
              Success: Your message has been sent successfully. We will be in
              touch as soon as possible.
            </p>

            <button className="reset alert__close-btn margin-left-sm js-alert__close-btn js-tab-focus">
              <svg
                className="icon"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <title>Close alert</title>
                <line x1="3" y1="3" x2="17" y2="17" />
                <line x1="17" y1="3" x2="3" y2="17" />
              </svg>
            </button>
          </div>
        ) : null}
      </form>
    </>
  );
};
