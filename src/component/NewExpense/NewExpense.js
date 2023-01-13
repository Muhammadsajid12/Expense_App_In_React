import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  //Here is the state use to reset the value (True).UseState agian render the component....
  const [isEditing, setEditing] = useState(false);
  const SaveExpenseDataHandler = (enteredData) => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredData, // This Data we found from child FormComponent....
    };
    // Here we false the value for forn add-expense btn......
    setEditing(false);

    // console.log(expenseData);
    props.onAddExpense(expenseData);
  };
  const startEditingHandler = () => {
    // Here we seting the value is true
    setEditing(true);
  };
  const onCancel = () => {
    setEditing(false);
  };
  return (
    <div className="new-expense ">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add-Expenses</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={onCancel}
        />
      )}
    </div>
  );
};

export default NewExpense;
