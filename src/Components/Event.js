import React from "react";
import { useHistory } from "react-router-dom";

const HeaderSpan = {
  fontSize: "1.9rem",
  fontWeight: "bold",
};

const eventClicked = (history, eventId) => history.push(`/events/${eventId}`);

const EventSummary = (props) => {
  let history = useHistory();
  const { title, date, location, summary, id } = props;
  return (
    <div
      onClick={() => eventClicked(history, id)}
      className={"event-summary"}
      style={{ height: "100%", margin: "25px" }}
    >
      <div>
        <span style={HeaderSpan}>{title}</span> on{" "}
        <span style={{ fontSize: "1rem" }}>{date}</span>
      </div>
      <b>Location: </b>
      <div>{location}</div>
      <b>Summary: </b>
      <div style={{ maxHeight: "150px", overflow: "auto" }}>{summary}</div>
    </div>
  );
};

export default EventSummary;
