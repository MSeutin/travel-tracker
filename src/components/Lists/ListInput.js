import React from 'react'

function ListInput({inputValue, setInputValue, list, setList}) {
  const handleClick = (e) =>{
        if (inputValue.trim() !== "") {
          setList([...list, inputValue]);
          setInputValue("");
        }
  }

  const handleKeyDown = (e) =>{
    if(e.key === 'Enter'){
      handleClick(e)
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <div className="flex gap-3 mb-5">
      <input
        name="specs"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Add a task..."
        className="px-3 py-1 rounded text-blue-950"
      />
      <button
        onClick={handleClick}
        className="px-3 py-1 bg-blue-700 text-white rounded hover:bg-blue-500"
      >
        Add
      </button>
      <button 
      onClick={() => setList([])}
      className="px-3 py-1 bg-red-800 text-white rounded hover:bg-red-600">
        Clear All
      </button>
    </div>
  );
}

export default ListInput