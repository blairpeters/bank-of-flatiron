import React, { useState } from "react";

const InputDetails = ({ transactions, setTransactions }) => {
  const [FormData, setFormData] = useState({
    description: "",
    category: "",
    amount: "",
    date: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...FormData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://bank-of-flatiron-database.vercel.app/transactions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(FormData),
    })
      .then((res) => res.json())
      .then((transaction) => setTransactions([transaction, ...transactions]));
    setFormData({
      description: "",
      category: "",
      amount: "",
      date: "",
    });
  };
  return (
    <div>
      <div>
        <form
          action=""
          className="  flex flex-col items-center"
          onSubmit={handleSubmit}
        >
          <h1 className="py-8 mb-5 text-5xl text-white ">Bank of Flatiron</h1>
          <h2 className="mt-4 mb-6 text-3xl text-white">Transaction Form</h2>
          <input
            type="text"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Description"
            name="description"
            value={FormData.description}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Category..."
            name="category"
            value={FormData.category}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Amount..."
            name="amount"
            value={FormData.amount}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            name="date"
            value={FormData.date}
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            className="bg-cyan-950 hover:bg-red-500 py-3 px-2 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default InputDetails;
