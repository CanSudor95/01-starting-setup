import "./ExpenseItem.css";
import react, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseDate.css";
import Cards from "../UI/Cards";

function ExpenseItem(props) {
  //let title= props.title;
  //title iki kere deklerasyonda kullanılamaz

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    console.log("Clicked!");
    setTitle("Updated!");
  };

  const [year, setYear] = useState("2020");

  return (
    <Cards className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title} </h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Cards>
  );
}

export default ExpenseItem;
