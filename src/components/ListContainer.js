import React from 'react'
import { useState } from 'react'

import ListInput from './ListInput'
import ListItem from './ListItem';

function ListContainer() {
  const listArr = ['laundry', 'walk']
  const [inputValue, setInputValue] = useState('')
  const [list, setList] = useState(listArr)

  return (<>
    <ListInput inputValue={inputValue} setInputValue={setInputValue} list={list} setList={setList} />
    {console.log(inputValue)}
    <ListItem list={list} />
  </>)
}

export default ListContainer