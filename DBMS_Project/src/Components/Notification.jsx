import React, { useEffect, useState } from 'react';
import styles from "./Notification.module.css";
import Header from "./Header.jsx";
import wildbeatslogo from "../assets/wildbeatslogo.png";
import notificationSound from '../assets/notification.mp3'; // Add your sound file here

function Notification() {
  const [events, setEvents] = useState([]);
  const [posts, setPosts] = useState([]);
  const [prevEventsLength, setPrevEventsLength] = useState(0);
  const [prevPostsLength, setPrevPostsLength] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true); // To track the first load

  const Height = events.length > 0 || posts.length > 0 ? '100%' : '100vh';

  // Function to fetch events
  const fetchEvents = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/events');
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  // Function to fetch posts
  const fetchPosts = async () => {
    try {
      const response = await fetch('http://127.0.0.1:5000/posts');
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  // Function to play sound
  const playNotificationSound = () => {
    const audio = new Audio(notificationSound);
    audio.onloadeddata = () => {
      audio.play();
    };
    audio.onerror = (error) => {
      console.error('Error playing sound:', error);
    };
  };

  // Function to check for new events/posts
  const checkForNewItems = () => {
    if (!initialLoad) {
      // Check if there are new events or posts compared to the previous length
      if (events.length > prevEventsLength) {
        playNotificationSound();
      } else if (posts.length > prevPostsLength) {
        playNotificationSound();
      }
    }

    // Update previous lengths for comparison in the next update
    setPrevEventsLength(events.length);
    setPrevPostsLength(posts.length);
  };

  // Fetch events and posts on component mount
  useEffect(() => {
    fetchEvents();
    fetchPosts();
  }, []);

  // Check for new events or posts when the `events` or `posts` state changes
  useEffect(() => {
    checkForNewItems();
    setInitialLoad(false); // After the first check, set the flag to false
  }, [events, posts]);

  return (
    <div className={styles.notificationpage} style={{ height: Height }}>
      <header>
        <Header />
      </header>
      <p className={styles.heading}>Notifications</p>

      {/* Display newly created events */}
      {events.length > 0 ? (
        events.map((event, index) => (
          <div className={styles.notification} key={index}>
            <div className={styles.image}>
              <img src={wildbeatslogo} className={styles.image} width="80px" height="80px" alt="Event Logo" />
            </div>
            <div className={styles.content}>
              <p className={styles.bigtext}>New Event</p>
              <p className={styles.smalltext}>{event.title} - {event.date}</p>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.heading}></p>
      )}

      {/* Display newly created posts */}
      {posts.length > 0 ? (
        posts.map((post, index) => (
          <div className={styles.notification} key={index}>
            <div className={styles.image}>
              <img src={wildbeatslogo} className={styles.image} width="80px" height="80px" alt="Post Logo" />
            </div>
            <div className={styles.content}>
              <p className={styles.bigtext}>New Post</p>
              <p className={styles.smalltext}>{post.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p className={styles.heading}></p>
      )}

      {/* Static notifications from last month */}
      <p className={styles.heading}>Last month</p>
      <div className={styles.notification}>
        <div className={styles.image}>
          <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
        </div>
        <div className={styles.content}>
          <p className={styles.bigtext}>Upcoming Live Performance</p>
          <p className={styles.smalltext}>Get ready for a live performance from [Artist Name]! Secure your tickets today and be part of the experience.</p>
        </div>
      </div>
      <div className={styles.notification}>
        <div className={styles.image}>
          <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
        </div>
        <div className={styles.content}>
          <p className={styles.bigtext}>Community Feedback Session</p>
          <p className={styles.smalltext}>We want to hear from you! Join our community feedback session on [Date]. Your thoughts are important in shaping our future events.</p>
        </div>
      </div>
      <div className={styles.notification}>
        <div className={styles.image}>
          <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
        </div>
        <div className={styles.content}>
          <p className={styles.bigtext}>Monthly Newsletter Released</p>
          <p className={styles.smalltext}>Check out our latest newsletter for updates, insights, and upcoming events. Stay in the loop with everything WildBeats!</p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
