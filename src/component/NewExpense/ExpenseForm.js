import React, { useState } from "react";

import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  // TitleChangeHandler
  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  // AmountChangeHandler
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };
  // DateChangeHandler
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  //SubmitHandler
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    console.log(expenseData);

    // console.log(expenseData);
    //   Here we Giving the data to upperlevel component...
    props.onSaveExpenseData(expenseData);
    setTitle("");
    setAmount("");
    setDate("");
  };

  return (
    <div className="top">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-02-09"
              max="2025-04-02"
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div>
          <button type="button" onClick={props.onCancel}>
            Cancel
          </button>

          <button type="submit" className=" new-expense__actions">
            Add-ExpenseI
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpenseForm;
