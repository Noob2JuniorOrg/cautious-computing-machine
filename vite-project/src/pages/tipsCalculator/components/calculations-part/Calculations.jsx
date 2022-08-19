import { NumberInputContainer } from './NumberInputContainer';
import { PercentsBtn } from './PercentsBtn';
import { CustomButton } from './CustomButton';
import { useEffect } from 'react';

export const Calculations = (props) => {
  const percentsValuesArr = [5, 10, 15, 25, 50];

  useEffect(() => {
    // props.setBillNumberInput(0);
    // props.setPeopleNumberInput(0);
  }, [props.billNumberInput, props.peopleNumberInput]);

  const getBillNumberInput = (data) => {
    props.setBillNumberInput(data);
  };

  const getPeopleNumberInput = (data) => {
    props.setPeopleNumberInput(data);
  };

  const getPercentsValue = (data) => {
    const splitted = data.split('');
    splitted.pop();
    props.setPercent(splitted.join(''));
  };

  return (
    <article className="flex flex-col mb-6 mx-6">
      <NumberInputContainer
        type="bill"
        billNumberFunc={getBillNumberInput}
        value={props.billNumberInput}
      />

      <div className="flex flex-col my-6">
        <label>Select Tip %</label>
        <div className="grid grid-rows-2 grid grid-cols-3 gap-4">
          {percentsValuesArr.map((el) => (
            <PercentsBtn key={el} value={el} percentsFunc={getPercentsValue} />
          ))}
          <CustomButton />
        </div>
      </div>

      <NumberInputContainer
        type="people"
        peopleNumberFunc={getPeopleNumberInput}
        value={props.peopleNumberInput}
      />
    </article>
  );
};
