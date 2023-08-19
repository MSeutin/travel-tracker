import React from "react";
import { usePackingList } from "../../context/PackingListContext";
import PackingListInput from "./PackingListInput";
import PackingListItem from "./PackingListItem";

export default function PackingListContainer() {
  const { packingList } = usePackingList();

    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="bg-white p-6 rounded-lg shadow-md w-2/3">
          <h2 className="text-2xl font-semibold mb-4">Edit Packing List</h2>
          <PackingListInput />
          <PackingListItem />
        </div>
      </div>
    );
}
