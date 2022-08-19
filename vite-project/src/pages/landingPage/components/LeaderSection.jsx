import imageInteractive from '../assets/desktop/imageInteractive.jpg';

export const LeaderSection = () => {
  return (
    <section className="flex relative items-end px-24">
      <div className="w-[600px]">
        <img src={imageInteractive} alt="interactive" className="w-full" />
      </div>
      <div className="p-16 absolute font-josefinSans w-[500px] bg-white -bottom-7 right-24">
        <h2 className="uppercase text-4xl font-light tracking-wider ">
          The leader in interactive VR
        </h2>
        <p className="text-beige font-semibold">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </p>
      </div>
    </section>
  );
};
