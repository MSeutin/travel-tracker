import React from 'react'

function ListInput({inputValue, setInputValue, list, setList}) {
  const handleClick = (e) =>{
    // console.log(inputValue)
    setList([...list, inputValue])
    setInputValue('')
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }

  return (<>
    <input name='specs' value={inputValue} onChange={handleChange} type="text" />
    <button onClick={handleClick}>Add</button>

  </>)
}

export default ListInput