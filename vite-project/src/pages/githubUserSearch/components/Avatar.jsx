export const Avatar = (props) => {
  return (
    <div className="w-40 inline-flex bg-gray-100 rounded-full py-3.5">
      <img
        src={props.avatar ? props.avatar : 'logo must be here'}
        alt="logo"
        className="w-full"
      />
    </div>
  );
};
