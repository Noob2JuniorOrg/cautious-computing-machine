import './components/CalculationStyles.css';
import { Calculations } from './components/calculations-part/Calculations';
import { CalculationsResults } from './components/results-part/Results';
import { useState } from 'react';
import { useEffect } from 'react';

const value = {
  percent: '',
  billNumberInput: 0,
  peopleNumberInput: 0,
  tipAmount: 0,
  totalPrice: 0,
};

export default function TipsCalculator() {
  const [percent, setPercent] = useState('');
  const [billNumberInput, setBillNumberInput] = useState(0);
  const [peopleNumberInput, setPeopleNumberInput] = useState(0);
  const [initialValue, setInitialValue] = useState(value);
  const [isReset, setIsReset] = useState(false);

  useEffect(() => {
    if (isReset === true) {
      setPercent('');
      setBillNumberInput(0);
      setPeopleNumberInput(0);
    }
  }, [isReset, percent, billNumberInput, peopleNumberInput]);

  return (
    <div className="TipsCalculator">
      <h2>Tips Calculator</h2>
      <section className="flex justify-center p-12 my-12 rounded-2xl">
        <Calculations
          percent={percent}
          billNumberInput={billNumberInput}
          peopleNumberInput={peopleNumberInput}
          setPercent={setPercent}
          setBillNumberInput={setBillNumberInput}
          setPeopleNumberInput={setPeopleNumberInput}
          initialValue={initialValue}
        />
        <CalculationsResults
          percent={percent}
          billNumberInput={billNumberInput}
          peopleNumberInput={peopleNumberInput}
          setPercent={setPercent}
          setBillNumberInput={setBillNumberInput}
          setIsReset={setIsReset}
          setInitialValue={setInitialValue}
        />
      </section>
    </div>
  );
}
