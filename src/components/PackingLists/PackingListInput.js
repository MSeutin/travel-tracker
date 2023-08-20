import { useState, useEffect } from "react";
import { usePackingList } from "../../context/PackingListContext";
import { db, auth } from "../../config/firebase";
import { collection, doc, setDoc } from "firebase/firestore";
import { v4 as uuidv4 } from "uuid";

export default function PackingListInput() {
  const { setPackingList } = usePackingList();
  const [inputValue, setInputValue] = useState("");
  const [quantityValue, setQuantityValue] = useState(1);

  const handleClick = async () => {
    // get currently logged in user
    const user = auth.currentUser;
    
    // if no user is logged in, then return
    if (!user) return;

    if (inputValue.trim() !== "") {

      // create a new packing list item object
      const newPackingListItem = {
        id: uuidv4(),
        quantity: quantityValue,
        text: inputValue,
      }

      // reference the "users" collection
      const usersCollection = collection(db, "users");

      // reference the "packing lists" subcollection under the user's document
      const userRef = doc(usersCollection, user.uid);
      const packingListsCollection = collection(userRef, "packingLists");

      // add the new packing list item to the packing list
      try{
        const docRef = await setDoc(doc(packingListsCollection, `${newPackingListItem.id}`), newPackingListItem);
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      }

      // add the new packing list item to the packing list
      setPackingList((prevList) => [
        ...prevList,
        newPackingListItem,
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
