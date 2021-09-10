import { useState } from 'react';
import './App.css';

import ExpenseNew from './components/ExpenseNew';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {


  const [prevExpense, setExpense] = useState(DUMMY_EXPENSES);


  const addChangeHandler = (newExpense) => {

    console.log("New Expense is", newExpense);
    setExpense(prevExpense => {
      return [newExpense, ...prevExpense]
    });

  }



  return (
    <div className="App">
      <p>gge</p>
      <div>
        <NewExpense onAddExpense={addChangeHandler}></NewExpense>
        <ExpenseNew expenses={prevExpense}></ExpenseNew>
      </div>
    </div>

  );
}

export default App;
