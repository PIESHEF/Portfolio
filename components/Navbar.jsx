import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav class="flex items-center justify-between flex-wrap bg-indigo-500 p-6">
        <div class="flex items-center flex-shrink-0 mr-6">
          <span class="font-semibold text-xl tracking-tight">Alex Pieshefski</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
