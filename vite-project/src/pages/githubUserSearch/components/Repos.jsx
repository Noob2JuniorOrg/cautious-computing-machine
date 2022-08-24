export const Repos = (props) => {
  return (
    <section className="flex bg-gray-100 justify-start rounded-lg py-5 px-9 gap-10">
      <div>
        <p className="m-0 text-blue-700">Repos</p>
        <p className="m-0 font-bold text-3xl text-gray-800">
          {props.repos ? props.repos : 23}
        </p>
      </div>
      <div>
        <p className="m-0 text-blue-700">Followers</p>
        <p className="m-0 font-bold text-3xl text-gray-800">
          {props.followers ? props.followers : 3333}
        </p>
      </div>
      <div>
        <p className="m-0 text-blue-700">Following</p>
        <p className="m-0 font-bold text-3xl text-gray-800">
          {props.following ? props.following : 1232}
        </p>
      </div>
    </section>
  );
};
