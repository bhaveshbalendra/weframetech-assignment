"use client";
import React, { useState } from "react";

// QuantitySelector component definition
const QuantitySelector: React.FC = () => {
  // State to hold the current quantity, initialized to 1
  const [quantity, setQuantity] = useState(1);

  // Function to decrease quantity, ensures it doesn't go below 1
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrease quantity by 1
    }
  };

  // Function to increase quantity
  const handleIncrement = () => {
    setQuantity(quantity + 1); // Increase quantity by 1
  };

  return (
    <div className="flex items-center gap-2 justify-between bg-white p-1">
      {/* Label for Quantity */}
      <span>QTE</span>

      {/* Container for the increment/decrement buttons and the quantity input */}
      <div className="bg-gray-50 flex">
        {/* Decrement button, decreases quantity */}
        <button
          className="w-8 h-8 bg-none rounded text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleDecrement}
          disabled={quantity <= 1} // Disable button if quantity is 1 or less
        >
          −
        </button>

        {/* Input field to display current quantity (read-only) */}
        <input
          type="number"
          className="w-10 h-8 text-center bg-transparent "
          value={quantity} // Display the current quantity
          readOnly // Prevents user from typing a value
        />

        {/* Increment button, increases quantity */}
        <button
          className="w-8 h-8 bg-none text-lg font-bold"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>

      {/* "Add to Cart" button */}
      <button className="h-9 px-4 bg-pink-500 text-white rounded text-base font-medium hover:bg-pink-600">
        Ajouter
      </button>
    </div>
  );
};

export default QuantitySelector;
