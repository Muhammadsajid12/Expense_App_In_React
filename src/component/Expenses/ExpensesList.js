import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback"> Expenses is not fund</h2>;
    console.log(props.item);
  }

  // Checking the filtered array have data aur not....

  return (
    <ul className="expenses-list">
      {props.item.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
          key={expense.id}
        />
      ))}
      
    </ul>
  );
};

export default ExpensesList;
