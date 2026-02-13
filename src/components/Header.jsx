import { getYearsExperience } from "../helpers/experience";

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-main">
          <h1>Andriy Goncharenko</h1>
          <p className="title">Sr. Software Engineer ({getYearsExperience()}+ years experience)</p>
        </div>
        <div className="header-contact">
          <p>
            <a href="https://www.linkedin.com/in/andrew-goncharenko-040b487b/" target="_blank" rel="noopener noreferrer">
              <img src="/linkedin.svg" alt="LinkedIn" className="social-icon" />
            </a>
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
