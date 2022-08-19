export const ArticleItemDesktop = (props) => {
  return (
    <article class="mb-8 relative creations-section-article">
      <a href="#">
        <h3 className="font-light text-2xl absolute uppercase font-josefinSans text-white left-7 bottom-2.5 z-1 w-9/12">
          {props.data.title}
        </h3>
        <div class="w-56">
          <img src={props.data.image} alt="deep-earth" className="w-full" />
        </div>
      </a>
    </article>
  );
};
