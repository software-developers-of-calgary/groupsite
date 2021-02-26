import React from 'react';
import Button from "antd/es/button";


const collapsedData = (onChange, data) => {
return <span> {data.substring(0, 250)} <Button style={{padding: '0px'}} type="link" onClick={onChange}>... </Button> </span>
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
