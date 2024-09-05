import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Features from '@/components/features';
import CardSection from '@/components/cardSection';
import Footer from '@/components/footer';
import Testimonials from '@/components/testimonials';
import Writings from '@/components/sections/writings';
import Needs from '@/components/sections/needs';
import ContactUs from '@/components/sections/contactUs';
import AboutUs from '@/components/sections/aboutUs';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="scroll-smooth bg-[url('/bg.svg')] bg-cover">
        <Writings/>
        <Needs/>
        <ContactUs/>
        <AboutUs/>
      </div>
    </div>
  );
}
