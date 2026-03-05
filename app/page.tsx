import Script from 'next/script';
import { DemoSection, InsightsSection, LeadersSection, PosilenzSection } from '../components/landing/BottomSections';
import { OnPremiseSection, ModulesSection } from '../components/landing/CoreSections';
import { FooterSection } from '../components/landing/FooterSection';
import { PainFixSection } from '../components/landing/PainFixSection';
import { HeroSection, Navbar, TrustBarSection } from '../components/landing/TopSections';

export default function HomePage() {
  return (
    <>
      <main>
        <Navbar />
        <HeroSection />
        <TrustBarSection />
        <PainFixSection />
        <OnPremiseSection />
        <ModulesSection />
        <InsightsSection />
        <LeadersSection />
        <PosilenzSection />
        <DemoSection />
        <FooterSection />
      </main>
      <Script src="/js/script.js" strategy="afterInteractive" />
    </>
  );
}
