/* eslint-disable react/prop-types */
import { useState } from "react";
import { useTransaction } from "../context/TransactionContext";
import "./Form.css";

export default function Form() {
  const { addTransaction } = useTransaction();
  const [formData, setFormData] = useState({
    description: "",
    amount: "",
    transactionType: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: name === "amount" ? Number(value) : value,
    }));
  };

  const handleTransaction = (e) => {
    e.preventDefault();
    const { description, amount, transactionType } = formData;
    if (!description || !amount || !transactionType) return;

    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

    const newTransaction = {
      description,
      amount,
      transactionType,
      dateAdded: formattedDate,
      id: Date.now(),
    };

    addTransaction(newTransaction);
    setFormData({
      description: "",
      amount: "",
      transactionType: "",
    });
  };

  const handleClearField = () => {
    setFormData({
      description: "",
      amount: "",
      transactionType: "",
    });
  };

  return (
    <div className="form">
      <hr />
      <form onSubmit={handleTransaction}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Add a description"
                name="description"
                value={formData.description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-4 col-md-2">
            <div className="mb-3">
              <input
                type="number"
                className="form-control"
                placeholder="0.00"
                name="amount"
                value={formData.amount}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <div className="col-8 col-md-4">
            <select
              className="form-select"
              value={formData.transactionType}
              onChange={handleInputChange}
              name="transactionType"
            >
              <option value="">Income / Expenses</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-md-8">
            <div className="d-grid gap-2">
              <button className="btn submit--btn" type="submit">
                Record Expense / Submit Cost
              </button>
            </div>
          </div>

          <div className="col-md-4">
            <div className="d-grid gap-2">
              <button
                className="btn clear--btn"
                type="button"
                onClick={handleClearField}
              >
                Clear Fields
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
