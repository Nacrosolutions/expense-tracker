import { useState } from 'react';

import './ExpenseForm.css';
function ExpenseForm(props) {

  const [enterTitle, setEnterTitle] = useState('');
  const [enterAmount, setAmount] = useState('');
  const [enterDate, setDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };


  const amountChangeHandler = (event) => {
    setAmount(event.target.value)
  };

  const dateChangeHandler = (event) => {
    setDate(event.target.value)
  };


  const submitchangeHandler = (event) => {
    event.preventDefault();


    const expenseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate)

    };


    props.onSaveExpense(expenseData);
    setEnterTitle('');
    setAmount('');
    setDate('');


  }

  return (

    <form onSubmit={submitchangeHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enterTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountChangeHandler} />
        </div>
        <div className="new-expense__control" >
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-01-01" value={enterDate} onChange={dateChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit"> Add Expense</button>
      </div>
    </form>
  )

}

export default ExpenseForm;