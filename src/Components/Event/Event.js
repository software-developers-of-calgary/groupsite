import React from "react";
import { useHistory } from "react-router-dom";
import "./Event.scss";
// const HeaderSpan = {
//   fontSize: "1.9rem",
//   fontWeight: "bold",
// };

const eventClicked = (history, eventId) => history.push(`/events/${eventId}`);

const EventSummary = (props) => {
  let history = useHistory();
  const { title, date, location, summary, id } = props;
  return (
    // <div
    //   onClick={() => eventClicked(history, id)}
    //   className={"event-summary"}
    // >

    <section className="event">
      <h2>{title}</h2>
      <div>
        <span className="subtitle">When:</span>
        <span className="date">{date}</span>
      </div>
      <div>
        <span className="location">Location: </span>
        <span>{location}</span>
      </div>
      <div>
        <span className="summary">Summary: </span>
        <span>{summary}</span>
      </div>
    </section>
  );
};

export default EventSummary;
