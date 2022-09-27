import "./ExpenseItem.css";

function ExpenseItem(props) {
  // const expenseDate = new Date(2022, 3, 27);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 2400000;

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const year = props.date.toLocaleString("en-US", { day: "2-digit" });
  const day = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">Rp{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
