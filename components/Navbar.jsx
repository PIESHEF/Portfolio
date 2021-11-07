import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div className="flex items-center flex-shrink-0 mr-6">
          <span className="font-semibold text-xl tracking-tight">Alex Pieshefski</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
