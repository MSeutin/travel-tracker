import React from 'react'
import {useState} from 'react'
import Specs from './Specs';

function SpecsInput() {
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const handleClick = (e) =>{
    setClicked(true);
    console.log(value)
    setValue('');
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (<>
    <input name='specs' value={value} onChange={handleChange} type="text" />
    <button onClick={handleClick}>Add</button>
    {clicked && <Specs spec={value} />}
  </>)
}

export default SpecsInput