import { useState, useMemo } from "react";

export const usePackingListPopup = () => {
  const [showPackingListPopup, setShowPackingListPopup] = useState(false);

  const handleShowPackingList = () => {
    console.log("Setting showPackingListPopup to true");
    setShowPackingListPopup(true);
  };

  const handleHidePackingList = () => {
    console.log("Setting showPackingListPopup to false");

    setShowPackingListPopup(false);
  };

  const state = useMemo(
    () => ({
      showPackingListPopup,
      handleShowPackingList,
      handleHidePackingList,
    }),
    [showPackingListPopup]
  );

  return state;
};
