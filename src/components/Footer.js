import React from "react";
import twitter from "../media/footer/twitter.png";
import facebook from "../media/footer/facebook.png";
import instagram from "../media/footer/instagram.png";
import dribble from "../media/footer/dribble.png";
import github from "../media/footer/github.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="Fcontent">
        {/* Footer - Top */}
        <div className="Fcontent-top">
          {/* First - Column */}
          <div className="Fcontent-top-column">
            <div className="Fcontent-top-column-name">WeatherApp</div>
            <nav className="Fcontent-top-column-nav">
              <ul className="Fcontent-top-column-list">
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    <span>Email:</span> forecast@weather.com
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    <span>Phone:</span> +374 060 555 0217
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a
                    target="_blank"
                    href="https://g.page/ErebuniPlaza?share"
                    className="Fcontent-top-column-list-item-link"
                  >
                    <span>Address:</span> 26, 1 Vazgen Sargsyan St, Yerevan 0010
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Second Column */}
          <div className="Fcontent-top-column">
            <div className="Fcontent-top-column-name">company</div>
            <nav className="Fcontent-top-column-nav">
              <ul className="Fcontent-top-column-list">
                <li className="Fcontent-top-column-list-item">
                  <a href="/" className="Fcontent-top-column-list-item-link">
                    Home
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a href="/aboutus" className="Fcontent-top-column-list-item-link">
                    About us
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a href="/contactus" className="Fcontent-top-column-list-item-link">
                    Contact us
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          {/* Third Column */}
          <div className="Fcontent-top-column">
            <div className="Fcontent-top-column-name">others</div>
            <nav className="Fcontent-top-column-nav">
              <ul className="Fcontent-top-column-list">
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    Help & Support
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    Privacy Policy
                  </a>
                </li>
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    Terms
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          {/* Forth column */}
          <div className="Fcontent-top-column">
            <div className="Fcontent-top-column-name">newsletter</div>
            <nav className="Fcontent-top-column-nav">
              <ul className="Fcontent-top-column-list">
                <li className="Fcontent-top-column-list-item">
                  <a href="#" className="Fcontent-top-column-list-item-link">
                    Subscribe to our newsletter
                  </a>
                </li>
              </ul>
            </nav>
            <div className="Fcontent-top-column-InputWrpr">
              <input
                type="text"
                className="Fcontent-top-column-InputWrpr-input"
                placeholder="Enter Email"
              />
              <button className="Fcontent-top-column-InputWrpr-btn">Send</button>
            </div>
          </div>
        </div>

        {/* Footer - Bottom */}
        <div className="Fcontent-bottom">
          <div className="Fcontent-bottom-copyRights">Copyright &copy; WeatherApp - 2022</div>
          <div className="Fcontent-bottom-socialMedia">
            <img src={twitter} alt="twitter" className="Fcontent-bottom-socialMedia-icon" />
            <img src={facebook} alt="facebook" className="Fcontent-bottom-socialMedia-icon" />
            <img src={instagram} alt="instagram" className="Fcontent-bottom-socialMedia-icon" />
            <img src={dribble} alt="dribble" className="Fcontent-bottom-socialMedia-icon" />
            <img src={github} alt="github" className="Fcontent-bottom-socialMedia-icon" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
