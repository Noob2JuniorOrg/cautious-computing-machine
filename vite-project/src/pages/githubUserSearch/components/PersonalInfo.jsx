export const PersonalInfo = () => {
  return (
    <>
      <div className="flex justify-between">
        <div className="personal-info">
          <h2 className="text-gray-800 m-0 text-3xl">The Octocat</h2>
          <p className="mt-0 text-blue-600 text-lg">@octocat</p>
        </div>
        <p className="mt-0 text-blue-600 text-lg">Joined 25 Jan 2011</p>
      </div>
      <p className="bio not-active">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio.
        Quisque volutpat mattis eros.
      </p>
    </>
  );
};
