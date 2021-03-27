import React from 'react';


const collapsedData = (onChange, data) => {
return <span> {data.substring(0, 250)} <button type="submit" onClick={onChange}>... </button> </span>
}

const Description = (props) => {
  const {collapsed, onChange, data } = props
  console.log({props})
  return (
    <div>
      <h2> Description</h2>
      {collapsed?  collapsedData(onChange, data) : data}
    </div>
  );
}

export default Description;
