import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className="flex justify-center space-x-6">
          <img
            align="left"
            width="25px"
            alt="GitHub"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
          <img
            align="left"
            width="25px"
            alt="Linkdin"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
          />
        </div>
      </footer>
    );
  }
}

export default Footer;
