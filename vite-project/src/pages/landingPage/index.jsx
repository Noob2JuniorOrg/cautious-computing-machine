import './index.css';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { LeaderSection } from './components/LeaderSection';
import { CreationsSection } from './components/CreationsSection';

export const LandingPage = () => {
  return (
    <div className="LandingPage">
      <header className="bg-no-repeat bg-cover p-12 white main-header">
        <Header />
      </header>
      <main className=" my-24 mx-auto">
        <LeaderSection />
        <CreationsSection />
      </main>
      <footer className="font-josefinSans white bg-black">
        <Footer />
      </footer>
    </div>
  );
};
