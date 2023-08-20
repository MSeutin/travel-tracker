import { useEffect } from "react";
import { db, auth } from "../../config/firebase";
import { collection, doc, setDoc, onSnapshot, deleteDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { usePackingList } from "../../context/PackingListContext";
import PackingListInput from "./PackingListInput";
import PackingListItem from "./PackingListItem";

export default function PackingListContainer() {
  const { packingList, setPackingList } = usePackingList();

  useEffect(() => {
    // Get currently logged in user
    const user = auth.currentUser;
    if (!user) return;

    const usersCollection = collection(db, "users");
    const userRef = doc(usersCollection, user.uid);
    const packingListsCollection = collection(userRef, "packingLists");

    // Set up the snapshot listener
    const unsubscribe = onSnapshot(packingListsCollection, (querySnapshot) => {
      const updatedPackingList = [];
      querySnapshot.forEach((doc) => {
        updatedPackingList.push(doc.data());
      });
      setPackingList(updatedPackingList);
    });

       return () => {
         // Unsubscribe from the listener when component unmounts
         unsubscribe();
       };

  },[setPackingList])

     const handlePackingListUpdate = async (newItem) => {
       try {
         // Update the packing list in the database (or your preferred data source)
         const user = auth.currentUser;
         if (!user) return;

         const usersCollection = collection(db, "users");
         const userRef = doc(usersCollection, user.uid);
         const packingListsCollection = collection(userRef, "packingLists");

         // Add the new packing list item to the database
         await setDoc(doc(packingListsCollection, `${newItem.id}`), newItem);
       } catch (error) {
         console.error("Error adding document: ", error);
       }
     };

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
          <PackingListInput onPackingListUpdate={handlePackingListUpdate} />
          <PackingListItem />
        </div>
      </div>
    );
}
