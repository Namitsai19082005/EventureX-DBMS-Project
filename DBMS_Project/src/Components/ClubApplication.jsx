import React, { useEffect, useState } from "react";
import styles from "./ClubApplication.module.css";
import Header from "./Header.jsx";
import Coremembersidebar from "./Coremembersidebar.jsx";
import Scroll from "./Scroll.jsx";
import SubClubHeader from "./SubClubHeader.jsx";
import Coremembermanage from "./Coremembermanage.jsx";

function ClubApplication() {
  const [applications, setApplications] = useState([]);

  // Fetch the application data from the backend
  useEffect(() => {
    fetch("http://localhost:5000/applications") // Ensure this is the correct URL
      .then((response) => response.json())
      .then((data) => {
        console.log(data);  // Debug: Log the fetched data
        setApplications(data);  // Update state with the fetched data
      })
      .catch((error) => console.error("Error fetching applications:", error));
  }, []);

  return (
    <div className={styles.clubapp}>
      <header className={styles.header}>
        <Header />
      </header>
      <div className={styles.Clubcontent}>
        <div className={styles.sidebar}>
          <Coremembersidebar />
        </div>
        <div>
          <SubClubHeader />
          <div className={styles.content}>
            <Scroll />
            </div>
            <div className={styles.flexing}>
            <div className={styles.participant}>
              {applications.length > 0 ? (
                applications.map((app, index) => (
                  <div key={index} className={styles.name}>
                    <div style={{ margin: "18px 18px 18px 18px" }}>
                      <h2><b>{app.name}</b></h2>
                      <h4><b>{app.roll_no}</b></h4>
                      <div className={styles.sk}>
                        <h3>Skills :</h3>
                        <p>{app.Skills}</p>
                      </div>
                      
                    </div>
                  </div>
                ))
              ) : (
                <p>No applications available</p>
              )}
            </div>
            <div className={styles.shr}><Coremembermanage /></div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default ClubApplication;