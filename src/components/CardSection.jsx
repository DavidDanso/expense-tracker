import IncomeCard from "./IncomeCard";
import "./CardSection.css";
import ExpenseCard from "./ExpenseCard";

export default function CardSection() {
  return (
    <div className="card--section">
      <hr />
      <div className="row">
        <div className="col-md-6">
          <IncomeCard />
        </div>
        {/* end col */}

        <div className="col-md-6">
          <ExpenseCard />
        </div>
        {/* end col */}
      </div>
      {/* end row */}
    </div>
  );
}
