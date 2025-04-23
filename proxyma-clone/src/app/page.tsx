import Layout from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
import FeaturesSection from '@/components/home/FeaturesSection';
import AdvantagesSection from '@/components/home/AdvantagesSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import GlobalNetworkSection from '@/components/home/GlobalNetworkSection';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <AdvantagesSection />
      <PricingSection />
      <GlobalNetworkSection />
      <TestimonialsSection />
    </Layout>
  );
}
