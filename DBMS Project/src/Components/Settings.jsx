import Header from "./Header.jsx"
import styles from "./Settings.module.css"
import plus from "../assets/plus.png"
import resumeimg from "../assets/resumeimg.png"
import circle from "../assets/circle.svg"
import lighttheme from "../assets/lighttheme.svg"
import darktheme from "../assets/darktheme.svg"
function Settings(){
  return (
    <div className={styles.settingsPage}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.profileSettings}>
        <p> Profile Settings </p>
      </div>
      <div className={styles.username}>
        <div className={styles.name}>
          <p> User name </p>
        </div>
        <div className={styles.nameform}>
          <p className={styles.drummer}> Drummer Aditya</p>
        </div>
      </div>
      <div className={styles.personalmobile}>
        <div className={styles.name}>
          <p> Personal Mobile </p>
        </div>
        <div className={styles.nameform}>
          <p className={styles.drummer}> 12345679890</p>
        </div>
      </div>
      <div className={styles.name}> Skills </div>
        <div className={styles.skills}>
        <div className={styles.singer}>
            <h2 style={{color:`white`}}> <pre><p className={styles.singertext}> Singer </p></pre> </h2>
        </div>
        <div className={styles.singer}>
            <h2 style={{color:`white`}}> <pre><p className={styles.singertext}> Drummer </p> </pre> </h2>
        </div>
      </div>
      <div className={styles.nameform}>
        <div className={styles.skillsform}>
        <p className={styles.text}> Type here </p>
        <div className={styles.img2}>
          <img src={plus} width="35px" height="35px"/>
        </div>
        </div>
      </div>
      <div className={styles.name}> Resume </div>
      <div className={styles.nameform2}>
        <div className={styles.resumeform}>
          <div className={styles.image}>
          <img src={resumeimg} width="30px" height="30px"/>
          </div>
          <div className={styles.resumetext}>
            <p> resume.pdf </p>
          </div>
          <div className={styles.resumeedit}>
            <p> edit </p>
          </div>
        </div>

      </div>
      <div className={styles.profileSettings}>
          <p> Notification settings </p>
      </div>
      <div className={styles.notification}>
        <p className={styles.mute}> Mute notifications from everyone</p>
        <div className={styles.circleimg}>
        <img src={circle} width="35px" height="35px"/>
        </div>
      </div>
      <div className={styles.notification}>
        <p className={styles.mute}> Mute notifications from these clubs</p>
        <div className={styles.circleimg2}>
        <img src={plus} width="35px" height="35px"/>
        </div>
        <div className={styles.betalabs}>
        <div className={styles.singer2}>
            <h2 style={{color:`white`}}> <pre><p className={styles.singertext2}> Betalabs </p></pre> </h2>
        </div>
        </div>
      </div>
      <div className={styles.profileSettings}>
        <p> Theme </p>
      </div>
      <div className={styles.themes}>
        <div className={styles.nameform4}>
        <div className={styles.light}>
        <img src={lighttheme} width="40px" height="40px"/>
        <p className={styles.lighttext}> Light</p>
        </div>
        </div>
        <div className={styles.nameform3}>
          <div className={styles.dark}>
            <img src={darktheme} width="40px" height="40px"/>
          </div>
          <p className={styles.darktext}> Dark </p>
        </div>
      </div>
    </div>
  )
}
export default Settings;