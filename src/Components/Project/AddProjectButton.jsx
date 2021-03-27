import React from 'react';
import { useGlobal } from '../../state';


const AddProjectButton = ({text, action}) => {
  const [global,setGlobal, user] = useGlobal()
  console.log(user)
  return (
    <div className="project-menu">
      <button type="submit" onClick={action} disabled={!global.user}>
        {text}
      </button>
      {!global.user && <a href={'/login'}>Login to create a project</a>}
    </div>
  )

}

export default AddProjectButton
