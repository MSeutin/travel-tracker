import React from 'react'
import { usePackingList } from "../../context/PackingListContext";

export default function ListItem() {
    const { packingList, setPackingList } = usePackingList();

    const handleClick = (id) => {
      const newList = packingList.filter((item) => item.id !== id);
      setPackingList(newList);
    };
  return (
    <div className="flex flex-col gap-5">
      {packingList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-10 justify-between bg-zinc-400 hover:bg-zinc-200 rounded "
          >
            <h3 className="p-2 tracking-widest">{item.text}</h3>
            <h3 className="p-2 tracking-widest">{item.quantity}</h3>
            <button 
            onClick={() => handleClick(item.id)}
            className="hover:bg-red-800 p-2 h-fit text-blue-950 font-bold text-lg">X</button>
          </div>
        );
      })}
    </div>
  );
}