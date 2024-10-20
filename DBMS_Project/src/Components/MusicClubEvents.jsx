import React, { useState } from "react"; 
import styles from "./MusicClubEvents.module.css";
import Header from "./Header.jsx";
import Coremembersidebar from "./Coremembersidebar.jsx";
import SubClubHeader from "./SubClubHeader.jsx";
import Coremembermanage from "./Coremembermanage.jsx";
import Scroll from "./Scroll.jsx";
import uploadimg from "../assets/uploadimg.png";

function MusicClubEvents({ addEvent }) {
  const [eventData, setEventData] = useState({
    title: '',
    date: '',
    rsvpLink: '',
    volunteerLink: '',
    coverImage: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventData({ ...eventData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onloadend = () => {
      setEventData({ ...eventData, coverImage: reader.result });
    };
  
    if (file) {
      reader.readAsDataURL(file); 
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:5000/events', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(eventData),
      });
      if (response.ok) {
        fetchEvents();  // Fetch new events after successfully adding an event
      }
    } catch (error) {
      console.error('Error creating event:', error);
    }
    addEvent(eventData); 
    setEventData({ title: '', date: '', rsvpLink: '', volunteerLink: '', coverImage: null }); 
  };

  return (
    <div className={styles.musicEvents}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebarAndpage}>
        <div className={styles.sidebar}>
          <Coremembersidebar />
        </div>
        <div className={styles.musicClub}>
          <div className={styles.subclubhead}>
            <SubClubHeader />
          </div>
          <div className={styles.eventsHead}>
            <div className={styles.headings}>
              <div className={styles.eventsdesc}>
                <Scroll />
              </div>
              <div className={styles.upload}>
                <form onSubmit={handleSubmit}>
                  <div className={styles.uploadimage}>
                    <img src={uploadimg} width="230px" height="220px" alt="Upload Cover" />
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="title"
                      placeholder="Event Title"
                      className={styles.inputText}
                      value={eventData.title}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="date"
                      placeholder="Event Date"
                      className={styles.inputText}
                      value={eventData.date}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="rsvpLink"
                      placeholder="Enter RSVP Link"
                      className={styles.inputText}
                      value={eventData.rsvpLink}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      name="volunteerLink"
                      placeholder="Enter Volunteer Link"
                      className={styles.inputText}
                      value={eventData.volunteerLink}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <button type="submit" className={styles.createEventButton}>
                    Create Event
                  </button>
                </form>
              </div>
            </div>
            <div className={styles.membermanage}>
              <Coremembermanage />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicClubEvents;