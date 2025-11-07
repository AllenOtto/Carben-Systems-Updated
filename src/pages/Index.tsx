import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Pricing from "@/components/Pricing";
import SystemFunctions from "@/components/SystemFunctions";
import Requirements from "@/components/Requirements";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <div id="features">
          <Features />
        </div>
        <div id="pricing">
          <Pricing />
        </div>
        <SystemFunctions />
        <Requirements />
        <div id="contact">
          <CTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
