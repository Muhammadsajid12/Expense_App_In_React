import React from "react";
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "../Expenses/ExpenseDate";

const ExpenseItem = (props) => {
  // The component which have no state manage its called stateless component or dom component....
  // console.log(props);
  return (
    <Card className="expense-item">
      {/*  ExpenseDate is a component  */}
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount} </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
