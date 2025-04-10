import React, { useState } from "react";

function CashFlowForm() {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    payment: "",
    category: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formData----", formData);
    //addRecord(formData)
    setFormData({
      amount: "",
      description: "",
      payment: "",
      category: "",
    });
  };
  return (
    <div>
      <form
        className="flex flex-col gap-4 p-4 max-w-md mx-auto bg-white shadow-md rounded-lg"
        onSubmit={handleSubmit}
      >
        <label className="flex flex-col text-sm font-medium text-gray-700">
          Description:
          <input
            name="description"
            placeholder="Description"
            onChange={handleChange}
            required
            value={formData.description}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Amount:
          <input
            name="amount"
            placeholder="Amount"
            onChange={handleChange}
            required
            value={formData.amount}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </label>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Category:
          <select
            name="category"
            onChange={handleChange}
            required
            value={formData.category}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Category</option>
            <option value="food">Food</option>
            <option value="transport">Transport</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </label>

        <label className="flex flex-col text-sm font-medium text-gray-700">
          Payment:
          <select
            onChange={handleChange}
            required
            name="payment"
            value={formData.payment}
            className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select Payment method</option>
            <option value="cash">Cash</option>
            <option value="upi">UPI</option>
            <option value="card">Card</option>
          </select>
        </label>

        <button
          type="submit"
          className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default CashFlowForm;
