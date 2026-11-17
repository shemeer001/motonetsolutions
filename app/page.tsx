import Header from './components/header';
import HeroSection from './components/hero-section';
import ServicesSection from './components/services-section';
import InsuranceCarousel from './components/insurance-carousel';
import VehicleShowcase from './components/vehicle-showcase';
import HealthInsuranceSection from './components/health-insurance-section';
import AboutSection from './components/about-section';
import ContactSection from './components/contact-section';
import Footer from './components/footer';
import GeometricBg from './components/geometric-bg';
import WhatsAppFab from './components/whatsapp-fab';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-background overflow-x-hidden">
      <GeometricBg />
      <Header />
      <HeroSection />
      <ServicesSection />
      <InsuranceCarousel />
      <VehicleShowcase />
      <HealthInsuranceSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
