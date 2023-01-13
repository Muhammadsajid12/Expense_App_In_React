// import logo from "./logo.svg";

import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
import React, { useState } from "react";
import Card from "./component/UI/Card";
import Item from "./component/UI/Item";
import "./App.css";
// import "./App.css";
const Dummy_Data = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94,
    date: new Date(2020, 5, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e5",
    title: "New Book (Science)",
    amount: 40,
    date: new Date(2022, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Data);

  const addExpenseHandler = (expense) => {
    setExpenses((Prevexpense) => {
      return [expense, ...Prevexpense];
    });
  };

  return (
    <div className="app">
      <div className="inner">
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses item={expenses} />
      </div>
    </div>
  );
};

export default App;
