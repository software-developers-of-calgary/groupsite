import React, { Component } from "react";
import EventSummary from "./Event/Event";
import { URL } from "../config";

export default class Events extends Component {
  state = {
    error: null,
    isLoaded: false,
    events: [],
  };

  componentDidMount() {
    fetch(URL + "/events")
      .then((res) => res.json())
      .then(
        (events) => {
          this.setState({ isLoaded: true, events });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  renderEvents = () => {
    // var storage_array = this.state.events;
    return this.state.events.map((event) => (
      <EventSummary
        title="Virtual Hackhaton"
        date={new Date(event.date).toISOString().split("T")[0]}
        location={event.location}
        summary={event.description}
        id={event.id}
      />
    ));
  };

  render() {
    const { error, isLoaded } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <main className="wrapper">
          <h1>Events</h1>
          <section className="events">{this.renderEvents()}</section>
        </main>
      );
    }
  }
}
