import { LandingImage } from './LandingImage';
import { Article } from './Article';
import phone from '../assets/illustration-app.png';

export const LandingSection = () => {
  return (
    <section className="bg-black relative my-64 rounded-xl">
      <div class="absolute w-72 -top-36 left-24">
        <img src={phone} className="w-full" />
      </div>

      <LandingImage />
      <Article />
    </section>
  );
};
