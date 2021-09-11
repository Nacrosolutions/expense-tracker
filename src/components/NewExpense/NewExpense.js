

import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense(props) {

  const saveExpenseHandler = (expenseData) => {



    const expenseValue =
    {
      ...expenseData,
      id: Math.round(Math.random().toString())


    }
    props.onAddExpense(expenseValue);
    setEditing(false);
  }


  const [isEditing, setEditing] = useState(false);
  const expenseHandler = () => {
    setEditing(!isEditing);
  }

  const cancelExpenseHandler = () => {
    setEditing(false);
  }


  return (
    <div className="new-expense">

      {!isEditing && <button onClick={expenseHandler}>Add new Expense</button>}
      {isEditing && <ExpenseForm onSaveExpense={saveExpenseHandler} onCancel={cancelExpenseHandler} ></ExpenseForm>}


    </div>
  )

}



export default NewExpense;