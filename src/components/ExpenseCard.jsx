import { useTransaction } from "../context/TransactionContext";
import "./ExpenseCard.css";

export default function ExpenseCard() {
  const { deleteTransaction, expenseTransactions } = useTransaction();

  //
  return (
    <div className="expense--card">
      <h1>
        Expense
        <img
          src="./images/trending-3.svg"
          className="card_icons"
          alt="card_icons"
        />
      </h1>
      <div className="card">
        <div className="card-body">
          {expenseTransactions.length < 1 ? (
            <h6 className="text-center no-data--txt">No data available yet</h6>
          ) : (
            <div className="row">
              {expenseTransactions.map((transaction) => (
                <div className="col-md-12" key={transaction.id}>
                  <div id="individaul--card">
                    <div className="card">
                      <div className="card-body">
                        <h2>
                          {transaction.description}
                          <span>
                            -{Number(transaction.amount).toLocaleString()}.00
                          </span>
                        </h2>

                        <h6>
                          {transaction.dateAdded}
                          <span
                            onClick={() => deleteTransaction(transaction.id)}
                          >
                            <img
                              src="./images/trash.svg"
                              className="card_icons"
                              alt="card_icons"
                            />
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      {/* end card */}
    </div>
  );
}
