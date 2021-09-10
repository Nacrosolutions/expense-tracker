import { useState } from 'react';
import Card from './Card';
import ExpensesFilter from './ExpenseFilter/ExpensesFilter';
import ExpenseItem from './ExpenseItem';

import './Expenses.css';

function ExpenseNew(props) {

  const [intValue, finValue] = useState('2020');

  const filterChangeHandler = (year) => {

    finValue(year);


  }


  const filterExpense = props.expenses.filter(expense => {
    return expense.date.getFullYear().toString() === intValue;
  })
  console.log(intValue);


  return (
    <div>
      {/* {console.log(props.expenses.filter())} */}
      <Card className="expenses">
        <ExpensesFilter onFilter={filterChangeHandler} selected={intValue} />
        {filterExpense.map(expenses => <ExpenseItem key={expenses.id} title={expenses.title} amount={expenses.amount} date={expenses.date} />)}
        {/* <ExpenseItem title={props.expenses[0].title} amount={props.expenses[0].amount} date={props.expenses[0].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[1].title} amount={props.expenses[1].amount} date={props.expenses[1].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[2].title} amount={props.expenses[2].amount} date={props.expenses[2].date}></ExpenseItem>
        <ExpenseItem title={props.expenses[3].title} amount={props.expenses[3].amount} date={props.expenses[3].date}></ExpenseItem> */}


      </Card>
    </div>
  )

}


export default ExpenseNew;