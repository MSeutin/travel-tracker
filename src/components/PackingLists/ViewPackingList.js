import React, { useState } from "react";
import { usePackingList } from "../../context/PackingListContext";

export default function ViewPackingList() {
  const { packingList } = usePackingList();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
    if (!isPopupOpen) {
      document.body.style.overflow = "hidden"; // Prevent body from scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore body scrolling
    }
  };

  const handleBackgroundClick = (event) => {
    if (event.target.classList.contains("bg-black")) {
      togglePopup();
    }
  };

  return (
    <div>
      <button
        onClick={togglePopup}
        className="bg-transparent border-2 border-green-800 text-green-800 px-4 py-2 rounded ml-3 mt-2 hover:border-green-600 hover:text-green-600"
      >
        View
      </button>
      {isPopupOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{ zIndex: 1000 }}
          onClick={handleBackgroundClick}
        >
          <div className="bg-black bg-opacity-70 fixed inset-0" />
          <div
            className="bg-white text-zinc-800 p-4 rounded shadow-md relative"
            style={{ zIndex: 2000 }}
          >
            <div className="grid gap-2">
              {packingList.map((item) => (
                <div
                  key={item.id}
                  className="bg-white p-2 rounded shadow-md grid grid-cols-3 gap-2 items-center"
                >
                  <p className="col-span-2">{item.text}</p>
                  <p className="text-center">{item.quantity}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
