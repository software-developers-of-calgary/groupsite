import React from 'react';
import { useGlobal } from '../../../state';
import Button from 'antd/es/button';


const AddProjectButton = ({text, action}) => {
  const [global,setGlobal, user] = useGlobal()
  console.log(user)
  return (
    <div>
          <Button
      style={{float: 'left',
              margin: '20px' }}
      type="primary"
      onClick={action}
      disabled={!global.user}
      >
      {text}
    </Button>
    </div>

  )

}

export default AddProjectButton
