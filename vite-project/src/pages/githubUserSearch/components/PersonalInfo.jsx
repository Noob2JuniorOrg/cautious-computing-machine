export const PersonalInfo = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="personal-info">
          <h2 className=" m-0 text-3xl">The Octocat</h2>
          <p className="mt-0 text-lg">@octocat</p>
        </div>
        <p className="mt-0 text-lg">Joined 25 Jan 2011</p>
      </div>
      <p className="bio not-active">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </>
  );
};
