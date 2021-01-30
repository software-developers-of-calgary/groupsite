import React from 'react';
import Button from "antd/es/button";


const data = `Hi all,

So we haven't had an event since COVID started. That's entirely on me, Simon. But no sense crying over spilt time, I'd like to see how we can make this event work in a virtual setting.

We'll be aiming for the same basic structure, where we break into groups and work on whatever projects we care to present, then present anything we've made at the end of the day! We may have other sessions to break out into, but project work will probably make up the bulk of the day.

Please **bring project ideas**, or just come ready to code and hop into someone else's project, whatever you prefer. I can't stress this enough. We are really running short on ideas, so if you want to build something, or know someone who wants something built, bring it in!

If you'd like to start arranging a team to work on a project beforehand, feel free to post your idea in the comments on the event page!

As usual, none of us are experts in what we're working on, the goal is to get together and learn as a group.

Participation in previous events is never a requirement.

For those who would like to join in on the Calgary Software Crafters "An
Anagram Kata” mob-programming experience part of the Mini-Hackathon, please install the AnyDesk.org application on your computer prior to Saturday morning. We will begin with a description of the Four Rules of Simple Design, Test Driven Development, and Mobbing. Then we will mob on an anagram Kata for an hour or so and finish with a retrospective on what we learned.`

const collapsedData = onChange => {
return <span> {data.substring(0, 150)} <Button style={{padding: '0px'}} type="link" onClick={onChange}>... </Button> </span>
}

const Description = (props) => {
  const {collapsed, onChange } = props
  console.log({props})
  return (
    <div>
      <h3> Description</h3>
      {collapsed?  collapsedData(onChange) : data}
    </div>
  );
}

export default Description;
