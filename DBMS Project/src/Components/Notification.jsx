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
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
      <p className={styles.heading}>Last month</p>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
      <div className={styles.notification}>
         <div className={styles.image}>
            <img src={wildbeatslogo} className={styles.image} width="80px" height="80px"/>
         </div>
         <div className={styles.content}>
            <p className={styles.bigtext}>WildBeats Posted</p>
            <p className={styles.smalltext}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..........more</p>
         </div>
      </div>
    </div>
    
  )
}
export default Notification;