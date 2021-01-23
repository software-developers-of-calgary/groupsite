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
    {!global.user && <a style={{float: 'left', margin: '20px' }} href={'/login'}>Login to create a project</a>}
    </div>
  )

}

export default AddProjectButton
