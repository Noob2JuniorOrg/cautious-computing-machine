import './index.css';
import { LandingSection } from './components/LandingSection';
import { Navigation } from './components/Navigation';
import { SubHeader } from './components/SubHeader';
import { Footer } from './components/Footer';

export default function LandingPageEz() {
  return (
    <div className="LandingPageEz">
      <header>
        <Navigation />
        <SubHeader />
      </header>
      <main>
        <LandingSection />
      </main>
      <footer className="flex justify-between text-base leading-6 p-7">
        <Footer />
      </footer>
    </div>
  );
}
