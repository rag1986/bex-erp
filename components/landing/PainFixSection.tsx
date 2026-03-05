const painFixInnerHtml = `
  <div class="container">
    <div class="banner">
      <div class="left">
        <p class="label">The Pain</p>
        <h1 class="pain-title-a">
          When systems<br>
          don't talk, leadership
          doesn't see.
        </h1>

        <p class="pain-body-a">
          Disconnected tools create blind spots across finance,
          people, and operations.
        </p>

        <div class="eye-default">
          <img src="images/thepain.svg" alt="">
        </div>

        <div class="hover-content">
          <div style="height:28px; flex-shrink:0;"></div>

          <h1 class="pain-title-b">
            Disconnected systems create
            invisible risks.
          </h1>

          <p class="pain-body-b">
            When finance, HR, sales, and operations run on separate tools, leadership loses
            real-time visibility. Reports arrive late. Data conflicts. Decisions are made with
            partial information.
          </p>

          <div class="hover-bottom">
            <div class="eye-small-wrap">
              <img src="images/thepain.svg" alt="">
            </div>

            <ul class="pain-bullets">
              <li>Financial reports don't match operational reality</li>
              <li>Manual consolidation wastes leadership time</li>
              <li>Risks surface only after impact</li>
              <li>Growth increases complexity instead of clarity</li>
            </ul>
          </div>
        </div>

        <div class="left-image2">
          <p class="pain-label-i2">The Pain</p>
          <h1 class="pain-title-i2">
            This is what<br>you leave<br>behind.
          </h1>
          <div class="eye-i2-wrap">
            <img src="images/thepain.svg" alt="">
          </div>
        </div>
      </div>

      <div class="right">
        <div class="right-default">
          <p class="fix-label">The Fix</p>
          <h2 class="fix-title-default">
            One system. One<br>source of truth.
          </h2>
          <p class="fix-body-default">
            BEX ERP connects every function, giving leaders clarity in real time.
          </p>
          <div class="bex-card-default">
            <div class="bex-logotype">
              <img src="images/logo.svg" alt="">
            </div>
          </div>
        </div>

        <div class="right-hover">
          <p class="fix-label">The Fix</p>
          <h2 class="fix-title-hover">
            There's a<br>better way
          </h2>
          <div class="bex-card-hover">
            <div class="bex-logotype">
              <img src="images/logo.svg" alt="">
            </div>
          </div>
        </div>

        <div class="right-image2">
          <div class="deco-bands">
            <svg width="100%" height="100%" viewBox="0 0 260 460" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMaxYMid meet" aria-hidden="true">
              <path d="M160,0 L260,0 L260,200 Z" fill="rgba(70,80,180,0.18)" />
              <path d="M200,0 L260,0 L260,120 Z" fill="rgba(80,90,200,0.14)" />
              <path d="M260,280 L260,460 L80,460 Z" fill="rgba(50,60,160,0.2)" />
              <path d="M260,360 L260,460 L160,460 Z" fill="rgba(60,70,180,0.15)" />
            </svg>
          </div>

          <p class="fix-label-i2">The Fix</p>

          <h2 class="fix-title-i2">
            Leadership clarity starts with<br>one system.
          </h2>

          <p class="fix-body-i2">
            BEX ERP unifies finance, people, and operations into a single on-premise platform,
            giving leaders a complete, real-time view of the business.
          </p>

          <ul class="fix-bullets-i2">
            <li>Real-time financial and operational visibility</li>
            <li>One source of truth across departments</li>
            <li>Faster, confident decision-making</li>
            <li>Secure, on-premise control of business data</li>
          </ul>

          <button class="cta-btn">Request a Live Demo</button>
        </div>
      </div>
    </div>
  </div>
`;

export function PainFixSection() {
  return <div className="pain-fix-section" dangerouslySetInnerHTML={{ __html: painFixInnerHtml }} />;
}
