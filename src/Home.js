import { Link } from "react-router-dom";
import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";
import rrceLogo from "./assets/RRCE-logo.png";
import rrceMediaLogo from "./assets/rrce-media-logo.jpg";
import fbLogo from "./assets/fb-icon.png";
import instagramLogo from "./assets/instagram-icon.png";

function Home() {
  return (
    <div className="Home">
      <main>
        <Link to="/" id="logo">
          <img src={kalasourabhaLogo} alt="kalasourabha" />
          <h2>Kalasourabha</h2>
        </Link>
        <div className="main-content">
          <h1>
            Kalasourabha <span>2021</span>
          </h1>
          <p>
            We are back with yet another series of amazing events, this time
            through your screens.
          </p>
          <a href="#events">
            <button className="btn">View All Events</button>
          </a>
        </div>
      </main>

      <div id="events">
        <h1>List of Events</h1>
        <div className="event-list">
          {eventDetails.map((event) => {
            return (
              <div key={event.tag} className="event-card">
                <img src={event.mainImg} alt={event.name} />
                <h2>{event.name}</h2>
                <div className="buttons">
                  <Link to={`/${event.tag}`}>
                    <button className="btn">Know more</button>
                  </Link>
                  <Link to={event.formLink}>
                    <button className="btn">Register</button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <footer>
        <div className="contacts">
          <h2>Contact Us</h2>
          <div className="contacts-list">
            <div className="contact">
              <p>Sample Name</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
            <div className="contact">
              <p>Sample Name</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
            <div className="contact">
              <p>Sample Name</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
          </div>
        </div>
        <div className="socials">
          <h2>Follow us on below platforms</h2>
          <div className="socials-list">
            <a href="https://www.instagram.com/yuvraj_singh_c/">
              <img src={fbLogo} alt="facebook" />
            </a>
            <a href="https://www.instagram.com/yuvraj_singh_c/">
              <img src={instagramLogo} alt="instagram" />
            </a>
          </div>
        </div>
        <img src={rrceLogo} alt="rrce" />
        <div>
          <h2>Media Partner</h2>
          <img src={rrceMediaLogo} alt="rrce media" />
        </div>
      </footer>
    </div>
  );
}

export default Home;
