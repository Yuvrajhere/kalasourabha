import { Link } from "react-router-dom";
import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";

function Home() {
  return (
    <div className="Home">
      <main>
        <Link to="/" id="logo">
          <img src={kalasourabhaLogo} alt="kalasourabha" />
          <h2>Kalasourabha</h2>
        </Link>
        <div className="main-content">
          <h1>Kalasourabha <span>2021</span></h1>
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
    </div>
  );
}

export default Home;
