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
      <svg width="1" height="1" style="position: absolute; opacity: 0; pointer-events: none;" aria-hidden="true">
        <defs>
          <linearGradient id="calloutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#807DFE" />
            <stop offset="100%" stop-color="#01033E" />
          </linearGradient>
        </defs>
      </svg>
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
              <div class="module-image-container">
                <img src="images/finance.webp" alt="Finance Module Interface" class="module-image">
                <div class="module-callout" style="top: 27%; right: 12%;">
                  <h4>Structured Account Clarity</h4>
                  <p>Organized financial categories Clearly grouped assets and liabilities help faster understanding and audit readiness.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -80,0 L -80,-50" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-80" cy="-50" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 36%; left: 7%;">
                  <h4>Real-time Financial Position</h4>
                  <p>Instant visibility of Assets vs Liabilities Know the financial health of the business at any point in time.</p>
                   <svg style="position:absolute; left: 90%; bottom: 100%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 0,-10 L 0.01,-80" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="0" cy="-10" r="4" fill="#807DFE"/>
                    <circle cx="0" cy="-80" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 21%; right: 0%;">
                  <h4>Drill-down Transparency</h4>
                  <p>Access detailed account breakdowns Quickly explore individual account values for accurate decision-making.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -40,0 L -40,30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-40" cy="30" r="4" fill="#01033E"/>
                  </svg>
                </div>
              </div>
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
              <div class="module-image-container">
                <img src="images/sales.webp" alt="Sales Module Interface" class="module-image">
                <div class="module-callout" style="top: 25%; right: 13%;">
                  <h4>One-click Performance Reports</h4>
                  <p>Generate detailed sales reports instantly to track revenue streams and customer trends.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -60,0 L -60,-30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-60" cy="-30" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 35%; left: 5%;">
                  <h4>Full Sales Pipeline View</h4>
                  <p>Monitor the entire sales pipeline from enquiry to receivables in one visual dashboard.</p>
                  <svg style="position:absolute; left: 90%; bottom: 100%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 0,-10 L 0.01,-80" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="0" cy="-10" r="4" fill="#807DFE"/>
                    <circle cx="0" cy="-80" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 15%; right: 11%;">
                  <h4>Revenue Control Insights</h4>
                  <p>Gain clarity on total outstanding receivables for better cash flow management.</p>
                  <svg style="position:absolute; left: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 10,0 L 30,0 L 30,30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="30" cy="30" r="4" fill="#01033E"/>
                  </svg>
                </div>
              </div>
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
              <div class="module-image-container">
                <img src="images/hr.webp" alt="HR Module Interface" class="module-image">
                <div class="module-callout" style="top: 18%; right: 10%;">
                  <h4>Detailed HR Analytics</h4>
                  <p>Gain insights into salaries, headcount, and employee demographics Drive smarter HR decisions.</p>
                  <svg style="position:absolute; right: 100%; top: 78%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -60,0 L -60,-30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-60" cy="-30" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 10%; left: 4%;">
                  <h4>Employee Performance Gauge</h4>
                  <p>Track overall performance with a visual score Instantly understand team productivity levels.</p>
                  <svg style="position:absolute; left: 90%; bottom: 100%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 0,-10 L 0.01,-80" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="0" cy="-10" r="4" fill="#807DFE"/>
                    <circle cx="0" cy="-80" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 32%; right: 2%;">
                  <h4>Headcount Trends & Diversity</h4>
                  <p>Analyze headcount trends and gender distribution.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -30,0 L -30,50" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-30" cy="50" r="4" fill="#01033E"/>
                  </svg>
                </div>
              </div>
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
              <div class="module-image-container">
                <img src="images/project.webp" alt="Projects Module Interface" class="module-image">
                <div class="module-callout" style="top: 14%; right: 16%;">
                  <h4>Unified Project Overview</h4>
                  <p>View all projects with costs in one place. Eliminates scattered spreadsheets for improved oversight.</p>
                  <svg style="position:absolute; right: 80%; top: 100%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 0,10 L 0,80 L -30,80" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="0" cy="10" r="4" fill="#807DFE"/>
                    <circle cx="-30" cy="80" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="top: 37%; left: -2%;">
                  <h4>Instant Project Filtering</h4>
                  <p>Quickly narrow down project data by division, project, WBS, and time period.</p>
                 <svg style="position:absolute; left: 100%; top: 20%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 10,0 L 40,0 L 40,-30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="40" cy="-30" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 28%; right: 0%;">
                  <h4>Budget Accuracy Insights</h4>
                  <p>Compare estimated vs. actual, costs to prevent overruns and improve planning.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -50,0 L -50,40" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-50" cy="40" r="4" fill="#01033E"/>
                  </svg>
                </div>
              </div>
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
              <div class="module-image-container">
                <img src="images/documents.webp" alt="Documents Module Interface" class="module-image">
                <div class="module-callout" style="top: 15%; right: 11%;">
                  <h4>Centralized Document Dashboard</h4>
                  <p>Single view of all document types. Easily track employee, company and legal docs.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -60,0.01" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-60" cy="0" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 33%; left: 5%;">
                  <h4>Document Compliance Tracking</h4>
                  <p>Monitor document expiry status Stay compliant with valid document alerts.</p>
                  <svg style="position:absolute; left: 100%; top: 20%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M 10,0 L 40,0 L 40,-30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="40" cy="-30" r="4" fill="#01033E"/>
                  </svg>
                </div>
                <div class="module-callout" style="bottom: 27%; right: 0%;">
                  <h4>Expiry Notification Alerts</h4>
                  <p>Get alerts on approaching expiry dates. Quickly renew and update critical employee documents.</p>
                  <svg style="position:absolute; right: 100%; top: 50%; overflow: visible; width: 1px; height: 1px;">
                    <path d="M -10,0 L -40,0 L -40,30" fill="none" stroke="url(#calloutGradient)" stroke-width="1.5"/>
                    <circle cx="-10" cy="0" r="4" fill="#807DFE"/>
                    <circle cx="-40" cy="30" r="4" fill="#01033E"/>
                  </svg>
                </div>
              </div>
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
            <img src="images/finance.webp" alt="Finance Module Interface" class="module-image">
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
            <img src="images/sales.webp" alt="Sales Module Interface" class="module-image">
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
            <img src="images/hr.webp" alt="HR Module Interface" class="module-image">
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
            <img src="images/project.webp" alt="Projects Module Interface" class="module-image">
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
            <img src="images/documents.webp" alt="Documents Module Interface" class="module-image">
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
