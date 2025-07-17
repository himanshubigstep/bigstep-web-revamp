
'use client';

import Header from './Header';
import CaseStudyHero from './CaseStudyHero';
import ClientOverview from './ClientOverview';
import ProjectObjective from './ProjectObjective';
import SolutionApproach from './SolutionApproach';
import KeyFeatures from './KeyFeatures';
import Results from './Results';
import TechStack from './TechStack';
import Testimonial from './Testimonial';
import WhyUs from './WhyUs';
import ContactCTA from './ContactCTA';
import Footer from './Footer';

export default function CaseStudyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <CaseStudyHero />
      <ClientOverview />
      <ProjectObjective />
      <SolutionApproach />
      <KeyFeatures />
      <Results />
      <TechStack />
      <Testimonial />
      <WhyUs />
      <ContactCTA />
      <Footer />
    </div>
  );
}
