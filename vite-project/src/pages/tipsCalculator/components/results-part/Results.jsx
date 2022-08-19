// import '../CalculationStyles.css';
import { ResultsSub } from './ResultsSub';
import { useEffect, useState } from 'react';

export const CalculationsResults = (props) => {
  const [tipAmount, setTipAmount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (props.percent && props.billNumberInput && props.peopleNumberInput) {
      const percent = props.percent;
      const billValue = props.billNumberInput;
      const people = props.peopleNumberInput;

      const tipAmount = (billValue * (percent / 100)) / people;
      const total = (billValue + tipAmount * people) / people;
      setTipAmount(tipAmount.toFixed(2));
      setTotalPrice(total.toFixed(2));
      return;
    }
  }, [props.percent, props.billNumberInput, props.peopleNumberInput]);

  const reset = () => {
    setTipAmount(0);
    setTotalPrice(0);
  };

  return (
    <article className="flex flex-col justify-between text-white p-8 bg-veryDarkBlue rounded-b-2xl w-80">
      <div className="results-article-main">
        <ResultsSub type="tip-amount" tipAmount={tipAmount} />
        <ResultsSub type="total-price" totalPrice={totalPrice} />
      </div>
      <button
        className="w-full uppercase rounded text-base font-bold p-2 mb-0 cursor-pointer border-none bg-mediumBlue disabled"
        // onClick={() => {
        //   props.resetForm();
        //   reset();
        // }}
        onClick={() => props.setIsReset(true)}
      >
        Reset
      </button>
    </article>
  );
};
