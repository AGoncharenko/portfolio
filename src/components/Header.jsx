import { getYearsExperience } from "../helpers/experience";
import linkedinIcon from "/linkedin.svg";
import printerIcon from "/printer.svg";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <h1>Andriy Goncharenko</h1>
          <p className="title">Software Engineer</p>
          <p>{getYearsExperience()}+ years experience</p>
        </div>
        <div className="header-contact">
          <p className="header-icons">
            <a href="https://www.linkedin.com/in/andrew-g-040b487b/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
            </a>
            <button className="print-button" onClick={() => window.print()} title="Print resume">
              <img src={printerIcon} alt="Print" className="social-icon" />
            </button>
          </p>
          <p>
            <a href="mailto:andriy.i.gon@gmail.com">
              andriy.i.gon@gmail.com
            </a>
          </p>
          <p>US Citizen</p>
          <p>Sacramento area, CA</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
