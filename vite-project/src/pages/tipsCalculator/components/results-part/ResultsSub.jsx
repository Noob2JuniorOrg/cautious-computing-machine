export const ResultsSub = (props) => {
  let title;
  if (props.type === 'tip-amount') {
    title = 'Tip Amount';
  } else {
    title = 'Total';
  }
  return (
    <div className="flex items-center justify-between">
      <div>
        <p className="text-base font-bold m-0 text-white">{title}</p>
        <p className="text-xs m-0 text-veryLightBlue">/ person</p>
      </div>
      <div className="flex items-center font-bold text-mediumBlue my-2.5 text-4xl">
        {props.type === 'tip-amount' && (
          <TipAmountContainer tipAmount={props.tipAmount} />
        )}
        {props.type === 'total-price' && (
          <TotalPriceContainer totalPrice={props.totalPrice} />
        )}
      </div>
    </div>
  );
};

const TotalPriceContainer = (props) => {
  return (
    <>
      {props.totalPrice > 0 ? (
        <p
          className={`${props.type} flex items-center font-bold text-mediumBlue my-2.5 text-4xl`}
        >
          {props.totalPrice}
        </p>
      ) : (
        <p
          className={`${props.type} flex items-center font-bold text-mediumBlue my-2.5 text-4xl`}
        >
          0.00
        </p>
      )}
    </>
  );
};

const TipAmountContainer = (props) => {
  return (
    <>
      {props.tipAmount > 0 ? (
        <p
          className={`${props.type} flex items-center font-bold text-mediumBlue my-2.5 text-4xl`}
        >
          {props.tipAmount}
        </p>
      ) : (
        <p
          className={`${props.type} flex items-center font-bold text-mediumBlue my-2.5 text-4xl`}
        >
          0.00
        </p>
      )}
    </>
  );
};
