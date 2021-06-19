import { Link, useParams } from "react-router-dom";

import eventDetails from "./data";

import kalasourabhaLogo from "./assets/kalasourabha-logo.png";
import { useEffect, useState } from "react";

function Event() {
  const { tag } = useParams();
  const [eventData, setEventData] = useState({});

  useEffect(() => {
    setEventData(eventDetails.find((event) => event.tag === tag));
  }, [tag]);

  return (
    <div className="Event">
      <main>
        <Link to="/" id="logo">
          <img src={kalasourabhaLogo} alt="kalasourabha" />
          <h2>Kalasourabha</h2>
        </Link>
        <div>
          <h2>{eventData.name}</h2>
          <p>{eventData.description}</p>
          <div className="buttons">
            <Link to="/">
              <button>Go back</button>
            </Link>
            <Link to={eventData.formLink}>
              <button>Register</button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Event;
