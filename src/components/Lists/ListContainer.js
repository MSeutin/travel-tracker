import React from "react";
import { usePackingList } from "../../context/PackingListContext";
import ListInput from "./ListInput";
import ListItem from "./ListItem";

export default function ListContainer() {
  const { packingList } = usePackingList();

  return (
    <div className="flex flex-col items-center justify-start border-2 border-red-800 py-10 px-5 w-1/3 rounded-lg">
      <ListInput />
      <ListItem />
    </div>
  );
}

