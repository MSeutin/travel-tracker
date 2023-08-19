import React from "react";
import { useNavigate } from "react-router-dom";
import { usePackingList } from "../../context/PackingListContext";
import PackingListInput from "./PackingListInput";
import PackingListItem from "./PackingListItem";

export default function PackingListContainer() {
  const { packingList } = usePackingList();

  const nav = useNavigate();
  const handleGoBack = () => {
    nav(-1)
  }

    return (
      <div className="flex flex-col items-center justify-start min-h-screen mt-10">
        <div className="bg-white p-6 rounded-lg shadow-md w-5/12">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold mb-4 text-zinc-700">
              Edit Packing List
            </h2>
            <button 
            className="text-3xl font-bold text-blue-600 hover:text-red-800 font-serif" 
            onClick={handleGoBack}>
              X
              </button>
          </div>
          <PackingListInput />
          <PackingListItem />
        </div>
      </div>
    );
}
