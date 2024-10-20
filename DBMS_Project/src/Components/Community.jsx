import React from 'react';
import styles from "./Community.module.css"; // Optional: for custom styling
import Header from './Header.jsx';
import Sidebar from './Sidebar.jsx';


function Communities(){
  return (
    <div className={styles.communitiespage}>
      <div className={styles.Heading}>
        <Header/>
        </div>
        <div className={styles.displayx}>
                <div className={styles.sidebar}>
                   <Sidebar/>
                </div>
                <div className={styles.matter}>
                  <div className={styles.matter1}>
                  <header>
                  <h1>IIITK Communities</h1>
                  <p>Connect with Like-Minded Students and Build Lasting Friendships!</p>
                  </header>
                  </div>

                  <div className={styles.communitiesintro}>
                 <h2>Welcome to the Communities Portal</h2>
                 <p>
          At IIITK University, communities are the heartbeat of student life. These are spaces where students come together, share experiences, and collaborate on ideas. Whether you're looking to make new friends, work on social causes, or learn from peers, there is a community here for you!
                </p>
                </div>
                <div className={styles.communitieshow}>
                <h2>How Communities Work</h2>
                <ul>
                <li><strong>Student-Driven:</strong> Each community is led by students, with a focus on collaboration and shared interests.</li>
                <li><strong>Open to All:</strong> Communities are open to all students, regardless of your department or year.</li>
                <li><strong>Diverse Engagement:</strong> From hobby-based groups to communities focused on personal growth and professional development, there’s something for everyone.</li>
                </ul>
                </div>

              <div className={styles.communitiesbenefits}>
              <h2>Benefits for Students</h2>
              <ul>
              <li><strong>Networking Opportunities:</strong> Meet and collaborate with peers from different disciplines.</li>
             <li><strong>Personal Growth:</strong> Develop leadership and organizational skills through participation in community events.</li>
            <li><strong>Hands-On Experience:</strong> Work on real-world projects, social initiatives, and cultural events.</li>
            <li><strong>Increased Social Engagement:</strong> Form connections and friendships that last beyond university life.</li>
             </ul>
            </div>

           <div className={styles.communitiesfaq}>
            <h2>FAQ</h2>
          <ul>
          <li><strong>Can I join more than one community?</strong> Absolutely! You're free to join as many communities as you want.</li>
          <li><strong>Is there a cost to join?</strong> Most communities are free to join. However, some may require minimal fees for specific events or materials.</li>
          <li><strong>How often do communities meet?</strong> Meetings vary by community. Check with the community leaders for the schedule.</li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Communities;