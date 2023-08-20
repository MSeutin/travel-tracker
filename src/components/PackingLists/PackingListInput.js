import { useState, useEffect } from "react";
import { usePackingList } from "../../context/PackingListContext";
import { db, auth } from "../../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function PackingListInput({ onPackingListUpdate }) {
  const { packingList, setPackingList } = usePackingList();
  const [inputValue, setInputValue] = useState("");
  const [quantityValue, setQuantityValue] = useState(1);


  const handleClick = () => {
    if (inputValue.trim() !== "") {
        const newPackingListItem = {
          id: uuidv4(),
          quantity: quantityValue,
          text: inputValue,
        };

        // Call the callback function with the new item
        onPackingListUpdate(newPackingListItem);

        // Clear input fields
        setInputValue("");
        setQuantityValue(1);
      }
    };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityValue(e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-3 mt-4">
      <div className="flex flex-col">
        <label htmlFor="specs" className="text-zinc-600 mb-1">
          Items
        </label>
        <input
          type="text"
          name="specs"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          placeholder="Add a item..."
          className="px-3 py-1 rounded text-blue-950 border-zinc-700 border-2 overflow-x-auto whitespace-nowrap w-full max-w-xs sm:max-w-full"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="quantityInput" className="text-zinc-600 mb-1">
          #
        </label>
        <div className="flex flex-wrap gap-3">
          <input
            type="number"
            value={quantityValue}
            onChange={handleQuantityChange}
            inputMode="numeric"
            className="px-3 py-1 rounded text-blue-950 border-zinc-500 border-2 w-16"
          />
          <button
            onClick={handleClick}
            className="px-3 py-1 bg-zinc-800 text-white rounded hover:bg-zinc-600"
          >
            +
          </button>
          {/* <button
            onClick={() => setPackingList([])}
            className="px-3 py-1 bg-red-800 text-white rounded hover:bg-red-600"
          >
            Reset
          </button> */}
        </div>
      </div>
    </div>
  );
}
