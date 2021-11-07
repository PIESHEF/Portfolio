import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="flex justify-center">
          <p className="font-semibold">Alex Pieshefski</p>
        </div>

        {/* Links for GitHub and LinkedIn */}
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/PIESHEF" target="_blank">
            <img
              align="left"
              width="25px"
              alt="GitHub"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/alex-pieshefski/"
            target="_blank"
          >
            <img
              align="left"
              width="25px"
              alt="Linkdin"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
            />
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;
