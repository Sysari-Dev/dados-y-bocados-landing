import HeroSection from '../components/sections/HeroSection';
import ExperienceSection from '../components/sections/ExperienceSection';
import MenuSection from '../components/sections/MenuSection';
import GamesSection from '../components/sections/GamesSection';
import ContactSection from '../components/sections/ContactSection';

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <MenuSection />
      <GamesSection />
      <ExperienceSection />
      <ContactSection />
    </div>
  );
}