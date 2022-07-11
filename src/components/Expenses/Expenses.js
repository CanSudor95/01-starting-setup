import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Cards from "../UI/Cards";
import ExpensesFilter from "./ExpensesFilter";
function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (SelectedYear) => {
    setFilteredYear(SelectedYear);
    //filteredYear console.log'da gözükmez çünkü async çalıştığı için işlem, setFilteredYear işlemi oluncaya kadar sonuç filterede year gösterir, yani önceki değeri
    console.log(SelectedYear);
  };
  return (
    <div>
      <Cards className="expenses">
        <ExpensesFilter
          selectedYear={filteredYear}
          onSelectedYear={filterChangeHandler}
        />
        <ExpenseItem
          title={props.expenses[0].title}
          amount={props.expenses[0].amount}
          date={props.expenses[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[1].title}
          amount={props.expenses[1].amount}
          date={props.expenses[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[2].title}
          amount={props.expenses[2].amount}
          date={props.expenses[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={props.expenses[3].title}
          amount={props.expenses[3].amount}
          date={props.expenses[3].date}
        ></ExpenseItem>
      </Cards>
    </div>
  );
}

export default Expenses;
