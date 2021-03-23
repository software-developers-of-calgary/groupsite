import React, { Component } from "react";
import "./SectionHeader.css";
import QuestionModal from "./../Modal/QuestionModal";

class SectionHeader extends Component {
  render() {
    return (
      <div className="row row-container section-header-container">
        <div className="col section-header-title">
          <h4> {this.props.title} </h4>
        </div>
        <div className="col button-text">
          <QuestionModal buttonText={this.props.buttonText}></QuestionModal>
        </div>
      </div>
    );
  }
}

export default SectionHeader;
