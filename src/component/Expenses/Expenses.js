import Card from "../UI/Card";
import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
// import { useState } from "react";
const Expenses = (props) => {
  const [filteredYear, setFilteredyear] = useState("2022");

  const filterChangeHandler = (selectedYear) => {
    setFilteredyear(selectedYear);
  };

  //Here we filtered the expenses on the base of selected year.........
  const filteredExpenses = props.item.filter((expenses) => {
    return expenses.date.getFullYear().toString() === filteredYear;
  });
  // console.log(filteredExpenses);

  return (
    <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />

        <ExpensesList item={filteredExpenses} />
        {/* {expenseExpressions} */}
        {/* <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        />
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        />
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        />

        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        /> */}
      </Card>
    </li>
  );
};

export default Expenses;
