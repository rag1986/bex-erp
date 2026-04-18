const insightsInnerHtml = `
  <div class="insights-grid">
    <div class="insights-image">
      <div class="insights-slider">
        <div class="slider-track">
          <div class="slide active">
            <img src="images/bex-1.webp" alt="Business Dashboard">
            <div class="stat-card">
              <div class="stat-badge">You saved $3,800.00</div>
              <div class="stat-value">90%</div>
              <div class="stat-label"><span style="color:#A0AEC0">Your Finance is</span> excellent</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
            </div>
          </div>
          <div class="slide">
            <img src="images/bex-2.webp" alt="Operations Dashboard">
            <div class="stat-card">
              <div class="stat-badge">&#187; Completed 32% faster</div>
              <div class="stat-value">88%</div>
              <div class="stat-label"><span style="color:#A0AEC0">Operations running</span> efficiently</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
            </div>
          </div>
          <div class="slide">
            <img src="images/bex-3.webp" alt="HR Dashboard">
            <div class="stat-card">
              <div class="stat-badge">&#9652; Productivity 21%</div>
              <div class="stat-value">91%</div>
              <div class="stat-label"><span style="color:#A0AEC0">Resources optimally</span> utilized</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment"></div>
              </div>
            </div>
          </div>
          <div class="slide">
            <img src="images/bex-4.webp" alt="Risk Dashboard">
            <div class="stat-card">
              <div class="stat-badge">&#9662; Potential risks detected early</div>
              <div class="stat-value">Low Risk</div>
              <div class="stat-label"><span style="color:#A0AEC0">Business risks under</span> control</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment"></div>
                <div class="segment"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-dots">
        <span class="dot active" data-slide="0"></span>
        <span class="dot" data-slide="1"></span>
        <span class="dot" data-slide="2"></span>
        <span class="dot" data-slide="3"></span>
      </div>
    </div>
    <div class="insights-content">
      <h2>Decisions backed by real-time insight.</h2>
      <p>BEX ERP gives leadership a unified dashboard, showing exactly what matters:</p>
      <ul class="insight-list">
        <li>Financial health</li>
        <li>Operational performance</li>
        <li>Resource utilisation</li>
        <li>Risk indicators</li>
      </ul>
      <p class="insight-footer">So decisions are faster, informed, and confident.</p>
    </div>
  </div>
`;

const leadersInnerHtml = `
  <div class="leaders-grid">
    <div class="leaders-content">
      <h2>Built for leaders who value clarity over complexity.</h2>
      <p>BEX ERP is ideal for:</p>
      <ul class="leader-list">
        <li>CEOs seeking operational control</li>
        <li>CFOs demanding financial accuracy & compliance</li>
        <li>Growing organizations ready to scale responsibly</li>
      </ul>
      <p class="leader-footer">If visibility matters to your leadership, BEX fits.</p>
    </div>
    <div class="leaders-image">
      <div class="leaders-slider">
        <div class="slider-track-leaders">
          <div class="slide-leader active">
            <img src="images/bex-5.webp" alt="Business Team">
            <div class="revenue-card">
              <div class="stat-badge">&#9652; 9.9% vs last month</div>
              <div class="revenue-amount">$85,200</div>
              <div class="stat-label"><span style="color:#A0AEC0">Total</span> Sales</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
            </div>
          </div>
          <div class="slide-leader">
            <img src="images/bex-6.webp" alt="Business Executives">
            <div class="revenue-card">
              <div class="stat-badge">&#9652; 14% productivity increase</div>
              <div class="revenue-amount">94%</div>
              <div class="stat-label"><span style="color:#A0AEC0">Operational</span> Efficiency</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
            </div>
          </div>
          <div class="slide-leader">
            <img src="images/bex-7.webp" alt="Team Performance">
            <div class="revenue-card">
              <div class="stat-badge">&#9652; 28% growth capacity</div>
              <div class="revenue-amount">120+</div>
              <div class="stat-label"><span style="color:#A0AEC0">Active</span> Projects</div>
              <div class="stat-progress-segments">
                <div class="segment filled"></div>
                <div class="segment filled"></div>
                <div class="segment filled"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="slider-dots-leaders">
        <span class="dot-leader active" data-slide="0"></span>
        <span class="dot-leader" data-slide="1"></span>
        <span class="dot-leader" data-slide="2"></span>
      </div>
    </div>
  </div>
`;

const posilenzInnerHtml = `
  <div class="posilenz-container">
    <div class="posilenz-left">
      <div class="posilenz-logo">
        <img src="images/logo-3.svg" alt="">
      </div>
    </div>
    <div class="posilenz-right">
      <p>BEX ERP is developed by Posilenz, a technology company focused on building intelligent, scalable enterprise systems.</p>
      <p>With a strong foundation in engineering, product thinking, and design clarity, Posilenz creates platforms that simplify complexity and support long-term business growth.</p>
      <h3>Technology that makes sense.</h3>
      <a href="#" class="btn-outline">Explore More</a>
    </div>
  </div>
`;

const demoInnerHtml = `
  <p class="section-label">SEE BEX ERP IN ACTION</p>
  <h2>Experience how one system can bring<br>clarity across your entire business.</h2>

  <form class="demo-form" id="contactForm">
    <div class="form-row">
      <div class="form-group">
        <label>Name</label>
        <input type="text" name="name" required>
      </div>
      <div class="form-group">
        <label>Company Name</label>
        <input type="text" name="company" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Role (CEO / CFO / Other)</label>
        <input type="text" name="role">
      </div>
      <div class="form-group">
        <label>Business Email</label>
        <input type="email" name="email" required>
      </div>
    </div>
    <div class="form-row">
      <div class="form-group">
        <label>Phone (optional)</label>
        <input type="tel" name="phone">
      </div>
      <div class="form-group">
        <label>Company Size</label>
        <select name="size">
          <option value="">Select size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201-500">201-500 employees</option>
          <option value="500+">500+ employees</option>
        </select>
      </div>
    </div>
    <button type="submit" class="submit-btn">Request a Live Demo</button>
  </form>
`;

export function InsightsSection() {
  return <section className="insights" dangerouslySetInnerHTML={{ __html: insightsInnerHtml }} />;
}

export function LeadersSection() {
  return <section className="leaders" dangerouslySetInnerHTML={{ __html: leadersInnerHtml }} />;
}

export function PosilenzSection() {
  return <section className="posilenz" dangerouslySetInnerHTML={{ __html: posilenzInnerHtml }} />;
}

export function DemoSection() {
  return <section id="demo" className="demo" dangerouslySetInnerHTML={{ __html: demoInnerHtml }} />;
}
