import styles from "./MusicClubEvents.module.css"
import Header from "./Header.jsx";
import Coremembersidebar from "./Coremembersidebar.jsx";
import SubClubHeader from "./SubClubHeader.jsx";
import Coremembermanage from "./Coremembermanage.jsx";
import Scroll from "./Scroll.jsx";
import uploadimg from "../assets/uploadimg.png"
import insta from "../assets/insta.png"
import circle from "../assets/circle.svg"
import plus from "../assets/plus.png"
function MusicClubEvents(){
  return(
    <div className={styles.musicEvents}>
      <div className={styles.header}>
        <Header/>
      </div>
      <div className={styles.sidebarAndpage}>
        <div className={styles.sidebar}>
          <Coremembersidebar/>
        </div>
        <div className={styles.musicClub}>
          <div className={styles.subclubhead}>
            <SubClubHeader/>
          </div>
          <div className={styles.eventsHead}>
            <div className={styles.headings}>
               <div className={styles.eventsdesc}>
                <Scroll/>
               </div>
               <div className={styles.upload}>
                  <div className={styles.uploadimage}>
                    <img src={uploadimg} width="230px" height="220px"/>
                  </div>
                  <p className={styles.uploadtext}> Upload Cover </p>
               </div>
            </div>
            <div className={styles.membermanage}>
              <Coremembermanage></Coremembermanage>
            </div>
          </div>
          <div className={styles.description}>
            <p> Description </p>
          </div>
          <div className={styles.form}>
          <textarea className={styles.text2}>type here</textarea>
          </div>
          <div className={styles.description}>
            <p> Start Time </p>
          </div>
          <div className={styles.form}>
            <form>
              <input type="text" id="desc2"/>
            </form>
          </div>
          <div className={styles.description}>
            <b>Organizers </b>
          </div>
          <div className={styles.authors}>
            <div className={styles.a1}>
              <div className={styles.name}>
                <p> Namit Sai </p> <img src={insta} width="33.7px" height="33.7px"/>
              </div>
              <p> Batch 2023</p>
              <p> 1234567, namit@gmail.com</p>
            </div>
            <div className={styles.a1}>
              <div className={styles.name}>
                <p> Pavan Sai </p> <img src={insta} width="33.7px" height="33.7px"/>
              </div>
              <p> Batch 2023</p>
              <p> 1234567, pavan@gmail.com</p>
            </div>
          </div>
          <div className={styles.inputtext}>
          <div className={styles.form}>
          <form>
              <input type="text" id="desc3" placeholder="Search Name"/>
          </form>
          </div>
          <div className={styles.img2}>
            <img src={plus} width="35px" height="35px"/>
          </div>
          </div>
          <div className={styles.create}>
            <p className={styles.textcreate}> Create </p>
          </div>
        </div>
      </div>
    </div>

  )
}
export default MusicClubEvents;