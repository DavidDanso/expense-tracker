import { useTransaction } from "../context/TransactionContext";
import "./Header.css";
import Card from "./Card";

const Header = () => {
  const { totalIncome, totalExpense, currentMonth } = useTransaction();

  const monthlyBudget = totalIncome - totalExpense;
  const sign = monthlyBudget > 0 ? "+" : "";

  const formatCurrency = (value) => `${value.toLocaleString()}.00`;

  return (
    <div className="header">
      <div className="row">
        <Card
          title={`${currentMonth} Budget`}
          icon="./images/calendar.svg"
          value={`${sign}${formatCurrency(monthlyBudget)}`}
          icon_="./images/pie-chart-outline.svg"
        />
        <Card
          title="Income"
          icon="./images/trending-1.svg"
          value={`+${formatCurrency(totalIncome)}`}
          icon_="./images/cash-outline.svg"
        />
        <Card
          title="Expense"
          icon="./images/trending-3.svg"
          value={`-${formatCurrency(totalExpense)}`}
          icon_="./images/pulse-outline.svg"
        />
      </div>
    </div>
  );
};

export default Header;
