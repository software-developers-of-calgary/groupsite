import React from 'react';

const TimeLoc = ({date, location}) => {
    return (
      <>
        <div>
            Date: {date}
        </div>
        <div>
            Location: {location}
        </div>
      </>
    );
  }

  export default TimeLoc;