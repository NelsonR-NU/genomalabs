import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import CardSection from '@/components/cardSection';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import Writings from '@/components/sections/writings';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Writings/>
      <Features />
      <CardSection />
      <Testimonials />
      <Footer />
    </div>
  );
}
