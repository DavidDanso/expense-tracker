import { useTransaction } from "../context/TransactionContext";
import "./IncomeCard.css";

export default function IncomeCard() {
  const { incomeTransactions, deleteTransaction } = useTransaction();

  return (
    <div className="income--card">
      <h1>
        Income
        <img
          src="./images/trending-1.svg"
          className="card_icons"
          alt="card_icons"
        />
      </h1>
      <div className="card">
        <div className="card-body">
          {incomeTransactions.length < 1 ? (
            <h6 className="text-center no-data--txt">No data available yet</h6>
          ) : (
            <div className="row">
              {incomeTransactions.map((transaction) => (
                <div className="col-md-12" key={transaction.id}>
                  <div id="individaul--card">
                    <div className="card">
                      <div className="card-body">
                        <h2 className="truncate">
                          {transaction.description}
                          <span>
                            +{Number(transaction.amount).toLocaleString()}.00
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
