export default function ContactMe() {
  return (
    <section id="Contact" className="contact--section">
      {/* LEFT SIDE */}
      <div className="contact--intro">
        <span className="contact--eyebrow">GET IN TOUCH</span>

        <h3>
          LET'S BUILD
          <span> SOMETHING.</span>
        </h3>

        <p className="contact--description">
          Have an idea, opportunity, or just want to say hello? I'd love to hear
          from you.
        </p>

        <p className="sub--title">
          Let's turn ideas into something that works.
        </p>

        {/* Developer terminal */}
        <div className="contact--terminal">
          <div className="terminal--header">
            <div className="terminal--dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <span>contact.js</span>
          </div>

          <div className="terminal--body">
            <p>
              <span className="code--purple">const</span>{" "}
              <span className="code--blue">connection</span> = {"{"}
            </p>

            <p className="indent">
              status: <span className="code--green">'open'</span>,
            </p>

            <p className="indent">
              response: <span className="code--green">'always'</span>,
            </p>

            <p className="indent">
              ideas: <span className="code--green">'welcome'</span>
            </p>

            <p>{"}"}</p>

            <p className="terminal--comment">// waiting for your message...</p>

            <p className="terminal--cursor">
              <span>_</span>
            </p>
          </div>
        </div>
      </div>

      {/* FORM */}
      <form className="contact--form--container">
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">First Name</span>

            <input
              type="text"
              className="contact--input text--md"
              name="first-name"
              id="first-name"
              placeholder="John"
              required
            />
          </label>

          <label htmlFor="last-name" className="contact--label">
            <span className="text-md">Last Name</span>

            <input
              type="text"
              className="contact--input text--md"
              name="last-name"
              id="last-name"
              placeholder="Doe"
              required
            />
          </label>

          <label htmlFor="email" className="contact--label">
            <span className="text-md">Email</span>

            <input
              type="email"
              className="contact--input text--md"
              name="email"
              id="email"
              placeholder="you@example.com"
              required
            />
          </label>

          <label htmlFor="phone-number" className="contact--label">
            <span className="text-md">Phone Number</span>

            <input
              type="tel"
              className="contact--input text--md"
              name="phone-number"
              id="phone-number"
              placeholder="+234..."
            />
          </label>
        </div>

        <label htmlFor="choose-topic" className="contact--label">
          <span className="text-md">Choose a topic</span>

          <select
            id="choose-topic"
            name="topic"
            className="contact--input text--md"
            required
          >
            <option value="">Select One</option>
            <option value="project">Start a project</option>
            <option value="internship">Internship opportunity</option>
            <option value="collaboration">Collaboration</option>
            <option value="general">Just saying hello</option>
          </select>
        </label>

        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>

          <textarea
            className="contact--input text-md"
            name="message"
            id="message"
            rows={7}
            placeholder="Tell me what's on your mind..."
            required
          />
        </label>

        <label htmlFor="checkbox" className="checkbox--label">
          <input type="checkbox" required name="checkbox" id="checkbox" />

          <span>I agree to be contacted regarding this message.</span>
        </label>

        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">
            Send Message <span>→</span>
          </button>
        </div>
      </form>
    </section>
  );
}
