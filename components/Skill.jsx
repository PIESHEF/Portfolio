import React from "react";

class Skill extends React.Component {
  render(props) {
    return (
      <div>
        <img alt={this.props.alt} width="100px" src={this.props.src} />
      </div>
    );
  }
}

export default Skill;
