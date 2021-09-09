import { useState } from 'react';

import './ExpenseForm.css';
function ExpenseForm() {

  // const [enterTitle, setEnterTitle] = useState('');
  // const [enterAmount, setAmount] = useState('');
  // const [enterDate, setDate] = useState('');


  const [userInput, setUserInput] = useState({
    enterTitle: '',
    enterAmount: '',
    enterDate: ''
  });


  const titleChangeHandler = (event) => {
    // setEnterTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enterTitle :event.target.value,
    // })

    setUserInput(((prevState) => {
      return {
        ...prevState,
        enterTitle: event.target.value
      }
    }));

  };


  const amountChangeHandler = (event) => {
    // setAmount(event.target.value)

    setUserInput(((prevState) => {
      return {
        ...prevState,
        enterAmount: event.target.value
      }
    }));
  };


  const dateChangeHandler = (event) => {
    // setDate(event.target.value)
    setUserInput(((prevState) => {
      return {
        ...prevState,
        enterDate: event.target.value
      }
    }));
  };

  return (

    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control" onChange={dateChangeHandler}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-01-01" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  )

}

export default ExpenseForm;