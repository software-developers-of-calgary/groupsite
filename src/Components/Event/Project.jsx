import React from 'react';

const Project = ({name, author, stack, description}) => {
    return (
        <li className='project'>
            <h3>{name}</h3>
            <h4>{author}</h4>
            <p>{description}</p>
            <ul className='stack-list'>
                {stack.map(technology => <li className='technology'>{technology}</li>)}
            </ul>
        </li>
    )
};

export default Project;
