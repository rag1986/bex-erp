const onPremiseInnerHtml = `
  <div class="container">
    <p class="section-label">WHY ON-PREMISE MATTERS</p>
    <h2>Your data. Your infrastructure. Your control.</h2>
    <div class="features-grid">
      <div class="feature-card">
        <div class="feature-icon">
          <img src="images/icon-1.svg" alt="Data Ownership">
        </div>
        <h3>Data Ownership</h3>
        <p>Your business data stays within your environment, not shared, rented, or exposed.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <img src="images/icon-2.svg" alt="Security">
        </div>
        <h3>Security & Compliance</h3>
        <p>Meet internal, regulatory, and industry compliance standards with full system control.</p>
      </div>
      <div class="feature-card">
        <div class="feature-icon">
          <img src="images/icon-3.svg" alt="Performance">
        </div>
        <h3>Performance & Reliability</h3>
        <p>No dependency on external servers. Consistent performance at scale.</p>
      </div>
    </div>
    <div class="features-dots">
      <span class="feature-dot active" data-feature="0"></span>
      <span class="feature-dot" data-feature="1"></span>
      <span class="feature-dot" data-feature="2"></span>
    </div>
  </div>
`;

const modulesInnerHtml = `
  <div class="container">
    <div class="modules-header">
      <p class="section-label">CORE BUSINESS MODULES</p>
      <h2>Everything leadership needs, in one view.</h2>
    </div>
    <div class="modules-container">
      <div class="module-list module-list-desktop">
        <div class="module-item active" data-module="0">Finance & Accounting</div>
        <div class="module-item" data-module="1">Sales & CRM</div>
        <div class="module-item" data-module="2">Human Resources</div>
        <div class="module-item" data-module="3">Projects & Operations</div>
        <div class="module-item" data-module="4">Documents & Approvals</div>
      </div>

      <div class="module-display module-display-desktop">
        <div class="module-slider">
          <div class="module-track">
            <div class="module-slide">
              <div class="module-content">
                <div class="module-icons">
                  <div class="module-icon"><img src="images/chart-candlestick.svg" alt=""></div>
                  <div class="module-icon"><img src="images/badge-dollar-sign.svg" alt=""></div>
                  <div class="module-icon"><img src="images/banknote-arrow-up.svg" alt=""></div>
                </div>
                <p class="module-description">Live financial visibility across revenue,<br>expenses, compliance, and reporting.</p>
              </div>
              <img src="images/admin.svg" alt="Finance Module Interface" class="module-image">
            </div>
            <div class="module-slide">
              <div class="module-content">
                <div class="module-icons">
                  <div class="module-icon"><img src="images/percent.svg" alt=""></div>
                  <div class="module-icon"><img src="images/layers.svg" alt=""></div>
                  <div class="module-icon"><img src="images/file-user.svg" alt=""></div>
                </div>
                <p class="module-description">Track pipelines, customers, and<br>performance with complete transparency.</p>
              </div>
              <img src="images/admin.svg" alt="Sales Module Interface" class="module-image">
            </div>
            <div class="module-slide">
              <div class="module-content">
                <div class="module-icons">
                  <div class="module-icon"><img src="images/users.svg" alt=""></div>
                  <div class="module-icon"><img src="images/user-star.svg" alt=""></div>
                  <div class="module-icon"><img src="images/hand-coins.svg" alt=""></div>
                </div>
                <p class="module-description">People, performance, and payroll,<br>aligned with business goals.</p>
              </div>
              <img src="images/admin.svg" alt="HR Module Interface" class="module-image">
            </div>
            <div class="module-slide">
              <div class="module-content">
                <div class="module-icons">
                  <div class="module-icon"><img src="images/hourglass.svg" alt=""></div>
                  <div class="module-icon"><img src="images/banknote-arrow-down.svg" alt=""></div>
                  <div class="module-icon"><img src="images/clock-plus.svg" alt=""></div>
                </div>
                <p class="module-description">Track execution, costs, and<br>timelines with clarity.</p>
              </div>
              <img src="images/admin.svg" alt="Projects Module Interface" class="module-image">
            </div>
            <div class="module-slide">
              <div class="module-content">
                <div class="module-icons">
                  <div class="module-icon"><img src="images/workflow.svg" alt=""></div>
                  <div class="module-icon"><img src="images/file-search.svg" alt=""></div>
                  <div class="module-icon"><img src="images/file-stack.svg" alt=""></div>
                </div>
                <p class="module-description">Centralized records, workflows,<br>and audit-ready approvals.</p>
              </div>
              <img src="images/admin.svg" alt="Documents Module Interface" class="module-image">
            </div>
          </div>
        </div>
      </div>

      <div class="module-list module-list-mobile">
        <div class="module-accordion-item">
          <div class="module-item active" data-module="0">Finance & Accounting</div>
          <div class="module-display active">
            <div class="module-content">
              <div class="module-icons">
                <div class="module-icon"><img src="images/chart-candlestick.svg" alt=""></div>
                <div class="module-icon"><img src="images/badge-dollar-sign.svg" alt=""></div>
                <div class="module-icon"><img src="images/banknote-arrow-up.svg" alt=""></div>
              </div>
              <p class="module-description">Live financial visibility across revenue,<br>expenses, compliance, and reporting.</p>
            </div>
            <img src="images/admin.svg" alt="Finance Module Interface" class="module-image">
          </div>
        </div>

        <div class="module-accordion-item">
          <div class="module-item" data-module="1">Sales & CRM</div>
          <div class="module-display">
            <div class="module-content">
              <div class="module-icons">
                <div class="module-icon"><img src="images/percent.svg" alt=""></div>
                <div class="module-icon"><img src="images/layers.svg" alt=""></div>
                <div class="module-icon"><img src="images/file-user.svg" alt=""></div>
              </div>
              <p class="module-description">Track pipelines, customers, and<br>performance with complete transparency.</p>
            </div>
            <img src="images/admin.svg" alt="Sales Module Interface" class="module-image">
          </div>
        </div>

        <div class="module-accordion-item">
          <div class="module-item" data-module="2">Human Resources</div>
          <div class="module-display">
            <div class="module-content">
              <div class="module-icons">
                <div class="module-icon"><img src="images/users.svg" alt=""></div>
                <div class="module-icon"><img src="images/user-star.svg" alt=""></div>
                <div class="module-icon"><img src="images/hand-coins.svg" alt=""></div>
              </div>
              <p class="module-description">People, performance, and payroll,<br>aligned with business goals.</p>
            </div>
            <img src="images/admin.svg" alt="HR Module Interface" class="module-image">
          </div>
        </div>

        <div class="module-accordion-item">
          <div class="module-item" data-module="3">Projects & Operations</div>
          <div class="module-display">
            <div class="module-content">
              <div class="module-icons">
                <div class="module-icon"><img src="images/hourglass.svg" alt=""></div>
                <div class="module-icon"><img src="images/banknote-arrow-down.svg" alt=""></div>
                <div class="module-icon"><img src="images/clock-plus.svg" alt=""></div>
              </div>
              <p class="module-description">Track execution, costs, and<br>timelines with clarity.</p>
            </div>
            <img src="images/admin.svg" alt="Projects Module Interface" class="module-image">
          </div>
        </div>

        <div class="module-accordion-item">
          <div class="module-item" data-module="4">Documents & Approvals</div>
          <div class="module-display">
            <div class="module-content">
              <div class="module-icons">
                <div class="module-icon"><img src="images/workflow.svg" alt=""></div>
                <div class="module-icon"><img src="images/file-search.svg" alt=""></div>
                <div class="module-icon"><img src="images/file-stack.svg" alt=""></div>
              </div>
              <p class="module-description">Centralized records, workflows,<br>and audit-ready approvals.</p>
            </div>
            <img src="images/admin.svg" alt="Documents Module Interface" class="module-image">
          </div>
        </div>
      </div>
    </div>
  </div>
`;

export function OnPremiseSection() {
  return <section className="on-premise" dangerouslySetInnerHTML={{ __html: onPremiseInnerHtml }} />;
}

export function ModulesSection() {
  return <section className="modules" dangerouslySetInnerHTML={{ __html: modulesInnerHtml }} />;
}
