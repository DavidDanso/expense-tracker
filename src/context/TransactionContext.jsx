/* eslint-disable react/prop-types */
import { createContext, useState, useEffect, useContext } from "react";

// Create a context
const TransactionContext = createContext();

// Create a provider component
const TransactionProvider = ({ children }) => {
  // Load transactions from localStorage on component mount
  const initialTransactions =
    JSON.parse(localStorage.getItem("transactions")) || [];

  //
  const [transactions, setTransactions] = useState(initialTransactions);

  // Save transactions to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  //
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [transaction, ...prevTransactions]);
  };

  //
  const deleteTransaction = (id) => {
    setTransactions((prevTransactions) =>
      prevTransactions.filter((transaction) => transaction.id !== id)
    );
  };

  //
  const getFilteredTransactions = (type) => {
    return transactions.filter(
      (transaction) => transaction.transactionType === type
    );
  };

  //
  const calculateTotalAmount = (filteredTransactions) => {
    return filteredTransactions.reduce(
      (sum, transaction) => sum + Number(transaction.amount),
      0
    );
  };

  //
  const currentMonth = new Intl.DateTimeFormat("en-US", {
    month: "long",
  }).format(new Date());

  //
  const incomeTransactions = getFilteredTransactions("income");
  const expenseTransactions = getFilteredTransactions("expense");

  //
  const totalIncome = calculateTotalAmount(incomeTransactions);
  const totalExpense = calculateTotalAmount(expenseTransactions);

  //
  return (
    <TransactionContext.Provider
      value={{
        addTransaction,
        deleteTransaction,
        currentMonth,
        totalIncome,
        totalExpense,
        expenseTransactions,
        incomeTransactions,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};

// Create a hook to use the context
const useTransaction = () => {
  const context = useContext(TransactionContext);
  if (!context) {
    throw new Error("useTransaction must be used within a TransactionProvider");
  }
  return context;
};

export { TransactionProvider, useTransaction };
