// src/App.tsx
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <main className="container">
      <header className="nav">
        <div className="brand">Divine Child</div>
        <nav>
          <a href="#mission">Mission</a>
          <a href="#offerings">Offerings</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <img src={viteLogo} className="logo" alt="Vite logo" />
        <img src={reactLogo} className="logo react" alt="React logo" />
        <h1>Remember Your Divinity</h1>
        <p className="subtitle">
          Gentle coaching, spiritual guidance, and a movement for peace and love.
        </p>
        <div className="cta">
          <a className="btn primary" href="#contact">Book a Session</a>
          <a className="btn" href="#newsletter">Join the Newsletter</a>
        </div>
      </section>

      <section id="mission" className="section">
        <h2>Our Mission</h2>
        <p>
          Divine Child exists to awaken the light within every soul. We serve with kindness,
          clarity, and simple tools that restore peace and purpose.
        </p>
      </section>

      <section id="offerings" className="section cards">
        <article className="card">
          <h3>1:1 Coaching</h3>
          <p>Compassionate guidance to align your life with love, courage, and wisdom.</p>
        </article>
        <article className="card">
          <h3>Radio & Teachings</h3>
          <p>Weekly reflections and meditations to support your spiritual growth.</p>
        </article>
        <article className="card">
          <h3>Divine Child Movement</h3>
          <p>Nonprofit initiatives that uplift communities through service and presence.</p>
        </article>
      </section>

      <section id="about" className="section">
        <h2>About Professor Luis</h2>
        <p>
          Radio host, PhD candidate, coach, and gentle teacher dedicated to global healing.
          This work is a homecoming—to innocence, power, and joy.
        </p>
      </section>

      <section id="newsletter" className="section">
        <h2>Join the Newsletter</h2>
        {/* Netlify Forms (TS-safe via data-* attrs) */}
        <form
          name="newsletter"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="newsletter" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <input type="email" name="email" placeholder="Your email" required />
          <button className="btn primary" type="submit">Subscribe</button>
        </form>
        <small>You’ll receive gentle updates and meditations. No spam, ever.</small>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        {/* Netlify Forms (TS-safe via data-* attrs) */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="hidden">
            <label>Don’t fill this out: <input name="bot-field" /></label>
          </p>
          <input type="text" name="name" placeholder="Name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea name="message" placeholder="How can I serve?" rows={5} />
          <button className="btn primary" type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} Divine Child • All love, all ways</span>
      </footer>
    </main>
  )
}
