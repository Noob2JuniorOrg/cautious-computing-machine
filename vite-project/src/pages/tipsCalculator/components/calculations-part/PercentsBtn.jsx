export const PercentsBtn = (props) => {
  const onPercentSelect = (e) => {
    props.percentsFunc(e.target.textContent);
  };

  return (
    <div
      className="rounded-md border-none text-white bg-veryDarkBlue hover:cursor-pointer hover:bg-mediumBlue text-2xl p-1 font-bold"
      disabled
      // value={`${props.value}%`}
      onClick={onPercentSelect}
    >
      {props.value}%
    </div>
  );
};
