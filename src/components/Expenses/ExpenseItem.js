import "./ExpenseItem.css";
import react, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDate.css";
import Cards from "../UI/Cards";

function ExpenseItem(props) {
  const [year, setYear] = useState("2020");

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Cards>
  );
}

export default ExpenseItem;
