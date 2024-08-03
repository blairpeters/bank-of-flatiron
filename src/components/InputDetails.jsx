import React from "react";

const InputDetails = () => {
  return (
    <div>
      <div>
        <form action="" className="mt-20  flex flex-col items-center">
          <h1 className="mb-5 text-5xl text-white">Bank of Flatiron</h1>
          <input
            type="text"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Description"
            name="description"
            required
          />
          <input
            type="text"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Category..."
            name="category"
            required
          />
          <input
            type="number"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            placeholder="Payment Amount..."
            name="amount"
            required
          />
          <input
            type="date"
            className="bg-gray-500 mb-3 w-96 h-9 rounded "
            name="date"
            required
          />
          <button className="bg-cyan-950 hover:bg-white py-3 px-2 rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputDetails;
