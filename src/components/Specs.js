import React from 'react'

function Specs(props) {
  const {spec} = props;
  console.log(spec)
  return (<>
    <h4>{spec}</h4>
  </>)
}

export default Specs