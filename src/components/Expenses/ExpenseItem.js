import React from 'react';
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from '../UI/Card';
function ExpenseItem(props) {
  const expenseDate = new Date(2022, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = "244.33";

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} amount={props.amount} title={props.title}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </Card>
  );
}
export default ExpenseItem;
