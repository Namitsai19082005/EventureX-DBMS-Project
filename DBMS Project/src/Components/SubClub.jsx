import styles from "./SubClub.module.css"
import wildbeats from "../assets/wildbeats.png"
function SubClub()
{
    return (
        <div className={styles.subclub}>
            <p className={styles.heading}>The Subclubs</p>
            <div>
                 <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                 <a className={styles.text}>Core</a>
            </div>
            <div>
                 <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                 <a className={styles.text}>Dance</a>
            </div>
            <div>
                 <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                 <a className={styles.text}>Music</a>
            </div>
            <div>
                 <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                 <a className={styles.text}>Drama</a>
            </div><div>
                 <img src={wildbeats} className={styles.image} width="60px" height="60px"/>
                 <a className={styles.text}>PR and Event Management</a>
            </div>
        </div>
    );
}

export default SubClub;