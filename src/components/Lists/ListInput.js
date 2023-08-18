import { useState, useEffect } from "react";
import { usePackingList } from "../../context/PackingListContext";
import { v4 as uuidv4 } from "uuid";

export default function ListInput() {
    const { setPackingList } = usePackingList();
    const [inputValue, setInputValue] = useState("");
    const [quantityValue, setQuantityValue] = useState(1);

    const handleClick = () => {
      if (inputValue.trim() !== "") {
        setPackingList((prevList) => [
          ...prevList,
          { id: uuidv4(), quantity: quantityValue, text: inputValue },
        ]);
        setInputValue("");
      }
    };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleClick(e);
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantityValue(e.target.value);
  }

  return (
    <div className="flex gap-3 mb-5">
      <input
        type="text"
        name="specs"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a task..."
        className="px-3 py-1 rounded text-blue-950"
      />
      <input
        type="number"
        value={quantityValue}
        onChange={handleQuantityChange}
        placeholder="Quantity"
        className="px-3 py-1 rounded text-blue-950"
      />
      <button
        onClick={handleClick}
        className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-500"
      >
        Add
      </button>
      <button
        onClick={() => setPackingList([])}
        className="px-3 py-1 bg-red-800 text-white rounded hover:bg-red-600"
      >
        Clear All
      </button>
    </div>
  );
}

