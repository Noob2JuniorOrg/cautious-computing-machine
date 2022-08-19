import { ArticleItemDesktop } from './ArticleItemDesktop';
import { ArticleItemMobile } from './ArticleItemMobile';
import { data } from '../data';

export const CreationsSection = () => {
  return (
    <section className="creations-section">
      <header className="flex justify-between mt-12 beige">
        <h2 className="uppercase text-3xl font-light justify-between font-josefinSans tracking-wider">
          Our creations
        </h2>
        <button className="uppercase text-xs self-end cursor-pointer py-1 px-5 border border-solid border-black bg-white outline-none  hover:text-white hover:bg-black">
          See all
        </button>
      </header>
      <main className="flex flex-wrap justify-start">
        <div className="flex flex-wrap justify-between mt-8">
          {data.map((el) => (
            <ArticleItemDesktop data={el} />
          ))}
        </div>

        <div className="hidden">
          <ArticleItemMobile />
        </div>
      </main>

      <button className="hidden my-0 mx-auto uppercase text-xs self-end cursor-pointer py-1 px-5 border border-solid border-black outline-none bg-white hover:text-white hover:bg-black">
        See all
      </button>
    </section>
  );
};
