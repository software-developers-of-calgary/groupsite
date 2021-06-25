import React from 'react';
import './timeLocStyle.css';

const TimeLoc = ({date, location}) => {
    return (
      <>
        <div className='button'>
          <div>
              Date: {new Date(date).toDateString()}
          </div>
          <div>
              Location: {location}
          </div>
        </div>
      </>
    );
  }

  export default TimeLoc;
