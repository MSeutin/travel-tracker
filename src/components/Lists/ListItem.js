import React from 'react'

function ListItem({list, setList}) {
  const handleClick = (index) =>{
    const newList = list.filter((item, i) => i !== index)
    setList(newList)
  }
  return (
    <div className="flex flex-col gap-5">
      {list.map((item, index) => {
        return (
          <div
            key={index}
            className="flex gap-10 justify-between bg-zinc-400 hover:bg-zinc-200 rounded "
          >
            <h3 className="p-2 tracking-widest">{item}</h3>
            <button 
            onClick={() => handleClick(index)}
            className="hover:bg-red-800 p-2 h-fit text-blue-950 font-bold text-lg">X</button>
          </div>
        );
      })}
    </div>
  );
}

export default ListItem