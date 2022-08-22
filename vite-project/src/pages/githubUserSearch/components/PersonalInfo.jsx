export const PersonalInfo = (props) => {
  return (
    <>
      <div className="flex justify-between">
        <div className="personal-info">
          <h2 className="text-800 m-0 text-3xl">
            {props.name ? props.name : 'The Octocat'}
          </h2>
          <p className="mt-0 text-lg">
            {props.username ? `@${props.username}` : '@octocat'}
          </p>
        </div>
        <p className="mt-0 text-600 text-lg">
          Joined {props.joined ? props.joined : '25 Jan 2011'}
        </p>
      </div>
      <p className="bio not-active">
        {props.bio
          ? props.bio
          : 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.'}
      </p>
    </>
  );
};
