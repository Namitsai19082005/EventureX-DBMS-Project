import React from "react";
import styles from "./ClubEvents.module.css";
import Header from "./Header.jsx";
import Sidebar from "./Sidebar.jsx";
import Scroll from "./Scroll.jsx";
import ClubHeader from "./ClubHeader.jsx";
import SubClub from "./SubClub.jsx";

function ClubEvents({ events, deleteEvent }) {
  const subClubMarginLeft = events && events.length > 0 ? '260px' : '800px';
  return (
    <div className={styles.clubevents}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.clubeventscontent}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.mainContent}>
          <ClubHeader />
          <div className={styles.content}>
            <Scroll />
            <div className={styles.flexing}>
            <div className={styles.eventsContainer}>
              {events && events.length > 0 ? (
                events.map((event, index) => (
                  <div key={index} className={styles.performance}>
                    <div className={styles.bandimg}>
                    {event.coverImage ? (
                  <img src={event.coverImage} alt="Event Cover" className={styles.eventImage}/>
                ) : (
                  <img src="C:\Users\pavan\Pictures\Saved Pictures\new" // Make sure to use a valid default image URL or path
                        alt="Default Event Cover"
                        className={styles.eventImage}/>
                        )}
                    </div>
                    <div className={styles.eventDetails}>
                          <h1>{event.title}</h1>
                          <h2>{event.date}</h2>
                    </div>
                    <div className={styles.participate}>
                      <div className={styles.pink1}>
                        <a href={event.rsvpLink}>
                          <h2 style={{ marginTop: '5px' }}>RSVP</h2>
                        </a>
                      </div>
                      <div className={styles.pink2}>
                        <a href={event.volunteerLink}>
                          <h3 style={{ marginTop: '10px' }}>VOLUNTEER</h3>
                        </a>
                      </div>
                      <div className={styles.pink2}>
                        <a
                          href="#"
                          onClick={() => deleteEvent(index)}
                          className={styles.deleteButton}
                        >
                          Delete
                        </a>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className={styles.noEventsMessage}>
                  <p>No events available</p>
                </div>
              )}
            </div>
            <div className={styles.subClubContainer} style={{ marginLeft: subClubMarginLeft }}>
                <SubClub />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClubEvents;