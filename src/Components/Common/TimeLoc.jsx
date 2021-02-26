import React from 'react';
import './timeLocStyle.css';

const TimeLoc = ({date, location}) => {
    return (
      <>
        <div className='button'>
          <div>
              Date: {date}
          </div>
          <div>
              Location: {location}
          </div>
        </div>
      </>
    );
  }

  export default TimeLoc;
