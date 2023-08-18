import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

// Default Packing List, TODO: Add category later
let minimalPackingList = [
  {
    // generate a unique ID using uuid
    id: uuidv4(),
    quantity: 1,
    text: "t-shirt",
  },
  {
    id: uuidv4(),
    quantity: 2,
    text: "toothbrush",
  },
];

const PackingListContext = createContext();

export function usePackingList() {
  return useContext(PackingListContext);
}

export function PackingListProvider({ children }) {
  const [packingList, setPackingList] = useState(minimalPackingList);

  return (
    <PackingListContext.Provider
      value={{ packingList, setPackingList }}
    >
      {children}
    </PackingListContext.Provider>
  );
}
