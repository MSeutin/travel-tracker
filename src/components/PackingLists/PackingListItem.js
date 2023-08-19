import { usePackingList } from "../../context/PackingListContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";

export default function PackingListItem() {
  const { packingList, setPackingList } = usePackingList();

  const handleClick = (id) => {
    const newList = packingList.filter((item) => item.id !== id);
    setPackingList(newList);
  };
  return (
    <div className="flex flex-col gap-1 mt-2">
      <div className="flex gap-10 justify-between rounded ">
        <h3 className="p-2 tracking-widest text-red-600">Items</h3>
        <h3 className="p-2 tracking-widest text-red-600 mr-10">Qty</h3>
      </div>
      {packingList.map((item) => {
        return (
          <div
            key={item.id}
            className="flex gap-5 justify-between items-center bg-zinc-800 hover:bg-zinc-100 hover:text-zinc-800 p-2 rounded "
          >
            <h3 className="px-2 tracking-widest">{item.text}</h3>
            <div className="flex flex-wrap flex-center items-center gap-4">
              <h3 className="px-2 tracking-widest">{item.quantity}</h3>
              <button
                onClick={() => handleClick(item.id)}
                className="text-zinc-100 hover:text-red-600 p-2 h-fit font-bold text-lg"
              >
                <FontAwesomeIcon
                  icon={faTrashCan}
                />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
