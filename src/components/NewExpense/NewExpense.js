

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
  }


  return (
    <div className="new-expense">

      <ExpenseForm
        onSaveExpense={saveExpenseHandler}
      ></ExpenseForm>

    </div>
  )

}



export default NewExpense;