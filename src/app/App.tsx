import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { Features } from "./components/Features";
import { Integrations } from "./components/Integrations";
import { CaseStudies } from "./components/CaseStudies";
import { HowItWorks } from "./components/HowItWorks";
import { Pricing } from "./components/Pricing";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Toaster />
      <Navigation />
      <Hero />
      <Integrations />
      <Services />
      <Features />
      <CaseStudies />
      <div id="how-it-works">
        <HowItWorks />
      </div>
      <Pricing />
      <div id="features">
        {/* Anchor for features section */}
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
}