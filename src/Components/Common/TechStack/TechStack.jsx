import React from "react";
import Tag from 'antd/es/tag'


// const colors = [ 'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']
const colors = {
  JavaScript: 'red',
  'Node.js' : 'coral',
  'React.js' : 'pink',
  Python : 'orange',
  Java: 'green',
  '.Net' : 'cyan',
  REST : 'magenta',
  GrapQL : 'gold',
  PSQL : 'lime',
  MySQL : 'blue',
  MongoDB : 'geekblue',
  Other : 'volcano'
}

const getRandomVariant = () => colors[Math.floor(Math.random()*colors.length)]

const TechStack = ({ className = '', techStackAsString }) => (
  <div>
    {techStackAsString && techStackAsString.split(',').map(tech =>
      <Tag className={className} key={`${tech}-badge`} color={colors[tech]} style={{marginRight: "20px"}}> {tech} </Tag>
    )}
  </div>)

export default TechStack
