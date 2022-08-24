import octocat from '../assets/octocat.png';

export const Avatar = (props) => {
  return (
    <div className="w-40 inline-flex bg-gray-100 rounded-full">
      <img
        src={props.avatar ? props.avatar : octocat}
        alt="logo"
        className="w-full rounded-full"
      />
    </div>
  );
};
