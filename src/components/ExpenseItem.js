
// import ExpenseDate from './ExpenseDate';
import Card from './Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

import React, { useState } from 'react';

function ExpenseItem(props) {

  const [title, setTitle] = useState(props.title);


  function changeTitle() {

    setTitle('nabham')
    console.log(title)
  }


  return (
    <Card className="expense-item">
      <div>
        <ExpenseDate date={props.date} />
      </div>
      <div className="expense-item__description"><h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div> </div>

      <button onClick={changeTitle}>Click Me!</button>
    </Card>
  )
}

export default ExpenseItem;