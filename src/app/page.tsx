import Navbar from "@/components/sections/navbar";
import HeroSection from "@/components/sections/hero";
import WelcomeSection from "@/components/sections/welcome";
import ResortSlider from "@/components/sections/resort-slider";
import RoomsSuites from "@/components/sections/rooms-suites";
import SpaSection from "@/components/sections/spa-section";
import DiningMoments from "@/components/sections/dining-moments";
import SpecialOccasions from "@/components/sections/special-occasions";
import QuoteNewsletter from "@/components/sections/quote-newsletter";
import Footer from "@/components/sections/footer";
import LoaderWrapper from "@/components/ui/loader-wrapper";

export default function Home() {
  return (
    <LoaderWrapper>
      <div className="flex min-h-screen flex-col bg-background">
        <Navbar />
        <main className="flex-grow">
          <HeroSection />
          <WelcomeSection />
          <ResortSlider />
          <RoomsSuites />
          <SpaSection />
          <DiningMoments />
          <SpecialOccasions />
          <QuoteNewsletter />
        </main>
        <Footer />
      </div>
    </LoaderWrapper>
  );
}

