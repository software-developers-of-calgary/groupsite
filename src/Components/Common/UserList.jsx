import React from 'react';
import Button from "antd/es/button";

const firstTwoLetters = (str) =>
  !str || str.length < 3 ? str : str.substring(0, 2);

const UserList = (props) => {
  const { users, register } = props
  return (
    <div>
      <div>
        <div style={{float:'left', display:'inline-block', marginLeft: '90px'}}>
          <h2> Users</h2>
        </div>
        <Button style={{float:"right"}} onClick={register}>
          Register
        </Button>
      </div>
      <br/><br/>
      <div style={{maxHeight: '200px', overflow: 'auto', margin: '0px 10px 0px 10px'}}>
      { users.map(user =>
        <div>
          <Button type="primary" shape="circle">
              {firstTwoLetters(user.display_name)}
          </Button>
          {user.display_name}
        </div>
      )}
      </div>

    </div>
  );
}

export default UserList;
