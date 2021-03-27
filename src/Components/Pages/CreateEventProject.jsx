import React from 'react'
import ProjectForm from './NewProject'

export default function CreateEventProject() {
  console.log('rendering CreateEventProject')
  return (
    <div>
      Hello world
      <br/>
        <ProjectForm
          onSubmit={null}
          projectsPage={null}
          display={null}
          resetSwitch={null}
        />
    </div>
  )
}