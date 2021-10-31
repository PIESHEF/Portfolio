import React from "react";

class Skill extends React.Component {
  render(props) {
    return (
      <div className="box-border h-32 w-32 p-8 rounded-lg shadow-lg bg-gray-100">
        <img alt={this.props.alt} width="100px" src={this.props.src} />
      </div>
    );
  }
}

export default Skill;
