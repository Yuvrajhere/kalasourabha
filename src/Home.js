import { Link } from "react-router-dom";
import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";
import rrceLogo from "./assets/RRCE-logo.png";
import rrceMediaLogo from "./assets/rrce-media-logo.jpg";
import fbLogo from "./assets/fb-icon.png";
import instagramLogo from "./assets/instagram-icon.png";
import { useState } from "react";

function Home() {
  const [category, setCategory] = useState("off-stage");

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
            <button className="btn">All Events</button>
          </a>
        </div>
      </main>

      <div id="events">
        <div className="events-header">
          <h1>List of Events</h1>
          <div className="category">
            <label htmlFor="category">Select category</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <option value="off-stage">Ongoing</option>
              <option value="live">Live</option>
            </select>
          </div>
        </div>
        <div className="events-div">
          <h2>{category === "live" ? "Live Events" : "Ongoing Events"}</h2>
          <div className="event-list">
            {eventDetails.map((event) => {
              return (
                event.category === category && (
                  <div key={event.tag} className="event-card">
                    <h2>{event.name}</h2>
                    <a href={event.formLink} target="_blank" rel="noreferrer">
                      <button className="btn">Register Now</button>
                    </a>
                  </div>
                )
              );
            })}
          </div>
        </div>
        <div className="events-div">
          <h2>
            {category !== "off-stage" ? "Ongoing Events" : "Live Events"}
          </h2>
          <div className="event-list">
            {eventDetails.map((event) => {
              return (
                event.category !== category && (
                  <div key={event.tag} className="event-card">
                    <h2>{event.name}</h2>
                    <Link to={event.formLink}>
                      <button className="btn">Register</button>
                    </Link>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>

      <footer>
        <h2>Contact Us</h2>
        <div className="contacts">
          <h2>Main Coordinators</h2>
          <div className="contacts-list">
            <div className="contact">
              <p>Mohammed Musab Khan</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
            <div className="contact">
              <p>Keerthi Chandru</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
            <div className="contact">
              <p>Sample Name</p>
              <a href="tel:5554280940">5554280940</a>
            </div>
          </div>
        </div>
        <div className="partner">
          <div className="rrce-media">
            <h2>Media Partner</h2>
            <img src={rrceMediaLogo} alt="rrce media" />
          </div>
          <div className="socials">
            <h2>Follow us on below platforms</h2>
            <div className="socials-list">
              <a
                href="https://www.facebook.com/rrcemedia-332093220774341/"
                title="Facebook"
              >
                <img src={fbLogo} alt="facebook" />
              </a>
              <a href="https://www.instagram.com/rrcemedia/" title="Instagram">
                <img src={instagramLogo} alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="college">
          <h2>In association with</h2>
          <a href="https://www.rrce.org/" title="RRCE">
            <img src={rrceLogo} alt="rrce" />
          </a>
          <p>
            14, Ramohalli Cross, Kumbalgodu, Mysore Road, Bengaluru - 560 074,
            Karnataka, India.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Home;
