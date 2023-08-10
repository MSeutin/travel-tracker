import React from 'react'

function ListItem({list}) {
  return (<>
    {list.map((item, index) => {
      return ( <>
        <h3 key={index}>{item}</h3> 
        <button>X</button>
      </>)
    })}
  </>)
}

export default ListItem