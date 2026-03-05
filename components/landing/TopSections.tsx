export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="logo">
          <img src="images/logo.svg" alt="" />
        </div>
        <a href="#demo" className="nav-btn">
          Request a Demo
        </a>
      </div>
    </nav>
  );
}

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Run everything from one system.</h1>
          <p>
            An on-premise ERP built for leaders who want visibility, control, and confidence, without
            operational complexity.
          </p>
          <div className="hero-buttons">
            <a href="#demo" className="btn-primary">
              Request a Live Demo
            </a>
            <a href="#" className="btn-link">
              See how it works →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function TrustBarSection() {
  return (
    <div className="trust-barsection">
      <div className="container">
        <div className="trust-bar">
          <span className="trust-text">
            Built for businesses that
            <br />
            take control seriously
          </span>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>On-premise ERP</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Secure by design</span>
          </div>
          <div className="trust-item">
            <span className="trust-icon">✓</span>
            <span>Scales across departments</span>
          </div>
        </div>
      </div>
    </div>
  );
}
