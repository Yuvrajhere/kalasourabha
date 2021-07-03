import { Link } from "react-router-dom";
import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";
import rrceLogo from "./assets/RRCE-logo.png";
import rrceMediaLogo from "./assets/rrce-media-logo.jpg";
import fbLogo from "./assets/fb-icon.png";
import instagramLogo from "./assets/instagram-icon.png";
import whatsappLogo from "./assets/whatsapp-icon.png";

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
          <h2>{category !== "off-stage" ? "Ongoing Events" : "Live Events"}</h2>
          <div className="event-list">
            {eventDetails.map((event) => {
              return (
                event.category !== category && (
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
      </div>

      <footer>
        <h2>Contact Us</h2>
        <div className="team">
          <div className="team-1">
            <div className="cultural-head">
              <h2>Cultural Head</h2>
              <h1>Prof. Thanuj Kumar M</h1>
            </div>
            <div className="contacts">
              <h2>Main Coordinators</h2>
              <div className="contacts-list">
                <div className="contact">
                  <p>Mohammed Musab Khan </p>
                  <a href="tel:9900505971">9900505971</a>
                  <a href="https://wa.me/919900505971" title="whatsapp">
                    <img src={whatsappLogo} alt="whatsapp" />
                  </a>
                </div>
                <div className="contact">
                  <p>Keerthi Chandru</p>
                  <a href="tel:9019156953">9019156953</a>
                </div>
              </div>
            </div>
          </div>
          <div className="team-2">
            <div className="student-cords">
              <h2>Student Coordinators</h2>
              <div className="list">
                <p>Mohammed Musab Khan</p>
                <p>Naveen A</p>
                <p>Keerthi chandru</p>
                <p>Lalana M</p>
                <p>Monika Singh</p>
                <p>Ankith Kumar</p>
                <p>Akshata</p>
                <p>Aparna</p>
                <p>Pavithra Kumar</p>
              </div>
            </div>
            <div className="faculty-coords">
              <h2>Faculty Coordinators</h2>
              <div className="list">
                <p>Prof. M C MALARVIZHI</p>
                <p>Prof. Ashwini R Malipatil</p>
                <p>Prof. Prutha G</p>
                <p>Prof. Deepa K R</p>
                <p>Prof. Deepika J</p>
                <p>Prof. Nandini G</p>
                <p>Prof. Ravikumar T</p>
              </div>
            </div>
          </div>
          <div className="team-3">
            <div className="resources">
              <h2>Design & Resources team</h2>
              <div className="list">
                <p>Tilak P</p>
                <p>Yuvraj Singh Chouhan</p>
                <p>Naveen A</p>
                <p>Prathyusha H Kumar</p>
                <p>Jaiakhil K</p>
              </div>
            </div>
            <div className="developer">
              <h2>Website team</h2>
              <div className="list">
                <p>Yuvraj Singh Chouhan</p>
                <p>Mohammed Musab Khan</p>
              </div>
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
