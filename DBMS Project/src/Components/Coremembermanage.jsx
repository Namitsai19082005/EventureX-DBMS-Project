import styles from "./Coremembermanage.module.css"
import plus from "../assets/plus.png"
import resumeimg from "../assets/resumeimg.png"
function Coremembermanage()
{
    return (
        <div className={styles.subclub}>
            <p className={styles.heading}>Manage</p>
            <div>
                 <img className={styles.circleimg2} src={plus} width="35px" height="35px"/>
                 <a className={styles.text}>New Post</a>
            </div>
            <div>
                 <img className={styles.circleimg2} src={plus} width="35px" height="35px"/>
                 <a className={styles.text}>New Event</a>
            </div>
            <div>
                 <img className={styles.image} src={resumeimg} width="35px" height="30px"/>
                 <a className={styles.text}>Club Application</a>
            </div>
            <div>
                 <img className={styles.image} src={resumeimg} width="35px" height="30px"/>
                 <a className={styles.text}>Volunteer Application</a>
            </div>
        </div>
    );
}

export default Coremembermanage;