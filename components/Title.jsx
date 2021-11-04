import React from "react";

class Title extends React.Component {
  render(props) {
    return (
      <p className="flex justify-center text-4xl font-semibold">
        {this.props.value}
      </p>
    );
  }
}

export default Title;
