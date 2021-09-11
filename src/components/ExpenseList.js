import ExpenseItem from "./ExpenseItem";

import './ExpenseList.css';
const ExpenseList = (props) => {

  if (props.expense.length === 0) {
    return (<h2 className="expenses-list__fallback">No expense Found</h2>)
  }


  return (
    <ul className="expenses-list">
      {
        props.expense.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)

      }

    </ul>
  )


}




export default ExpenseList;