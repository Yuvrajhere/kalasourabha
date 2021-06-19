import { Link } from "react-router-dom";
import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";

function Home() {
  return (
    <div className="Home">
      <header>
          <nav>
            <Link to="/" id="logo">
              <img src={kalasourabhaLogo} alt="kalasourabha" />
              <h2>Kalasourabha</h2>
            </Link>
          </nav>
        </header>
        <main>
          <h1>Kalasourabha 2021</h1>
          <p>
            We are back with yet another series of amazing events, this time
            through your screens.
          </p>
          <Link to="#events">
            <button>View All Events</button>
          </Link>
        </main>
        <div id="events">
          <h1>List of Events</h1>
          <div className="event-list">
            {eventDetails.map(event => {
              return (
                <div className="event">
                  <img src={event.mainImg} alt={event.name} />
                  <h2>{event.name}</h2>
                  <div className="buttons">
                    <Link to={`/${event.tag}`}><button>Know more</button></Link>
                    <Link to={event.formLink}><button>Register</button></Link>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Home;