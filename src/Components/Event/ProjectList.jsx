import React from 'react';
import Project from './Project';
import './style.css';


const fakeData = [
    { id: 1, name: 'project 1', author: 'Author name', stack: ['Nodejs', 'React', 'Javascript'], description: 'Hi all, So we haven\'t had an event since COVID started. That\'s entirely on me, Simon. But no sense crying over spilt time, I\'d like to see how we can make this event work in a virtual setting. We\'ll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we\'ve made at the end of the day! We may have other sessions'},
    { id: 2, name: 'project 2', author: 'Author name', stack: ['Nodejs', 'React', 'Javascript'], description: 'Hi all, So we haven\'t had an event since COVID started. That\'s entirely on me, Simon. But no sense crying over spilt time, I\'d like to see how we can make this event work in a virtual setting. We\'ll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we\'ve made at the end of the day! We may have other sessions'},
    { id: 3, name: 'project 3', author: 'Author name', stack: ['Nodejs', 'React', 'Javascript'], description: 'Hi all, So we haven\'t had an event since COVID started. That\'s entirely on me, Simon. But no sense crying over spilt time, I\'d like to see how we can make this event work in a virtual setting. We\'ll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we\'ve made at the end of the day! We may have other sessions'},
    { id: 4, name: 'project 4', author: 'Author name', stack: ['Nodejs', 'React', 'Javascript'], description: 'Hi all, So we haven\'t had an event since COVID started. That\'s entirely on me, Simon. But no sense crying over spilt time, I\'d like to see how we can make this event work in a virtual setting. We\'ll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we\'ve made at the end of the day! We may have other sessions'},
    { id: 5, name: 'project 5', author: 'Author name', stack: ['Nodejs', 'React', 'Javascript'], description: 'Hi all, So we haven\'t had an event since COVID started. That\'s entirely on me, Simon. But no sense crying over spilt time, I\'d like to see how we can make this event work in a virtual setting. We\'ll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we\'ve made at the end of the day! We may have other sessions'}
]

const ProjectList = () => {
    return (
        <ul className="project-list">
            {fakeData.map(project =>
                <Project key={project.id} id={project.id} name={project.name} author={project.author} stack={project.stack} description={project.description} />)}
        </ul>
    )
};


export default ProjectList;
