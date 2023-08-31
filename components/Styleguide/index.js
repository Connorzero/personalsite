export const Styleguide = () => {
  return (
    <>
      <section>
        <div className="container">
          <h2 className="section-title">Grid layout</h2>
        </div>
      </section>

      <section>
        <div className="container">
          <h2 className="section-title">Typographic scale</h2>
          <ul>
            <li>
              <span className="step-8">Step 8</span>
            </li>
            <li>
              <span className="step-7">Step 7</span>
            </li>
            <li>
              <span className="step-6">Step 6</span>
            </li>
            <li>
              <span className="step-5">Step 5</span>
            </li>
            <li>
              <span className="step-4">Step 4</span>
            </li>
            <li>
              <span className="step-3">Step 3</span>
            </li>
            <li>
              <span className="step-2">Step 2</span>
            </li>
            <li>
              <span className="step-1">Step 1</span>
            </li>
            <li>
              <span className="step-0">Base font size</span>
            </li>
            <li>
              <span className="step--1">Step -1</span>
            </li>
            <li>
              <span className="step--2">Step -2</span>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <div className="container full grid">
          <h2 className="section-title">Typography styles</h2>
          <h1 className="heading-display">
            Display heading title can span multiple lines
          </h1>
        </div>
      </section>

      <section className="feature-content-right">
        <div className="container full grid">
          <div className="image_primary"></div>
          <div className="image_secondary"></div>
          <div className="text-content">
            <h3>Design guidance and advice</h3>
            <p>
              The advice we give comes from a lifetime of experience in the
              design of stunning structures and the use of a wide range of
              quality materials providing durable, workable finishes that when
              complete are practical yet stunning.
            </p>
            <a className="button">Our expertise</a>
          </div>
        </div>
      </section>

      <section className="form">
        <div className="container">
          <h2 className="section-title">Form elements</h2>
          <form>
            <fieldset>
              <div className="form-control_wrapper">
                <label className="form-label" htmlFor="input">
                  Label
                </label>
                <input
                  className="form-control"
                  name="input"
                  id="input"
                  placeholder="Placeholder"
                  type="text"
                />
              </div>
              <div className="form-control_wrapper">
                <label className="form-label" htmlFor="textarea">
                  Label
                </label>
                <textarea
                  className="form-control"
                  name="textarea"
                  id="textarea"
                />
                <p className="extra-small form_helper-text">
                  Use helper text to provide additional information.
                </p>
              </div>
            </fieldset>
          </form>
        </div>
      </section>
    </>
  );
};
