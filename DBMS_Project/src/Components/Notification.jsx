import styles from "./Notification.module.css"
import Header from "./Header.jsx"
import wildbeatslogo from "../assets/wildbeatslogo.png"

function Notification(){
  return (
    <div className={styles.notificationpage}>
      <header>
         <Header></Header>
      </header>
      <p className={styles.heading}>Notifications</p>
      <p className={styles.heading}>Last 7 days</p>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Event Announcement</p>
            <p className={styles.smalltext}>Join us for an exciting evening of music and fun! Don’t miss the chance to connect with fellow music lovers.</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>New Playlist Released</p>
            <p className={styles.smalltext}>Discover our latest playlist, featuring curated tracks from emerging artists. Tune in now and enjoy the beats that inspire.</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>Exclusive Member Offer</p>
            <p className={styles.smalltext}>As a valued member, enjoy a special discount on all merchandise this week. Use code WILD20 at checkout.</p>
         </div>
      </div>
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
    
  )
}
export default Notification;