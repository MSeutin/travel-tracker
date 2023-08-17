import React from "react";
import { useState } from "react";

import ListInput from "./ListInput";
import ListItem from "./ListItem";

function ListContainer() {
  const listArr = ["laundry", "walk"];
  const [inputValue, setInputValue] = useState("");
  const [list, setList] = useState(listArr);

  return (
    <div className="flex flex-col items-center justify-start border-2 border-red-800 py-10 px-5 w-1/3 rounded-lg">
      <ListInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        list={list}
        setList={setList}
      />
      <ListItem list={list} setList={setList} />
    </div>
  );
}

export default ListContainer;
