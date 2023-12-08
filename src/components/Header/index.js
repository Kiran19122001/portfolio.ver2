import Popup from "reactjs-popup";
import { Link } from "react-scroll";
import { TiThMenu } from "react-icons/ti";
// import 'reactjs-popup/dist/index.css' // Import the styles for the popup

import "./index.css";

const menu = [
  { id: 1, title: "home" },
  { id: 2, title: "projects" },
  { id: 3, title: "skills" },
  { id: 4, title: "about" },
  { id: 5, title: "contact " },
];

const Header = () => (
  <div className="cat-cont-pr">
    <div className="header-main-containr">
      <div className="logo-name">
        <h1>
          <Link to="home" className="porfolio-head">
            Portfolio
          </Link>
        </h1>
      </div>
      <nav className="mobile-div">
        <Popup
          trigger={
            <button className="menu-btn-ct">
              <TiThMenu className="menu-btn" />
            </button>
          }
          position="bottom right"
          on="click"
          closeOnDocumentClick
        >
          <ul className="components">
            {menu.map((each) => (
              <li key={each.id} className="list-header-items">
                <Link
                  to={each.title}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="headers-line"
                >
                  {each.title}
                </Link>
              </li>
            ))}
          </ul>
        </Popup>
      </nav>
      <nav className="laptop-div">
        <div>
          <ul className="components">
            {menu.map((each) => (
              <li key={each.id} className="list-header-items">
                <Link
                  to={each.title}
                  smooth={true}
                  offset={-100}
                  duration={1000}
                  className="headers-line"
                >
                  {each.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  </div>
);
export default Header;
