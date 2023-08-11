import React from 'react'
import { useState } from 'react'

import ListInput from './ListInput'
import ListItem from './ListItem';

function ListContainer() {
  const listArr = ['laundry', 'walk']
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(listArr)

  return (
    <div className="flex flex-col items-center justify-start h-screen">
      <ListInput
        inputValue={inputValue}
        setInputValue={setInputValue}
        list={list}
        setList={setList}
      />
      <ListItem list={list} setList={setList}/>
    </div>
  );
}

export default ListContainer